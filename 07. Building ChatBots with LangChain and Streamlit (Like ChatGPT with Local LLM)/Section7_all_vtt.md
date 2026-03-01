WEBVTT

00:00.050 --> 00:02.090
Welcome to the next section of our course.

00:02.090 --> 00:08.180
And in this section we are going to talk about how we can start building chatbots with our local large

00:08.180 --> 00:10.940
language models and olama.

00:10.970 --> 00:15.500
So we are going to see how we can achieve all these operations in this particular section.

00:15.500 --> 00:20.960
So you can see that basically we are going to be using the same knowledge that we have acquired in our

00:20.960 --> 00:21.950
last section.

00:21.950 --> 00:28.700
If you remember, we were doing this historical chat message history, which is going to store our history

00:28.700 --> 00:30.200
message of the chat information.

00:30.200 --> 00:36.350
And it's going to be passing it all the way to the large language model from the power of this long

00:36.350 --> 00:37.010
chain.

00:37.010 --> 00:42.200
So we are going to use the same knowledge that we have acquired in our last section.

00:42.200 --> 00:49.250
And now we are going to see how we can use this, uh, concept and implement a chatbot.

00:49.490 --> 00:56.060
But this time we are going to be implementing the chatbot using a tool or a library called a Streamlet,

00:56.060 --> 00:57.860
which is going to make that happen.

00:57.860 --> 01:01.460
And again, this particular application is going to look something like this.

01:01.460 --> 01:06.480
As you can see over here at the end of this particular section, you will have this particular source

01:06.480 --> 01:07.470
code up and running.

01:07.470 --> 01:13.440
So you will see that I have created a simple like super simple application over here where you have

01:13.440 --> 01:14.550
got your name here.

01:14.550 --> 01:19.560
This is mainly for the session ID, if you remember that we were passing in our last section of the

01:19.560 --> 01:21.510
course, the same idea is this.

01:21.510 --> 01:23.250
So this is the session name.

01:23.400 --> 01:25.860
And then we have got some options over here.

01:25.860 --> 01:32.250
So based on the expert level you are going to be getting the answer for your for your query that you're

01:32.250 --> 01:33.210
going to be asking.

01:33.210 --> 01:40.500
And over here you can see that we have got a small chat message or chat input from the Streamlit app

01:40.500 --> 01:43.140
where I'm going to be asking the question over here.

01:43.140 --> 01:54.030
So let's say I'm going to ask how to write a simple protein genetic or whatever.

01:54.030 --> 01:56.250
So I'm just going to ask this question.

01:56.250 --> 01:59.880
Uh, so we'll see how the bot is going to answer.

01:59.880 --> 02:06.400
You see that immediately this particular, uh, chatbot is going to answer the question pretty much

02:06.400 --> 02:13.270
like how it is doing with the actual ChatGPT that you can ask from the online, and you will notice

02:13.270 --> 02:20.410
that it is also having a logo for the user, like a user logo, and there is a bot logo for the response

02:20.410 --> 02:22.090
you're going to be getting in over here.

02:22.120 --> 02:29.560
And also notice that how it is neatly formatting all the, uh, all the genetic sequence for our question

02:29.560 --> 02:32.890
that we are asking, and it is also showing the details over there.

02:32.920 --> 02:38.920
The similar thing is going to happen if you want to ask for writing a simple, uh, selenium with,

02:38.920 --> 02:42.940
uh, Java code for google.com.

02:42.970 --> 02:47.200
And if I do that, you'll notice that it is going to write all the details.

02:47.200 --> 02:54.010
And again it is going to, uh, write the dependencies and it's going to write the Java code for the

02:54.010 --> 02:57.640
selenium code that we are going to be that we can use.

02:57.670 --> 03:02.470
And you will notice that all these are happening in our local large language model.

03:02.470 --> 03:07.830
And it is using the Lang chain and the historical information for us.

03:07.830 --> 03:08.940
And guess what?

03:09.420 --> 03:17.220
If I'm going to ask a follow up question for this particular question, uh, how to tweak, uh, the

03:17.220 --> 03:23.340
code, uh, with uh, playwright, uh, as well.

03:23.340 --> 03:28.860
So if I ask this question and you notice that it knows that there is a context that I need to write

03:28.860 --> 03:34.230
the code with the, uh, for the google.com website, and immediately it is now trying to set up the

03:34.230 --> 03:38.850
project for the playwright, and it's also writing the code for me for the google.com.

03:38.850 --> 03:44.010
And the reason why this is happening is because now this particular chatbot has got the context of the

03:44.010 --> 03:46.020
earlier question that we have asked.

03:46.050 --> 03:51.750
That's the reason why it could able to answer the question for the same kind of website, and then it

03:51.750 --> 03:56.160
is just replacing it with a different tool this time and the same language as you can see.

03:56.160 --> 04:01.650
So these are all happening because of all the chat message history that we have got with the runnable

04:01.650 --> 04:03.210
message history that we have got.

04:03.210 --> 04:06.660
So we're going to be using the same kind of technology in here as well.

04:06.660 --> 04:10.350
And we'll see how we can able to create this chatbot in this particular section.

========================================================================================

WEBVTT

00:00.050 --> 00:04.580
So now we are going to build this particular chatbot, as you are seeing over here in this particular

00:04.580 --> 00:05.000
section.

00:05.030 --> 00:10.850
So in order to achieve this operation, we first of all need to have a basic understanding of the Streamlit

00:10.880 --> 00:11.210
app.

00:11.210 --> 00:18.620
So if I just going to go to the Streamlit uh, over here, streamlit.io.

00:18.650 --> 00:24.530
As you can see, this is the this is the library that we are going to be using for building our application

00:24.530 --> 00:25.610
that I just showed you.

00:25.640 --> 00:27.080
You see that it's very, very straightforward.

00:27.080 --> 00:33.770
So if you just say like a straight line and the application name, then it's just going to open a browser

00:33.770 --> 00:36.410
and then it is going to show this particular thing over there.

00:36.410 --> 00:40.340
And you can also create the graphs and sliders and whatnot.

00:40.520 --> 00:41.450
With this particular application.

00:41.450 --> 00:43.370
It is so easy and straightforward.

00:43.370 --> 00:49.790
So the the real purpose of this particular Streamlit Streamlit is that they wanted to streamline the

00:49.790 --> 00:50.960
way that you write the code.

00:50.960 --> 00:56.390
At the same time, they also wanted to make things happen in a much faster fashion so that you don't

00:56.390 --> 01:01.100
just have to worry about like how the web browser application really has to be written, but you only

01:01.100 --> 01:05.310
focus on writing the logic for your large language model based application.

01:05.310 --> 01:08.160
So UI is not something that you have to worry about.

01:08.160 --> 01:12.300
It's all about how you tweak your large language model to make that happen.

01:12.300 --> 01:15.480
That is what this particular, uh, streamlet does.

01:15.540 --> 01:18.630
And again, this course has something to do with the streamlet itself.

01:18.930 --> 01:22.830
So I'm not going to be covering the basics of streamlet like how you need to install, how you need

01:22.830 --> 01:24.240
to get started on all those things.

