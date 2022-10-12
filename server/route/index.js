const express = require("express");
const router = express.Router();
const connection = require("../config/db");
const fs = require("fs");
const multer = require("multer");
const jwt = require("jsonwebtoken");

const secertKey = "liangchaoyan";
const expiresIn = 30; // 以秒为单位

const produceToken = function (data) {
  return jwt.sign(data, secertKey, { expiresIn });
};


// 所有商品
router.get("/allGoods", (req, res) => {
  let pageSize = req.query.pageSize; // 页面默认展示 4 条数据
  let pageNo = req.query.pageNo; // 默认 第一页
  // console.log(req.query);
  connection.query(`select * from goods_list`, (err, result) => {
    // 返回 总条数
    let total = result.length;
    let allData = result;
    // 返回 pageSize 条 数据
    let n = (pageNo - 1) * pageSize;
    connection.query(
      `select * from goods_list order by id limit ${n},${pageSize}`,
      (e, r) => {
        // console.log(result);
        res.send({
          code: 200,
          success: true,
          msg: "查看所有商品成功",
          data: r,
          total,
          allData,
          pageSize: pageSize,
          pageNo,
        });
      }
    );
  });
});

// 搜索
router.get("/searchGoods", (req, res) => {
  // console.log(req.query);
  // 获取搜索参数
  let searchParams = req.query.searchParams;
  let sql =
    "select * from goods_list where concat(`name`,`desc`,`sellPoint`,`category`) like '%" +
    searchParams +
    "%' ";
  // console.log(sql);
  connection.query(sql, (e, r) => {
    // console.log(r);
    if (r.length > 0) {
      res.send({
        code: 200,
        msg: "搜索成功",
        success: true,
        data: r,
        total: r.length,
      });
    } else {
      res.send({
        code: 205,
        msg: "暂无数据",
        success: false,
      });
    }
  });
});

// 商品类目     category表，一开始查id为1的（一级目录），
//          之后查2级路由，以点击的1级类目的cid来找，三级类目同理
router.get("/getItemCategoryById", (req, res) => {
  let id = req.query.id || 1;
  //   console.log(id);
  // 开始一定是需要先获取一级类目         对比的参数都是id
  // id不为1说明，查找的至少是2级类目
  connection.query(`select * from category where id = ${id}`, (e, r) => {
    // console.log(r);
    if (r.length > 0) {
      res.send({
        code: 200,
        success: true,
        data: r,
        msg: "数据获取成功",
      });
    } else {
      res.send({
        code: 205,
        success: false,
        data: r,
        msg: "暂无类目数据",
      });
    }
  });
});

// 上传图片
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var createFolder = function (folder) {
  try {
    fs.accessSync(folder);
  } catch (error) {
    fs.mkdirSync(folder);
  }
};
var uploadFolder = "./upload/";
createFolder(uploadFolder);
var upload = multer({
  storage: storage,
});

router.post("/upload", upload.single("file"), function (req, res) {
  var file = req.file;
  console.log("文件类型：%s", file.mimetype);
  console.log("原始文件名：%s", file.originalname);
  console.log("文件大小：%s", file.size);
  console.log("文件保存路径：%s", file.path);
  res.json({
    res_code: "0",
    name: file.originalname,
    url: file.path,
  });
});

// 添加商品
router.post("/addGoods", (req, res) => {
  //   console.log(req.body);
  let { name, desc, price, num, imgUrl, category, sellPoint } = req.body;
  let cid = req.body.cid || 111;
  //   console.log(cid, name, desc, price, num, imgUrl, category, sellPoint);
  let id = Math.floor(Math.random() * (9999 - 1000)) + 1000;
  let sql = `insert into goods_list  values(${id},'${name}','${desc}',${price},${num},'${imgUrl}','${category}','${sellPoint}',${cid})`;
  console.log(sql);
  connection.query(sql, (e, r) => {
    console.log(r);
    if (r.affectedRows > 0) {
      res.send({
        code: 200,
        success: true,
        msg: "添加商品成功",
        data: {
          id: r.insertId,
        },
      });
    } else {
      res.send({
        code: 205,
        success: false,
        msg: "添加商品失败",
      });
    }
  });
});

