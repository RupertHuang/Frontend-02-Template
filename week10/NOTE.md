四则运算



<Expression>::=

​	<AdditiveExpression><EOF>



<AdditiveExpression>::=

​	<MultiplicativeExpression>

​	|<AdditiveExpression><+><MultiplicativeExpression>

​	|<AdditiveExpression><-><MultiplicativeExpression>



<MultiplicativeExpression>::=

​	<Number>

​	|<MultiplicativeExpression><*><Number>

​	|<MultiplicativeExpression></><Number>



字符串分析算法

​	字典树

​		大量高重复字符串的储存与分析

​	KMP

​		在长字符串里找模式

​		m + n

​	Wildcard

​		带通配符的字符串模式

​		文件查找

​		贪心算法

​	正则

​		字符串通用模式匹配

​	状态机

​		通用的字符串分析

​	LL LR

​		字符串多层级结构分析