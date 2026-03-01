WEBVTT

00:00.000 --> 00:02.070
Welcome to the next section of our course.

00:02.070 --> 00:08.550
And in this section we are going to talk about understanding, chaining and runnables in Lange chain.

00:08.550 --> 00:11.970
So this is one of the most important concept that we need to understand.

00:11.970 --> 00:14.670
Because as you know this is a Lange chain.

00:14.670 --> 00:16.830
And there is a chain word there already.

00:16.830 --> 00:19.080
And that is the power of the Lange chain itself.

00:19.080 --> 00:21.210
And that is what we are going to be doing over here.

00:21.210 --> 00:26.670
The chaining mechanism and a runnable are also one of the most important concept that you need to understand.

00:26.670 --> 00:30.600
So let's see what we are going to talk about this runnables in first place.

00:30.600 --> 00:35.520
So if you remember in our last section while we were working with we had got this what is called as

00:35.520 --> 00:37.650
the Lange Smith Lange chain.

00:37.650 --> 00:44.160
And then there is a template and we were passing the chat prompt template with the role.

00:44.160 --> 00:48.780
And also we were passing it the message to the large language model in the local machine.

00:48.960 --> 00:50.580
And these are the things which are happening.

00:50.610 --> 00:52.860
And now I have added two gear symbol there.

00:52.860 --> 00:58.170
So this gear is nothing but runnables just assume it that that is what these two are.

00:58.170 --> 01:05.360
So this runnables what it does really is that they are responsible for executing an action.

01:05.360 --> 01:11.750
So in in this long chain, every single operation that you perform like prompt.

01:11.750 --> 01:16.760
For example, if you call an invoke methods, if you remember from the prompt we can call the invoke

01:16.760 --> 01:17.270
method.

01:17.270 --> 01:18.680
Then it is a runnable.

01:18.680 --> 01:22.310
And in the large language model we can also call the invoke method.

01:22.310 --> 01:24.380
So basically that is an runnable as well.

01:24.380 --> 01:32.150
And similarly if you're going to be creating probably an agent or a retriever or an output parser,

01:32.180 --> 01:39.440
any of these things that you create in the long chain, these are all considered as runnables.

01:39.440 --> 01:43.040
So just to get back to the details of the runnable.

01:43.040 --> 01:48.890
So in long chain runnable interface is the foundation of working with the long chain component.

01:48.890 --> 01:55.250
And it's implemented across many of them such as language models, output parsers, retrievers, compiled

01:55.250 --> 01:57.560
language, long chain graphs, and more.

01:57.800 --> 02:00.710
And this is the details that you have to cover.

02:00.740 --> 02:02.720
Or maybe you can just read through about it.

02:02.720 --> 02:09.300
But one thing that we have to even understand is the long chain expression language, or LCL.

02:09.330 --> 02:13.080
That is something that we will talk about while we talk about chaining mechanism.

02:13.080 --> 02:18.450
But over here on the Runnables, you will notice that this is the overview of the Runnables.

02:18.480 --> 02:24.930
The runnable way defines the standard interface that allows runnable components to invoke batch, stream

02:24.930 --> 02:26.940
and inspected composed.

02:27.000 --> 02:32.520
You remember in our last section of our course, the last lecture, we were talking about this what

02:32.520 --> 02:34.830
is called as a streaming operation.

02:34.860 --> 02:39.300
And we also did the invoke operation over here.

02:39.300 --> 02:43.290
We also did the invoke for the templates, which is the prompt templates.

02:43.290 --> 02:49.230
And we can also do the exact same thing for the string output or agents or whatever that we are creating.

02:49.230 --> 02:50.220
We can do the invoke.

02:50.220 --> 02:57.570
So whichever, whichever component that you can do an invoke or stream and bind, then those components

02:57.570 --> 03:03.480
are essentially a runnable component or runnable interfaces or implementing the runnable interfaces

03:03.480 --> 03:04.650
behind the scene.

03:04.800 --> 03:08.400
And that is what this particular thing is.

03:08.400 --> 03:14.310
You can run this particular runnable interface in parallel, as you can see over here with the batch

03:14.340 --> 03:15.060
operation.

03:15.060 --> 03:18.690
And you can also run the Runnables in asynchronous operation.

03:18.690 --> 03:22.200
You can also run the runnable in the streaming operation.

03:22.230 --> 03:28.230
And also you can do runnable with quite a lot of different input and output types, which essentially

03:28.230 --> 03:36.510
means that you can pass the Runnables as an input type to another runnable component, and then you

03:36.510 --> 03:37.650
can perform the operation.

03:37.680 --> 03:39.690
So let me tell you what I really mean about that.

03:39.690 --> 03:47.670
So if you go back to our diagram over here, this is this entire thing, maybe this this entire thing,

03:48.900 --> 03:55.110
we can convert it as a runnable, and then we can convert this runnable output.

03:55.110 --> 03:59.640
And we can pass it to another runnable as an input.

03:59.640 --> 04:03.330
So this can be an input to another runnable that we wanted to create.

04:03.330 --> 04:05.070
And then we can move on from there.

04:05.070 --> 04:06.570
And that is the concept of chaining.

04:06.570 --> 04:08.850
And that is the reason why I don't want to cover it over here.

04:08.850 --> 04:16.170
So basically this runnable input runnable output, you can pass it as an input to another runnable.

04:16.170 --> 04:19.930
And the same thing keeps on going from there on.

04:19.930 --> 04:27.490
So you can keep doing that any further section over here and then you can chain all these operations.

04:27.850 --> 04:30.190
And that is what is called as the chaining operation.

04:30.190 --> 04:32.410
So basically you can just do like this.

04:32.410 --> 04:34.450
So this is going to be one runnable.

04:34.450 --> 04:39.670
This is going to be another uh runnable over here.

04:40.000 --> 04:41.650
So this is a runnable one.

04:41.890 --> 04:44.800
And this is a runnable two something like that.

04:44.860 --> 04:46.060
Uh where is the text.

04:46.060 --> 04:46.600
There.

04:46.630 --> 04:47.950
Runnable one.

04:47.950 --> 04:51.670
And this is going to be runnable two.

04:51.700 --> 04:58.000
I mean, the entire thing I'm talking about and this can be a runnable three for that matter.

04:58.000 --> 05:07.120
So we can chain all of these, uh, in our actual execution with a chain.

05:07.120 --> 05:11.380
And we call this as chaining operation as well.

05:11.410 --> 05:13.030
I will talk about that later on.

05:13.060 --> 05:18.550
I don't want to confuse you there, but you got the idea of how the Runnables are really created and

05:18.550 --> 05:22.150
working in the actual Lang Chain library.

========================================================================================

WEBVTT

00:00.050 --> 00:05.240
The next concept that I want to talk about is the long chain expression language or LCL.

00:06.140 --> 00:13.850
So if I go to the LCL over here, you will notice that the long chain expression language takes a declarative

00:13.850 --> 00:19.160
approach to build a new runnable from existing runnables.

00:19.610 --> 00:26.210
So this means that you describe your what should happen rather than how it should happen, allowing

00:26.210 --> 00:29.720
the lang chain to optimize the runtime execution of the chain.

00:30.290 --> 00:32.000
This is quite cool, right?

00:32.000 --> 00:36.560
Because as I told you, every single component over here are runnables.

00:36.560 --> 00:41.210
Like even these two can be a runnable or even this.

00:41.210 --> 00:47.150
This alone, like the template alone, can be a runnable, and this LM can alone be a runnable.

00:47.180 --> 00:52.490
Because this, this are all going to call this invoke method or stream method or batch method.

00:52.670 --> 00:57.080
So all these are runnables as well in an isolation.

00:57.650 --> 01:05.060
So if we can run them in isolation, and if we can chain them together, like how the inputs and outputs

01:05.060 --> 01:05.180
are.

01:05.210 --> 01:09.800
Going to happen, then that's what is called as chaining mechanism.

01:09.800 --> 01:10.160
That is what.

01:10.190 --> 01:10.970
Exactly.

01:10.970 --> 01:14.600
This particular, uh LCL is going to explain us.

01:14.600 --> 01:17.240
So we often refer Runnables using.

01:17.270 --> 01:19.220
LCL as a chain.

01:19.220 --> 01:23.000
It is important to remember that the chain is a runnable and it implements the.

01:23.030 --> 01:24.440
Full runnable interface.

01:24.440 --> 01:28.010
What that really means is that the chain you can create for runnable.

01:28.190 --> 01:30.650
And the chain itself is a runnable.

01:30.980 --> 01:31.670
It's confusing.

01:31.670 --> 01:31.880
Right.

01:31.910 --> 01:33.740
Like that is how it is really.

01:33.740 --> 01:34.490
So.

01:34.520 --> 01:41.360
Basically you can chain two runnables and you can assign it to a variable called as chain.

01:41.390 --> 01:47.150
And the chain now becomes a runnable because now runnables all the chain also implements the runnable

01:47.150 --> 01:47.870
interface.

01:47.870 --> 01:48.860
In turn.

01:48.860 --> 01:50.540
That is what is really happening there.

01:50.690 --> 01:58.730
And this chain can now be useful for running in parallel execution, asynchronous operation and simplify

