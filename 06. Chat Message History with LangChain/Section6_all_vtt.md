WEBVTT

00:00.020 --> 00:02.030
Welcome to the next section of our course.

00:02.030 --> 00:05.150
And in this section we are going to talk about message histories.

00:05.150 --> 00:11.210
So this is one of the most important concepts that we need to understand while working with the Lang

00:11.210 --> 00:12.140
chain itself.

00:12.140 --> 00:19.490
Because most of the time we as a user will not be able to perform any action if we don't really have

00:19.490 --> 00:22.550
any context of what we're going to be talking about.

00:22.550 --> 00:29.060
As a follow up question, for instance, if you go to the ChatGPT over here and if I'm going to ask

00:29.060 --> 00:40.040
a question here saying, uh, write a simple, uh, lang chain code, uh, for, uh, let's say a chat

00:40.040 --> 00:42.440
prompt over here.

00:42.440 --> 00:49.220
So you will notice that the ChatGPT is going to immediately write some code for me over here.

00:49.220 --> 00:50.630
So this is pretty cool.

00:50.630 --> 00:58.550
But now let's say if I want to add or ask a follow up question over here, uh, saying can you write

00:58.550 --> 01:04.820
the same with, uh, prompt, uh, template, uh, over here.

01:04.820 --> 01:12.110
And you will notice that now the ChatGPT can immediately change the code from the chat prompt template

01:12.110 --> 01:14.030
to prompt template over here.

01:14.030 --> 01:20.900
So the reason why this is modifying over here is because it now knows the context of my earlier question,

01:20.900 --> 01:25.430
and it is able to perform the additional operation in my second question.

01:25.580 --> 01:27.890
So it knows the context of the first question.

01:27.890 --> 01:33.020
That's the reason why the second question, even though I did not ask a lot of details, I could able

01:33.020 --> 01:34.850
to just ask like a follow up question.

01:34.850 --> 01:40.910
This is true for most of the operations that we do in the ChatGPT over here, and we wanted to implement

01:40.910 --> 01:46.430
this similar kind of operation with our, uh, our application as well.

01:46.430 --> 01:49.550
But if I wanted to do that, you can see that for now.

01:49.550 --> 01:56.300
While we as a user ask any question from Lang Chain by passing a chat prompt template, and then if

01:56.300 --> 02:00.650
you send it to the LM, it can able to respond for the first time.

02:00.650 --> 02:07.580
And if you try to ask a follow up question, the model will not understand who you are and there won't

02:07.580 --> 02:11.990
be any response, as the large language model has got no context on it.

02:11.990 --> 02:19.130
So in order to resolve this particular problem of the LM with no context, we need to have what is called

02:19.130 --> 02:22.910
as the message history or the chat message history.

02:22.910 --> 02:30.560
So how do we really implement the chat message history and how we can make that happen in the long chain?

02:30.560 --> 02:35.780
Well, if you can see this particular diagram it will make you more sense over here.

02:35.780 --> 02:42.200
So as you can see, this particular user will have a session ID of 1 to 3, which is pretty much like

02:42.230 --> 02:44.240
how I did in the ChatGPT just now.

02:44.240 --> 02:50.300
So I will be sending a message to Long Chain and then as a prompt template I will be sending a message

02:50.300 --> 02:51.410
to queue model.

02:51.410 --> 02:53.720
It is just going to respond as as usual.

02:53.720 --> 02:56.530
But now the same user the session ID one two, three.

02:56.560 --> 03:02.020
If is going to be asking a follow up question, you will notice that this time the chat prompt template

03:02.020 --> 03:11.140
will go to the message history before it performs any action of sending the message to the model directly.

03:11.140 --> 03:17.740
So you'll notice that every single time before it's going to send any message to the local large language

03:17.740 --> 03:23.920
model, it is going to first get the context or the history information, and then it is going to perform

03:23.920 --> 03:24.550
the operation.

03:24.550 --> 03:31.510
So this way you will know that this particular model will always have a history information before it

03:31.510 --> 03:34.510
gets to answer the next question.

03:34.510 --> 03:37.330
So it could be a follow up question, or it could be a new question altogether.

03:37.330 --> 03:43.510
It doesn't matter, but we will be every single time going to the message history to get what is really

03:43.510 --> 03:46.990
the earlier question was before answering the new question.

03:46.990 --> 03:52.450
So if it is a follow up question, then LM will have the context of the question because it will have

03:52.450 --> 03:56.070
access to the earlier questions in the message history over here.

03:56.070 --> 04:03.630
And that's the reason why the RLM could able to serve the answer for you as a follow up questions answer

04:03.630 --> 04:06.180
which was not something possible earlier.

04:06.180 --> 04:08.820
And now you could able to achieve that over here.

04:08.820 --> 04:13.110
And that is exactly what we are going to be doing in this particular section.

04:13.110 --> 04:18.720
So we are going to see how we could able to achieve the message history operation in this particular

04:18.720 --> 04:19.260
section.

04:19.260 --> 04:25.830
So in order to do that, I have already created a simple chat history section folder here, and also

04:25.830 --> 04:30.210
created the the Jupyter notebook here.

04:30.210 --> 04:34.620
And I have also loaded everything which is required like the dot env file.

04:34.740 --> 04:39.630
Um, and also the LM object is all ready for us to rock and roll.

04:39.630 --> 04:45.570
And now all we have to do it is start writing the code over here for the chat message history.

04:45.570 --> 04:51.810
So in order for me to work with the chat message history, we are going to be using pretty much exactly

04:51.810 --> 04:56.970
what we are doing in our last section with the Runnables.

