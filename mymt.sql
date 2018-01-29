# Host: localhost  (Version: 5.5.53)
# Date: 2018-01-29 15:31:31
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('10001','美图M8定制版手机壳','配件',79,1000,'','img/goods1.jpg','goods_1.html','','','','','','','','','','','',''),('10002','美图遥控器第三代','配件',89,1000,'','img/goods2.jpg','goods_2.html','','','','','','','','','','','',''),('10003','MeituFamily 潮趣手机壳','配件',79,1000,'','img/goods3.jpg','goods_3.html','','','','','','','','','','','',''),('10004','MeituFamily鸡极向上潮Tee','配件',139,1000,'','img/goods4.jpg','goods_4.html','','','','','','','','','','','',''),('10005','美图手机电源适配器','配件',29,1000,'','img/goods5.jpg','goods_5.html','','','','','','','','','','','',''),('10006','小笼包鸡硬本','配件',49,1000,'','img/goods6.jpg','goods_6.html','','','','','','','','','','','',''),('10007','MeituFamily抱枕','配件',79,1000,'','img/goods7.jpg','goods_7.html','','','','','','','','','','','',''),('10008','MeituFamily x THERMOS 保温杯','配件',349,1000,'','img/goods8.jpg','goods_8.html','','','','','','','','','','','',''),('10009','MeituFamily公仔','配件',69,1000,'','img/goods9.jpg','goods_9.html','','','','','','','','','','','',''),('10010','美图手机 Type-C数据线','配件',39,1000,'','img/goods10.jpg','goods_10.html','','','','','','','','','','','',''),('10011','美图手机壳','配件',29,1000,'','img/goods1.jpg','goods_1.html','','','','','','','','','','','','');

#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(11) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsImgHref` varchar(255) DEFAULT NULL,
  `goodsName` varchar(80) DEFAULT NULL,
  `goodsPrice` varchar(50) DEFAULT NULL
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

INSERT INTO `shoppingcart` VALUES ('18829038460','10001',3,'img/good_img_2.jpg','美图M8定制版手机壳 - PANDA&amp;CHERRY','79'),('18829038460','10001',1,'img/good_img_6.jpg','美图M8定制版手机壳 - 锦绘','79'),('18829038460','10001',3,'img/good_img_4.jpg','美图M8定制版手机壳 - 海洋传说','79'),('18829038460','10001',5,'img/good_img_1.jpg','美图M8定制版手机壳 - Blue-Morning','79'),('18829038460','10001',4,'img/good_img_7.jpg','美图M8定制版手机壳 - 蔓延','79');

#
# Structure for table "userinfo"
#

CREATE TABLE `userinfo` (
  `username` varchar(11) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "userinfo"
#

INSERT INTO `userinfo` VALUES ('13519102731','123123'),('15664756878','zd641166921'),('15829707740','zd641166921'),('18829038460','zd641166921');