01:58.730 --> 02:04.680
the streaming operation because it is implementing the runnable Honourable interface or honourable interfaces,

02:04.680 --> 02:06.810
like how we saw in our last lecture.

02:06.810 --> 02:13.410
And because runnable interface supports asynchronous streaming and also batch execution.

02:13.410 --> 02:19.800
Uh, over here, the same thing is going to happen for the LCL as well, because it does implement the

02:19.800 --> 02:21.180
runnable interface.

02:21.180 --> 02:24.840
So it is going to have all the features where the runnable interface has got.

02:25.830 --> 02:27.720
So why should I use LCL in first place?

02:27.720 --> 02:30.660
Well, LCL is an orchestration solution.

02:30.660 --> 02:39.300
It allows Lang chain to handle runtime execution of chain in an optimized way, which is amazing because

02:39.300 --> 02:44.700
while we have seen the user runs chain with hundreds of steps in production, we generally recommend

02:44.700 --> 02:50.880
using LCL for simpler orchestration tasks when the application requires complex state management, branching

02:50.880 --> 02:52.890
cycle, or multiple agents.

02:52.890 --> 02:54.090
We recommend that.

02:54.090 --> 02:56.700
Take advantage of the Lang graph.

02:56.730 --> 02:59.100
Well, that is when we're going to be talking about Lang graph.

02:59.100 --> 03:02.570
But you'll notice that at the moment we are not even a single chain.

03:02.570 --> 03:06.920
But in production there are going to be hundreds of chain created.

03:08.930 --> 03:12.680
And that is what is going to happen while we are going to start building things.

03:12.680 --> 03:17.240
So I'll talk about the chain and this until you see the chain, you don't really get this whole concept.

03:17.240 --> 03:21.950
So once we create the chain, you will we will get back to the same page again.

03:21.950 --> 03:24.530
And I will explain you what this LCA is all about.

03:24.830 --> 03:26.960
Let's get back to our code over here.

03:26.990 --> 03:31.370
And what I've created at this time is I've created a new notebook for section two.

03:31.400 --> 03:35.900
And, uh, and of course we have to just copy paste some of the code from here.

03:35.900 --> 03:41.690
We don't really have to install this, uh, this details again because that is, that is already there.

03:41.690 --> 03:46.670
But we do need to load the dot env file, uh, even here as well.

03:46.670 --> 03:48.800
So I'm going to create a markdown.

03:49.610 --> 03:54.350
So load env file because we are in a different directory.

03:54.350 --> 03:59.630
So definitely that is something that we need to load uh over here.

03:59.630 --> 04:03.740
And I'm going to paste the code.

04:04.490 --> 04:06.170
We need to select the kernel.

04:06.260 --> 04:07.640
Oh, there we go.

04:07.700 --> 04:10.100
And let me try to run them all.

04:10.130 --> 04:10.850
Look at that.

04:10.850 --> 04:11.870
That's loading.

04:12.290 --> 04:23.030
And now if I'm going to put a markdown over here to, um, create a LM object.

04:23.060 --> 04:26.240
So we are going to create the LM object.

04:26.240 --> 04:33.860
And that's going to be something that I'm going to be taking up from our code, which is this guy.

04:33.890 --> 04:34.280
Right.

04:34.280 --> 04:41.240
So I'm going to do this not copy this entire thing and put the code over here.

04:41.240 --> 04:43.490
So that's going to create an LM object for me.

04:43.520 --> 04:44.480
I'm gonna run that.

04:44.900 --> 04:45.710
Amazing.

04:46.430 --> 04:52.010
And now I'm going to start working with the chaining mechanism the first thing.

04:52.010 --> 04:58.820
So I'm gonna put a markdown here I'm going to say understanding uh chaining.

04:58.820 --> 05:02.270
And we of course will be talking about runnables in the same time.

05:02.510 --> 05:04.100
Uh, so I'm going to say round numbers.

05:04.130 --> 05:04.760
Okay.

05:05.240 --> 05:06.920
Um, there we go.

05:06.950 --> 05:14.690
So let me first create without chain because that is what we are doing in our last lecture as well.

05:14.720 --> 05:16.310
I mean last section as well.

05:16.310 --> 05:18.770
So I'm going to copy this.

05:18.950 --> 05:23.990
Probably not this one really, but the one with the shorthand version.

05:24.020 --> 05:25.100
Do we have that?

05:25.460 --> 05:26.330
Unfortunately not.

05:26.360 --> 05:30.500
Yeah I think we have the commented shorthand version so we can take that one.

05:31.160 --> 05:32.000
Copy that.

05:32.030 --> 05:33.350
Paste it over here.

05:33.530 --> 05:35.240
Get rid of these.

05:35.270 --> 05:36.710
We don't need them.

05:37.490 --> 05:41.420
Uh, we of course need the prompt template.

05:41.420 --> 05:43.760
So I'm going to get rid of these.

05:44.330 --> 05:45.290
Amazing.

05:45.620 --> 05:46.940
We don't need this.

05:48.260 --> 05:49.250
Awesome.

05:49.430 --> 06:00.170
So, as I told you, remember in the runnables discussion, this LM object is basically a runnable interface

06:00.170 --> 06:00.530
itself.

06:00.530 --> 06:07.580
So it's basically implements a runnable Because this chart, if you just go back over here, is going

06:07.610 --> 06:12.200
to implement the base chat over here based chat model.

06:12.200 --> 06:18.650
And this base chat model is in turn going to be implementing from the base langue model.

06:18.650 --> 06:26.180
And you see that this base langue model is a runnable serializable as well.

06:26.180 --> 06:28.730
So it is going to be calling the runnable serializable.

06:28.730 --> 06:32.510
And basically this runnable serializable is going to be a runnable type.

06:33.560 --> 06:33.740
Right.

06:33.770 --> 06:38.750
If you just go keep digging down all the way, it is going to be runnable behind the scene.

06:38.780 --> 06:39.260
Right.

06:39.260 --> 06:43.550
So the same thing is going to happen for the prompt template as well.

06:43.550 --> 06:48.650
So if I go to the chat prompt template, it is going to implement from the base chat prompt template.

06:48.650 --> 06:53.330
And if you just go all the way to the base chat prompt template, it is going to be calling the runnable

06:53.360 --> 07:00.020
serializable because it can support the, um, the serializable execution.

07:00.020 --> 07:03.020
And it is going to be calling the renewables over there.

07:03.020 --> 07:07.840
And if you're going to be calling the if you're going to be talking about the streaming that we were

07:07.840 --> 07:16.060
discussing in our last section, the last lecture of the course, which is the stream, the stream also

07:16.150 --> 07:19.900
is going to be calling the runnable if I'm not wrong.

07:19.900 --> 07:25.150
So every single operation that you are seeing over here are going to be a runnable behind the scene

07:25.150 --> 07:25.720
by nature.

07:25.750 --> 07:26.140
Right.

07:26.140 --> 07:32.230
So while this is a runnable, we can now run instead of doing this.

07:32.230 --> 07:40.150
Like instead of you calling the prompt and then you call the invoke and then pass the prompt over here

07:41.020 --> 07:49.270
instead of doing that operation that you are doing before, you can now pass or chain the output of

07:49.270 --> 07:55.390
the prompt template, we can chain it to the LM as an input, because that is what you're going to essentially

07:55.390 --> 07:56.380
do over here.

07:56.380 --> 08:02.980
So what I'm really telling over here is instead of you writing this code for the invoke operation,

08:04.300 --> 08:08.610
so you do a prompt dot invoke over here, and then you do an LM of invoke over here.

08:08.610 --> 08:10.770
So you do two invoke operation.

08:10.830 --> 08:14.940
Instead what you can do you can create a chain.

08:14.970 --> 08:15.870
It can be any name.

08:15.870 --> 08:17.220
But I'm just giving chain name.

08:17.220 --> 08:18.780
That is a standard way of doing it.

08:18.960 --> 08:26.280
And over here I'm just going to say I wanted to give the prompt look at that.

08:26.280 --> 08:27.870
I'm using a pipe symbol here.

08:27.870 --> 08:30.630
This is essentially a chaining operation that I'm doing.

08:30.630 --> 08:32.010
This is a shorthand way of doing it.

08:32.010 --> 08:33.240
In LCL.

08:33.330 --> 08:40.140
You can just do this or there is something called there was something called as LM chain.

08:40.590 --> 08:44.430
Uh, and this LM chain is kind of deprecated right now.

08:44.430 --> 08:45.510
Nobody's really using it.

08:45.510 --> 08:51.630
And even the team has told not to use it, uh, in the documentation.

08:51.630 --> 08:55.440
So if you just go to the documentation, if you just search LM chain.

08:55.470 --> 08:55.890
Look at that.

08:55.890 --> 08:56.970
This is deprecated.

08:56.970 --> 08:59.820
And there is a breaking change over here.

09:00.480 --> 09:05.040
Uh, so LM chain has been set to removal for all 3.0 version.

09:05.040 --> 09:06.780
So it's not anymore used.

09:06.780 --> 09:09.510
Instead, they ask us to use like this.

09:09.540 --> 09:09.840
Like a.

09:09.930 --> 09:15.750
Number sequence which is prompt and LM right.