01:24.240 --> 01:29.550
But since we have to do the installation and since we have to build an UI, something like this, I

01:29.550 --> 01:34.290
will be covering the details in this particular area that you need to be understanding.

01:34.320 --> 01:34.800
Right.

01:34.800 --> 01:36.210
So let's start building it.

01:36.210 --> 01:40.860
I mean, this is the final version of our Streamlet app because you have got the, uh, the sidebar,

01:40.890 --> 01:42.240
as you can see over here.

01:42.270 --> 01:48.360
And you can also like that, minimize it and maximize maximize it pretty much like the ChatGPT.

01:48.870 --> 01:52.830
And also you will notice that there is this icons coming up over here.

01:52.830 --> 01:54.750
So we need to do quite a lot of things over there.

01:54.750 --> 01:56.850
So we'll go step by step in this particular section.

01:56.850 --> 02:00.150
And I will show you how you can achieve all these operations.

02:00.270 --> 02:02.910
All right so let's start writing the code over here.

02:02.910 --> 02:05.130
So let me get back to my Visual Studio.

02:05.160 --> 02:10.820
And over here I'm going to are just to minimize all these discussions that we were doing in our last

02:10.820 --> 02:11.300
section.

02:11.330 --> 02:14.240
Remember this chat with history message?

02:14.240 --> 02:17.420
This is something very important for this particular section as well.

02:17.420 --> 02:21.140
So I'm going to be copying most of the code from here.

02:21.290 --> 02:24.410
While we're going to be building the, uh, the chat bot.

02:24.410 --> 02:30.500
So these details that you are seeing over here are going to be quite relevant for our discussion as

02:30.500 --> 02:30.740
well.

02:30.740 --> 02:35.150
So we are not going to rule out any of these, uh, that we are seeing over here.

02:35.180 --> 02:40.430
We are going to use the SQL chat message history this time instead of using the, uh, chat message

02:40.430 --> 02:41.960
history, as you can see over here.

02:41.960 --> 02:44.870
So this code is something very important for our discussion.

02:44.870 --> 02:49.280
So what I'm going to do probably I'm going to copy this code right now.

02:49.280 --> 02:55.520
And I'm going to create a new oh sorry not here but I'm going to create a new folder here.

02:55.520 --> 03:02.060
And I'm going to say section for uh building chat bots.

03:02.390 --> 03:06.110
Uh, and I'm going to create a new file.

03:06.110 --> 03:09.650
But this time I'm going to say chatbot dot p y.

03:09.680 --> 03:15.780
So basically we're not going to use the notebook this time, but we are going to be using directly the

03:15.900 --> 03:17.820
Python code itself over here.

03:17.850 --> 03:18.360
Right.

03:18.360 --> 03:21.000
So I'm just going to save this entire thing.

03:21.000 --> 03:26.940
And we also need to have what is called a Streamlit library within our the virtual environment.

03:26.940 --> 03:28.590
So let me go ahead and install that.

03:28.590 --> 03:31.320
So I'm going to open the terminal over here.

03:31.590 --> 03:36.480
Um remember this is something that we did a long time before starting off the course.

03:36.600 --> 03:39.480
So this is the same window which is coming up over here.

03:39.720 --> 03:47.940
Um, and I'm going to say a pip install Streamlit, which is important for our, uh, building of the

03:47.940 --> 03:48.720
application.

03:48.750 --> 03:49.320
There we go.

03:49.320 --> 03:51.060
So I have installed that over here.

03:51.060 --> 03:52.380
So make sure that you install it.

03:52.380 --> 03:56.160
If not, the things that we are going to be building right now is not going to work for you.

03:56.220 --> 03:56.880
All right.

03:56.880 --> 04:03.630
So now that I have installed it, we can just close this guy for now just to make some room and we can

04:03.630 --> 04:06.120
start building the, uh, Streamlit app.

04:06.120 --> 04:11.910
So to do that I'm going to say import Streamlit as st.

04:11.940 --> 04:16.430
So this is the Streamlit importing that we have to do right?

04:16.430 --> 04:21.500
And once we have done that, we are then going to start building the code.

04:21.500 --> 04:23.210
So let's start with this.

04:23.240 --> 04:24.050
The simple thing.

04:24.080 --> 04:24.650
Probably.

04:24.650 --> 04:30.560
So in order for us to start building the Streamlit app, the first thing which I wanted to have a look

04:30.590 --> 04:35.480
at that I think we are missing some libraries here like runnable with message history, chat, prompt,

04:35.510 --> 04:36.320
template and things.

04:36.320 --> 04:39.620
So probably I need to go and copy some of these.

04:39.650 --> 04:41.540
Uh, from here.

04:42.890 --> 04:46.700
We don't need this, uh, base chat, okay?

04:46.730 --> 04:48.230
These things are not required.

04:48.560 --> 04:49.910
And hopefully.

04:49.910 --> 04:51.230
Oh, yeah, I also need the LM.

04:51.230 --> 04:51.770
You remember?

04:51.770 --> 04:56.270
Because LM is something which is needed as well for our execution.

04:56.300 --> 04:58.490
And we also need this dot env.

04:58.730 --> 05:00.200
How do I forget all these things?

05:00.200 --> 05:01.340
So let me go.

05:01.340 --> 05:02.240
Copy that.

05:02.390 --> 05:05.810
Uh, and let me go paste it over here.

05:06.110 --> 05:16.040
Uh, and we also need to load the dot env file, uh, which is going to be uh and we also need this

05:16.040 --> 05:19.260
chat olama which is required.

05:22.590 --> 05:27.420
And we are going to be invoking this guy.

05:30.510 --> 05:31.440
Awesome.

05:32.160 --> 05:35.220
So hopefully we have got all the libraries that is required.

05:35.250 --> 05:35.550
Yeah.

05:35.580 --> 05:39.420
There is no error whatsoever like missing libraries, something like that.

05:39.570 --> 05:40.140
Which is cool.

05:40.140 --> 05:43.590
So yeah that's the library that we need.

05:43.590 --> 05:54.360
So the first thing is what we did is load the env file and then initialize lm.

05:55.260 --> 05:58.230
And we have the history and all those things.

05:58.230 --> 05:59.610
So I'm not going to worry about it.

05:59.610 --> 06:02.400
This is the exactly the same thing that we discussed in our last section.

06:02.400 --> 06:06.420
So please go and watch the last section if you're directly jumping to this particular section, because

06:06.420 --> 06:13.620
it won't make any sense if you have not really listened to the discussion that we had in our last section.

06:14.010 --> 06:15.000
Pretty cool.

06:15.150 --> 06:20.280
Uh, and now let's see what is the first thing that we are going to be building in this particular window

06:20.280 --> 06:21.090
over here?

06:21.450 --> 06:28.400
So the first thing is, for instance, I'm going to be I'm going to be probably writing something like

06:28.430 --> 06:32.060
a title like Welcome to Chatbot or whatever.

06:32.180 --> 06:36.080
And then I'm going to say enter your query for that matter.

06:36.110 --> 06:36.470
Right.

06:36.470 --> 06:38.780
So if I wanted to do that, what should I do.

06:38.780 --> 06:41.210
So basically I'm going to add here some code.