// 修改商品
router.post("/updateGoods", (req, res) => {
  console.log(req.body);
  let id = req.body.id;
  let cid = req.body.goodsForm.cid || -1;
  let name = req.body.goodsForm.name || "";
  let desc = req.body.goodsForm.desc || "";
  let price = req.body.goodsForm.price || -1;
  let num = req.body.goodsForm.num || -1;
  let imgUrl = req.body.goodsForm.imgUrl || "";
  let category = req.body.goodsForm.category || "";
  let sellPoint = req.body.goodsForm.sellPoint || "";
  //   console.log(id, cid, name, desc, price, num, imgUrl, category, sellPoint);
  let sql =
    "update goods_list set `name` = '" +
    name +
    "', `desc` = '" +
    desc +
    "', price = " +
    price +
    ", num = " +
    num +
    ", imgUrl = '" +
    imgUrl +
    "', category = '" +
    category +
    "', sellPoint = '" +
    sellPoint +
    "' where id = " +
    id +
    " ";
  console.log(sql);
  connection.query(sql, (e, r) => {
    console.log(r);
    if (r.affectedRows > 0) {
      res.send({
        code: 200,
        success: true,
        msg: "编辑商品成功",
      });
    } else {
      res.send({
        code: 205,
        success: false,
        msg: "编辑商品失败",
      });
    }
  });
});

// 删除商品
router.post("/deleteGoods", (req, res) => {
  let id = req.body.id;
  connection.query(`delete from goods_list where id = ${id}`, (e, r) => {
    // console.log(r);
    if (r.affectedRows > 0) {
      res.send({
        code: 200,
        success: true,
        msg: "删除成功",
      });
    } else {
      res.send({
        code: 205,
        success: false,
        msg: "删除失败",
      });
    }
  });
});

// 登录
router.post("/login", (req, res) => {
  let { username, password } = req.body;
  // console.log(req.body);
  // 先查询有没有 这个 username   有 -> 拿到它的id
  connection.query(
    `select * from user where username = '${username}'`,
    (e, r) => {
      console.log(r);
      if (r.length > 0) {
        let id = r[0].id;
        connection.query(`select * from user where id=${id}`, (er, result) => {
          // console.log(result);
          // 都有id了，肯定就要密码，所以就不判断了
          let pwd = result[0].password;
          // 判断密码
          if (pwd == password) {
            // 重新生成token
            let token = produceToken({ username, password });
            console.log(token);
            let sql = `update user set token = '${token}' where id=${id}`;
            connection.query(sql, () => {
              // 返回修改之后的数据
              connection.query(
                `select * from user where id = ${id}`,
                (ee, rr) => {
                  res.send({
                    code: 200,
                    success: true,
                    msg: "登录成功",
                    data: rr[0],
                  });
                }
              );
            });
          } else {
            res.send({
              code: 203,
              success: false,
              msg: "登陆失败，密码错误！",
            });
          }
        });
      } else {
        res.send({
          code: 205,
          success: false,
          msg: "登陆失败，没有该用户！",
        });
      }
    }
  );
});

router.post('/modifyPwd',(req,res)=>{
  let {id,newPwd} = req.body
  // console.log(id,newPwd);
  let sql = `update user set password='${newPwd}' where id=${id}`
  // console.log(sql);
  connection.query(sql,(e,r)=>{
    // console.log(r);
    if(r.affectedRows>0){
      connection.query(`select * from user where id=${id}`,(ee,rr)=>{
        res.send({
          code:200,
          msg:'修改密码成功',
          success:true,
          data:rr[0]
        })
      })
    }
  })
})