09:15.780 --> 09:16.740
I will talk about the runnable.

09:16.770 --> 09:19.470
Sequence runnable parallel and router and stuff.

09:19.470 --> 09:21.990
But but yeah this is how we do it.

09:21.990 --> 09:27.270
And now over here we are going to say prompt which is this prompt.

09:27.720 --> 09:35.160
I'm going to give the input of the output of this prompt as an input to LM.

09:36.900 --> 09:39.240
So that is the chaining mechanism that I'm doing over here.

09:39.240 --> 09:40.170
So see look at that.

09:40.170 --> 09:41.880
The code is so straightforward.

09:41.880 --> 09:47.640
Instead of you doing quite a lot of different invoke here I'm not going to do this invoke at all.

09:48.390 --> 09:55.500
And even this invoke that I'm doing I'm just going to create um, a prompt.

09:55.500 --> 10:01.350
And then I'm going to be giving it to, uh, sorry, not even the prompt, really, because we don't

10:01.350 --> 10:02.550
have to call the invoke.

10:02.550 --> 10:07.950
I'm going to pass the prompt template And the LM.

10:08.670 --> 10:17.400
But now you may ask Karthik, how do I now pass the the the variable, the input variable e and v to

10:17.430 --> 10:22.020
this particular prompt because the prompt template won't receive any of the value.

10:22.050 --> 10:22.740
Well guess what?

10:22.770 --> 10:25.650
As I told you, this chain itself is a runnable.

10:25.650 --> 10:29.160
Then there is this invoke method of course.

10:29.220 --> 10:33.420
And now you can pass the exact same thing over here as well.

10:33.420 --> 10:40.710
So I can just say E and V, uh, and I can pass local machine or machine.

10:40.710 --> 10:42.450
So there we go.

10:42.450 --> 10:49.050
So this two lines of code is now not even required because we don't even need to invoke it that way.

10:49.080 --> 10:57.300
So that is a classical way of doing it, uh, without a chaining.

10:58.560 --> 11:03.300
But now with chain, you see that this is how I do the chaining mechanism over here.

11:03.420 --> 11:09.060
And I do an invoke pretty much like how I do for the rest of the numbers, I'm going to call this as

11:09.180 --> 11:11.520
numbers because you know that it's a numbers already.

11:12.540 --> 11:21.630
And if I try to run this particular code, this is just going to work like how it was working even before.

11:21.780 --> 11:29.340
So now you have taken out the complexity of doing two invokes and creating the operation before.

11:29.340 --> 11:36.960
Instead, you can now create one invoke to pass the value, and you can now chain and guess what?

11:36.960 --> 11:40.590
You can keep chaining this any number of runners.

11:40.590 --> 11:44.640
That is the power of this chaining mechanism itself.

11:44.670 --> 11:46.800
And we'll be talking about that like in a minute.

11:46.830 --> 11:48.660
Like how we can do that in our next lecture.

11:48.660 --> 11:50.130
But but guess what this is.

11:50.130 --> 11:53.940
What is the the chaining mechanism that we're talking about over here.

11:53.940 --> 12:00.480
This is how you do the chaining of your runnables in long chain.

12:00.900 --> 12:03.630
So I hope you got the idea like how these are all is done.

12:03.630 --> 12:06.600
And now if I go back to our um.

12:07.980 --> 12:09.750
a Lang Smith over here.

12:10.680 --> 12:11.670
Look at that.

12:11.670 --> 12:16.440
We have got a runnable sequence this time because we're doing a sequence of operations.

12:16.440 --> 12:18.480
So we have got a runnable sequence.

12:18.480 --> 12:26.520
And this runnable sequence is telling me that we are calling an env or the input variable as local machine.

12:26.520 --> 12:30.990
And now we are getting this particular output over here.

12:30.990 --> 12:32.460
And also look at that.

12:32.460 --> 12:38.460
We don't even have any message saying the, the human message or the system message like that, because

12:38.460 --> 12:42.660
those things are going to be taken care over here in the next prompt.

12:42.660 --> 12:44.460
Uh, next message over here.

12:44.490 --> 12:45.150
Look at that.

12:45.150 --> 12:49.140
So there is a chat prompt template, uh, which is this one.

12:49.170 --> 12:51.690
And it has got the system and the human message.

12:51.690 --> 12:56.220
And then it goes to the chat Olama, uh, which is going to be system human.

12:56.430 --> 12:58.470
And then there is a runnable sequence over here.

12:58.470 --> 13:03.600
These are the three things belonging to this particular operation that we are doing over here.

13:03.600 --> 13:08.520
So that is how we can actually work with the chaining mechanism.

========================================================================================

WEBVTT

00:00.140 --> 00:01.040
All right.

00:01.040 --> 00:09.380
So now we are going to discuss this chaining mechanism even further with a bit more of an like message

00:09.380 --> 00:12.620
parsing probably like or the output parsing.

00:12.620 --> 00:14.630
So what I really mean about that really.

00:14.630 --> 00:23.060
So for instance, all these days we have been getting the responses as a string content over here.

00:23.060 --> 00:25.610
But these are not really parsed out quite well.

00:25.610 --> 00:33.980
So if I want to really parsed out probably like a string output with a parsing mechanism, then I can

00:33.980 --> 00:40.790
also do that, and I can then pass it to an pipeline and then get the get the response out from the

00:40.790 --> 00:42.680
parsing value as well.

00:42.710 --> 00:44.240
So I'll tell you what I really mean about that.

00:44.240 --> 00:54.740
So if I'm going to say on the markdown over here, I'm going to say a string parsing and I'm going to

00:54.740 --> 00:58.400
create a code, I'm just going to copy paste the same code over here.

00:58.430 --> 01:05.980
And I'm just going to do this, copy and paste it over here and we don't really need this one.

01:06.100 --> 01:07.330
Let me get rid of that.

01:07.360 --> 01:09.100
Also, I'm going to get rid of this comment.

01:09.130 --> 01:11.110
You are pretty familiar with that as well.

01:11.410 --> 01:14.350
And over here I'm going to do this.

01:14.350 --> 01:18.550
I'm going to import a a parser really.

01:18.550 --> 01:25.360
So I'm going to say oops from a Lang chain.

01:25.510 --> 01:32.410
Let me just stop this Lang chain core output parsers.

01:32.410 --> 01:37.330
And I'm going to import what is called as a string output parser.

01:37.330 --> 01:41.140
So this is just going to be a parser that I'm really going to be importing over here.

01:41.140 --> 01:47.830
And now I'm going to use this string output parser to get the output for me from the large language

01:47.830 --> 01:48.250
model.

01:48.250 --> 01:55.900
So now you see that I'm going to be parsing the large language model output as the string output parser

01:55.930 --> 01:56.380
over here.

01:56.380 --> 01:58.840
So I'm going to just say string output parser.

01:58.960 --> 01:59.560
Look at that.

01:59.560 --> 02:01.390
So now I can pipe it again.

02:01.390 --> 02:05.520
Or maybe I can chain it again from the large language model.

02:05.520 --> 02:10.440
I'm going to print the value out from this particular string output parser.

02:10.440 --> 02:13.800
And now I can just say response.

02:14.850 --> 02:17.400
And I'm going to say response.

02:17.430 --> 02:17.730
Okay.

02:17.730 --> 02:19.590
Print the response.

02:19.590 --> 02:24.630
I know that the output is already a string value, so there won't be much of a difference, but I wanted

02:24.630 --> 02:32.010
to show you a point here that you can keep chaining this like any further number of times as well,

02:32.010 --> 02:33.690
so that you can get the output.

02:33.690 --> 02:36.780
And again, the string output parser is also a runnable.

02:36.780 --> 02:42.540
So you are going to get the you can chain it up and then you can get the output from there as well.

02:42.570 --> 02:44.760
Let's look at that so you can change it up.

02:44.760 --> 02:46.680
And then you can get the value out from this.

02:46.680 --> 02:53.520
So this is how you can do a string parsing from this particular string output parser over here.

02:53.520 --> 02:57.930
And you can do the exact same thing for JSON or CSV or whatever that you want to do.

02:57.960 --> 02:59.400
You can do that as well.

02:59.430 --> 03:05.850
We'll be talking about that in a later point of time, but at least you got the idea of how we can actually

03:05.970 --> 03:08.340
do with the parser operation.


========================================================================================

WEBVTT

00:00.110 --> 00:03.680
All right, so now that we got the idea of how the chain really works.

00:03.680 --> 00:07.070
But now what if I wanted to chain two chains together?

00:07.100 --> 00:09.860
Like I wanted to do something like this?

00:09.890 --> 00:17.840
If I want to go back here, um, as I told you, we have got this, uh, this particular runnables over

00:17.840 --> 00:25.250
here, and we wanted to get the output from this particular runnable to another runnable.

00:25.280 --> 00:29.270
Or maybe we can just name this as a, uh, chain.

00:29.270 --> 00:39.290
So this is chain number one, and I wanted to output this to the chain number two to perform certain

00:39.320 --> 00:39.980
operation.

00:39.980 --> 00:42.320
So how can I actually do that.

00:42.320 --> 00:45.860
So that is what we are going to be discussing in this particular lecture.