06:41.210 --> 06:46.340
So I'm going to say st dot and I'm going to write a title here.

06:46.340 --> 06:53.240
And I'm going to say uh how can I help help you today.

06:54.260 --> 07:02.090
So the title that I'm going to be asking, and then I'm going to write another thing over here, like

07:02.330 --> 07:08.360
enter your query below or whatever, enter your query below, something like this.

07:08.360 --> 07:11.060
And I'm going to just save this code, just two lines of code.

07:11.060 --> 07:18.920
And if I open my terminal and in order for me to run this Streamlit app, we actually need to use this

07:18.920 --> 07:23.480
command called as Streamlit and then run.

07:24.410 --> 07:28.000
And we need to specify what exactly they're going to that we're going to be running.

07:28.000 --> 07:33.130
So before I do that, let me navigate to the directory which is the building chatbot directory.

07:33.130 --> 07:39.130
And over here I'm going to say Streamlit run of the chatbot dot pi.

07:39.160 --> 07:42.790
So if I do that you'll notice that it is going to open an app.

07:42.790 --> 07:49.330
And it is going to show me this particular window, see how can I help you today and enter your query

07:49.330 --> 07:49.810
below.

07:49.840 --> 07:54.100
So this is coming because we have added the details of the chatbots over here.

07:54.100 --> 07:56.440
So that is that is what is coming over here.

07:56.440 --> 07:58.480
So this is the Streamlit thing that we have just added.

07:58.480 --> 08:06.760
And if I wanted to add probably let's say a chat input like what you just saw in my other window.

08:06.940 --> 08:09.490
Uh, so I can actually do that as well.

08:09.520 --> 08:10.390
So let me guess what.

08:10.390 --> 08:11.830
These things are open for a long time.

08:11.830 --> 08:15.670
Let me go and close these, these windows that we don't even need.

08:16.060 --> 08:18.940
Um yeah I think this one is required.

08:18.940 --> 08:24.610
This is Lang Smith and the session is somehow expired.

08:24.640 --> 08:25.000
Yeah.

08:25.030 --> 08:25.240
Cool.

08:25.240 --> 08:27.940
So this can be opened there, and we don't even need this window.

08:27.940 --> 08:30.980
So let just, just these two window can be in here.

08:31.160 --> 08:32.090
Okay.

08:32.300 --> 08:35.420
So if I want to add a chat over here.

08:35.420 --> 08:36.470
So how do I actually do.

08:36.470 --> 08:44.240
It is basically I'm just going to say um, maybe in the end over here because that's going to be the

08:44.240 --> 08:45.230
last thing.

08:45.440 --> 08:53.090
So I'm just going to say prompt um, is equal to uh s t dot chat input.

08:53.090 --> 08:58.130
And I'm going to say enter your query, I'm going to save this.

08:58.250 --> 09:08.090
And if I try to probably stop it and rerun this over here, looks like it's not working.

09:08.090 --> 09:10.910
Maybe what's really happening there.

09:11.780 --> 09:15.440
Um, yeah I think I know what is the problem.

09:15.440 --> 09:18.830
So let me go stop this print, which is not even required.

09:19.280 --> 09:27.830
Uh, and, and, and we also don't need to have this invocation, which is happening, uh, behind the

09:27.830 --> 09:29.390
scene for me, like, every single time.

09:29.390 --> 09:32.990
Because that's the reason why this code is actually running, uh, for me there.

09:33.300 --> 09:34.920
Uh, which is cool.

09:34.920 --> 09:39.120
So I'm going to save this and let me run this again.

09:39.150 --> 09:39.780
Look at that.

09:39.780 --> 09:44.970
So now you can see that immediately you are getting this, uh, chat, uh, message there.

09:45.000 --> 09:47.100
I mean, the chat input there.

09:47.100 --> 09:51.750
The reason why is because last time our code was actually working behind the scene, and it was giving

09:51.750 --> 09:57.150
us the output result, like the distance between the moon and sun and the earth and sun like that.

09:57.180 --> 09:59.040
Like that is not something that we are looking for.

09:59.070 --> 09:59.700
Really?

09:59.700 --> 10:02.790
Uh, that was from our previous section that we just copy pasted it.

10:02.790 --> 10:04.680
So those invocation is not required.

10:04.680 --> 10:08.580
So now you see that immediately we get the prompt over here.

10:08.580 --> 10:16.890
And from the prompt is what we are going to be asking the query to our uh, large language model, uh,

10:16.890 --> 10:18.240
as a invocation.

10:18.270 --> 10:18.630
Right.

10:18.630 --> 10:22.290
So, so we don't even require the two lines of code.

10:22.320 --> 10:22.920
Look at that.

10:22.920 --> 10:29.640
Now we have got a simple, uh, chatbot UI, like very super simple chatbot UI, uh, which we can start

10:29.640 --> 10:31.800
building up from our next lecture.

10:31.800 --> 10:37.380
But at least you have got the groundwork ready to start building a larger things.


========================================================================================

WEBVTT

00:00.020 --> 00:05.930
So now we are going to start doing some more operation with our chatbot that we have got over here.

00:05.930 --> 00:10.880
So the first thing is I'm going to be performing a series of operation in here.

00:10.910 --> 00:11.120
Right.

00:11.270 --> 00:17.480
So we have to say like uh, hi, uh, chatbot, uh, how are you doing?

00:17.480 --> 00:21.800
So for instance, if a user is going to ask this question and if you're going to send a message over

00:21.800 --> 00:24.890
here, then you need to see a user message.

00:24.890 --> 00:29.570
And then you also need to get the response from the AI chatbot.

00:29.810 --> 00:32.270
And you need to see that particular message as well.

00:32.270 --> 00:38.750
And all these information needs to be stored in a, in a session, like a historical session, so that

00:38.750 --> 00:44.810
you can keep chatting with each other like you and chatbot can, uh, chat with each other so that you

00:44.810 --> 00:46.340
get the response that you're looking for.

00:46.370 --> 00:46.760
Right.

00:46.760 --> 00:53.000
So we already have those kind of operation in our earlier section of the course while we were doing

00:53.000 --> 00:59.750
the, uh, the runnable, uh, with message history where we store all the historical information.

00:59.760 --> 01:05.460
But but again, in order for us to make use of that with a chatbot, it is going to be a bit tricky.

01:05.460 --> 01:08.310
So we have to do quite a lot of code change over here as well.

01:08.310 --> 01:13.170
So let's see all of these one by one in this particular uh section.

01:13.170 --> 01:17.910
So the first lecture, the first thing that we are going to be doing in this particular lecture is I'm

01:17.910 --> 01:26.970
going to say, okay, if there is a prompt message coming up right, then just give a response now because

01:26.970 --> 01:28.770
you got a prompt message.

01:28.770 --> 01:32.610
Let's first get the historical message and the chat information.

01:32.610 --> 01:38.820
So I'm going to get this history um dot invoke I'm going to call this particular method.

01:39.480 --> 01:43.050
And again this is the same thing that we did in our last section as well.

01:43.050 --> 01:49.860
So I'm going to probably copy this uh c dot c dot invoke over here I'm going to pass the prompt.

01:50.250 --> 01:52.230
Uh like what is the distance between the sun and moon.