04:56.970 --> 05:02.430
If you remember over here, we are going to be using the same runnables over here, but just that we

05:02.430 --> 05:06.210
are going to be using something called as runnable dot history.

05:06.210 --> 05:11.790
So you see that we were doing this long chain core dot runnables over here.

05:11.790 --> 05:15.360
We also have got something called as history as you can see over here.

05:15.360 --> 05:19.170
And this is what we are going to be using in this particular section.

05:19.170 --> 05:21.960
So I'll tell you what I really have to do over here.

05:21.960 --> 05:26.160
So the first thing which we need is going to be something we have already did over here.

05:26.160 --> 05:31.260
So probably I'm just going to copy all these things that we have did earlier, and I'll paste it over

05:31.260 --> 05:33.690
here to save some strokes.

05:33.810 --> 05:39.240
Uh, and then I'm going to be importing a couple of more libraries over here.

05:39.240 --> 05:44.430
So the first one is going to be the Lang chain core dot chat history.

05:44.460 --> 05:45.750
As you can see this one.

05:45.750 --> 05:50.950
And I'm going to import what is called as the base chat message History.

05:50.980 --> 05:58.870
And then I'm also going to import the long chain core dot Runnables dot history.

05:58.870 --> 06:04.420
And from here I'm going to import what is called as runnable with message history.

06:05.650 --> 06:06.040
Right.

06:06.040 --> 06:13.870
And finally I also need to import the long chain chat message history, which is going to be sitting

06:13.870 --> 06:17.200
from the long chain community.

06:17.200 --> 06:21.340
So I'm going to say long chain, uh, community.

06:21.340 --> 06:27.520
And you see that the long chain community is not there over here for me, which means we need to install

06:27.520 --> 06:32.620
this particular package for the very first time in this particular section.

06:32.620 --> 06:35.170
So I'm going to add a code over here.

06:35.200 --> 06:45.160
And I'm going to do pip install lang chain underscore community.

06:46.990 --> 06:52.900
And let me run this particular installation over here, and you will see that the long chain community

06:52.900 --> 06:54.370
is going to be installed for me.

06:54.370 --> 07:00.880
So make sure that you do install it for the first time, because without that it is not going to work.

07:00.880 --> 07:05.110
And once you have it, you can then do long chain community.

07:05.110 --> 07:08.170
And you see that we have got a new package like long chain community.

07:08.200 --> 07:16.240
And over here we have got something called as the chat um, message histories, which is also required

07:16.240 --> 07:20.440
for our historical operation that we are going to be doing, like the message history operation that

07:20.440 --> 07:21.220
we are going to do.

07:21.250 --> 07:24.460
So I'm going to say import and chat message history.

07:24.460 --> 07:30.370
So these are the libraries which are really required for us to do the first few operation in the chat

07:30.370 --> 07:31.870
message operation.

07:32.050 --> 07:34.060
Well we have all these libraries now.

07:34.060 --> 07:40.390
We are pretty much ready to write the first code, but make sure that you first install all these libraries

07:40.390 --> 07:42.430
before we can start writing the code.

07:42.460 --> 07:47.860
Catch you in the next lecture where we are going to be starting to write the code for the message history

07:47.890 --> 07:48.460
itself.


========================================================================================

WEBVTT

1
00:00:00.290 --> 00:00:03.250
A primeira coisa que vamos usar para nossa

2
00:00:03.250 --> 00:00:05.590
história de mensagem será o Runnable com Libraria

3
00:00:05.590 --> 00:00:07.230
de História de Mensagem, que é uma das

4
00:00:07.230 --> 00:00:11.130
bibliotecas importantes que vamos usar nesta seção inteira.

5
00:00:11.730 --> 00:00:13.710
Veja que este Runnable com História de Mensagem

6
00:00:13.710 --> 00:00:15.910
é um Runnable que gerencia a história de

7
00:00:15.910 --> 00:00:18.150
mensagem de conversa para outros Runnables.

8
00:00:18.370 --> 00:00:19.470
É isso que isso realmente faz.

9
00:00:20.090 --> 00:00:21.790
Uma história de mensagem de conversa é uma

10
00:00:21.790 --> 00:00:25.010
sequência de mensagens que representa uma conversa.

11
00:00:25.770 --> 00:00:27.650
E o Runnable com História de Mensagem envelhece

12
00:00:27.650 --> 00:00:30.070
outros Runnables e gerencia a história de mensagem

13
00:00:30.070 --> 00:00:31.570
de conversa para ele.

14
00:00:32.130 --> 00:00:35.010
E ele é responsável por ler e atualizar

15
00:00:35.010 --> 00:00:36.090
a história de mensagem de conversa.

16
00:00:36.650 --> 00:00:38.590
Então, você verá que todos os levantamentos pesados

17
00:00:38.590 --> 00:00:42.150
serão cuidadosos por este Runnable com História de

18
00:00:42.150 --> 00:00:42.630
Mensagem para nós.

19
00:00:43.030 --> 00:00:46.250
E você também notará que, para você invocar

20
00:00:46.250 --> 00:00:52.710
a história das mensagens, você precisa usar o

21
00:00:52.710 --> 00:00:56.170
objeto História.Invoke e então você precisa usar

22
00:00:56.170 --> 00:00:59.830
este config que é igual ao configurável do

23
00:00:59.830 --> 00:01:02.170
ID da sessão do particular usuário.

24
00:01:02.370 --> 00:01:03.690
Então, esta é uma das coisas mais importantes

25
00:01:03.690 --> 00:01:05.750
que você precisa entender enquanto está usando este

