// parseInt()
var iNum1 = parseInt("12345red");	        //返回 12345
var iNum1 = parseInt("0xA");	            //返回 10
var iNum1 = parseInt("56.9");	            //返回 56,对整数来说小数点是无效字符
var iNum1 = parseInt("red");	            //返回 NaN
// parseFloat() 转换第一个无效字符之前的字符串
var fNum = parseFloat("12.12.12")           //返回 12.12
// Boolean() 空字符串，数字0，undefined，null返回false,其他都返回true
var b1 = Boolean("");		                //false - 空字符串
var b2 = Boolean(" ");		                //true - 非空字符串
var b1 = Boolean(50);		                //true - 非零数字
var b1 = Boolean(null);		                //false - null
// Number() 转换整个值
Number(false)                               //0
Number(null)                                //0
Number(undefined)                           //NaN
// String() 对 null 和 undefined 值强制类型转换可以生成字符串而不引发错误
String(null)                                //null
var a = null                    
a.toString()                                //报错
// slice() 和 substring()，对于负数参数，slice() 方法会用字符串的长度加上参数，substring() 方法则将其作为 0 处理（也就是说将忽略它）
var oStringObject = new String("hello world");
alert(oStringObject.slice("3"));		    //输出 "lo world"
alert(oStringObject.substring("3"));		//输出 "lo world"
alert(oStringObject.slice("3", "7"));		//输出 "lo w"
alert(oStringObject.substring("3", "7"));	//输出 "lo w"
// instanceof 运算符：判断变量是否为指定对象实例
var oStringObject = new String("hello world");
alert(oStringObject instanceof String);	    //输出 "true"