01:52.230 --> 01:57.900
But we don't want to pass the hard coded value because we're going to get the prompt message from the

01:57.900 --> 01:59.470
chat input that we are passing in.

01:59.470 --> 02:02.470
So I'm going to say prompt over here.

02:02.890 --> 02:05.740
And then the config is going to remain exactly the same.

02:05.740 --> 02:09.280
So config is equal to configurable of session id as session id.

02:09.280 --> 02:12.070
So at the moment I'm hardcoding the session id as well.

02:12.070 --> 02:17.200
But we are going to get the session ID eventually from the user during the runtime.

02:17.320 --> 02:17.710
Right.

02:17.740 --> 02:19.990
So that is the first thing that we have to do.

02:20.170 --> 02:28.210
And now I need to store this this information in the, in the street, which is the Streamlit as well,

02:28.630 --> 02:30.820
because that is where the session is maintained.

02:30.820 --> 02:32.110
So that you can see that in the UI.

02:32.140 --> 02:33.340
So how do I do that?

02:33.340 --> 02:42.220
There is a session state in the street or Streamlit where you can store all the session state in one

02:42.220 --> 02:46.750
of the array, and I'm just going to call that as the chat history.

02:46.780 --> 02:47.410
Right.

02:47.410 --> 02:54.220
And this chat history is one of the history that I am maintaining to store all my chat information.

02:54.220 --> 03:01.240
So because I have created this chat history over here, I also need to initialize this particular chat

03:01.270 --> 03:02.320
history somewhere.

03:02.320 --> 03:04.540
So how do I actually do that?

03:04.570 --> 03:18.880
I can probably just say st dot session state dot chat underscore history is equal to an empty array.

03:18.910 --> 03:19.210
Right.

03:19.240 --> 03:25.000
So this is the initialization that I'm going to be doing so that I can now start using this particular

03:25.000 --> 03:31.000
array to append with the value that I'm looking for.

03:31.000 --> 03:38.470
So basically what I'm going to be appending this time is I'm going to append the um two keys in here.

03:38.470 --> 03:46.120
The first one is the role where I'm going to say the role is going to be user, and I'm going to pass

03:46.120 --> 03:52.780
the content, which is going to be the prompt message, which I'm going to be passing in as a user.

03:52.780 --> 03:59.600
So essentially this is the first session history that you are going to be appending because you as a

03:59.600 --> 04:04.910
user are going to ask a question in here like, hi, how are you doing?

04:04.910 --> 04:07.640
So now this is a user prompt, right?

04:07.670 --> 04:11.090
This is a user question that you need to add in the history, so that the first thing that is going

04:11.120 --> 04:13.940
to appear on this particular UI is going to be the user.

04:13.940 --> 04:15.800
So the role in here is user.

04:15.800 --> 04:19.610
The content is going to be the prompt that you as a user is going to ask.

04:19.760 --> 04:29.510
And then we need to have another start session state dot uh probably chat history.

04:29.810 --> 04:40.910
Uh dot append over here I'm going to be appending the uh, probably the role as assistant or AI or whatever

04:40.940 --> 04:41.720
that you want to use.

04:41.720 --> 04:50.180
So I'm going to say the role as assistant, because this is going to come all the way from the, uh,

04:50.210 --> 04:51.410
from the AI.

04:51.440 --> 04:51.980
Right.

04:52.010 --> 04:54.920
So that's going to be another array.

04:55.190 --> 04:58.200
And we also need to pass the content there.

04:58.200 --> 05:02.850
So what is the content really which is going to be this particular response.

05:02.880 --> 05:03.120
Right.

05:03.150 --> 05:05.580
This is the content that I need to print over here.

05:05.580 --> 05:09.120
So I'm going to say content oops.

05:12.750 --> 05:21.420
Which is going to be the response that I'm going to be getting out from the large language model that

05:21.420 --> 05:22.770
we are getting in from here.

05:22.800 --> 05:23.220
Right.

05:23.250 --> 05:25.950
So that is what I'm going to be printing over here.

05:25.950 --> 05:33.960
So now that we have did some code change, uh, save this code over here and let's try to run this and

05:33.960 --> 05:35.130
see what's going to happen.

05:35.280 --> 05:38.820
And looks like we have did something wrong.

05:38.850 --> 05:41.370
Oh, we did not close the array.

05:41.460 --> 05:42.960
Sorry about that.

05:43.410 --> 05:45.630
Um, let me run it again.

05:45.990 --> 05:49.020
And you should see the same usual UI.

05:49.020 --> 05:53.040
I'm going to say hi, how are you doing?

05:53.040 --> 05:58.510
And if I hit enter, you will notice that we are really not seeing anything at the moment.

05:58.510 --> 06:05.530
The reason why is because we have to show this, this message, which is going to be coming up from

06:05.530 --> 06:13.660
our, uh, from our prompt as well as our response in the Streamlit app.

06:13.660 --> 06:14.320
Right.

06:14.620 --> 06:20.290
We have only stored these messages in the Streamlit session history, but we have not really printed

06:20.290 --> 06:22.870
that value in the Streamlit in the UI.

06:22.900 --> 06:24.820
Like how we do that, like Street Dot, right.

06:24.820 --> 06:31.300
Probably where you can just say, uh, probably prompt, uh, which is the user is going to ask and

06:31.300 --> 06:35.950
then once this is uh, getting the response, then you can just say Dot, right.

06:36.130 --> 06:41.290
And you're going to say maybe response something like that, but it's going to be very ugly if you do

06:41.290 --> 06:43.690
it this way, I'll tell you how it looks like.

06:43.690 --> 06:46.060
So just try to run this.

06:46.390 --> 06:48.430
Um, and I'm going to say hi.

06:48.460 --> 06:52.630
How are you doing?

06:53.740 --> 06:54.290
Uh, Um.

06:54.350 --> 06:55.160
Look at that.

06:55.190 --> 06:55.910
See?

06:55.940 --> 06:56.480
Hi.

06:56.510 --> 06:57.110
How are you doing?

06:57.140 --> 06:58.610
And then there is a response coming.

06:58.760 --> 06:59.150
Hello.

06:59.180 --> 07:02.120
I am an AI assistant created by Alibaba Cloud.

07:02.120 --> 07:05.090
So I don't have personal feelings or experience, but I'm here to.

07:05.090 --> 07:05.630
Really.

07:05.690 --> 07:08.330
I'm here ready to help you with this information.

07:08.330 --> 07:09.290
What are you looking for?

07:09.560 --> 07:10.340
Pretty cool.

07:10.340 --> 07:11.840
So now that we have written something.

07:11.840 --> 07:13.970
But it's not very intuitive, right?

07:14.000 --> 07:14.390
Like this.

07:14.390 --> 07:16.070
This, this is not like a chat message.

07:16.070 --> 07:19.040
Probably because it looks like a text summary.

07:20.030 --> 07:26.660
So there is no difference between the person asking like the user is asking the question and the AI

07:26.690 --> 07:27.590
agent is responding.

07:27.590 --> 07:29.900
So it's not really differentiating between both of them.

07:29.900 --> 07:36.320
So in order to beautify that in this, what is called as the Streamlit app, we have got this what is