26
00:01:05.750 --> 00:01:07.390
Runnable com História de Mensagem.

27
00:01:07.550 --> 00:01:09.930
E é isso que vamos fazer nesta parte

28
00:01:09.930 --> 00:01:10.290
particular.

29
00:01:11.450 --> 00:01:13.350
E, a maior parte do tempo, vamos fazer

30
00:01:13.350 --> 00:01:17.410
a mesma operação, mas vamos ver diferentes sabores

31
00:01:17.410 --> 00:01:20.370
de como podemos usar esta operação de história

32
00:01:20.370 --> 00:01:23.290
de mensagem de conversa com a história de

33
00:01:23.290 --> 00:01:25.190
mensagem de conversa com a história de mensagem

34
00:01:25.190 --> 00:01:27.770
de conversa de base ou também podemos usar

35
00:01:27.770 --> 00:01:29.390
a história de mensagem de mensagem de SQL

36
00:01:30.610 --> 00:01:33.150
e também podemos usar a história de mensagem

37
00:01:33.150 --> 00:01:34.470
de mensagem de stream que vai ser guardada

38
00:01:34.470 --> 00:01:35.090
na memória.

39
00:01:35.630 --> 00:01:37.630
Então, vamos ver três sabores de como podemos

40
00:01:37.630 --> 00:01:40.630
manter a história de conversa dentro das nossas

41
00:01:40.630 --> 00:01:41.950
aplicações de modelos de linguagem maior.

42
00:01:42.810 --> 00:01:45.730
Então, o primeiro que vamos discutir vai ser

43
00:01:45.730 --> 00:01:48.470
com a história de mensagem de conversa da

44
00:01:48.470 --> 00:01:51.630
edição de comunidade que actualmente downloadamos aqui.

45
00:01:51.630 --> 00:01:54.230
Este cara, Runnable com História de Mensagem.

46
00:01:54.630 --> 00:01:56.310
Tudo bem, vamos começar escrevendo o código aqui.

47
00:01:56.530 --> 00:01:57.950
Então, o primeiro é...

48
00:01:57.950 --> 00:02:05.150
Ops, vou escrever provavelmente uma marcação aqui e

49
00:02:05.150 --> 00:02:10.350
vou dizer história de mensagem com história de

50
00:02:10.350 --> 00:02:10.450
mensagem de conversa.

51
00:02:11.170 --> 00:02:14.370
Pegue aqui e vamos começar escrevendo o código.

52
00:02:14.770 --> 00:02:17.270
E aqui, vou fazer isto.

53
00:02:17.450 --> 00:02:20.530
Vou dizer que o template é igual a...

54
00:02:20.530 --> 00:02:22.430
Vou chamar o template de conversa de conversa

55
00:02:22.930 --> 00:02:24.950
que estávamos usando antes.

56
00:02:26.230 --> 00:02:29.370
E vou usar, pela primeira vez, o método

57
00:02:29.370 --> 00:02:31.930
de mensagem de From.

58
00:02:32.290 --> 00:02:34.730
Então, isto é novo, nunca usamos isto antes.

59
00:02:35.470 --> 00:02:37.450
Então, vou usar isto aqui.

60
00:02:38.210 --> 00:02:42.570
E na mensagem de From, vou pausar no

61
00:02:42.570 --> 00:02:47.370
array, vou pausar o placeholder de mensagem e

62
00:02:47.370 --> 00:02:48.410
a mensagem humana.

63
00:02:48.410 --> 00:02:51.030
Lembrem-se que isto é algo que discutimos

64
00:02:51.030 --> 00:02:53.730
antes enquanto trabalhávamos com o template de From

65
00:02:53.730 --> 00:02:53.830
de conversa.

66
00:02:54.710 --> 00:02:56.190
Então, vou fazer a mesma coisa aqui.

67
00:02:56.530 --> 00:03:01.070
Vou dizer human e vou pausar o From,

68
00:03:01.390 --> 00:03:03.130
que será uma variável de entrada.

69
00:03:04.070 --> 00:03:06.910
E depois, preciso pausar o placeholder aqui.

70
00:03:07.490 --> 00:03:09.710
Lembrem-se que o placeholder é algo como

71
00:03:09.710 --> 00:03:13.190
um shorthand que podemos usar para a operação

72
00:03:13.190 --> 00:03:13.710
do placeholder.

73
00:03:14.730 --> 00:03:18.110
Então, se voltarmos às bases aqui e se

74
00:03:18.110 --> 00:03:21.810
eu só ir até cima, se lembrem-se,

75
00:03:22.760 --> 00:03:26.170
no template de From de conversa, estávamos usando

76
00:03:27.200 --> 00:03:32.890
uma versão shorthand do placeholder, algo assim, para

77
00:03:32.890 --> 00:03:33.970
o placeholder de mensagem.

78
00:03:34.430 --> 00:03:37.570
É exatamente o que vou fazer aqui também.

79
00:03:38.170 --> 00:03:45.730
Então, vou dizer placeholder, placeholder, e este particular

80
00:03:45.730 --> 00:03:50.150
placeholder vai ser algo assim, certo?

81
00:03:50.530 --> 00:03:50.790
É isso.

82
00:03:50.970 --> 00:03:52.390
Esta é a única coisa que preciso fazer

83
00:03:52.390 --> 00:03:54.450
aqui para o template.

84
00:03:55.690 --> 00:03:58.370
Podemos usar o placeholder de mensagem, mas vou

85
00:03:58.370 --> 00:03:59.830
usar o placeholder por enquanto.

86
00:03:59.950 --> 00:04:00.690
Vamos ver como vai.

