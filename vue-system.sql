/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80030
 Source Host           : localhost:3306
 Source Schema         : vue-system

 Target Server Type    : MySQL
 Target Server Version : 80030
 File Encoding         : 65001

 Date: 13/10/2022 04:56:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int NOT NULL,
  `cid` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `rule` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 11, '数码/电器', 'ddd');
INSERT INTO `category` VALUES (1, 12, '日用', 'ddddd');
INSERT INTO `category` VALUES (1, 13, '娱乐', 'players14');
INSERT INTO `category` VALUES (1, 14, '文具', '663342');
INSERT INTO `category` VALUES (1102, 111, 'macbook air', 'players');
INSERT INTO `category` VALUES (1101, 332, 'oppo', 'players');
INSERT INTO `category` VALUES (11, 1101, '手机', 'lcy');
INSERT INTO `category` VALUES (11, 1102, '电脑', '4345');
INSERT INTO `category` VALUES (16, 1103, '平板ipad', '好玩hhhhh');
INSERT INTO `category` VALUES (12, 1201, '外套风衣', 'ddddd');
INSERT INTO `category` VALUES (12, 1202, '水杯', '2224442233');
INSERT INTO `category` VALUES (12, 1203, '眼镜', 'lcy');
INSERT INTO `category` VALUES (12, 1204, '雨伞', '333');
INSERT INTO `category` VALUES (13, 1304, '专辑', 'players');
INSERT INTO `category` VALUES (14, 1401, 'A4纸', '11111');
INSERT INTO `category` VALUES (14, 1402, '水彩笔', '11');
INSERT INTO `category` VALUES (1401, 5325, '草稿纸', 'lcy');
INSERT INTO `category` VALUES (1101, 15323, '苹果', '33');
INSERT INTO `category` VALUES (1304, 33333, '防弹少年团', '1111');
INSERT INTO `category` VALUES (1103, 43234, 'ad钙奶', '22');
INSERT INTO `category` VALUES (123456, 123456, '123456', '123456');

-- ----------------------------
-- Table structure for goods_list
-- ----------------------------
DROP TABLE IF EXISTS `goods_list`;
CREATE TABLE `goods_list`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `price` float(255, 0) NULL DEFAULT NULL,
  `num` int NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `sellPoint` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `cid` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9709015 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of goods_list