07:36.320 --> 07:39.950
called as uh, the

07:41.870 --> 07:47.060
markdowns where you can actually create a markdown, something like this.

07:47.060 --> 07:52.190
So I'm going to say start chat message that we have got.

07:52.190 --> 08:01.670
And if it is a user message, then do a markdown for the prompt.

08:01.700 --> 08:05.330
Same thing that I'm trying to print over here, and then I need to do the same thing for the response

08:05.330 --> 08:05.990
as well.

08:06.380 --> 08:07.310
So I'm going to say.

08:09.380 --> 08:14.660
With st dot chat message of maybe assistant.

08:14.990 --> 08:18.770
See we have got the option over here in the Streamlit.

08:18.770 --> 08:24.890
And I'm going to say C dot markdown of the response that you are going to be printing to me.

08:25.880 --> 08:34.790
And now if I try to run this code I'm going to say hi, how are you doing?

08:35.330 --> 08:36.200
And look at that.

08:36.200 --> 08:40.070
This time we're going to have our intuitive UI a bit right.

08:40.100 --> 08:41.510
Like there is this user query.

08:41.510 --> 08:43.460
And we also got a response.

08:43.460 --> 08:45.590
So there is this bit of a shade in here.

08:45.590 --> 08:51.590
And also there is this logo or maybe icon for the user and for the assistant which is amazing.

08:51.590 --> 08:57.480
So we have built maybe an working bot question.

08:57.480 --> 09:07.980
So I'm going to ask like how is the um, weather today in California?

09:12.060 --> 09:12.900
Something like that.

09:12.990 --> 09:14.430
Um, look at that.

09:14.640 --> 09:21.570
Ah, it just overridden the existing question and then it is writing it over there as the answer.

09:21.570 --> 09:25.980
But there is no like it's not really like a chat message that it is doing over here.

09:25.980 --> 09:27.390
So we have to do that as well.

09:27.390 --> 09:30.060
So these are the things that we have to improve in our code.

09:30.060 --> 09:38.220
And also if I want to start all new, uh, query instead of just, uh, using the same session because

09:38.220 --> 09:42.570
you know that the session is currently being embedded, the session ID is not something that you can

09:42.570 --> 09:45.090
enter the session ID somewhere from this UI.

09:45.120 --> 09:46.590
So we need to do that as well.

09:46.590 --> 09:50.160
So those are the improvements that we have to do on this particular chatbot.

09:50.340 --> 09:52.290
So we'll be doing that in our next lecture.

========================================================================================

WEBVTT

00:00.050 --> 00:06.290
In our last lecture, we saw how we could able to build a super simple chat experience with a user logo.

00:06.290 --> 00:09.440
And and there is an icon for the assistant.

00:09.440 --> 00:15.050
And also we saw there was a glitch where if you ask an question and then if you ask a follow up question

00:15.050 --> 00:19.490
or maybe a second question, it just overrides the existing chat messages.

00:19.670 --> 00:25.430
And the reason why this is happening is because we have not really built that that experience within

00:25.430 --> 00:32.390
our code yet, and also we should not be clearing up the chat history every single time.

00:32.390 --> 00:41.930
If there is already any chat history message in the session state array that we have got right.

00:41.930 --> 00:44.990
So we have to somehow write that particular logic over here.

00:44.990 --> 00:46.640
So I'm going to cut this particular piece of code.

00:46.640 --> 00:48.350
I'm going to move this outside.

00:48.380 --> 00:55.430
I mean from outside of this prompt over here and over here, I'm going to say if there is already an

00:55.430 --> 01:00.910
existing chat history Then don't clean it up.

01:00.910 --> 01:03.820
So only if there is a only.

01:03.820 --> 01:10.150
If there is no message in the st dot uh session state, then you can clean it up.

01:10.150 --> 01:12.610
If there is already a message, don't clean it up.

01:12.610 --> 01:14.710
That is what I'm going to do over here.

01:14.710 --> 01:21.580
And also uh, and also I'm going to write a for loop over here because now you're not going to clean

01:21.580 --> 01:23.110
it up, but you need to print.

01:23.140 --> 01:28.840
Or maybe you need to keep the existing message there, which is uh, which is going to be coming below

01:28.840 --> 01:32.200
the existing message that you have got.

01:32.200 --> 01:37.390
So you have to print that below the next message that you have got.

01:37.390 --> 01:45.070
So I'm going to say for message in St dot session state dot chat history.

01:45.070 --> 01:53.200
So we have got the message over there and I'm saying with St dot chat message.

01:53.830 --> 01:59.840
Right I'm gonna get the message and I'm going to get the role.

02:01.040 --> 02:05.390
And I'm also going to get the markdown over here.

02:05.390 --> 02:11.780
So this is where I'm going to be printing the content that I'm going to be getting out from that particular

02:11.780 --> 02:12.170
message.

02:12.170 --> 02:16.130
So this is, this is this is very, very important because if you don't really have that particular,

02:16.220 --> 02:23.390
this particular stuff, then your new message will not be printed below the earlier question that you

02:23.390 --> 02:24.350
have asked.

02:25.160 --> 02:26.120
So I hope that makes sense.

02:26.120 --> 02:30.530
So this is the first foremost thing that we have to do over here for our code to work.

02:30.530 --> 02:40.280
So now let's say if I'm going to run the code and I'm going to ask, hi, how are you doing?

02:40.700 --> 02:42.230
You'll see that we get a response.

02:42.230 --> 02:48.140
And I'm going to ask, how's uh, how's weather in NZ?

02:49.640 --> 02:55.810
And you will notice that this weather information question that we have asked is going to be Answered

02:55.840 --> 02:58.480
below the first question that we have got.

02:58.480 --> 03:02.770
So it's not going to override the existing question, but it is going to print that down below over

03:02.770 --> 03:03.160
here.

03:03.190 --> 03:05.590
So this is how things are going to happen over here.

03:05.590 --> 03:10.330
So this is this particular piece of code is very very important to make that happen.

03:10.540 --> 03:11.230
Right.

03:11.260 --> 03:13.630
And now we can also ask a follow up question.

03:13.630 --> 03:16.570
Uh, how about uh, India.

03:17.560 --> 03:23.230
So now I'm asking pretty much like a follow up question for the first question, the earlier question

03:23.230 --> 03:24.070
that I have asked.

03:24.070 --> 03:25.120
So let's see.

03:25.450 --> 03:26.290
Uh, there we go.

03:26.290 --> 03:28.990
So it says India is a diverse, vast country, blah, blah, blah.

03:29.020 --> 03:34.240
So it's just getting, uh, giving us the details of the India over there.

03:34.240 --> 03:41.950
But now the first, the most important thing that we need to do is the session history that we need

03:41.950 --> 03:46.780
to maintain in our chat, because it's not really happening at the moment.

03:46.780 --> 03:48.850
So how do we actually do that?

03:48.850 --> 03:55.500
Well, guess what, I am going to do a few more coding over here.

03:55.590 --> 04:02.760
The first important coding that I wanted to do is the the the session ID that I'm actually passing in.

04:02.790 --> 04:03.210
Right.