87
00:04:00.970 --> 00:04:04.070
E depois, preciso criar uma linha aqui.

88
00:04:04.530 --> 00:04:07.050
A linha que vou fazer é simples.

89
00:04:07.510 --> 00:04:11.190
Vou chamar o template que criei e vou

90
00:04:11.190 --> 00:04:13.610
passá-lo para o nosso modelo de língua

91
00:04:13.610 --> 00:04:17.110
maior e vou passar ele até o nosso

92
00:04:17.110 --> 00:04:18.910
parser de saída de linha aqui.

93
00:04:19.310 --> 00:04:24.170
Então, vou dizer method stringOutputParser aqui.

94
00:04:24.310 --> 00:04:26.290
Então, esta é a linha que criei, uma

95
00:04:26.290 --> 00:04:27.070
linha super simples.

96
00:04:27.750 --> 00:04:31.470
E agora, preciso chamar o nosso histórico, que

97
00:04:31.470 --> 00:04:34.970
vai ser o runnable com história de mensagem,

98
00:04:35.390 --> 00:04:36.630
que vou passar.

99
00:04:37.030 --> 00:04:42.150
Então, como eu disse no diagrama aqui, a

100
00:04:42.150 --> 00:04:45.530
cada vez que o template é executado na

101
00:04:45.530 --> 00:04:49.310
operação de linha, vamos primeiro verificar o nosso

102
00:04:49.310 --> 00:04:52.010
histórico, e se o histórico tem alguma data,

103
00:04:52.450 --> 00:04:55.710
vai ser tomado junto com esta mensagem de

104
00:04:55.710 --> 00:04:58.450
prompt que temos, e depois vai ser enviado

105
00:04:58.450 --> 00:05:00.830
para o LLM para que o LLM tenha

106
00:05:00.830 --> 00:05:02.690
o contexto da conversa anterior.

107
00:05:03.890 --> 00:05:07.310
Então, para conseguirmos isso aqui, temos que passar

108
00:05:07.310 --> 00:05:14.190
a linha e precisamos passar a história e

109
00:05:14.190 --> 00:05:19.630
depois precisamos passar a mensagem de prompt que

110
00:05:19.630 --> 00:05:22.110
vamos passar, que vai ser este cara, a

111
00:05:22.110 --> 00:05:22.610
mensagem de prompt, certo?

112
00:05:22.970 --> 00:05:24.310
Mas há um troço.

113
00:05:24.630 --> 00:05:27.990
Para fazermos esta operação de história, precisamos escrever

114
00:05:27.990 --> 00:05:30.790
um método customizado para que a operação histórica

115
00:05:30.790 --> 00:05:31.470
seja cuidada.

116
00:05:32.070 --> 00:05:35.570
E por essa razão, precisamos escrever algumas mais

117
00:05:35.570 --> 00:05:36.870
linhas de código aqui.

118
00:05:37.350 --> 00:05:41.450
Então, vou colocar um comentário aqui e vou

119
00:05:41.450 --> 00:05:44.670
escrever um método super simples.

120
00:05:45.510 --> 00:05:48.730
Então, vou dizer, stor é igual a, vou

121
00:05:48.730 --> 00:05:51.570
criar um array simples e vou escrever um

122
00:05:51.570 --> 00:05:55.190
método aqui chamado getSessionHistory.

123
00:05:56.880 --> 00:06:01.700
E este particular getSessionHistory vai obter um id

124
00:06:01.700 --> 00:06:04.000
de sessão, que é de tipo string.

125
00:06:05.000 --> 00:06:07.420
E também vou, pela primeira vez, vou dizer

126
00:06:07.420 --> 00:06:10.100
que o tipo de retorno deste particular mensagem

127
00:06:10.100 --> 00:06:12.500
vai ser um tipo de história de mensagem

128
00:06:12.500 --> 00:06:12.940
de chat base.

129
00:06:14.280 --> 00:06:14.520
Certo?

130
00:06:15.120 --> 00:06:19.140
E vou dizer, se o id de sessão

131
00:06:19.980 --> 00:06:22.940
não está na loja, então, se a loja

132
00:06:22.940 --> 00:06:27.980
não tiver valor, então vai criar o id

133
00:06:27.980 --> 00:06:32.660
de sessão com uma nova história de mensagem

134
00:06:32.660 --> 00:06:32.760
de chat.

135
00:06:33.740 --> 00:06:35.800
Então, este é para a primeira vez que

136
00:06:35.800 --> 00:06:37.920
vamos inicializar a história de mensagem de chat

137
00:06:38.600 --> 00:06:41.760
que temos importada, que é este cara, certo?

138
00:06:42.040 --> 00:06:43.860
É aqui que estas coisas vão acontecer.

139
00:06:44.660 --> 00:06:48.320
Mas, se há uma mensagem já, então, retorne

140
00:06:48.320 --> 00:06:52.720
-me a loja do id de sessão.

141
00:06:53.500 --> 00:06:54.100
É isso.

142
00:06:54.340 --> 00:06:55.900
Então, este é o que este particular método

143
00:06:55.900 --> 00:06:56.500
vai dar.

144
00:06:57.150 --> 00:06:59.800
E este método é algo que vai manter

145
00:06:59.800 --> 00:07:00.800
a informação de sessão.

146
00:07:01.420 --> 00:07:03.500
Então, o que vou fazer aqui é, vou

147
00:07:03.500 --> 00:07:06.640
dizer, change, e aí você recebe a história,

148
00:07:06.760 --> 00:07:08.400
a história de sessão para mim, ali em

149
00:07:08.400 --> 00:07:08.500
cima.