00:45.860 --> 00:51.680
So if I wanted to do this over here so how do I actually do it.

00:51.680 --> 00:55.010
Well if you see we need to create two chains here right.

00:55.040 --> 00:59.480
Like one is the chain with the template and a large language model.

00:59.480 --> 01:05.100
And that is going to be another chain with a template with another large language model.

01:05.130 --> 01:06.840
But what is the purpose really?

01:06.840 --> 01:14.580
So for for instance, let's say we get this, uh, this output from this particular chain, which is

01:14.580 --> 01:18.570
going to look something like this as we are seeing over here.

01:18.570 --> 01:25.260
So let's say in another chain that I wanted to do is that I wanted to just get the headings of this

01:25.260 --> 01:31.170
particular, um, particular response instead of getting the descriptions.

01:31.170 --> 01:35.460
So you see that we have got so many descriptions over here, but I just wanted to say like summarize

01:35.460 --> 01:43.020
the the details with just the, with the headings, instead of having me all these like descriptions

01:43.020 --> 01:47.400
over here, I don't really want the description, I just want the key bullet points over here.

01:47.400 --> 01:50.310
So how do I actually do that?

01:50.310 --> 01:56.160
Well, I need to create two chains in this, uh, purpose in this point over here.

01:56.160 --> 02:01.220
So the first, uh, is going to be, uh, Let's say I put a text over here.

02:01.250 --> 02:10.760
The first one is going to be getting the entire output or the response.

02:11.480 --> 02:21.170
And the second, second one second chain is going to be basically doing a summarization of the response.

02:21.200 --> 02:24.500
So that is what is going to be doing the second chain for me.

02:24.590 --> 02:30.230
And now I can get the response out from one chain, pass it to another chain, and then we can get the

02:30.230 --> 02:30.560
response.

02:30.590 --> 02:34.490
And you see that we are getting we are passing two things over here to get this happen.

02:34.520 --> 02:36.650
So let's see how we can actually achieve that over there.

02:36.650 --> 02:41.750
So I'm going to be probably creating another markdown over here.

02:41.750 --> 02:48.860
And I'm going to say um chaining multiple chains over here.

02:48.860 --> 02:53.510
And, and now I'm going to put the code block over here.

02:53.510 --> 02:54.830
And guess what.

02:54.830 --> 02:56.630
I'm going to copy the same code.

02:58.310 --> 02:59.730
Paste it over here.

03:00.150 --> 03:03.810
Um, and we don't really have to print this particular value.

03:03.810 --> 03:05.700
So this is going to be the first change, right.

03:05.730 --> 03:12.960
So I'm going to say this is going to be chain one which is going to perform this particular operation.

03:12.960 --> 03:16.200
So I'm going to probably say uh, chain one for that matter.

03:16.230 --> 03:23.610
Maybe this is going to be the um, the detailed, uh, response chain.

03:24.360 --> 03:31.230
And then we're also going to have a summary chain, and we can just get rid of this one at the moment,

03:31.230 --> 03:33.240
because we don't even need that over here.

03:33.240 --> 03:36.360
This is first chain and I'm going to create the second chain.

03:36.360 --> 03:44.370
But before I create, uh, the second chain, I also need to create probably what is called as the um,

03:44.370 --> 03:46.560
the message, the chat prompt template.

03:46.560 --> 03:48.930
So I'm going to create the template over here.

03:48.930 --> 03:52.230
So I'm just going to say uh, so this is the prompt template.

03:52.260 --> 04:00.100
And I'm gonna say probably the headings uh info uh template uh, over here.

04:00.100 --> 04:02.740
And then I'm going to call chat prompt template.

04:02.860 --> 04:08.860
And over here in the chat prompt template this time I'm just I'm not going to pass like the system message

04:08.860 --> 04:10.420
or user message something like that.

04:10.420 --> 04:24.310
I don't want to do it, but instead I'm just going to say here analyze the response and get me just

04:25.030 --> 04:28.690
the headings response.

04:28.690 --> 04:29.380
Look at that.

04:29.380 --> 04:35.950
I'm passing the response as a variable this time like an input variable this time, because now I need

04:35.950 --> 04:46.030
to pass this chains input as the I mean this chains output as the input for this particular chain over

04:46.030 --> 04:46.210
here.

04:46.210 --> 04:50.110
That's the reason why I need an input variable here.

04:50.890 --> 05:00.210
And then I'm also going to say probably response should be in bullet points so that I can have it in

05:00.210 --> 05:00.990
a more detailed fashion.

05:00.990 --> 05:01.680
Probably.

05:01.800 --> 05:02.370
Cool.

05:02.400 --> 05:08.370
So that is going to be my, uh, that is going to be my template that I'm creating the chat prompt template

05:08.370 --> 05:09.180
over here.

05:09.300 --> 05:09.960
Right.

05:10.290 --> 05:14.340
And now I can create the chaining over here.

05:14.340 --> 05:16.770
So I'm going to say uh chain.

05:16.830 --> 05:23.160
This is going to be chain with a heading.

05:23.430 --> 05:25.830
So this is the second chain that I'm creating.

05:25.920 --> 05:29.520
And over here see that's the beauty going to happen over here.

05:29.520 --> 05:39.540
So I need to pass the the output of this particular chain as an input to this particular chain.

05:39.540 --> 05:42.720
So if I wanted to do it so how do I actually do it.

05:42.720 --> 05:50.610
Well in order for me to do that actually I'm going to get the output of this particular detailed response.

05:51.270 --> 05:56.550
So I'm just going to say this particular response, I can store it in a variable and do it, but I don't

05:56.550 --> 05:58.090
want to do it right now as a variable.

05:58.090 --> 06:02.260
Rather, I can just pass it as a dictionary like response.

06:02.440 --> 06:12.250
Remember, this particular chat prompt template is looking for a response coming out from the from the

06:12.280 --> 06:13.600
from the first chain.

06:13.600 --> 06:19.240
So I'm going to create like a, like an dictionary over here.

06:19.330 --> 06:21.850
And I'm going to say detailed response chain.

06:21.850 --> 06:27.040
So basically the the output of this detailed response chain is going to be set into this particular

06:27.040 --> 06:30.340
variable response over here.

06:30.370 --> 06:35.140
And that's going to be the first chain that we have got.

06:35.140 --> 06:39.550
And then I'm going to pass it to the heading info template.

06:39.550 --> 06:42.640
And that is going to pass all the way to the LM.

06:42.640 --> 06:48.670
And then it is going to be passing it to the string output parser over here.

06:48.730 --> 06:49.210
Look at that.

06:49.240 --> 06:55.390
How many chains that we have did this time one, two, three and four chains that we have did over here.

06:55.400 --> 06:56.540
And look at that.

06:56.540 --> 06:57.620
That's the beauty over here.

06:57.620 --> 07:03.110
With the chaining mechanism, we could able to get the response from this detailed response chain,

07:03.110 --> 07:06.410
pass it to a variable which is going to be response chain.

07:06.410 --> 07:12.560
Now that is going to be the input for the heading info template, because it has the response which

07:12.560 --> 07:14.210
it is looking for in this particular template.

07:14.210 --> 07:19.670
So it can now process it and then it can uh, create the template and then pass it to the large language

07:19.670 --> 07:19.970
model.

07:19.970 --> 07:25.880
And then the large language model can output it the response into the string output parser, which the

07:25.880 --> 07:27.980
string output parser can print it out.

07:28.640 --> 07:29.360
Amazing.

07:29.360 --> 07:32.120
And now of course we need to pass this env.

07:32.750 --> 07:33.410
Right.

07:33.410 --> 07:34.880
So how do I actually pass it.

07:34.880 --> 07:36.920
Well you have to do this of course.

07:36.920 --> 07:41.030
So because this is an again this chain with heading is also a runnable type.

07:41.030 --> 07:43.100
We can call the invoke method.

07:43.310 --> 07:45.980
And over here I can just pass the env.

07:46.520 --> 07:50.750
And I can just say local machine.

07:52.220 --> 07:59.110
Look at me how I'm doing with multiple chaining mechanism and how that is going to be the response.

07:59.140 --> 08:01.810
And I can just print the response.

08:01.810 --> 08:03.820
And I'm going to see how that is going to look like.

08:03.850 --> 08:08.680
So let's print the response that's going to be the multiple chain for us guys.

08:08.680 --> 08:11.170
And let's see what's really going to happen over here.

08:11.530 --> 08:12.550
Ah look at that.

08:12.550 --> 08:19.090
The there is some problem in this particular chat prompt template.

08:19.120 --> 08:19.690
Oh sorry.

08:19.720 --> 08:20.230
Look at that.

08:20.230 --> 08:26.260
I missed this from template method which we have to use.

08:26.860 --> 08:28.720
And now let's try to run this.

08:31.180 --> 08:35.980
So what is going to happen this time is going to be the first output of the chain is going to be stored

08:35.980 --> 08:37.030
in the response variable.

08:37.030 --> 08:40.240
And then that is going to go as an input to the heading info template.

08:40.240 --> 08:41.980
And it's going to pass to the LM.

08:41.980 --> 08:43.420
It's going to get the response out.

08:43.420 --> 08:45.280
So now you look at that.