04:03.240 --> 04:05.670
So let me cut this session ID from here.

04:05.670 --> 04:08.250
I'm going to put it all the way on the top.

04:08.460 --> 04:09.510
Just this one.

04:09.930 --> 04:14.670
And over here I'm going to get the session ID from the user.

04:14.670 --> 04:23.790
So I'm going to say session ID which is going to be coming from St dot text input.

04:23.790 --> 04:28.980
And I'm going to get uh the session ID from there.

04:29.010 --> 04:33.270
So but at the moment I'm just going to print the session ID, which is the default session ID is going

04:33.300 --> 04:34.950
to be Karthik for now.

04:34.950 --> 04:37.410
But later on we are going to improve.

04:37.440 --> 04:43.440
I mean, you can override the Karthik from the UI so that it can be printed as well.

04:43.440 --> 04:45.870
That session ID can be printed as well, right?

04:45.870 --> 04:51.510
So if I'm going to stop this and if I run this, you will notice that we will have, we will have like

04:51.540 --> 04:53.470
something like a Karthik over there.

04:53.470 --> 04:57.880
Maybe instead of that, because it looks like this UI has got like Karthik over here and doesn't really

04:57.880 --> 04:59.290
give me any information there.

04:59.290 --> 05:04.030
So I can just uh, add this probably as I enter your name.

05:04.030 --> 05:04.660
Something like that.

05:04.690 --> 05:14.740
Enter your name, uh, like this and session ID and now if I try to run this, it may be, it may be

05:15.040 --> 05:16.420
a bit more for better.

05:16.450 --> 05:16.750
Right.

05:16.900 --> 05:17.500
Enter your name.

05:17.500 --> 05:23.920
And I have just given the the name as Karthik over here, but you can override this particular, uh,

05:23.920 --> 05:25.120
name from there on.

05:25.120 --> 05:31.000
So now that we have fixed this issue of the chat, uh, which is going to be coming up in the, in the

05:31.000 --> 05:36.100
history and how it is going to be showing up, the follow up, uh, questions over there.

05:36.100 --> 05:41.440
The last piece of puzzle that we are going to be doing is in our next lecture is going to be how we

05:41.440 --> 05:45.280
can actually start a new conversation.

05:45.280 --> 05:51.010
And also we can maintain the session information across our chat in the chatbot.

========================================================================================

WEBVTT

00:00.020 --> 00:00.410
All right.

00:00.410 --> 00:07.400
So now that we are going to see how we can build a few more details within our chatbot that we are building.

00:07.400 --> 00:18.200
So essentially what I'm going to do is I'm going to say probably in here is if there is a start button

00:18.200 --> 00:26.180
and I'm going to ask like start all new conversation over here.

00:26.180 --> 00:36.590
So if we hit this particular button then I'm going to set the session state dot chat history as empty.

00:37.040 --> 00:39.830
So this is where I'm going to set the chat history.

00:39.860 --> 00:42.380
And I'm going to get the session history.

00:42.380 --> 00:45.500
So this is where we are going to be getting the session history.

00:45.500 --> 00:48.680
So so far we have not really got the session history yet.

00:48.680 --> 00:52.220
And this is the place where we're going to get the session history over here.

00:52.220 --> 00:59.540
And then we need to also clear the session history of the session ID that we're going to pass in.

00:59.540 --> 01:08.930
So I'm going to say dot clear, which is going to clear the session history for us.

01:08.960 --> 01:16.300
And looks like the message that this particular method needs to be, uh, met needs to be somewhere

01:16.300 --> 01:18.460
here because this code is not going to work.

01:18.460 --> 01:20.980
If I do that this way.

01:21.100 --> 01:25.150
And then I also need to bring these code.

01:25.480 --> 01:27.640
I'm going to cut this code from here.

01:28.090 --> 01:33.220
Uh, maybe even we can remove this, get session history clear because this is not required.

01:33.520 --> 01:37.180
Uh, and I'm going to put them all.

01:37.180 --> 01:44.830
So basically I'm going to put all the street code in one single place so that it can be easily maintained.

01:44.830 --> 01:49.000
So this is that all of these are the SD code, the Streamlit code that we have got.

01:49.030 --> 01:50.500
So I put that over here.

01:50.740 --> 01:58.690
Uh, and now we have got the logic for, uh, how the parsing should happen from the, uh, from our

01:58.690 --> 02:00.400
Lang chain sitting in here.

02:00.400 --> 02:04.150
And then we have got the prompt and the final quest over here.

02:04.180 --> 02:04.600
Right.

02:04.600 --> 02:08.500
So I'm going to save all of these, and I'm going to run the application.

02:08.500 --> 02:10.630
And I will show you how this is going to work this time.

02:10.660 --> 02:13.750
See that we have got this new button like start all new conversation.

02:13.750 --> 02:18.160
So once I hit that it is going to clear all the session information at the same time.

02:18.160 --> 02:21.770
Now it's ready for our new fresh new session to work with.

02:21.800 --> 02:26.330
So I'm going to say, how are you doing today?

02:26.330 --> 02:38.480
And um, can I get direction to GPU stores near me?

02:39.050 --> 02:43.760
And if I do that, you will see that it's going to give me a response over here because you don't really

02:43.760 --> 02:45.140
have access to the internet.

02:45.140 --> 02:48.560
So you see that it's going to give me some detail over here.

02:48.560 --> 02:52.070
But now I'm going to just ask a follow up question over here.

02:52.070 --> 02:59.000
I'm going to say, um, is there any other reason?

02:59.000 --> 03:00.170
So you see that.

03:00.170 --> 03:03.920
Now I'm asking like a follow up question to the AI assistant.

03:03.950 --> 03:09.800
It's going to say, sure, if you can provide me your city and more specific location, uh, I can give

03:09.800 --> 03:10.850
you this information.

03:10.850 --> 03:16.100
So it's like the follow up question that we are going to get for the GPU store, as you can see over

03:16.100 --> 03:16.610
here.

03:16.640 --> 03:17.150
Right.

03:17.150 --> 03:22.850
So maybe I'm going to ask one more question so I can just, uh, if I'm going to start a new conversation,

03:22.850 --> 03:24.860
I can just say start new conversation.

03:24.890 --> 03:26.840
See, everything is going to be clear at this time.

03:26.840 --> 03:34.980
And I'm going to ask, what is the power of local LM?

03:35.160 --> 03:37.950
And you see that it's taking a bit of a time over there.

03:37.980 --> 03:43.170
It's not really printing everything instantly, but it is taking so much time before it really prints

03:43.170 --> 03:45.030
all the value in one start.

03:45.030 --> 03:47.250
Because we need to stream the response.

03:47.250 --> 03:52.350
We are going to do that in our next lecture, but for now you see that we have got the entire detail

03:52.350 --> 03:52.980
over here.

03:53.010 --> 04:07.020
And I want to say, can you just, uh, print the headings in bullet points as a summary, oops, as

04:07.050 --> 04:08.580
a summary.

04:10.320 --> 04:12.420
And look at that immediately we get all these details.

04:12.420 --> 04:17.580
So this is happening because we have got the context over here.

04:17.580 --> 04:22.260
And we get all the context contextual response coming up over there.

