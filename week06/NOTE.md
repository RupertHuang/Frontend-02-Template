思考题：为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？



1. first-letter和first-line在都是作用在块级元素的前提下，first-letter的语义是表示块中的一个点，而first-line则是表示块中的一条线，并且这条线的宽度和这个块的宽度是一样的。因此first-letter就相当于一个抽屉中的小橡皮，放左放右都没关系，first-line就像一条和抽屉等宽的尺子，放在抽屉中就无法如一块小橡皮一样随意调整。



 