08:45.580 --> 08:51.940
We have got an amazing, uh heading response coming up for us over here.

08:51.970 --> 08:55.420
So this is how we can do chaining of multiple chains.

========================================================================================

WEBVTT

00:00.140 --> 00:00.980
All right.

00:00.980 --> 00:07.460
So now that we have discussed about multiple chaining and how the chaining works until here, but now

00:07.460 --> 00:13.550
we are going to see how we can actually make an parallel chaining instead of the sequence chaining that

00:13.550 --> 00:14.270
we have been doing.

00:14.270 --> 00:17.000
So these are all runnable sequence that we are doing over here.

00:17.000 --> 00:21.410
So by default value chain like this using the pipe operator over here.

00:21.410 --> 00:24.800
These are all basically a runnable sequence operation.

00:24.800 --> 00:26.930
So it's basically running in sequence over here.

00:26.930 --> 00:29.930
But what if we wanted to run these chains in parallel.

00:29.930 --> 00:32.210
So how do we actually achieve that.

00:32.210 --> 00:39.830
Well in order for you to achieve a parallel execution or runnable parallel execution, you need to use

00:39.830 --> 00:41.390
a runnable parallel class.

00:41.390 --> 00:49.430
So I'm going to say a markdown here as a running chains um chains in parallel.

00:49.430 --> 00:52.220
And I'm going to say tick.

00:52.220 --> 00:54.590
And I'm going to add the code over here.

00:54.590 --> 00:57.710
So now I'm going to run these two in parallel for instance.

00:57.710 --> 01:02.060
So let's just go and copy this entire thing over here.

01:03.090 --> 01:04.740
And I'm going to paste it over here.

01:04.740 --> 01:09.390
So what is exactly parallel execution and why do we really need parallel execution.

01:09.390 --> 01:15.780
So for instance, if you're going to have a response coming up from one LM over here, at the moment

01:15.960 --> 01:24.240
we are just using one LM over here and there is nothing but this guy, the chat or LMA with the Q1 2.5

01:24.270 --> 01:24.720
model.

01:24.720 --> 01:29.520
And what if I wanted to do with probably an LMA 3.2 model?

01:29.520 --> 01:36.450
And then if I wanted to run this two LM in parallel, if I wanted to do or get a response from two large

01:36.450 --> 01:38.160
language models in parallel.

01:38.160 --> 01:43.560
So that way you may have an option to get responses in even more better fashion.

01:43.560 --> 01:48.030
So I mean llama and Q1, these are all like general purpose models.

01:48.030 --> 01:54.150
But if you're going to have any model trained for your organization, which are very specific for maybe

01:54.180 --> 01:59.280
for a specific domain, and you have got another large language model which is trained with some other

01:59.280 --> 02:03.120
data set, which is specifically designed for certain domain.

02:03.120 --> 02:08.910
So if you want to get a combination of the response from two domains together, then you can use parallel

02:08.910 --> 02:14.520
execution to get the response out much, much easily and fast manner as well, because they're going

02:14.520 --> 02:15.720
to be running in parallel.

02:15.720 --> 02:18.690
So that is what the parallel execution is all about.

02:19.020 --> 02:22.290
So again, just to demonstrate how that really works.

02:22.290 --> 02:24.870
So you're going to have the.

02:24.990 --> 02:30.540
So let's say if I'm going to get this particular diagram over here I'm going to copy this.

02:30.540 --> 02:33.330
And I'm going to paste it over here.

02:33.630 --> 02:37.410
So instead of getting response from one LM that we are getting.

02:37.440 --> 02:41.160
So let me just put this guy over here, the traceability stuff.

02:41.520 --> 02:50.820
Um, over here I'm going to have one more, uh, a large language model over here, uh, something like

02:50.820 --> 02:51.330
this.

02:51.330 --> 02:55.890
And let me put the arrow there, and I'm going to put an arrow here.

02:56.070 --> 02:56.670
You see that?

02:56.670 --> 02:59.220
Now we're going to have two llms altogether.

02:59.220 --> 03:02.430
And we're going to be getting the response out from these two.

03:02.430 --> 03:03.120
Uh llms.

03:03.120 --> 03:07.210
For our, for our operation that we are doing essentially.

03:07.240 --> 03:11.530
So that is the whole purpose of this particular execution that I'm talking about.

03:11.530 --> 03:19.210
So this way we can run these two, uh, two operations together for one of the requests that I'm trying

03:19.210 --> 03:23.680
to do so that I can get the response from two large language model, and I get the accurate response

03:23.680 --> 03:24.490
that I'm looking for.

03:24.490 --> 03:30.520
So that is something I can do it as well using this, uh, runnable parallels operation.

03:30.520 --> 03:35.470
And this is going to be very, very handy if you're going to be doing two different operations together.

03:35.470 --> 03:43.360
So 1st May be your large language model is good at uh, some domain may be domain A, and maybe your

03:43.360 --> 03:44.950
large language model is good.

03:44.950 --> 03:48.400
Maybe in this particular domain for this large language model domain B.

03:48.400 --> 03:53.770
So if you run both of them in parallel and get the response, you're going to be getting a lot of useful

03:53.770 --> 03:56.020
information for what that you are looking for.

03:56.470 --> 04:01.720
That is one way of doing it or the other way of doing it, or maybe other way of thinking it is if you're

04:01.720 --> 04:06.340
going to be running these two operations in parallel, for instance, one is the getting the summary

04:06.340 --> 04:08.250
and another one is getting the headings.

04:08.250 --> 04:11.940
You can run them in parallel as well and then you can get the response out.

04:11.940 --> 04:19.470
But in this case, because we are relaying on the response from one chain into another chain, maybe

04:19.470 --> 04:21.330
you don't get the response as expected.

04:21.360 --> 04:25.980
I mean, the speed is actually pretty much exactly the same as well, that it's not going to make any

04:25.980 --> 04:26.520
difference.

04:26.520 --> 04:33.300
So just for adding the cherry on the top, I'm just going to create one more loop here.

04:33.300 --> 04:35.730
And I'm going to call this as LM two for that matter.

04:35.730 --> 04:38.790
And I'm going to go to my terminal over here.

04:38.790 --> 04:45.960
And I'm going to use maybe the llama 3.2 latest model, the two GB model.

04:46.260 --> 04:48.660
And I'm going to use this model this time.

04:48.660 --> 04:52.380
And I'm going to be running this model in parallel this time.

04:52.380 --> 04:58.860
So let's see I'm going to go over here and I'm going to first create a parallel or runnable parallel

04:59.010 --> 05:00.270
this time first of all.

05:00.270 --> 05:09.210
So I'm gonna call from a lang chain underscore core Dot.

05:09.240 --> 05:16.170
There is something called as Runnables and I'm going to import this what is called as runnable parallel

05:16.650 --> 05:17.340
this one.

05:17.340 --> 05:22.470
And from this runnable parallel I can now pass two chains.

05:22.470 --> 05:26.520
Uh, and we can create a runnable chains over here.

05:26.520 --> 05:27.810
So this is the first chain.

05:27.810 --> 05:29.970
This is the second chain that we have got.

05:30.120 --> 05:35.850
And now I'm going to pass both the chains in the parallel execution.

05:35.850 --> 05:39.570
So I'm going to just say runnable parallels dot invoke C.

05:39.570 --> 05:42.330
This is what I'm doing over here I'm going to save this one.

05:42.330 --> 05:46.440
And over here for the chain one I'm using the LM over here.

05:46.440 --> 05:49.410
And for the chain two I'm using LM uh as well.

05:49.410 --> 05:52.050
So instead of LM I'm going to use LM two this time.

05:52.050 --> 05:57.180
So let me also run this code because without running this, uh, the operation will not happen over

05:57.180 --> 05:57.930
here.

05:57.930 --> 06:00.060
So I'm going to come down all the way.

06:00.060 --> 06:02.250
So this is LM two.

06:02.280 --> 06:04.050
So the first chain is going to use LM.

06:04.050 --> 06:07.050
And the second chain is going to be using LM two for that matter.

06:07.050 --> 06:12.300
And if I run this code this is going to just fail over here saying that runnable pattern invoke is not

06:12.300 --> 06:16.200
going to happen because you can't really call the invoke method over here.

06:16.200 --> 06:23.580
So all you have to do it is just call this runnable, uh, parallel, uh, over here, um, like this.

06:23.580 --> 06:25.650
And we need to call two chains, right?

06:25.680 --> 06:32.070
Like, uh, so I'm going to say, uh, chain one, uh, is equal to I'm just going to give the name

06:32.070 --> 06:34.440
here like detailed response chain.

06:34.440 --> 06:41.220
And that is going to be chain two, uh, which is going to be probably the heading uh info template,

06:41.430 --> 06:43.590
um, or chain with the heading.

06:44.190 --> 06:44.580
Yeah.

06:44.610 --> 06:46.350
Chain with the heading over here.

06:46.380 --> 06:48.060
These are the two chains that I have got.

06:48.060 --> 06:56.850
And then I actually need to do the, uh, probably this is going to be a parallel, uh, runnable.

06:57.060 --> 07:01.860
Uh, and then over here I'm going to say response is equal to parallel runnable dot.

07:01.860 --> 07:04.530
And then we're going to call this invoke method.

