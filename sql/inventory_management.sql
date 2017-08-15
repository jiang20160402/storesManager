DROP DATABASE IF EXISTS stores_manager;

CREATE DATABASE stores_manager;

USE stores_manager;

DROP TABLE IF EXISTS `soso_user`;
CREATE TABLE `soso_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL COMMENT '登陆用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
	`email` varchar(255) DEFAULT NULL COMMENT '电子邮件',
	`phone` varchar(11) DEFAULT NULL COMMENT '电话',
	`userStatus` tinyint(1) DEFAULT NULL COMMENT '用户状态',
  `logintime` int(10) unsigned DEFAULT NULL COMMENT '上次登陆时间',
  `loginip` varchar(255) DEFAULT NULL COMMENT '登陆ip',
  `litpic` varchar(255) DEFAULT NULL COMMENT '用户头像',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

DROP TABLE IF EXISTS `soso_store`;
CREATE TABLE `soso_store` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int(11) NOT NULL COMMENT '用户id',
	`name` varchar(255) DEFAULT NULL COMMENT '商户名称',
	`linkman` varchar(255) DEFAULT NULL COMMENT '联系人',
	`phone` varchar(11) DEFAULT NULL COMMENT '电话',
	`address` varchar(255) DEFAULT NULL COMMENT '地址',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商户表';

DROP TABLE IF EXISTS `soso_store_customer`;
CREATE TABLE `soso_store_customer` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`name` varchar(255) DEFAULT NULL COMMENT '客户姓名',
	`phone` varchar(11) DEFAULT NULL COMMENT '电话',
	`address` varchar(255) DEFAULT NULL COMMENT '地址',
	`remark` varchar(500) DEFAULT NULL COMMENT '备注信息',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='客户表';

DROP TABLE IF EXISTS `soso_store_employee`;
CREATE TABLE `soso_store_employee` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`role_id`	int(11) DEFAULT NULL COMMENT '角色id',
	`name` varchar(255) DEFAULT NULL COMMENT '员工姓名',
	`phone` varchar(11) DEFAULT NULL COMMENT '电话',
	`address` varchar(255) DEFAULT NULL COMMENT '地址',
	`remark` varchar(500) DEFAULT NULL COMMENT '备注信息',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='员工表';

DROP TABLE IF EXISTS `soso_store_employee_role`;
CREATE TABLE `soso_store_employee_role` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`pid`	int(11) DEFAULT NULL COMMENT '父级id',
	`name` varchar(255) DEFAULT NULL COMMENT '角色名称',
	`description` text DEFAULT NULL COMMENT '角色描述',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';


DROP TABLE IF EXISTS `soso_store_supplier`;
CREATE TABLE `soso_store_supplier` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`name` varchar(255) DEFAULT NULL COMMENT '供应商名称',
	`linkman` varchar(255) DEFAULT NULL COMMENT '联系人',
	`phone` varchar(11) DEFAULT NULL COMMENT '电话',
	`address` varchar(255) DEFAULT NULL COMMENT '地址',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='供应商表';

DROP TABLE IF EXISTS `soso_store_repository`;
CREATE TABLE `soso_store_repository` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`name` varchar(255) DEFAULT NULL COMMENT '仓库名称',
	`linkman` varchar(255) DEFAULT NULL COMMENT '联系人',
	`phone` varchar(11) DEFAULT NULL COMMENT '电话',
	`address` varchar(255) DEFAULT NULL COMMENT '地址',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='仓库表';

DROP TABLE IF EXISTS `soso_product`;
CREATE TABLE `soso_product` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`supplier_id` int(11) DEFAULT '0' COMMENT '供应商id',
	`repository_id` int(11)	DEFAULT '0' COMMENT '仓库id',
	`technic_id`	int(11) DEFAULT '0' COMMENT '工艺id',
	`pattern_id` int(11) DEFAULT '0' COMMENT '图案id',
	`shape_id`	int(11) DEFAULT '0' COMMENT '器形id',
	`type_id`	int(11) DEFAULT '0' COMMENT '类型id',
	`brand_id`	int(11) DEFAULT '0' COMMENT '品牌id',
	`itemcode` varchar(255) DEFAULT NULL COMMENT '商品编号',
	`name` varchar(255) DEFAULT NULL COMMENT '商品名称',
	`purchase_price` int(11) DEFAULT NULL COMMENT '商品进货价/成本',
	`selling_price` int(11) DEFAULT NULL COMMENT '商品售价',
	`additional_cost` int(11) DEFAULT '0' COMMENT '额外费用/包装费',
	`current_amount` int(11) DEFAULT NULL COMMENT '商品当前库存',
	`alert_amount` int(11) DEFAULT NULL COMMENT '商品警戒库存',
	`status` int(1) DEFAULT '0' COMMENT '商品状态',
	`litpic` varchar(255) DEFAULT NULL COMMENT '封面图',
	`piclist` text DEFAULT NULL COMMENT '图片列表',
	`addtime`	int(10) DEFAULT NULL COMMENT '添加时间',
	`modtime` int(10) DEFAULT NULL COMMENT '修改时间',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';

DROP TABLE IF EXISTS `soso_product_technic`;
CREATE TABLE `soso_product_technic` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`pid`	int(11) DEFAULT NULL COMMENT '父级id',
	`name` varchar(255) DEFAULT NULL COMMENT '工艺名称',
	`description` text DEFAULT NULL COMMENT '工艺描述',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='产品工艺表';

DROP TABLE IF EXISTS `soso_product_pattern`;
CREATE TABLE `soso_product_pattern` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`pid`	int(11) DEFAULT NULL COMMENT '父级id',
	`name` varchar(255) DEFAULT NULL COMMENT '图案名称',
	`description` text DEFAULT NULL COMMENT '图案描述',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='产品图案表';

DROP TABLE IF EXISTS `soso_product_shape`;
CREATE TABLE `soso_product_shape` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`pid`	int(11) DEFAULT NULL COMMENT '父级id',
	`name` varchar(255) DEFAULT NULL COMMENT '器形名称',
	`description` text DEFAULT NULL COMMENT '器形描述',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='产品器形表';

DROP TABLE IF EXISTS `soso_product_type`;
CREATE TABLE `soso_product_type` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`pid` int(11) DEFAULT '0' COMMENT '父级id',
	`name` varchar(255) DEFAULT NULL COMMENT '产品类型名称',
	`description` text DEFAULT NULL COMMENT '产品类型描述',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='产品类型表';

DROP TABLE IF EXISTS `soso_product_brand`;
CREATE TABLE `soso_product_brand` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`store_id` int(11) NOT NULL COMMENT '商户id',
	`pid` int(11) DEFAULT '0' COMMENT '父级id',
	`name` varchar(255) DEFAULT NULL COMMENT '产品品牌名称',
	`description` text DEFAULT NULL COMMENT '产品品牌描述',
	PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='产品品牌表';

