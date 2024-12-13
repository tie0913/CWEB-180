##在DTD中，<!ATTLIST> 用于定义一个元素的属性列表：

elementName：表示当前属性列表属于哪个元素。
attrName：表示属性名称。
数据类型：表示属性的数据类型，可以分为三类：
    标识符类型：用于指向其他对象，如 ID、IDREF、IDREFS 等。
    枚举类型：直接穷举所有可能的值，例如 (value1|value2|value3)。
    字符数据类型：如 CDATA，表示字符数据，可以包含任何文本字符。
属性默认声明类型：共三个可选值：
    #REQUIRED：表示必选。
    #IMPLIED：表示可选。
    #FIXED：表示固定值。
defaultValue：如果属性默认声明类型设置为 #FIXED，此值就是属性值。如果属性默认声明类型是 #REQUIRED 或 #IMPLIED，此值是默认值。
但如果数据类型定义了枚举，那么默认值必须是枚举中的其中之一。