07:04.770 --> 07:10.020
And over here I need to pass the uh env because that is something required.

07:10.050 --> 07:11.880
Uh uh over here.

07:11.880 --> 07:15.640
So I'm going to say envy of I'm going to say local machine.

07:15.970 --> 07:16.750
Right.

07:16.750 --> 07:23.020
And now if I try to run this particular piece of code, it is going to run both the chains in parallel.

07:23.020 --> 07:28.390
But apparently, as I told you before, this chain, even though while I run them in parallel with two

07:28.390 --> 07:34.030
different large language models, they are still dependent on each other because the output of the first

07:34.060 --> 07:39.430
LM is required for the input of the second LM chain.

07:39.430 --> 07:45.580
So the chains are dependent over here, so you don't see the actual parallel execution really happening

07:45.580 --> 07:46.120
over there.

07:46.120 --> 07:48.190
So I mean you really got what I mean, right.

07:48.190 --> 07:51.190
Because see you get the chain one response over here.

07:51.190 --> 07:53.980
And then the chain two response is coming up over here.

07:53.980 --> 07:56.140
But still guess what?

07:56.140 --> 07:59.200
It is really not quite parallel at the moment.

07:59.200 --> 08:02.110
If you want to make really this one parallel, you can't.

08:02.140 --> 08:06.970
You shouldn't be putting a dependency of the chain between both of them.

08:06.970 --> 08:12.580
So that is not going to really be helping over here because you're using two large language models altogether.

08:12.580 --> 08:14.120
So if you want to run them in parallel.

08:14.150 --> 08:18.980
Do not try to, uh, like, mix them all.

08:19.040 --> 08:20.240
Mix them both together.

08:20.240 --> 08:24.590
So let me just see if I'm going to print this particular response over here.

08:24.590 --> 08:26.030
So I'm going to say chain one.

08:26.030 --> 08:28.280
That is the first response that I'm trying to print.

08:28.310 --> 08:28.820
Oops.

08:29.540 --> 08:44.270
Uh, chain one uh, and I need to print uh, probably slash n slash n and then I'll print, uh, chain

08:44.270 --> 08:47.090
two over here.

08:47.090 --> 08:50.270
And let's try to run this again and look at that.

08:50.270 --> 08:52.760
So first chain is going to give me this particular response.

08:52.760 --> 08:55.190
And the second chain there is a heading from this response.

08:55.280 --> 08:59.960
So running the A model the local machine has several advantages but it is not really printing anything

08:59.960 --> 09:00.680
over there.

09:00.680 --> 09:06.980
So that's I mean that particular model that we have got over there is not really giving us any of the,

09:07.190 --> 09:09.830
uh, details at least over here.

09:09.830 --> 09:13.880
But you will notice that this is how you can actually do that over here.

09:13.880 --> 09:15.830
So these are these are the two things which are running in parallel.

09:15.860 --> 09:22.490
But in order for you to clearly demonstrate this parallel execution, instead of doing with the dependency

09:22.490 --> 09:29.360
that we did with the with the execution over here, I actually need to put it put this code over here,

09:29.720 --> 09:34.850
and I'm going to say, what is the advantage of running the a model in local machine.

09:34.850 --> 09:38.720
And then we can ask the same kind of template over here.

09:38.870 --> 09:45.080
Um, but this time I'm going to say in what is the advantage?

09:45.650 --> 09:49.910
What is the advantage of running?

09:50.060 --> 09:58.550
Uh, lm in uh, maybe machine, uh, over here.

09:58.640 --> 10:04.520
So this is going to be a cloud machine, uh, template probably.

10:04.550 --> 10:08.120
And this is going to be a local machine template.

10:10.070 --> 10:13.700
So I'm just going to create like two, uh, templates over here.

10:13.850 --> 10:17.490
Uh, and then this is what exactly I'm trying to pass parse here.

10:17.490 --> 10:19.380
So this is going to be for the first chain.

10:19.380 --> 10:23.370
And there is this cloud machine template which is going to be here.

10:23.370 --> 10:28.560
So I'm not going to depend on any of these uh existing chains over here.

10:28.560 --> 10:32.130
So now we have got two of the chains over here.

10:32.370 --> 10:35.970
And now I'm going to run them both, uh, at this time.

10:35.970 --> 10:37.020
So let's see what's going to happen.

10:37.020 --> 10:41.430
So this is going to be this is going to be local machine chain.

10:41.430 --> 10:43.560
So we have got two chains here.

10:43.560 --> 10:49.230
So local machine chain and the cloud machine chain over here.

10:49.230 --> 10:53.640
So these are going to be running in parallel altogether with two different LMS this time.

10:54.090 --> 10:59.460
And now I can see how this can be printed or maybe invoked over here.

10:59.460 --> 11:01.110
So parallel runnable dot invoke.

11:01.110 --> 11:03.840
So we have the env for the local machine.

11:03.840 --> 11:06.600
And we also need to pass one more.

11:06.750 --> 11:07.530
Uh env.

11:08.010 --> 11:11.820
Uh sorry we need to pass one more uh machine here.

11:11.850 --> 11:12.060
Right.

11:12.090 --> 11:14.070
So that's something that we need to do it as well.

11:14.070 --> 11:20.290
So machine uh is equal to uh is going to be maybe cloud machine.

11:20.290 --> 11:22.780
So it's going to be envy of the local machine.

11:22.780 --> 11:24.610
And for the machine it's going to be cloud machine.

11:24.610 --> 11:26.500
So this is where we are passing the cloud machine.

11:26.500 --> 11:30.010
And for this guy we are passing the local machine over here.

11:30.010 --> 11:33.190
And now both of these are going to be running in parallel for us.

11:33.190 --> 11:35.650
And we will see what is going to basically happen this time.

11:35.650 --> 11:41.800
So if I try running it this time, you see that now there is no dependency on the first chain with the

11:41.800 --> 11:46.120
second chain, but they are running in parallel for us this time.

11:46.120 --> 11:51.310
And because one of them is going to take time and the other one is going to be, uh, doing it faster,

11:51.340 --> 11:57.580
you see that this time it is just 15.1 second, whereas the last time it was taking 19 seconds.

11:57.580 --> 12:01.570
So you see that there is a there is a performance gain this time for us over here.

12:01.570 --> 12:04.900
And also you get the response coming up over here.

12:04.900 --> 12:07.300
So if I go click this text editor, look at that.

12:07.300 --> 12:14.170
Running the AI in the local machine as these uh, some of the common use cases and here are the limitations

12:14.200 --> 12:15.340
and blah blah, blah.

12:15.400 --> 12:22.640
And if I go back to our, uh, actual langschmidt over here, for some reason this has been signed out.

12:22.640 --> 12:26.480
And if I go to our langschmidt over here, look at that.

12:26.480 --> 12:29.510
So this is a runnable parallels this time.

12:29.510 --> 12:33.530
And this runnable parallel has got two chain like chain one and chain two.

12:33.770 --> 12:36.620
And we are passing local machine and cloud machine.

12:36.620 --> 12:39.200
And the first chain is going to give us this particular response.

12:39.560 --> 12:44.480
And that's all coming up for us over here.

12:44.780 --> 12:46.640
Uh which is great.

12:46.640 --> 12:47.390
And look at that.

12:47.390 --> 12:51.530
This is the second chain that we have got and this is the response it is giving.

12:51.530 --> 12:56.630
But it says that the running the AI model in local machine, also known as edge computing, even in

12:56.630 --> 12:57.410
the second chain.

12:57.410 --> 12:59.540
I don't know why that is coming up over there.

12:59.540 --> 13:04.940
So let's just go back, uh, in the code and see what's really going on there.

13:04.940 --> 13:06.890
So if I just go back.

13:06.890 --> 13:08.690
So this is going to be.

13:12.200 --> 13:13.100
Oh, look at that.

13:13.100 --> 13:19.790
I'm actually passing in the chain two as local machine template instead of the cloud machine template.

13:19.790 --> 13:20.690
I'm sorry about that.

13:20.690 --> 13:21.650
That is a problem.

13:21.800 --> 13:25.880
I need to pass the cloud machine template over here instead of the local machine template.

13:25.880 --> 13:27.560
That's the reason why this is happening.

13:27.710 --> 13:30.620
So now let's try to run this and see what's really happening.

13:30.650 --> 13:37.970
I think that is the reason why it is printing both of them as the local machine instead of cloud machine

13:37.970 --> 13:39.260
in any of these.

13:39.320 --> 13:40.280
Look at that.

13:40.280 --> 13:41.870
Now that's been printed over here.

13:41.870 --> 13:48.560
And if I go to the text editor you should see the cloud machine includes these these these these things.

13:48.590 --> 13:49.310
Amazing.

13:49.310 --> 13:53.810
So if I go back to our, um, runnable chain over there.

13:53.840 --> 13:54.800
Look at that.

13:54.950 --> 13:56.420
So this is local machine in cloud.

13:56.420 --> 13:56.810
Machine.

13:56.810 --> 14:01.460
This is chain one and chain two taking advantage of, uh, running local machine, I mean, large language

14:01.460 --> 14:02.990
model in the cloud machine.

14:02.990 --> 14:05.000
And these are the things which is coming up.