04:22.620 --> 04:23.340
Pretty cool right.

04:23.340 --> 04:26.310
So this is already working for us over here guys.

04:26.310 --> 04:34.020
And the last thing which I wanted to do is how do I actually stream the responses and also make some

04:34.020 --> 04:39.210
more cosmetic changes in this particular UI so that it can look pretty much like what I showed you in

04:39.210 --> 04:40.950
the starting of this particular section.

========================================================================================

WEBVTT

00:00.050 --> 00:03.770
All right, so now we are almost completed our building of the chatbot.

00:03.770 --> 00:08.960
But just that every single time when you ask any question, you see that the information is not really

00:08.960 --> 00:09.710
streamed.

00:09.710 --> 00:13.670
Rather it's just going to print in one full chunk every single time.

00:13.670 --> 00:19.160
So in order for you to fix this particular problem, all you have to do it is you need to just stream

00:19.160 --> 00:23.840
the response instead of just writing the response all in one single shot.

00:23.840 --> 00:30.620
And the way you can actually stream this particular response is you need to change the way, uh, the

00:30.620 --> 00:36.080
information is being printed to us, and that we can do using the stream operation.

00:36.080 --> 00:43.670
So for the streaming operation, all you have to do it is instead of this invoke operation that we are

00:43.670 --> 00:50.330
doing over here for every single time, I can actually do the stream operation.

00:50.330 --> 00:58.340
But I also think that this particular way of invoking the the history from this runnable can be written

00:58.340 --> 00:59.030
even better.

00:59.060 --> 01:04.130
I mean, I wanted to write this as a method, to be honest, so I wanted to write something like this.

01:04.130 --> 01:09.420
So def of probably invoke Uh, history.

01:09.660 --> 01:12.510
And I'm going to pass a series of parameters in here.

01:12.510 --> 01:17.130
So session light chain session ID and prompt.

01:17.130 --> 01:19.260
So this is the parameter that I wanted to pass.

01:19.290 --> 01:19.560
Yeah.

01:19.590 --> 01:26.310
This code can remain exactly the same like how it is over here and over here I'm going to write a for

01:26.310 --> 01:29.640
loop this time for the response I'm going to be getting in.

01:29.640 --> 01:31.620
And I'm going to say history dot.

01:31.620 --> 01:33.720
See that this is the streaming implementation.

01:33.720 --> 01:36.480
So there is this um method called stream.

01:36.480 --> 01:39.450
You remember this stream is not something we are using for the first time.

01:39.450 --> 01:46.830
We have already did the streaming in our basic, um, section as well, while we were doing the stream

01:46.860 --> 01:48.780
operation over here.

01:48.810 --> 01:50.160
See that LM dot stream?

01:50.160 --> 01:52.440
The same thing that I'm doing over here as well.

01:52.470 --> 01:59.280
So I'm going to call the stream, uh, and I'm going to say, uh, the same thing that I'm going to

01:59.280 --> 02:03.720
do, like prompt as the prompt that I'm getting in.

02:03.870 --> 02:09.210
And I also need to pass the config, which is going to be this guy.

02:09.210 --> 02:18.030
So I'm going to cut this code probably I'm going to paste it over here And I'm going to say for this

02:18.030 --> 02:24.360
particular response while you stream it, just yield the response out.

02:24.390 --> 02:29.670
See that this is the yield response, which means it is going to because this is streaming every single

02:29.700 --> 02:30.090
time.

02:30.090 --> 02:33.720
We need to do an yield response over here from the for loop.

02:34.950 --> 02:35.700
Pretty cool.

02:35.730 --> 02:41.370
So I think that that is what this particular method invoke history is going to do for us over here.

02:41.400 --> 02:47.640
And now in order for me to invoke this method, invoke history, I don't really have to do it over here,

02:47.670 --> 02:49.380
like how we were doing before.

02:49.560 --> 02:56.670
I'm just going to get rid of that, and I'm going to keep all these pretty much exactly intact, because

02:56.670 --> 03:00.180
we are going to be printing the user message immediately any time anyways.

03:00.180 --> 03:10.680
But while we print the response from the assistant over here, we are going to print the streaming response.

03:10.710 --> 03:13.440
So I'm going to say we are going to be.

03:13.440 --> 03:22.600
So if the start chat message is going to be assistant then okay this guy can go down below over here.

03:22.960 --> 03:31.450
If it's going to be assistant, then you do a stream response of st dot right stream.

03:31.480 --> 03:34.300
See that we have got a right stream method.

03:34.300 --> 03:43.420
And here I'm going to call the invoke history method which is going to take our chain obviously.

03:43.600 --> 03:49.870
And then the session ID that we have got and the prompt that we're passing in.

03:49.870 --> 03:51.730
So I'm going to pass all of these in the method.

03:51.760 --> 03:53.890
That's the reason why I actually created this as a method.

03:53.890 --> 04:00.460
Because it's even more more easier to pass within this particular write stream method by by calling

04:00.460 --> 04:03.490
a method itself rather just like hand coding it.

04:03.580 --> 04:08.020
And finally the session state dot chat history dot append.

04:08.050 --> 04:16.810
The role is going to remain the same assistant over here, but for the content that we have got, we

04:16.810 --> 04:23.020
need to print that via what is called as the stream response instead of the response that we we had

04:23.020 --> 04:23.740
before.

04:24.580 --> 04:25.330
That's all.

04:25.480 --> 04:28.240
That's the only thing that we have to do over here.

04:29.980 --> 04:30.400
Look at that.

04:30.400 --> 04:34.480
That's the chord change that we have to make for making this as a streamable response.

04:34.480 --> 04:38.680
Instead of getting like one chunk of message, which is a non stream version of it.

04:38.680 --> 04:40.870
I mean, I have not made any change in here.

04:40.870 --> 04:49.570
Instead of me writing it like a markdown of the response, I'm actually doing a write stream over here.

04:49.570 --> 04:56.770
And then I'm going to add that, uh, that information, the chat history dot append.

04:56.800 --> 05:02.590
I'm adding that information over here, the stream response because I need it for the next conversation

05:02.590 --> 05:03.370
purpose.

05:03.820 --> 05:08.620
And now if I try to run this particular code and let's see what's going to basically happen, I'm going

05:08.650 --> 05:10.990
to start a whole new conversation over here.

05:10.990 --> 05:22.390
And I'm not going to ask a question over here, like, how big, uh, is sun compared to moon?

05:22.390 --> 05:28.120
So if I ask this, you will notice that this time we're going to get a streaming response as opposed

05:28.120 --> 05:30.160
to like a chunk of message.

05:30.160 --> 05:34.900
It's going to be printed every single time immediately, like after everything is ready.

05:34.900 --> 05:40.250
So which is going to be taking a long lot of time because it is not going to give us, like all the

05:40.250 --> 05:41.720
information immediately.

05:41.720 --> 05:46.490
Rather, we have to wait for the methods to be ready from the LM.

05:47.240 --> 05:53.510
Right now we are getting a streaming response over here, so we can probably ask a follow up question

05:53.510 --> 05:54.590
as well over here.

05:54.650 --> 05:58.430
Uh, how about, uh, Earth over here?