150
00:07:09.480 --> 00:07:11.460
E também, adivinha o que?

151
00:07:11.640 --> 00:07:13.680
Vou passar duas variáveis desta vez.

152
00:07:13.920 --> 00:07:17.160
Uma é a chave de mensagens de input.

153
00:07:19.500 --> 00:07:22.000
E esta chave de mensagens de input é

154
00:07:22.000 --> 00:07:24.660
nada mais do que o prompt que passamos

155
00:07:24.660 --> 00:07:25.320
aqui.

156
00:07:25.320 --> 00:07:26.480
Como podem ver, este.

157
00:07:26.840 --> 00:07:29.160
Então, vou passar o prompt aqui.

158
00:07:31.140 --> 00:07:33.760
Deixe-me fazer algo assim para que seja

159
00:07:33.760 --> 00:07:34.240
mais legítimo.

160
00:07:36.930 --> 00:07:38.890
Este vai ser o método de input, história.

161
00:07:39.610 --> 00:07:43.970
E também vou ter uma mensagem de localizador

162
00:07:43.970 --> 00:07:47.210
que temos aqui, que é a operação de

163
00:07:47.210 --> 00:07:47.530
história, certo?

164
00:07:47.810 --> 00:07:49.650
Isso também é algo que preciso passar.

165
00:07:50.270 --> 00:07:53.370
Então, oh, desculpe, este é a história e

166
00:07:53.370 --> 00:07:54.190
passei assim.

167
00:07:54.530 --> 00:07:55.270
Vai falhar.

168
00:07:56.250 --> 00:07:56.550
Legal.

169
00:07:57.010 --> 00:07:59.450
Então, este método de localizador vai ser a

170
00:07:59.450 --> 00:07:59.750
história.

171
00:08:00.110 --> 00:08:03.890
Para isso, vou dizer chave de mensagens de

172
00:08:03.890 --> 00:08:06.630
história, que é igual a história.

173
00:08:08.010 --> 00:08:08.390
Ali em cima.

174
00:08:08.570 --> 00:08:09.930
Então, estes são os valores que vão ser

175
00:08:09.930 --> 00:08:11.830
passados para o localizador.

176
00:08:12.410 --> 00:08:14.530
E também para o prompt, vai ser replacado

177
00:08:14.530 --> 00:08:17.110
com o prompt que vou passar para esta

178
00:08:17.110 --> 00:08:19.130
história enquanto tentamos invocá-lo.

179
00:08:19.910 --> 00:08:23.650
E agora, enquanto temos todos estes aqui, posso

180
00:08:23.650 --> 00:08:28.690
agora ir diretamente e invocar esta história usando

181
00:08:28.690 --> 00:08:31.470
a história.invoc e veremos como isso pode

182
00:08:31.470 --> 00:08:31.789
acontecer.

183
00:08:32.350 --> 00:08:33.070
Mas, adivinha o que?

184
00:08:33.130 --> 00:08:35.530
Como eu te disse, porque também precisamos passar

185
00:08:35.530 --> 00:08:38.110
a ID de sessão junto com todas as

186
00:08:38.110 --> 00:08:42.409
nossas mensagens, como vimos na documentação aqui, precisamos

187
00:08:42.409 --> 00:08:45.550
passar, enquanto fazemos a história.invoc, precisamos passar

188
00:08:45.550 --> 00:08:47.850
o config que é igual ao configurável da

189
00:08:47.850 --> 00:08:48.550
ID de sessão.

190
00:08:48.990 --> 00:08:51.150
Apenas então o LLM terá o contexto de

191
00:08:51.150 --> 00:08:53.950
quem está falando com o LLM em qualquer

192
00:08:53.950 --> 00:08:54.910
ponto de tempo.

193
00:08:55.090 --> 00:08:57.950
Então, para você alcançar isso, também precisamos passar

194
00:08:57.950 --> 00:09:00.030
a ID de sessão, que faremos na nossa

195
00:09:00.030 --> 00:09:00.550
próxima aula.

========================================================================================

WEBVTT

00:00.080 --> 00:00.500
All right.

00:00.530 --> 00:02.690
So now we'll try to invoke this history.

00:02.690 --> 00:07.700
But before that, as I told you, we also need to do pass the session ID.

00:07.790 --> 00:09.200
So let's do this.

00:09.230 --> 00:12.890
I'm going to create a session ID for that matter.

00:12.890 --> 00:17.930
So I'm going to say session ID is equal to probably Karthik over here.

00:18.320 --> 00:24.470
And now I'm going to say response is equal to history.

00:24.710 --> 00:29.570
And I'm going to do an invoke over here I think guess what.

00:29.570 --> 00:33.260
This this intellisense is not all coming over here for me.

00:33.290 --> 00:34.130
There we go.

00:34.820 --> 00:39.800
Uh, and for some reason none of the intellisense is really working for me over here.

00:39.800 --> 00:41.510
I don't know what's really going on there.

00:41.810 --> 00:45.980
Uh, and I'm going to pass the prompt message here.

00:45.980 --> 00:57.410
So I'm going to say the prompt as, uh, what's the benefit of running LM in local machine?

00:57.410 --> 01:02.180
So this is the same question that we have been asking from the start of the course, which I am asking

01:02.180 --> 01:03.640
once again over here.

01:03.880 --> 01:05.320
And guess what?

01:05.350 --> 01:12.160
Now, not only the prompt we need, we also need to pass what is called as a config.

01:12.160 --> 01:21.130
And over here on the config I'm going to say over here as configurable.

01:21.130 --> 01:25.390
So this is a configurable um key that I need to pass.