14:05.000 --> 14:10.490
So this is how you can see that we can run this, these chains in parallel for two different models,

14:10.490 --> 14:11.840
as you can see over here.

14:11.840 --> 14:18.230
And that is how you get the power of running chains in parallel using the parallel execution.

14:18.230 --> 14:23.900
And that is the that is the whole purpose of this runnable parallel that we have got in the in the long

14:23.900 --> 14:24.650
chain library.


========================================================================================

WEBVTT

00:00.050 --> 00:06.230
In this lecture we're going to talk about runnable lambdas of the chaining operation that we have been

00:06.230 --> 00:07.010
talking about.

00:07.010 --> 00:10.490
And once again, our requirement keeps on changing every single time.

00:10.490 --> 00:17.330
And we have to make sure that based on our requirement, we have to align our application and based

00:17.330 --> 00:22.670
on our requirement and based on our alignment, the complexity of the application as well changes.

00:22.670 --> 00:29.270
So for instance, as you can see in our last lecture while we were trying to do the chaining operation

00:29.300 --> 00:34.190
like parallel chaining operation, we used a llama model.

00:34.190 --> 00:37.070
And also we used a queuing model to perform operations.

00:37.070 --> 00:42.080
So we used two models to perform these operation and we executed them in parallel.

00:42.080 --> 00:48.560
But what if we don't want to use this llama model unless until a certain condition is met?

00:48.560 --> 00:50.900
So how do we actually make that happen?

00:50.900 --> 00:57.500
Well, we need to have some condition to ensure that this is how I need to run this particular chain.

00:57.500 --> 01:00.110
We need to have some decision to make that happen.

01:00.140 --> 01:04.330
And for that we need to write some Python code to make that happen.

01:04.330 --> 01:10.870
And again, that Python code needs to be executed like an if else condition to call a specific, uh,

01:10.870 --> 01:12.160
large language model.

01:12.160 --> 01:17.110
And then we need to pass that large language model as a parameter for this chain, and then perform

01:17.110 --> 01:20.860
the operation, which is going to be very, very complex unless until you do that hand coding.

01:20.860 --> 01:27.610
But instead you can actually use what is called as the runnable lambdas to make that happen.

01:27.610 --> 01:32.920
And based on its name, you can easily assume that that is what this, uh, runnable lambda is going

01:32.920 --> 01:33.610
to basically do.

01:33.640 --> 01:38.530
So, for instance, if you remember, in this particular code, we were, uh, doing this, let's just

01:38.530 --> 01:41.920
go up a bit over here chaining multiple chains.

01:42.430 --> 01:46.150
We said, what is the advantage of running the AI model in local machine?

01:46.150 --> 01:51.610
And also we told in the second chain that just analyze the response and get me the headings from this

01:51.610 --> 01:52.510
particular response.

01:52.540 --> 01:52.780
Right.

01:52.810 --> 01:55.480
This is another chain that we had got.

01:55.510 --> 01:58.900
And then we uh we got the response over here.

01:58.900 --> 02:07.410
So what if my my requirement is this where the first response of a chain that we are getting over here.

02:07.410 --> 02:15.210
If it has the length of more than 300, which means it is a bigger token value, and I need to use a

02:15.210 --> 02:17.040
specific large language model.

02:17.040 --> 02:23.760
And if it is less than 300 token or 300 character, for instance, then I have to use another large

02:23.760 --> 02:29.130
language model, maybe a smaller version of large language model, because the larger, bigger, larger

02:29.130 --> 02:31.860
language model is not even required for this kind of operation.

02:31.860 --> 02:36.630
So if I think that is my business case that I wanted to go with, then how do I actually do that?

02:36.630 --> 02:40.350
Well, you can do it using this runnable lambda.

02:40.350 --> 02:46.530
So you see that user inputs the first prompt, which is going to be what is the advantage of running

02:46.530 --> 02:48.900
the AI in the local machine.

02:48.900 --> 02:52.290
It goes to the model in the first chain of the runnable.

02:52.290 --> 02:54.900
And then it gets you the response.

02:54.900 --> 03:00.990
But that particular response that you are getting over here now needs to be deciding which particular

03:00.990 --> 03:03.030
large language model that you need to be running with.

03:03.030 --> 03:09.470
Because if it is less than 300, so probably you don't even need to run this in a bigger, larger language

03:09.470 --> 03:09.890
model.

03:09.890 --> 03:13.280
You maybe find the queue in itself so you can run it over here.

03:13.280 --> 03:19.220
But if you want to run, if the response is more than 300, then you can run in the llama model.

03:19.220 --> 03:24.950
And in order for making this kind of decisions, we are going to be using this runnable lambda to make

03:24.950 --> 03:25.460
that happen.

03:25.490 --> 03:29.120
And that is exactly what we are going to be doing over here.

03:29.120 --> 03:37.160
So let me just add this diagram for your detailed discussion that we have been doing, so that next

03:37.160 --> 03:40.940
time, while you read through this documentation, you will also know what we have.

03:40.970 --> 03:46.190
We have, uh, spoken in this particular discussion.

03:46.190 --> 03:47.540
So I'm going to add a markdown.

03:47.540 --> 03:50.210
I'm going to add this particular image over here.

03:50.540 --> 03:52.460
Uh there we go.

03:52.460 --> 03:56.930
And yeah, that's the image that we have got over here.

03:56.930 --> 04:02.120
And probably I need to add one more markdown and I'm going to say uh.

04:04.580 --> 04:07.390
Runnable Lambda.

04:08.020 --> 04:08.890
Cool.

04:08.920 --> 04:12.910
And now let's try to write the code and we will see how we can actually achieve that.

04:12.910 --> 04:17.800
So in order for doing that I'm going to once again going to copy the exact same code that we discussed

04:17.800 --> 04:18.550
earlier.

04:18.610 --> 04:19.690
Just this guy.

04:20.020 --> 04:21.280
And I'll copy this.

04:21.280 --> 04:25.990
And I'm going to come all the way down and I'm going to paste it over here.

04:26.020 --> 04:26.590
Right.

04:26.590 --> 04:29.470
So this is the chat prompt template.

04:29.470 --> 04:33.310
And we also have got the string output over here.

04:33.310 --> 04:38.890
And we also need to call the Lang chain core dot Runnables.

04:38.920 --> 04:48.400
Import a runnable lambda which is going to be all the way here.

04:48.910 --> 04:53.800
And then I'm going to run them both in parallel.

04:53.800 --> 04:55.570
So let's see how we can achieve that.

04:55.570 --> 04:58.570
So this is the first chain that we have got over here.

04:58.570 --> 05:05.860
And this is the response going to be coming up for me from this particular uh this particular chain.

05:05.860 --> 05:07.210
And then we're going to do it over here.

05:07.240 --> 05:08.260
So these things are fine.

05:08.260 --> 05:14.220
But this is the place where we need to do the decision to see what exactly is going to happen based

05:14.220 --> 05:16.140
on our response that we're doing.

05:16.140 --> 05:21.900
So I'm going to write a small function here, uh, using uh, Python.

05:21.900 --> 05:24.780
So I'm going to say choose LM for that matter.

05:24.960 --> 05:27.360
Uh, and I'm going to say response.

05:27.360 --> 05:29.940
So based on the response that you are going to be choosing.

05:29.940 --> 05:39.630
So I'm going to say response maybe response, uh, text is equal to I'm going to say string because

05:39.630 --> 05:42.720
I need to convert the response to the string type over here.

05:42.720 --> 05:51.810
And I'm going to say if the length of the, uh, if the length of this particular response text, if

05:51.810 --> 06:00.090
it is greater than 300, if you have that, then you need to, uh, run this in the olama for that matter,

06:00.090 --> 06:01.320
which is going to be LM two.

06:01.350 --> 06:03.720
You remember, the LM two is the olama.

06:04.020 --> 06:09.630
Um, sorry, the the llama 3.2 language model.

06:09.720 --> 06:11.530
So that is what I'm using over here.

06:11.530 --> 06:13.510
So I'm going to say lemma two.

06:13.810 --> 06:16.900
Uh I'm sorry over here.

06:16.930 --> 06:22.510
If not you can just return me LM, which means the model that we are currently using.

06:22.510 --> 06:24.760
So that is this method really going to do.

06:24.760 --> 06:30.520
And I'm also going to say, uh, LM selector for that matter.

06:30.700 --> 06:33.790
And I'm going to say runnable lambda.

06:33.820 --> 06:38.020
This is the place where I'm going to be calling our runnable lambda and see the beauty of this runnable

06:38.020 --> 06:38.320
lambda.

06:38.350 --> 06:43.900
Basically this is going to accept this choose LM method.

06:43.900 --> 06:54.430
So basically using this runnable lambda you can actually execute an Python function over here or Python

06:54.430 --> 06:56.890
code Python code over here.

06:57.250 --> 07:03.100
So that you could able to run them in the pipeline while you are actually executing, which is the chaining

07:03.100 --> 07:04.660
operation that you are really doing.

07:04.660 --> 07:08.950
So that is the major power of this runnable lambda itself.

07:08.950 --> 07:14.010
And now the rest of the code just remains pretty much exactly the same, because we don't really have