05:58.430 --> 06:00.110
So look at that.

06:00.110 --> 06:05.630
Now it's comparing sun, moon and Earth, and it's giving me all the responses over here.

06:05.660 --> 06:11.750
How can you print them in tabular format.

06:13.670 --> 06:15.230
So look at that.

06:15.230 --> 06:18.710
Now it's printing in a tabular format for sun, moon and Earth.

06:18.710 --> 06:24.440
So you will notice that this time all the historical information like chat, historical information

06:24.440 --> 06:25.730
is being maintained.

06:25.730 --> 06:29.600
And it is all printed for us over here, which is pretty cool.

06:29.600 --> 06:33.740
So this ends our chatbot that we have to build.

06:33.770 --> 06:37.970
I know there is one thing that we have to still build, which is the cosmetic change that I showed you

06:37.970 --> 06:39.800
in the starting of this particular section.

06:39.920 --> 06:43.490
We'll be doing that in our next lecture of this course.

========================================================================================

WEBVTT

00:00.080 --> 00:07.220
So now that I'm going to show you how, I made a bit of a cosmetic change on the the UI that you actually

00:07.250 --> 00:11.390
saw in the starting of this particular, uh, section.

00:11.390 --> 00:17.630
Well, the only cosmetic change that I actually made was I have added probably what I'm going to do.

00:17.660 --> 00:20.300
I'm going to copy this, uh, this whole chatbot.

00:20.510 --> 00:29.990
I'm going to paste it over here and I'm going to say chatbot with cosmetic over here.

00:29.990 --> 00:32.960
And I'm going to start making the changes over here.

00:32.960 --> 00:38.360
So I'm going to probably just do, uh, like a copy paste of code that I have already written.

00:38.360 --> 00:43.760
And I can explain to you what changes that I have, I have actually made over there.

00:43.760 --> 00:50.990
But other than that, the code just remains pretty much exactly the same as opposed to what you have

00:50.990 --> 00:51.680
seen there.

00:51.680 --> 00:54.260
So probably I'm just going to do that.

00:54.260 --> 00:56.720
I'm gonna completely delete it.

00:56.750 --> 00:58.130
I'm going to paste it over here.

00:58.130 --> 01:02.710
So the code that you are seeing over here is exactly the same chord, so it's going to have the same

01:02.710 --> 01:03.400
session history.

01:03.430 --> 01:04.750
It's going to have the same thing.

01:04.750 --> 01:11.590
But only thing is I need a logo, which I probably need to copy, um, from my existing code once again.

01:11.590 --> 01:14.470
And I also need to paste it over here.

01:14.650 --> 01:18.970
So this is the execute automation logo, uh, which I have.

01:18.970 --> 01:20.140
So I'm going to paste that.

01:20.140 --> 01:23.710
And I'm actually going to call that the SD uh, image.

01:23.950 --> 01:28.180
Only thing I'm doing is I'm using a sidebar over here, the sidebar.

01:28.180 --> 01:33.550
And inside the sidebar I'm going to add an image and I'm getting the user input.

01:33.550 --> 01:40.420
And I'm getting the details like how, uh, the answer should be like beginner, expert and PhD.

01:40.480 --> 01:43.780
And I'm going to add an index of zero, which is the starting is beginner.

01:43.990 --> 01:49.000
And I'm going to add the same button like start new chat, uh, and all those things over here.

01:49.000 --> 01:55.450
And I'm also adding a markdown here just to show you like what can I help you today, which is going

01:55.480 --> 02:00.790
to show in the middle of the window, just to give you some more, like a ChatGPT experience.

02:01.000 --> 02:08.690
Uh, and finally, you can also notice that in the template I'm actually adding that you are an and

02:08.690 --> 02:13.520
I'm passing the role in here level user to answer this query.

02:13.520 --> 02:16.400
And then I'm passing in the human prompt.

02:16.400 --> 02:20.660
So this is the only change that I have made apart from what I had before.

02:20.660 --> 02:25.910
So you see that here we just have like human prompt and we had the placeholder of the history.

02:26.000 --> 02:31.160
Uh, but in here we have the placeholder that message placeholder of history over here.

02:31.310 --> 02:34.760
Uh, and we also have a system query.

02:34.790 --> 02:41.360
And the system message is saying that you are an, uh, PSG level or basic beginner level or expert

02:41.390 --> 02:45.350
level user to answer this query and answer this question.

02:45.350 --> 02:49.070
And the remaining just, uh, stays the same.

02:49.070 --> 02:51.230
There is no change on any of that.

02:51.530 --> 02:57.380
Uh, and now, because we have already gone through this code many times, I'm just going to say chat

02:57.410 --> 03:00.860
with, uh, chatbot with cosmetic over here.

03:00.860 --> 03:02.470
And you will see that Voila!

03:02.470 --> 03:04.990
We have got this new UI, just that.

03:04.990 --> 03:08.860
There is a sidebar pane and we have got this details over here.

03:08.860 --> 03:13.030
And the remaining functionality is just, uh, looks pretty much exactly the same.

03:13.060 --> 03:21.940
How big, uh, is, uh, sun compared to moon?

03:22.180 --> 03:24.550
So we get the response immediately over here.

03:24.550 --> 03:25.180
And look at that.

03:25.180 --> 03:27.280
This time the answer is also coming down below.

03:27.280 --> 03:37.870
Instead of having that, uh, in the top and also compare with Earth and Tabular, is it.

03:40.210 --> 03:41.020
So look at that.

03:41.020 --> 03:42.400
It's a stabilizing with Earth.

03:42.400 --> 03:45.640
And it's comparing the detail for me over here which is amazing.

03:45.640 --> 03:46.990
So it is already doing that.

03:46.990 --> 03:55.870
And if I ask the same question in the expert level or maybe in the PhD level, um, how about with Mars?

03:57.250 --> 04:02.080
And now this is going to go a bit more uh, and in the PhD level.

04:02.080 --> 04:06.320
So details are going to be a bit more, uh, bit more complex.

04:06.320 --> 04:11.120
But apparently it's not because we're just asking to compare with Mars over here.

04:11.390 --> 04:18.170
Uh, how about it's, uh, gases in each planet's?

04:19.340 --> 04:20.600
Explain me.

04:21.860 --> 04:23.660
And look at that.

04:23.660 --> 04:27.620
So now it is going bit more like a sea level.

04:27.620 --> 04:29.090
It's going to go deeper.

04:29.240 --> 04:31.130
And then it is comparing everything.

04:31.130 --> 04:33.950
And it's giving me the answer for every single planet.

04:33.950 --> 04:36.650
And there is the summary coming up over here as well.

04:36.650 --> 04:37.490
So see that.

04:37.520 --> 04:38.240
Look at that.

04:38.240 --> 04:44.570
We have successfully built our own chatbot which can run within our local machine.

04:44.570 --> 04:50.240
And also it's using our own local large language model to make this happen, which is amazing.

04:50.540 --> 04:55.820
So this ends this particular section, and I'm sure you have learned quite a lot of details of how you

04:55.820 --> 05:01.880
can build a chatbot from the complete ground up, and also use the chat message history discussion that

05:01.880 --> 05:03.530
we did in our last section.