01:25.390 --> 01:30.880
And over here on the configurable I need to pass the session ID.

01:32.920 --> 01:37.390
As the session ID that I created over here, which is this guy.

01:38.140 --> 01:38.650
Right.

01:38.650 --> 01:46.300
So this is something I need to pass for every single chat message that I'm going to be doing.

01:46.300 --> 01:52.930
So only then the LLM will have an idea of which user is talking to him.

01:53.380 --> 01:53.890
Right?

01:53.890 --> 01:56.650
And now guess what?

01:56.650 --> 02:00.760
In the response two over here I'm just going to create another response.

02:00.760 --> 02:01.930
So this is response one.

02:01.960 --> 02:03.220
This is response two.

02:03.250 --> 02:06.470
I'm going to say we have asked the benefits here right?

02:06.500 --> 02:09.710
I'm just going to say how about for cloud?

02:09.710 --> 02:11.540
You see that this is like a follow up question.

02:11.540 --> 02:16.700
I'm not even giving any context of what it is, but I'm just asking how about for cloud?

02:17.810 --> 02:21.380
Which means now this is going to be like a follow up question for me over here.

02:21.740 --> 02:27.980
So this way LLM will answer based on the first context and the second context.

02:28.010 --> 02:28.640
Look at that.

02:28.640 --> 02:29.930
This is pretty cool.

02:29.930 --> 02:35.390
And now let's try to print this particular responses like what is really going to come up.

02:35.390 --> 02:37.640
So I'm going to say response one.

02:37.640 --> 02:42.380
And I'm going to print probably and slash n.

02:42.380 --> 02:48.770
And then I'm going to print again the response to okay this one.

02:48.770 --> 02:50.990
And I'm going to save this code.

02:50.990 --> 02:52.970
And now let's try to run this particular code.

02:53.120 --> 02:55.220
Looks like there is some error coming up over here.

02:55.220 --> 03:01.070
It says that the from message uh attribute is not there.

03:01.160 --> 03:04.250
It looks like it's not from message but it is from messages.

03:04.280 --> 03:05.210
I'm sorry about that.

03:05.210 --> 03:06.920
I just from message.

03:06.950 --> 03:10.300
That's the problem with the intelligence not really coming up over there.

03:10.300 --> 03:12.700
And we have got this bigger problem.

03:13.150 --> 03:13.750
There we go.

03:13.750 --> 03:16.540
So now the code is actually working for us over here.

03:16.540 --> 03:21.220
So you will notice that this random message this time is going to pass the chain information.

03:21.340 --> 03:26.860
And it is also going to go and check the session history every single time before it's going to answer

03:26.860 --> 03:28.300
the question as I told you.

03:28.330 --> 03:29.410
Look at that.

03:29.440 --> 03:33.970
So for for the first time, it is going to give us this particular answer over here.

03:34.240 --> 03:38.980
And for the second question, you will notice that for a more practical purpose, especially in one

03:38.980 --> 03:45.760
large dataset, the complex model using cloud services offer more feasible due to their scalable infrastructure.

03:45.970 --> 03:46.960
Look at that.

03:46.990 --> 03:52.330
It now knows there is a context for both of these particular questions.

03:52.330 --> 03:53.770
Maybe I know this.

03:53.770 --> 03:57.460
Maybe it's not quite clear for you over here.

03:57.460 --> 04:00.160
So let's say I'm going to ask a question.

04:00.610 --> 04:07.450
What is the distance between Earth and Sun?

04:07.810 --> 04:14.600
And the next follow up question I'm going to ask is How about moon so that see that this is like a follow

04:14.630 --> 04:15.230
up question.

04:15.230 --> 04:18.800
And now the LM should answer both of these for us.

04:18.830 --> 04:20.840
Let's see what's going to really happen over here.

04:20.840 --> 04:25.260
So you will see that it says that the average distance between the Earth and sun is approximately 93

04:25.260 --> 04:28.310
million miles over here, which is great.

04:28.310 --> 04:35.720
And also over here, it shows that the average distance between the moon and sun, uh, is approximately

04:36.020 --> 04:37.940
93 million miles.

04:37.940 --> 04:40.970
So, I mean, it just says between moon and sun.

04:40.970 --> 04:47.780
So it has somehow, uh, got the context that it's between the sun and moon, so Earth and sun, and

04:47.780 --> 04:50.660
then we have the LM things that is from sun and moon.

04:50.660 --> 04:52.730
So that is what it is really doing over here.

04:52.730 --> 04:55.580
And even that one is 93 million miles.

04:55.700 --> 04:57.020
I'm not pretty sure about that.

04:57.020 --> 04:59.660
But that's what this is telling me over here.

04:59.900 --> 05:04.250
Uh, but but yeah, you can see that this is how things are like.

05:04.280 --> 05:10.160
You could do a follow up question with a history message over here, and this is how you can do it.

05:10.160 --> 05:16.910
And you can also do some more things like you can also do a cleanup of the history message if you wanted

05:16.910 --> 05:17.540
to do it.

05:17.630 --> 05:24.230
So for instance, if I want to do get session history of the session ID, and if you wanted to do a

05:24.260 --> 05:28.640
clear, probably you can do the clear operation as well.

05:29.330 --> 05:33.320
So the session will be cleared every single time before the execution really happens.

05:33.500 --> 05:37.310
And then you will have like a correct answer every single time.

05:37.340 --> 05:37.940
So look at that.

05:38.030 --> 05:38.870
Now this is correct.

05:38.870 --> 05:43.340
So the first time it says the average distance between Earth and sun is this one.

