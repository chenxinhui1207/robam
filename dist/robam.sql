/*
Navicat MySQL Data Transfer

Source Server         : robam
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : robam

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-05-21 11:10:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `banner`
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `sid` tinyint(99) NOT NULL AUTO_INCREMENT,
  `src` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES ('1', 'https://img.shoprobam.com/Public/Uploads/banner5afa3332390d8.jpg');
INSERT INTO `banner` VALUES ('2', 'https://img.shoprobam.com/Public/Uploads/banner5ad180567bfcd.jpg');
INSERT INTO `banner` VALUES ('3', 'https://img.shoprobam.com/Public/Uploads/banner5ae1536633bed.jpg');
INSERT INTO `banner` VALUES ('4', 'https://img.shoprobam.com/Public/Uploads/banner5add2f47a6581.jpg');
INSERT INTO `banner` VALUES ('5', 'https://img.shoprobam.com/Public/Uploads/banner5a657e458750b.jpg');

-- ----------------------------
-- Table structure for `shangpin`
-- ----------------------------
DROP TABLE IF EXISTS `shangpin`;
CREATE TABLE `shangpin` (
  `sid` tinyint(99) NOT NULL AUTO_INCREMENT,
  `src` varchar(999) NOT NULL,
  `title` varchar(999) NOT NULL,
  `con` varchar(999) NOT NULL,
  `price` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shangpin
-- ----------------------------
INSERT INTO `shangpin` VALUES ('1', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170930/15067622029917.jpg', 'Robam/老板 67A7+58B1 新品 青春旅社同款烟灶套装', '领劵下单立减！赠价值899元电压力锅！另加500..', '5680.00');
INSERT INTO `shangpin` VALUES ('2', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170703/14990744446065.jpg', 'Robam/老板 67X2+9B17大吸力烟灶套餐', '领劵下单立减！赠价值299元老板电热水壶! 全网..', '4080.00');
INSERT INTO `shangpin` VALUES ('3', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170616/14975981247165.jpg', 'Robam/老板 26A7+9B17 侧吸套装 经典升级大吸力', '领劵下单立减！赠价值299元老板电热水壶！全网保..', '3980.00');
INSERT INTO `shangpin` VALUES ('4', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170505/14939136838686.jpg', 'Robam/老板 27A3+58B5 19立方侧吸烟灶套装', '领劵下单立减！赠价值899元老板电压力锅！另加5..', '5080.00');
INSERT INTO `shangpin` VALUES ('5', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170902/15043320282203.jpg', 'Robam/老板 67A7 顶吸大吸力欧式触控', '下单赠刀具七件套 详询客服！..', '4480.00');
INSERT INTO `shangpin` VALUES ('6', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170703/14990710614207.jpg', 'Robam/老板 67X2 欧式触控大吸力', '下单赠刀具七件套 详询客服！..', '2780.00');
INSERT INTO `shangpin` VALUES ('7', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20180508/15257705605702.jpg', 'Robam/老板 66A2H 【新品上市】 经典大吸力油烟机', '新品上市 下单赠刀具七件套 详询客服！..', '4380.00');
INSERT INTO `shangpin` VALUES ('12', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170703/14990702467600.jpg', 'Robam/老板 67X5 欧式触控抽吸油烟机 悦界新品', '下单赠刀具七件套 详询客服！..', '3680.00');
INSERT INTO `shangpin` VALUES ('14', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20160720/14689918624195.jpg', 'Robam/老板 58B5 新3D速火性能 高效节能 灶具', '全网保价 买贵退差 详询客服！..', '1980.00');
INSERT INTO `shangpin` VALUES ('15', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170624/1498295152160.jpg', 'Robam/老板 58B1 嵌入式燃气灶双灶大火力钢化玻璃灶具', '全网保价 买贵退差 详询客服！..', '1980.00');
INSERT INTO `shangpin` VALUES ('16', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20160720/1468991833908.jpg', 'Robam/老板 9B17 3D速火立体加热 节能高效灶具', '全网保价 买贵退差 详询客服！ ..', '1480.00');
INSERT INTO `shangpin` VALUES ('17', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20180110/15155603595557.jpg', 'Robam/老板 36B0 五星炙火 大火力灶具燃气灶双灶 新品', '【新品上市】下单赠刀具七件套！咨询客服下单享立减..', '1980.00');
INSERT INTO `shangpin` VALUES ('18', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20171125/15115865334923.jpg', 'Robam/老板 S273 大容量家用嵌入式蒸箱', '5.12-5.13期间晒图与母亲一起做饭照片，立..', '5680.00');
INSERT INTO `shangpin` VALUES ('19', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20171125/15115950112033.jpg', 'Robam/老板 R073 多功能家用嵌入式触控烤箱', '领劵下单立减！赠电压力锅或志邦独立柜（单柜）；再..', '5880.00');
INSERT INTO `shangpin` VALUES ('20', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20171014/15079673707717.jpg', 'Robam/老板 S272 超大容量40L多功能嵌入蒸箱', '领劵下单立减，下单赠电压力锅或志邦独立柜（单柜）..', '5180.00');
INSERT INTO `shangpin` VALUES ('21', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170420/1492666973878.jpg', 'Robam/老板 R072 旋钮控温嵌入式电烤箱', '两卷下单立减！下单赠电压力锅或者志邦独立柜（单柜..', '5280.00');
INSERT INTO `shangpin` VALUES ('22', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20161201/14805619701421.jpg', 'Robam/老板 27A3+58B5+727T 烟灶消套装', '领劵下单立减！赠价值899元老板电压力锅！另加5..', '6980.00');
INSERT INTO `shangpin` VALUES ('23', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20170705/14992231284396.jpg', 'Robam/老板 67X2+9B17+727T 新品烟灶消套装', '领劵下单立减！赠价值299元老板电热水壶！另加5..', '5980.00');
INSERT INTO `shangpin` VALUES ('24', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20171013/15078756993767.jpg', 'Robam/老板 26A7+9B17+727T 时尚侧吸爆款烟灶消套装', '下单赠电热水壶 详询客服！..', '5880.00');
INSERT INTO `shangpin` VALUES ('25', 'https://img.shoprobam.com//Public/Uploads/boss/goods/20171009/15075279743659.jpg', 'Robam/老板 67A7+58B1+727T 新品 青春旅社同款烟灶套装', '下单赠电压力锅！ 详询客服！..', '7580.00');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `sid` tinyint(99) NOT NULL AUTO_INCREMENT,
  `name` varchar(999) NOT NULL,
  `pwd` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('4', '12312452151', '092fbc0dc94845713042525aac25ced8');
INSERT INTO `user` VALUES ('5', '17681821207', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('6', '123456', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('7', '123', '202cb962ac59075b964b07152d234b70');
INSERT INTO `user` VALUES ('8', '12345', '827ccb0eea8a706c4c34a16891f84e7b');