// 获取所有规格
router.get("/allRule", (req, res) => {
  let pageSize = req.query.pageSize; // 页面默认展示 4 条数据
  let pageNo = req.query.pageNo; // 默认 第一页
  // console.log(req.query);

  connection.query(`select * from category`, (err, result) => {
    // 返回 总条数
    let total = result.length;
    let allData = result;
    // let a = Math.ceil(this.total/this.pageSize);
    // 返回 pageSize 条 数据
    let n = (pageNo - 1) * pageSize;
    connection.query(
      `select * from category order by cid limit ${n},${pageSize}`,
      (e, r) => {
        // console.log(result);
        res.send({
          code: 200,
          success: true,
          msg: "查询类目成功",
          data: r,
          allData,
          total,
          pageSize: pageSize,
          pageNo,
        });
      }
    );
  });
});

router.post("/addRule", (req, res) => {
  let { name, id, cid, rule } = req.body;
  // console.log(name, id,cid,rule);
  let sql = `insert into category values(${id},${cid},'${name}','${rule}')`;
  // console.log(sql);
  connection.query(sql, (e, r) => {
    // console.log(r);
    if (r.affectedRows > 0) {
      res.send({
        code: 200,
        success: true,
        msg: "添加规格成功",
        data: req.body, 
      });
    } else {
      res.send({
        code: 205,
        success: false,
        msg: "添加失败",
      });
    }
  });
});

router.post("/updateRules", (req, res) => {
  // console.log(req.body);
  let { name, id, cid, rule } = req.body;
    console.log(name, id, cid, rule);
  let sql = `update category set name='${name}', id=${id}, rule='${rule}' where cid = ${cid}`
  console.log(sql);
  connection.query(sql, (e, r) => {
    console.log(r);
    if (r.affectedRows > 0) {
      res.send({
        code: 200,
        success: true,
        msg: "编辑成功",
      });
    } else {
      res.send({
        code: 205,
        success: false,
        msg: "编辑失败",
      });
    }
  });
});
  
router.post("/deleteRule", (req, res) => {
  let cid = req.body.cid;
  // console.log(cid);
  // console.log(`delete from category where cid = ${cid}`);
  connection.query(`delete from category where cid = ${cid}`, (e, r) => {
    // console.log(r);
    if (r.affectedRows > 0) {
      res.send({
        code: 200,
        success: true,
        msg: "删除成功",
      });
    } else {
      res.send({
        code: 205,
        success: false,
        msg: "删除失败",
      });
    }
  });
});

router.get("/searchRules", (req, res) => {
  // console.log(req.body);
  // 获取搜索参数
  let keyword = req.query.keyword;
  // console.log(keyword);
  let sql =
    "select * from category where concat(`id`,`cid`,`name`,`rule`) like '%" +
    keyword +
    "%' ";
  // console.log(sql);
  connection.query(sql, (e, r) => {
    // console.log(r);
    if (r.length > 0) {
      res.send({
        code: 200,
        msg: "搜索成功",
        success: true,
        data: r,
        total: r.length,
      });
    } else {
      res.send({
        code: 205,
        msg: "暂无数据",
        success: false,
      });
    }
  });
});

router.get("/allOrder", (req, res) => {
  let pageSize = req.query.pageSize; // 页面默认展示 4 条数据
  let pageNo = req.query.pageNo; // 默认 第一页
  // console.log(req.query);

  connection.query('select * from orders', (err, result) => {
    // 返回 总条数
    let total = result.length;
    let allData = result;
    // let a = Math.ceil(this.total/this.pageSize);
    // 返回 pageSize 条 数据
    let n = (pageNo - 1) * pageSize;
    let sql = `select * from orders order by id limit ${n},${pageSize}`
    console.log(sql);
    connection.query(
      sql,
      (e, r) => {
        // console.log(result);
        res.send({
          code: 200,
          success: true,
          msg: "查询订单成功",
          data: r,
          allData,
          total,
          pageSize: pageSize,
          pageNo,
        });
      }
    );
  });
});

module.exports = router;