05:43.340 --> 05:47.780
And then the average distance between Earth and the moon is approximately 200.

05:47.810 --> 05:47.960
Yeah.

05:47.990 --> 05:48.740
This is correct.

05:48.740 --> 05:55.190
So this this this guy this is very important because for some reason it has the old historical information

05:55.190 --> 05:56.390
before it start running it.

05:56.390 --> 06:01.370
So make sure that you always clear the session before you start the new conversation.

06:01.370 --> 06:04.070
So that is how you can keep on asking the questions.

06:04.070 --> 06:12.080
And this is how we can actually make the historical operation happens with the chat message history,

06:12.140 --> 06:15.800
uh, which is available in the community of the.


========================================================================================


WEBVTT

00:00.050 --> 00:00.410
All right.

00:00.440 --> 00:06.380
The next operation that we are going to do for the message history is with the SQL chat message history.

00:06.380 --> 00:13.010
So we are going to be using the same chat message histories library that we are going to have over here,

00:13.010 --> 00:17.570
but just that we are going to use what is called a SQL chat message history instead of the chat message

00:17.570 --> 00:18.500
history that we have got.

00:18.500 --> 00:26.270
So basically in the SQL chat message history, the chat histories are going to be saved on an database

00:26.270 --> 00:32.450
instead of you storing it, uh, like on the, on the memory, uh, during the runtime.

00:32.450 --> 00:34.460
That is what we are going to be doing over here.

00:34.460 --> 00:36.890
So how do we actually do that?

00:36.950 --> 00:39.920
We are going to call the new library that I was talking about.

00:39.920 --> 00:42.140
So these things are going to remain exactly the same.

00:42.140 --> 00:43.910
So I'm just going to leave that guy as it is.

00:44.090 --> 00:45.830
And you put a markdown over here.

00:45.830 --> 00:58.490
I'm going to say a chat message history with SQL, uh, chat message history, something like that.

00:58.490 --> 01:01.070
That is what we are going to be talking about over here.

01:01.070 --> 01:03.260
So let's see how we can able to achieve this.

01:03.260 --> 01:06.740
So I'm going to do from chain community chat message history.

01:06.740 --> 01:10.070
And over here you see that we have got the SQL chat message history.

01:10.070 --> 01:15.080
But actually if you just do control space you can see there are so many different chat histories available

01:15.080 --> 01:22.280
either MongoDB chat, message history, Postgres, um, zip chat history, SQL chat, message history,

01:22.370 --> 01:24.650
uh, Kafka chat message history.

01:24.770 --> 01:28.520
Um, and then you see that zip cloud message history.

01:28.520 --> 01:32.690
There are so many of the chat message histories available, so you can use any one of them.

01:32.720 --> 01:38.600
And everything is written by the community, so you can actually use one of them based on your need

01:38.600 --> 01:41.270
while you develop the LM application.

01:41.270 --> 01:45.800
So yeah, this is one of the library which you should be using it for the chat message history.

01:46.280 --> 01:51.320
And now I'm going to import this particular library for my operation over here.

01:51.620 --> 01:54.380
And I'm going to start implementing the code.

01:54.380 --> 02:00.770
So again for the code implementation the code remains pretty much exactly the same, like how we have,

02:01.010 --> 02:06.110
uh, written over here like this is going to be the template.

02:06.140 --> 02:12.170
Maybe I'm going to just use the same template and the same chain that we are going to use.

02:12.200 --> 02:17.480
Let me just copy them and I'm going to paste that over here.

02:17.930 --> 02:24.710
And I'm also going to be doing the invocation, which is going to be pretty much exactly the same as

02:24.710 --> 02:24.860
well.

02:24.860 --> 02:26.660
So there is no change on that as well.

02:26.660 --> 02:30.530
So I'm going to copy this entire code that we discussed earlier.

02:30.530 --> 02:34.010
And I'm going to put it over here.

02:35.210 --> 02:41.930
And I'm also going to use the same exact thing which is the session and the get session history.

02:41.930 --> 02:43.220
So I'm going to copy this.

02:43.220 --> 02:46.580
And in fact I'm going to paste that over here.

02:46.580 --> 02:51.590
So you may be thinking that Karthik what is the difference between the existing code versus the new

02:51.590 --> 02:52.460
code that we are writing?

02:52.460 --> 02:57.590
Well, the only difference comes in the get session history method that we are going to be writing over

02:57.590 --> 02:58.070
here.

02:58.070 --> 03:03.470
So I'm going to say def of get session History.

03:03.710 --> 03:11.510
And over here I'm going to get the session ID over here and the session ID over here.

03:11.510 --> 03:14.720
I'm going to return the SQL chat message history.

03:14.750 --> 03:17.360
So this is the only difference which I was talking about.

03:17.390 --> 03:25.610
And over here I'm just going to store the session ID as the session ID that I'm passing in directly

03:25.640 --> 03:26.660
regardless.

03:26.660 --> 03:31.220
And I'm going to pass a connection string over here.

03:31.220 --> 03:40.130
So the connection string I'm going to be using is the SQL Lite database, which is going to be SQLite

03:40.160 --> 03:41.120
of triple slash.

03:41.120 --> 03:45.800
And probably I'm going to say chat history dot DB over here.

03:45.800 --> 03:50.900
So that is the only thing that I need to give over here in this particular method.

03:51.170 --> 03:57.170
Other than that this entire operation is going to look pretty much exactly the same like how we did

03:57.170 --> 03:57.740
before.

03:57.770 --> 04:04.810
It's going to store all the information, like all the, uh, all the chat messages in the SQL chat

04:04.840 --> 04:06.220
message history for us.