-- ----------------------------
INSERT INTO `goods_list` VALUES (1, '赛事茶-第三届武夷茶', '银河修理员', 238, 34, 'http://localhost:80/1665404673501-e8269ad0ly1h6vx50ewxaj20sg0izdgk.jpg', '日用', '喝过的都说好', NULL);
INSERT INTO `goods_list` VALUES (2, '吸管杯', 'dddddddd', 26, 45, 'http://localhost:80/1665404838672-e8269ad0ly1h6vukq25gwj211y1kwgoy.jpg', '家具', '一杯好茶放心好物', NULL);
INSERT INTO `goods_list` VALUES (3, '爱情啊啊', '防弹少年团', 118233344, 112, 'http://localhost:80/1665404923471-005xP5xWgy1h6712ikklxj30xc0j5jwt.jpg', '电脑', '该换新了', NULL);
INSERT INTO `goods_list` VALUES (5, '英式红茶 上等茶叶', '一杯好茶放心好物', 43, 977, '/images/goods2.jpg', '茶叶', '一杯好茶放心好物', NULL);
INSERT INTO `goods_list` VALUES (6, '神奇的糊涂魔药 ', 'for youth', 91, 4444, '/images/goods1.jpg', '数码', '林家谦2020年歌曲', NULL);
INSERT INTO `goods_list` VALUES (7, '清新茉莉花茶 茶具', '鲜爽甘醇 口粮首选', 79, 23, '', '茶叶', NULL, NULL);
INSERT INTO `goods_list` VALUES (8, '景德镇瓷器茶具 茶叶', '一杯好茶放心好物', 555, 4311, '/images/goods4.jpg', '娱乐', '一杯好茶放心好物', NULL);
INSERT INTO `goods_list` VALUES (9, '超妍 茶艺大师 茶具', '一个人原来都可以尽兴', 231, 77, '/images/goods3.jpg', '手机数码', NULL, NULL);
INSERT INTO `goods_list` VALUES (10, '小罐茶大匠心 好茶', '努力过活，拼命无恙', 1997, 42, 'http://localhost:80/1665409763985-d4b3f169ly1h6vtxgbipcj211y1kwjvg.jpg', '茶叶', '闲情雅致', NULL);
INSERT INTO `goods_list` VALUES (11, '银河修理员 好茶叶', '一杯好茶放心好物', 45, 987, '', '电器', NULL, NULL);
INSERT INTO `goods_list` VALUES (32, '《我的快乐时代》黑胶唱片', '陈奕迅复古唱片', 1000, 5, '/images/goods1.jpg', '娱乐', '复古经典', NULL);
INSERT INTO `goods_list` VALUES (33, '北欧之旅', '未来可期', 762532, 10, '/images/goods1.jpg', '旅游', '好想去', NULL);
INSERT INTO `goods_list` VALUES (44, '好帅的田柾国', 'ddddd', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `goods_list` VALUES (77, '海盐柾是甜的', '哥哥', 2532, 999976, '', '男朋友', '', NULL);
INSERT INTO `goods_list` VALUES (134, '精美日历', '一人之境', 98, 8, '', '日用', NULL, NULL);
INSERT INTO `goods_list` VALUES (222, '神奇的糊涂魔药 ', 'for youth', 91, 4444, '/images/goods1.jpg', '数码', '林家谦2020年歌曲', NULL);
INSERT INTO `goods_list` VALUES (403, '世乒赛中国男团', '加油加油', 123, 567, NULL, '日用', '巴黎奥运会', NULL);
INSERT INTO `goods_list` VALUES (431, '宝贝', 'dear jane', NULL, 664, NULL, '老公', '田柾国', NULL);
INSERT INTO `goods_list` VALUES (435, 'trefvdfgd', 'yyyyyyyyy', 106, 10, 'http://localhost:80/1665392103970-003ZSvtBgy1gu1d48ei8dj61kw16o7mf02.jpg', '文具', '55543245cvxfgdf', 14);
INSERT INTO `goods_list` VALUES (436, '世乒赛中国男团', '加油加油', 123, 567, NULL, '日用', '巴黎奥运会', NULL);
INSERT INTO `goods_list` VALUES (456, NULL, NULL, 106, 10, 'http://localhost:80/1665392103970-003ZSvtBgy1gu1d48ei8dj61kw16o7mf02.jpg', '文具', '55543245cvxfgdf', 14);
INSERT INTO `goods_list` VALUES (457, NULL, NULL, 106, 10, NULL, NULL, NULL, 14);
INSERT INTO `goods_list` VALUES (459, '田柾国', 'ededdffgsd', 4234, 68, '/images/goods1.jpg', '老公', '情人', NULL);
INSERT INTO `goods_list` VALUES (460, 'proof', 'hi', 323, 768, '/images/goods1.jpg', '女儿', '音乐', NULL);
INSERT INTO `goods_list` VALUES (461, 'young royals', 'always support', 568, 5583, '/images/goods1.jpg', '饮品', NULL, NULL);
INSERT INTO `goods_list` VALUES (462, 'skam norway', 'suga', 5333, 57, NULL, '食物', '网络情人', NULL);
INSERT INTO `goods_list` VALUES (463, 'holy night', '正面up', NULL, NULL, NULL, '宝贝', NULL, NULL);
INSERT INTO `goods_list` VALUES (464, 'dream work', 'love u', 888, 99, '/images/goods1.jpg', '食物', NULL, NULL);
INSERT INTO `goods_list` VALUES (532, '111', '66', 35, 4346, NULL, '日用', 'dear jane', NULL);
INSERT INTO `goods_list` VALUES (540, '《我的快乐时代》黑胶唱片', '陈奕迅复古唱片', 1000, 5, '/images/goods1.jpg', '娱乐', '复古经典', NULL);
INSERT INTO `goods_list` VALUES (560, '精美日历', '一人之境', 98, 8, '', '日用', NULL, NULL);
INSERT INTO `goods_list` VALUES (577, '额威威', '543453354243242', 10, 10, 'http://localhost:80/1665393993376-e43e7ac8gy1h5sh25om2pj20yi1pce81.jpg', '娱乐', '', 13);
INSERT INTO `goods_list` VALUES (578, '简历代写', '亡羊补牢为食恨晚', 84, 22, '/images/goods3.jpg', '文具', NULL, NULL);
INSERT INTO `goods_list` VALUES (579, '荣耀Magicbook pro 16寸', '防弹少年团', 118, 112, '/images/goods3.jpg', '电脑', '该换新了', NULL);
INSERT INTO `goods_list` VALUES (643, 'trefvdfgd', 'yyyyyyyyy', 106, 10, 'http://localhost:80/1665392103970-003ZSvtBgy1gu1d48ei8dj61kw16o7mf02.jpg', '文具', '55543245cvxfgdf', 14);
INSERT INTO `goods_list` VALUES (654, '海盐柾是甜的', '哥哥', 2532, 999976, NULL, '男朋友', NULL, NULL);
INSERT INTO `goods_list` VALUES (656, '老公', '366', NULL, NULL, NULL, '日用', 'dear jane', NULL);
INSERT INTO `goods_list` VALUES (664, '田柾国', '陈奕迅', 5355, NULL, NULL, '老公', '田柾国', NULL);
INSERT INTO `goods_list` VALUES (666, '英式红茶 上等茶叶', '一杯好茶放心好物', 43, 977, '/images/goods2.jpg', '茶叶', '一杯好茶放心好物', NULL);
INSERT INTO `goods_list` VALUES (700, 'ttt', '', 10, 10, '', '', '', 13);
INSERT INTO `goods_list` VALUES (733, '111', '陈奕迅', 44, NULL, NULL, '日用', 'dear jane', NULL);
INSERT INTO `goods_list` VALUES (754, '甜果', '好想见你一次当面说爱你', 32, 585, NULL, '情人', '爱死你', NULL);
INSERT INTO `goods_list` VALUES (765, '防弹少年团演唱会', '我人生仅有一次的防弹少年团', 9999999, 100, NULL, '文具', '就这', NULL);
INSERT INTO `goods_list` VALUES (767, '音乐', 'dear jane', NULL, 54, NULL, '老公', '田柾国', NULL);
INSERT INTO `goods_list` VALUES (780, '好帅的田柾国', 'ddddd', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `goods_list` VALUES (786, '人类不宜飞行', 'dear jane', 55, 436, '6', '音乐', '静候', NULL);
INSERT INTO `goods_list` VALUES (789, '111', '888', NULL, NULL, NULL, '日用', '田柾国', NULL);
INSERT INTO `goods_list` VALUES (888, '景德镇瓷器茶具 茶叶', '一杯好茶放心好物', 555, 4311, '/images/goods4.jpg', '娱乐', '一杯好茶放心好物', NULL);
INSERT INTO `goods_list` VALUES (1286, 'eee', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (1421, '99999', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (1984, '77567', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (2644, 'redr', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (2736, 'iiii', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (3237, '99999', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (3885, 'ffffsadx', 'eragsfvxc', 331, 104, 'http://localhost:80/1665396521341-003ZSvtBgy1gvdygkllajg60p00p04r102.gif', '文具', 'rwer', 14);
INSERT INTO `goods_list` VALUES (4507, '', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (4510, 'www', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (4527, '8888', '8888888', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (4812, '999fgbv', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (4814, 'rrrr', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (5087, 'rttt', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (5527, 'sssss', 'ffffff', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (6061, '海盐柾是甜的', 'rrrrr', 2532, 999976, 'http://localhost:80/1665403324626-e43e7ac8gy1h6vnfxkh1lj21st2p9ain.jpg', '男朋友', 'ddddd', 111);
INSERT INTO `goods_list` VALUES (8103, '777', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (8477, '777hfgh', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (9076, 'iiiii', '', 10, 10, '', '', '', 111);
INSERT INTO `goods_list` VALUES (42264, '林家谦', 'dear jane', 4434, NULL, NULL, '老公', '田柾国', NULL);
INSERT INTO `goods_list` VALUES (44421, '111', '33467', 34, 643, NULL, '日用', '田柾国', NULL);
INSERT INTO `goods_list` VALUES (52334, '清新茉莉花茶 茶具', '鲜爽甘醇 口粮首选', 79, 23, '', '茶叶', NULL, NULL);
INSERT INTO `goods_list` VALUES (54464, '银河修理员 好茶叶', '一杯好茶放心好物', 45, 987, '', '电器', NULL, NULL);
INSERT INTO `goods_list` VALUES (54565, '甜果', '好想见你一次当面说爱你', 32, 585, NULL, '情人', '爱死你', NULL);
INSERT INTO `goods_list` VALUES (55427, '世乒赛中国男团', '加油加油', 123, 567, NULL, '日用', '巴黎奥运会', NULL);
INSERT INTO `goods_list` VALUES (57070, '到底发生过什么事', 'dear jane', 53, 46, NULL, '音乐', '不许你注定一人', NULL);
INSERT INTO `goods_list` VALUES (75455, '小罐茶大匠心 好茶', '努力过活，拼命无恙', 1997, 42, '/images/goods2.jpg', '茶叶', '闲情雅致', NULL);
INSERT INTO `goods_list` VALUES (77445, '英式红茶 上等茶叶', '一杯好茶放心好物', 43, 977, '/images/goods2.jpg', '茶叶', '一杯好茶放心好物', NULL);
INSERT INTO `goods_list` VALUES (335256, '海盐柾是甜的', '哥哥', 2532, 999976, NULL, '男朋友', NULL, NULL);
INSERT INTO `goods_list` VALUES (555555, '好帅的田柾国', '加油向前冲啊', 44, 32, '', '', '', NULL);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `goods_price` decimal(10, 2) NULL DEFAULT NULL,
  `goods_num` int NULL DEFAULT NULL,
  `order_status` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `uId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1588 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (1, '20191024462227546', 'haoye', 264.00, 2, '4', 106);
INSERT INTO `orders` VALUES (12, '2019102446224', '防弹少年团', 264.00, 2, '4', 106);
INSERT INTO `orders` VALUES (23, '201910244622432', 'yoshi', 264.00, 2, '4', 106);
INSERT INTO `orders` VALUES (138, '20220930170658857703', '港乐讲乐', 295.00, 3, '3', 102);
INSERT INTO `orders` VALUES (139, '20221001023621854320', 'hi siri', 476.00, 2, '4', 102);
INSERT INTO `orders` VALUES (158, '20221001151205851042', '绿茶-远数龙井3号', 2478.00, 21, '3', 106);
INSERT INTO `orders` VALUES (159, '20221001151221374637', 'ddddddd', 264.00, 2, '4', 106);
INSERT INTO `orders` VALUES (222, '201910244622', 'baby set', 2478.00, 21, '3', 106);
INSERT INTO `orders` VALUES (1586, '201910244622312', 'album realize', 2478.00, 21, '3', 106);
INSERT INTO `orders` VALUES (1587, '20191024462232', 'terence', 2478.00, 21, '3', 106);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `age` int NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phoneNumber` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (0, 'administrator', 'password', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluaXN0cmF0b3IiLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiaWF0IjoxNjY1NTk3NzcxLCJleHAiOjE2NjU1OTc4MDF9.OKToJXJh9LJEvsR95L6LAZhOUwgyK054rixxyiyc-Rg', NULL, 'female', 26, 'shanghai', '18766666666');

SET FOREIGN_KEY_CHECKS = 1;