07:14.010 --> 07:15.840
to make any changes over there.

07:15.840 --> 07:23.880
But over here, what I'm going to do is instead of the LM that we are passing in the chain two, I'm

07:23.880 --> 07:26.730
going to be calling the LM selector.

07:26.940 --> 07:27.690
Look at that.

07:27.690 --> 07:30.960
So that is the power which I'm talking about LM selector.

07:30.960 --> 07:39.120
So while I call LM selector over here based on the response, the selector is going to call the runnable

07:39.150 --> 07:39.600
lambda.

07:39.600 --> 07:45.360
And this runnable lambda is going to pass the response which is going to be coming up for us over there.

07:45.570 --> 07:49.470
And then it is going to perform the rest of the operation for me.

07:49.470 --> 07:53.700
And then it's choosing which lambda, which large language model that we need to select.

07:53.700 --> 07:56.070
And then it is going to run that one.

07:56.640 --> 07:57.180
Look at that.

07:57.180 --> 07:58.080
So so easy right.

07:58.110 --> 08:03.630
Like this is how you do select the large language model using the runnable lambda because it has the

08:03.630 --> 08:06.330
ability to run a Python code.

08:06.600 --> 08:07.320
Cool.

08:07.320 --> 08:10.950
So now let's try to run this code and see what's going to happen.

08:11.340 --> 08:16.340
So essentially the things are just pretty much exactly the same that we have did over there.

08:16.790 --> 08:21.530
And I'm sure the response is going to be more than I mean, the response text is more than 300.

08:21.530 --> 08:30.680
So it is going to run for the first time in the, uh, LM, which is the llama 3.2 model.

08:30.680 --> 08:36.980
So now if I just go to my Safari browser, and if I go and go to the.

08:38.330 --> 08:42.620
Yeah, to the Lang Smith, you see that this time over here.

08:42.650 --> 08:48.770
See that the first time it executed, uh, it is executing on the Q1 model, which is correct.

08:48.950 --> 08:51.560
So what is the advantage of running in local machine.

08:51.560 --> 08:53.300
So it gives this particular response.

08:53.300 --> 08:56.450
And then we are giving a decision over here.

08:56.480 --> 08:57.530
Analyze the response.

08:57.560 --> 09:00.080
Get me just the heading of this particular response.

09:00.080 --> 09:02.270
What is the advantage of this particular thing.

09:02.270 --> 09:05.600
Then it is choosing the llama theta two model for us over here.

09:05.600 --> 09:06.380
Look at that.

09:06.380 --> 09:07.370
So that is correct.

09:07.370 --> 09:16.150
So it is using the llama 3.2 because because we know that the the text is more than 300in length.

09:16.210 --> 09:19.000
But what if I modify this time?

09:19.030 --> 09:20.200
Let's say less than 300?

09:20.230 --> 09:21.460
For that matter, right?

09:21.460 --> 09:26.380
We know it is more than 300, but I'm just trying to make it less than 300 so that I don't want to execute

09:26.380 --> 09:27.520
this llama two.

09:27.820 --> 09:30.760
Uh, which is the all the llama 3.2 model.

09:30.760 --> 09:32.950
But I wanted to run the model.

09:32.950 --> 09:34.960
So let's see what is really going to happen this time.

09:34.960 --> 09:43.540
So if I do execute it this time, what essentially I'm looking for is I will I will see both of these

09:43.540 --> 09:47.680
in Q1 model instead of running in the llama 3.2 model.

09:48.040 --> 09:48.370
There we go.

09:48.400 --> 09:52.330
It got executed and we have this runnable sequence execution complete.

09:52.360 --> 09:52.990
Look at that.

09:52.990 --> 09:57.040
So we have two of them both in Q1 model this time.

09:57.040 --> 10:06.580
So this is how we can say that we can choose or run a Python code while running in the chaining operation.

10:06.580 --> 10:13.240
While there is a runnable happening in this chain, you can run a Python code in between using this

10:13.240 --> 10:14.350
runnable lambda.

10:14.380 --> 10:17.380
That is the power of this runnable lambda itself.


========================================================================================

WEBVTT

00:00.020 --> 00:06.110
In this last lecture of this section, we are going to talk about a chain decorator that we can use

00:06.110 --> 00:09.680
for our chaining mechanism that we are doing.

00:09.740 --> 00:11.390
I mean the runnable that we are really creating.

00:11.390 --> 00:17.750
So essentially this runnable lambda that we are creating over here is to create this particular method

00:17.750 --> 00:21.230
that choose LM method as a runnable.

00:21.260 --> 00:21.530
Right.

00:21.560 --> 00:27.380
We're just converting this custom method that we have got as a runnable, so that this can be executed

00:27.380 --> 00:30.440
in the chain over here.

00:30.440 --> 00:31.100
Right.

00:31.130 --> 00:35.210
That is what this runnable lambda method is really doing in a nutshell.

00:35.210 --> 00:44.150
But if I wanted to decorate this particular or make this particular choose LM as a as a chain which

00:44.150 --> 00:50.900
can be used as a runnable instead of using the runnable lambda method over here, I can use the chain

00:50.900 --> 00:52.250
decorator as well.

00:52.250 --> 00:53.630
So I'll tell you what I really mean about that.

00:53.630 --> 00:56.900
So let me just copy this entire code over here.

00:57.020 --> 00:58.700
Just wanted to keep them separate.

00:58.700 --> 01:06.730
So I'm going to say Uh, using a custom or maybe using add chain decorator.

01:06.730 --> 01:09.700
So this is the thing that I'm going to be doing over here.

01:09.730 --> 01:16.450
And the code, I'm just going to be pasting the exact same code, but just that, uh, instead of this

01:16.450 --> 01:21.820
runnable lambda that we are using, I'm going to be using the chain class over here.

01:21.820 --> 01:26.980
And now I can get rid of this particular runnable lambda, but instead of runnable lambda over here

01:26.980 --> 01:32.020
for this particular method that we are using making as a runnable lambda, I'm just going to write a

01:32.020 --> 01:35.080
shorthand of add chain over here.

01:35.080 --> 01:35.680
That's all.

01:35.680 --> 01:38.050
That is what I'm going to be doing over here.

01:38.050 --> 01:41.440
So what I say add a decorator.

01:41.470 --> 01:42.160
Uh, sorry.

01:42.190 --> 01:44.050
Somehow it's not correct.

01:44.080 --> 01:46.270
Add chain.

01:46.300 --> 01:46.990
Yeah.

01:47.410 --> 01:51.490
So because I was writing in this line, actually, that's why, uh, that's it.

01:51.490 --> 02:00.760
You see that now this choose, um, becomes a runnable, uh, for our chain operation that we are doing

02:00.760 --> 02:01.480
over here.

02:01.510 --> 02:02.410
Let's choose LM.

02:02.410 --> 02:05.110
So you see that this is what I am passing in over here as well.

02:05.140 --> 02:12.070
For this particular method, um, and now if I try to run this particular code, you should see that

02:12.070 --> 02:17.230
the response is going to be pretty much exactly the same, like how we were doing earlier.

02:17.320 --> 02:22.390
Uh, because this is now a run over this choose LM method is now a runnable.

02:22.390 --> 02:25.330
So it is just going to work fine as expected over here.

02:25.330 --> 02:33.310
So instead of using you, the, uh, the runnable lambda to perform this operation with the LM selector,

02:33.370 --> 02:39.010
uh, this time I'm just going to be using the choose LM method directly so that I can able to perform

02:39.010 --> 02:40.180
the operation there.

02:40.210 --> 02:40.660
Right.

02:40.690 --> 02:48.700
That is the major difference between using the runnable lambda uh, method versus the shorthand, uh,

02:48.700 --> 02:50.710
at chain annotation.

02:50.710 --> 02:54.640
So that is how you can actually do that in this particular code.

02:54.640 --> 02:55.870
But yeah, that's all guys.

02:55.870 --> 02:59.110
So we have discussed quite a lot of details over here.

02:59.110 --> 03:06.250
Uh, For the chaining mechanism and how we can work with the the long chain, the renewables and also

03:06.250 --> 03:12.700
string parsing and how we can parse the string parsing in the in the chain, and how we can work with

03:12.700 --> 03:18.670
multiple chains, how we can run the chains in parallel, and also how we can run the chain with the

03:18.670 --> 03:20.560
runnable lambdas.

03:20.950 --> 03:26.980
And finally, with the add chain decorator, we still have few more things, especially the runnable

03:27.100 --> 03:31.420
with memory, which is one of the most important thing that we are going to be talking later on in this

03:31.420 --> 03:32.230
particular course.

03:32.230 --> 03:36.700
So just see this runnable with message history.

03:36.730 --> 03:37.840
This is amazing.

03:37.840 --> 03:40.840
This is one thing which we are going to be using while we are building the chatbots.

03:40.840 --> 03:45.670
So we are going to be talking about that as well in the upcoming section of this course.

03:45.670 --> 03:50.650
But at least as of now for the basic getting started, this is more than enough for you to get going.

03:50.680 --> 03:55.930
So please try it out all of these yourself and use this notebook while you have access to.

03:55.960 --> 04:00.430
And then you can start working with the same thing that we have discussed over here.


========================================================================================