04:06.610 --> 04:07.210
That's it.

04:07.210 --> 04:08.080
That's the only thing.

04:08.080 --> 04:11.500
And the remaining thing remains exactly the same.

04:11.500 --> 04:17.740
There is no big difference between the earlier and the new one that we have got right.

04:18.280 --> 04:20.890
And now let's try to run this code and see what is going to happen.

04:20.890 --> 04:27.370
So if I try to run this code, you'll notice that there is a deprecation deprecation warning coming

04:27.370 --> 04:29.080
up over here for the connection string.

04:29.080 --> 04:31.390
Probably this is going to be deprecated pretty soon.

04:31.510 --> 04:33.400
Uh but yeah look at that.

04:33.400 --> 04:38.890
The average distance between the Earth and sun is approximately 9.3 million miles over here, and the

04:38.890 --> 04:44.200
distance between Earth and Moon varies slightly due to the elliptical shape of the Moon's orbit around

04:44.200 --> 04:46.780
the Earth, and an average distance is about this one.

04:46.810 --> 04:47.650
Amazing.

04:47.650 --> 04:49.240
This is already working, guys.

04:49.240 --> 04:51.130
We can see that it is working.

04:51.160 --> 04:57.220
And you will also notice that we will have a chat Historydb file created this time.

04:57.220 --> 05:02.590
So you should see the chat history sitting in over here in the SQLite database.

05:02.590 --> 05:08.560
So if you have an explorer for the chat for the SQLite database, you could actually able to explore

05:08.590 --> 05:10.480
that and see how that actually works.

05:10.480 --> 05:13.750
I guess I had a SQLite tool.

05:14.050 --> 05:17.530
Um, so I'm going to go search for SQLite.

05:17.920 --> 05:19.150
Uh, over here.

05:20.020 --> 05:20.980
Just this one.

05:20.980 --> 05:21.460
Yeah.

05:21.490 --> 05:22.090
Let's look at that.

05:22.090 --> 05:24.400
I already have it for some reason it's not bringing up.

05:24.400 --> 05:30.190
So I'm going to, uh, trust and okay, install it.

05:30.190 --> 05:35.320
So all I have to do is just open the SQLite database explorer.

05:35.350 --> 05:36.010
Okay, cool.

05:36.040 --> 05:37.510
Let's let's try to do that.

05:37.840 --> 05:43.420
Uh, over here, control shift p SQLite open database.

05:43.420 --> 05:44.500
And yeah, there we go.

05:44.530 --> 05:47.230
It just brings up Testdb file.

05:47.650 --> 05:48.250
Um.

05:50.950 --> 05:52.510
Which is done.

05:52.540 --> 05:54.130
And where does it open really.

05:54.160 --> 05:54.970
Look at that.

05:54.970 --> 05:55.510
Here.

05:55.540 --> 05:56.260
Here we go.

05:56.260 --> 05:58.360
So we have got this chat method history.

05:58.360 --> 06:00.730
And we have got the message store over here.

06:00.730 --> 06:03.370
If I try to run this one look at that.

06:03.370 --> 06:09.310
So there is this data being stored over here, for as a human is going to ask the data, what is the

06:09.310 --> 06:11.680
distance between the earth and sun?

06:11.680 --> 06:16.660
And there is going to be a response coming up from the eye saying this is the content.

06:16.660 --> 06:19.750
And then again the human is asking the same session ID look at that.

06:19.750 --> 06:21.490
The session ID is pretty much exactly the same.

06:21.490 --> 06:27.580
Karthik and we're going to have the human message asking how about from moon?

06:27.580 --> 06:30.700
And then this answer is going to come from the AI.

06:31.450 --> 06:32.620
This is amazing.

06:32.620 --> 06:36.640
So we can see the data is being stored in the SQLite database for us.

06:36.910 --> 06:43.150
And we will also see the exact same thing from our Langschmidt as well.

06:43.150 --> 06:49.540
So if I go to the Lange Smith over here and look at that, if I try to load the latest message, you'll

06:49.540 --> 06:53.110
notice that we're going to have the message coming up over here.

06:53.110 --> 06:54.700
So runnable with message history.

06:55.120 --> 06:56.380
Uh, look at that.

06:56.380 --> 06:59.560
So we have got all the informations over here.

06:59.560 --> 07:06.520
So uh over here it's going to insert into the history and then it's going to load the history, and

07:06.520 --> 07:11.050
then it is going to load the history information from this particular message.

07:11.470 --> 07:14.110
So the same thing is going to happen for every single operation.

07:14.140 --> 07:18.310
So how about from moon and the distance between the Earth and sun.

07:18.670 --> 07:21.580
It is going to insert into the history.

07:22.150 --> 07:25.210
And look at that over here.

07:25.210 --> 07:27.310
So it is inserting so that it takes some time.

07:27.310 --> 07:29.320
But for loading it is taking no time.

07:29.320 --> 07:30.580
And it's just bringing up the message.

07:30.580 --> 07:32.920
And then it's bringing up information over there.

07:32.920 --> 07:38.830
So we can essentially see all the, uh, trace information from behind the scene as well, like how

07:38.830 --> 07:39.760
things are happening.

07:39.760 --> 07:47.800
So this is how we can see that we can make use of the chat message history to store the information

07:47.950 --> 07:58.720
in the external database or even in the memory using the chat message history or using the SQL chat

07:58.750 --> 07:59.560
message history.

07:59.560 --> 08:06.160
With that, we can see that we can use the same functionality while we are building our chatbot in our

08:06.160 --> 08:07.150
next section.


========================================================================================
