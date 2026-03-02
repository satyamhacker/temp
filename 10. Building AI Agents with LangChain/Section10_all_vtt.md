WEBVTT

00:00.020 --> 00:01.970
Welcome to the next section of our course.

00:01.970 --> 00:04.970
And in this section we are going to start building an agent.

00:05.000 --> 00:08.360
So what is this agent by themselves?

00:08.360 --> 00:13.310
The large language model can't take any actions, they just output the text.

00:13.340 --> 00:18.620
We already know that a big use case for Lang chain is creating an agents.

00:18.620 --> 00:25.340
So the agents are the system that uses the large language models as a reasoning engine to determine

00:25.340 --> 00:31.940
which action to take and output the inputs necessary to perform the action.

00:31.940 --> 00:37.430
So after executing the action, the results can be fed back to large language model to determine whether

00:37.430 --> 00:40.850
more actions are needed or whether it is okay to finish it off.

00:40.850 --> 00:47.090
This is often achieved via tool calling, and we already saw the tool callings as well in our last section

00:47.090 --> 00:47.900
of this course.

00:47.900 --> 00:53.330
That's the reason why I wanted to cover up this agents part right now, because now you have got all

00:53.330 --> 00:56.180
the nuts and bolts for building an agents.

00:56.180 --> 00:59.330
We have already discussed about LM, we have already talked about tool calling.

00:59.330 --> 01:03.380
The final piece of the puzzle is the agents that we are going to talk about.

01:03.380 --> 01:09.630
So agents, as you can see over here, is going to be helping us to perform some action based on the

01:09.630 --> 01:13.230
tools that we have got, and that is what we are going to be doing over here.

01:13.230 --> 01:19.350
I'm not going to talk about the already available agents, because if you have seen, uh, hugging face

01:19.350 --> 01:22.230
also has got an agent called as smiles agent.

01:22.230 --> 01:27.330
So if you just go and search for hugging face, uh, small, uh, small agents.

01:27.510 --> 01:28.560
Um, yeah.

01:28.590 --> 01:29.430
This one.

01:29.610 --> 01:35.160
Uh, so you see that this is an agent which is going to perform some action for you.

01:35.160 --> 01:40.020
So, uh, if you just go to Conceptual guide, what are the agents?

01:40.020 --> 01:45.300
So any efficient system using I will need to provide some kind of access to the real world.

01:45.300 --> 01:50.850
For instance, the possibility to call a search tool to get, uh, external information, like how we

01:50.850 --> 01:57.270
did in our last, uh, section where we give where we gave the LM, uh, the external, uh, real world

01:57.270 --> 01:58.650
access with Wikipedia.

01:58.650 --> 02:01.110
That's exactly what they are talking about over here.

02:01.140 --> 02:07.260
Or an act on certain program in order to solve a task, which is what we did in our last section, where

02:07.260 --> 02:14.710
we gave the ability for the agent to, uh, to perform addition, multiplication and subtraction operation

02:14.710 --> 02:17.080
with our custom program that we built.

02:17.110 --> 02:25.210
In other words, heirloom should have a agency which is nothing but the tools that we have.

02:25.210 --> 02:30.880
And the genetic programs are the gateway to the outside world of the Elm, which is amazing.

02:30.880 --> 02:36.340
That's what we have already did most of the time, and they have got some details of how the agents

02:36.370 --> 02:40.570
needs to be one of the things that you need to avoid, and they have got a lot of discussions and details

02:40.570 --> 02:41.110
over here.

02:41.110 --> 02:46.780
But most important thing that you need to understand with this particular LM agents is that they are

02:46.780 --> 02:55.240
going to think and do the action and then perform other action, or maybe calling other tools to complete

02:55.270 --> 02:56.230
a certain task.

02:56.230 --> 03:05.260
So the agents are going to be relentlessly work for you to get the most optimal output from the question

03:05.260 --> 03:12.220
that you have asked via all the available tools and the custom tools, and from the reasoning engine,

03:12.220 --> 03:16.330
which is the large language model, and get you the response that you are looking for, that is the

03:16.330 --> 03:17.350
power of the agents.

03:17.380 --> 03:21.160
Whereas if you just ask a query to your large language model.

03:21.160 --> 03:22.780
It's just going to output it immediately.

03:22.780 --> 03:28.510
Whereas with this tool calls, it is going to keep on calling quite a lot of different tools before

03:28.510 --> 03:30.610
it answers the correct questions.

03:30.640 --> 03:33.160
So you see that this is what the diagram is really.

03:33.190 --> 03:35.170
It is going to keep updating its memory.

03:35.170 --> 03:39.520
And then it is going to again call the tool call to to get the right output.

03:39.520 --> 03:42.070
And then it is going to give the response to you back.

03:42.070 --> 03:44.170
So the final answer is going to come up over here.

03:44.170 --> 03:50.950
So it is going to do a lot of different operation before it gets you the final output, which is amazing.

03:50.950 --> 03:57.130
And that is what we are going to be doing in this particular section of how we can make use of the agents

03:57.130 --> 04:00.850
in a long chain, but not for you to build the agents.

04:00.850 --> 04:06.130
We are going to start looking at the agents class, which is available in long chain, and we're going

04:06.160 --> 04:06.670
to do that.

04:06.670 --> 04:12.610
But the first use case that we are going to be doing in this particular section is going to be how we

04:12.610 --> 04:21.550
can replace our existing tool calling and selection logics that we wrote to execute the the tools with

04:21.550 --> 04:23.440
the agents.

04:24.070 --> 04:26.050
We'll be talking about that in our next lecture.

========================================================================================

WEBVTT

00:00.050 --> 00:00.380
All right.

00:00.410 --> 00:06.680
In our last section, we discussed how we can give the ability for the large language model with the

00:06.680 --> 00:14.030
tool bindings to have an external tools like Wikipedia or internal custom methods like addition, subtraction,

00:14.030 --> 00:14.930
multiplication.

00:14.930 --> 00:17.300
And it gave us the answer that we're looking for.

00:17.330 --> 00:18.110
Amazing.

00:18.380 --> 00:27.320
Uh, but we actually did a tool execution logic within our own custom code, because the LLM can anyways

00:27.320 --> 00:33.560
choose the correct tools and it selects that, but it doesn't have the ability to execute it unless

00:33.560 --> 00:35.870
until we create like a prompt.

00:35.900 --> 00:39.740
Remember that's what was really happening in our last section.

00:39.740 --> 00:42.590
So we ended up writing a tool execution logic.

00:42.620 --> 00:47.930
I mean, we created a prompt which has got the tool to be executed and the response from the tool invoke

00:47.930 --> 00:48.380
method.

00:48.380 --> 00:54.410
And then we bounded that in the message, and then we pass it as a prompt to the large language model,

00:54.800 --> 00:57.920
which can then give us the output which is looking for amazing.

00:57.920 --> 01:04.670
But now we're going to remove that logic from here, and we're going to bring that our, uh, agents

01:04.670 --> 01:12.140
to do that operation for us, because I agents has the ability to do the selection of the tools based

01:12.140 --> 01:18.350
on the tool binding and route the query to the right tool, which is amazing.

01:18.350 --> 01:21.500
It's not going to route, but it's also going to execute that for us.

01:21.500 --> 01:26.690
So the the number of lines of code that you're going to be writing over here is going to be tremendously

01:26.690 --> 01:29.480
less compared to what that we have wrote before.

01:29.480 --> 01:34.280
So you'll notice that now if I ask what is the sum of two and four and who is the current president

01:34.280 --> 01:40.700
of USA in 2025, then I'm asking two questions over here, and you will notice that the large language

01:40.700 --> 01:44.180
model is going to ask that to the agent.

01:44.180 --> 01:50.330
And the agent is going to take care of every single operation that you have, and it is going to call

01:50.330 --> 01:56.270
the the available tools that is been bound with this particular large language model.

01:56.270 --> 02:01.400
And it's going to execute them one by one, and it is going to create that response for you, and it

02:01.400 --> 02:04.070
is going to give you both the responses is like this.

02:04.070 --> 02:05.720
This is fabulous, right?

02:05.720 --> 02:10.790
Because you don't even have to write the logics like how you wrote before, and you actually are going

02:10.820 --> 02:17.060
to be relying on the agent, which is going to do all the heavy lifting for you to to do those operations.

02:17.060 --> 02:17.660
Already.

02:17.660 --> 02:21.980
Most of the heavy decision making operation is taken care by this reasoning.

02:22.160 --> 02:23.840
Large language model engine.

02:23.840 --> 02:29.390
And now we are going to use this AI agent on top of it, which is going to simplify our code even further.

02:29.390 --> 02:31.400
That is the power of agents, guys.

02:31.430 --> 02:38.180
And that is why I wanted you to understand this details before, so that we can cover the agents even

02:38.180 --> 02:39.620
further in a better fashion.

02:39.620 --> 02:43.520
So let's see how we can actually achieve the entire operation in this particular section.

02:43.520 --> 02:46.820
So the first thing is we are going to use our agents.

02:46.820 --> 02:52.850
So for doing that I'm going to create another folder here.

02:52.850 --> 02:55.250
I'm going to call this as section seven.

02:55.760 --> 02:58.850
Uh I'm going to call this as agents.

02:59.180 --> 02:59.870
Uh sorry.

02:59.870 --> 03:05.050
This uh section six could have been a tools rather agent itself because we have not really talked anything

03:05.050 --> 03:06.760
about the agents yet.

03:07.330 --> 03:08.500
This is called the tools.

03:08.500 --> 03:11.470
I don't know why I just gave it like agents there.

03:11.860 --> 03:15.250
Uh, I want to rename that to tools.

03:15.250 --> 03:16.420
Sorry about that.

03:16.630 --> 03:20.230
Uh, and over here I'm going to create an agent.

03:20.230 --> 03:22.840
So I'm going to create a new Jupyter node.

03:22.990 --> 03:24.340
I'm going to save this.

03:24.340 --> 03:29.680
And I'm going to call this as agents over here.

03:30.100 --> 03:32.770
Uh, and I'm going to start working from here on.

03:32.770 --> 03:33.670
But guess what.

03:33.700 --> 03:39.970
I'm going to copy paste some of the code as usual from here, uh, to this guy, select the kernel.

03:40.270 --> 03:43.840
Uh, and I also need to close this one.

03:43.840 --> 03:44.980
I don't need it.

03:45.340 --> 03:47.560
Uh, and look at that.

03:47.560 --> 03:50.440
These are all just failing because I need to select the kernel.

03:50.470 --> 03:56.110
So this is the existing, uh, section code that I'm trying to run over here, just in case.

03:56.110 --> 04:04.960
So that it all have all the response while you get the, uh, code from the source code repo from the

04:04.960 --> 04:05.620
course.

04:05.670 --> 04:06.270
Cool.

04:06.270 --> 04:07.350
It's all working.

04:07.380 --> 04:11.340
I'm gonna close this guy, and we are back to the agents over here.

04:11.340 --> 04:13.560
And if I execute this, this is just going to work.

04:13.560 --> 04:14.010
Fine.

04:14.040 --> 04:14.910
Amazing.

04:15.090 --> 04:19.590
So now what I'm going to do is I'm going to copy paste some of the code that I have already written

04:19.590 --> 04:27.660
from the tools anyways because that is required, which is the, uh, which is the Wikipedia as well

04:27.660 --> 04:32.310
as uh, the custom tools that we have built before.

04:32.310 --> 04:36.960
So I am going to need all of them from the previous section.

04:36.960 --> 04:49.950
So I'm going to say, uh, bringing uh, back the code from previous section for tools, uh, binding.

04:49.950 --> 04:54.330
Add the code, and I'm going to bring all the code that we have got.

04:54.330 --> 04:59.640
So this is required I'm going to bring the Wikipedia.

04:59.700 --> 05:02.910
And I also have built the custom tools.

05:02.910 --> 05:05.430
So I'm going to write that as well.

05:05.460 --> 05:06.480
In the same block.

05:06.480 --> 05:10.890
We don't have to create like a separate blog for that matter, just this one.

05:11.700 --> 05:14.370
And this is going to be here.

05:14.370 --> 05:19.800
So we have got the Wikipedia and all the tools that we have built.

05:19.800 --> 05:22.740
And I have mapped that with the tools array over here.

05:22.740 --> 05:23.550
Fine.

05:23.790 --> 05:25.890
This is the only code that I require.

05:25.890 --> 05:32.400
And then all these logics from thereon that we wrote is all not required, but we are going to be using

05:32.400 --> 05:35.790
the agents to do it for us over here.

05:35.790 --> 05:37.680
So let's see what change is going to happen.

05:37.770 --> 05:43.230
So I'm going to add a markdown I'm going to say agents code.

05:44.430 --> 05:47.400
Uh and over here I'm going to start writing the code.

05:47.400 --> 05:53.790
So for working with agents I'm going to call the Lang chain dot agents.

05:53.790 --> 05:58.290
And I'm going to import uh, two classes.

05:58.290 --> 06:00.990
Probably one is the initialize two methods.

06:00.990 --> 06:02.370
One is the initialize agent.

06:02.370 --> 06:05.040
And there is a class called as agent type.

06:05.040 --> 06:07.170
So we need both of them over here.

06:07.530 --> 06:13.590
Uh, and I need to create a variable as agent, and I'm going to call the initialize agent.

06:13.590 --> 06:17.490
And over here I need to supply a few things.

06:17.520 --> 06:21.000
So as you can see it needs a sequence of tools like base tools.

06:21.000 --> 06:23.820
So tools is nothing but our tools that we have got.

06:23.820 --> 06:27.780
So I'm just going to say tools as tool.

06:28.110 --> 06:32.670
Uh and then we also have got the LM.

06:32.670 --> 06:37.290
So I'm going to say LM is equal to the local LM that we have got.

06:37.320 --> 06:42.510
And the agent is going to be the agent type.

06:42.510 --> 06:44.580
So I need to pass an agent type here.

06:44.580 --> 06:48.840
And I need to pass the agent type as structured.

06:49.500 --> 06:52.830
Uh chat zero short react description.

06:52.830 --> 07:02.070
The reason why I'm choosing this one is because our methods that we have got is actually going to accept,

07:02.370 --> 07:04.740
uh, like, just like two integer over here.

07:04.740 --> 07:13.070
So we need to structure the calling of the tools before I pass the message to the tools itself.

07:13.070 --> 07:15.950
If not, our tool is just going to fail abruptly.

07:15.950 --> 07:21.440
So for instance, if I'm going to use like something called a zero shot react description, that the

07:21.440 --> 07:27.110
code is just going to fail because it is going to because our method, like the custom tools that we

07:27.110 --> 07:31.550
have written over here, expects these value as a structured input.

07:31.550 --> 07:36.380
So if there is not not a structured input comes in, then our agent is just going to fail.

07:36.380 --> 07:38.900
And because our tools will not support that.

07:38.900 --> 07:44.240
And that's why we need to have this structured chat zero react description.

07:44.270 --> 07:44.870
Right.

07:44.930 --> 07:54.500
And then I'm going to add a verbose here, uh, just in case so that I get the, the result, uh, in

07:54.500 --> 07:56.090
the verbose fashion.

07:56.090 --> 08:00.380
So you can see what's really happening with the, with the agent while it is executing them.

08:00.800 --> 08:01.400
Right.

08:01.670 --> 08:06.650
That's the agent declaration using the initialize agent method.

08:06.800 --> 08:18.890
And now fun part Query and I'm going to say, what's the sum of three and four, right.

08:19.040 --> 08:20.480
I'm going to ask this question.

08:20.570 --> 08:28.400
And remember last section we were actually if we try to call this query and if we pass it to the the

08:28.400 --> 08:31.850
the agent, it couldn't able to answer the question for us.

08:31.850 --> 08:33.590
But now look at that.

08:33.590 --> 08:42.410
I am not even bounding the large language model with the the tools that we have got using the bind tools

08:42.410 --> 08:48.920
method, like how I have did, uh, over here, like lm dot bind tools method.

08:48.920 --> 08:55.520
I'm not even doing that over here because the binding is really happening over here with the agents.

08:55.520 --> 08:58.940
I'm just going to pass the raw agent we have got.

08:58.940 --> 09:03.560
And this guy, the agent, is going to do all these heavy lifting for us.

09:03.560 --> 09:04.580
It's going to choose.

09:04.580 --> 09:05.990
It's going to bind the tools.

09:05.990 --> 09:08.660
And also it's going to call the right tool for us.

09:08.660 --> 09:15.710
And it's also going to Uh, invoke the right tool and execute it for us.

09:15.740 --> 09:16.850
So look at that.

09:16.850 --> 09:22.940
All the heavy lifting that we were doing before with our custom code is all going to be taken care by

09:22.940 --> 09:24.470
this agent code itself.

09:24.470 --> 09:34.850
And now I'm going to just say, uh, sorry, I'm just going to say the result is equal to I'm going

09:34.880 --> 09:36.350
to call the agent Dot.

09:36.350 --> 09:40.820
So you can call the invoke method or the run method doesn't matter whichever it is.

09:40.850 --> 09:48.080
And I'm going to pass the query over here and I'm going to print the result over here.

09:48.470 --> 09:50.570
Uh I'll save this.

09:50.570 --> 09:54.320
And now I'm going to run this code over here.

09:54.320 --> 09:59.420
But before I actually run that I just noticed that this is not tool, but this is tools that we need

09:59.420 --> 10:00.200
to call.

10:00.200 --> 10:01.610
Sorry about that.

10:01.610 --> 10:04.790
And now let's try to run this code.

10:04.790 --> 10:09.590
And you will notice that the moment I run this code it is just going to run fine.

10:09.620 --> 10:10.130
Look at that.

10:10.130 --> 10:10.610
It is.

10:10.610 --> 10:16.510
The agent is now calling the agent executor chain and it is running the action and it looks.

10:16.540 --> 10:17.080
Look at that.

10:17.080 --> 10:21.160
It has found the action the add numbers tool that it has to.

10:21.190 --> 10:27.490
Call and has passed the action input as A is three and B as four, and has the observation as seven.

10:27.490 --> 10:31.900
And then now this agent is thinking okay, I know what to respond.

10:31.900 --> 10:36.610
And then it is writing the final answer as the sum of three and four is seven.

10:36.610 --> 10:41.530
And then it has finished the chain, and it has given me the answer as the sum of three and four is

10:41.530 --> 10:42.250
seven.

10:42.340 --> 10:43.300
Look at that.

10:43.300 --> 10:49.630
The agent is doing all these operations for us over here magically, and we don't have to do anything

10:49.630 --> 10:50.530
over there.

10:50.530 --> 10:54.700
And now you have got the idea, like how this is working.

10:54.700 --> 11:05.710
And if I'm going to ask the question, uh, did Donald Trump won the 2024 presidential

11:07.690 --> 11:08.710
election?

11:10.030 --> 11:16.510
And now if I try executing it, you will notice that it is going to call the Wikipedia tool this time,

11:16.510 --> 11:21.280
and it is running the action there, and it has got the observation.

11:21.280 --> 11:26.410
So Donald Trump, who served 4,050% in 2017, includes implementation, blah blah, blah.

11:26.410 --> 11:33.280
And now it's again doing one more action because it looks like the answer was not what it is looking

11:33.280 --> 11:33.640
for.

11:33.640 --> 11:34.570
The agent is looking for.

11:34.570 --> 11:40.060
Now it's doing one more run and then it is giving me an answer.

11:40.060 --> 11:44.320
So therefore, Donald Trump was indeed the winner of 2024 presidential election.

11:44.320 --> 11:45.310
There we go.

11:45.430 --> 11:46.870
Look at that now.

11:46.900 --> 11:49.660
It has did a lot of observation in here.

11:49.660 --> 11:57.250
And finally, it could able to figure out that Donald Trump is actually a president of 2024 election.

11:57.250 --> 12:00.280
So he has won the election over there.

12:00.280 --> 12:07.270
So now if I go back to our Lang Smith over here and let's see what's really happening there.

12:07.300 --> 12:08.140
Look at that.

12:08.170 --> 12:11.950
We have got the agent executor comes in this time.

12:12.310 --> 12:18.580
And look at this such big gigantic output coming up from the agent executor.

12:18.610 --> 12:24.910
The agent executor is a structured chat zero shot react description and it is passing.

12:24.940 --> 12:29.590
We are passing this particular message and it is going to ask this particular um is going to get this

12:29.800 --> 12:33.490
output, but it is calling an LM chain behind the scene.

12:33.880 --> 12:35.080
And look at that.

12:35.080 --> 12:40.930
This chain has got uh, is calling this particular LM, uh, the chat.

12:40.960 --> 12:46.330
Uh olama LM and then it is going to get this particular response, and it's going to call the tool name,

12:46.330 --> 12:49.600
and the action is input, uh, over here.

12:49.600 --> 12:57.820
And it is also going to, uh, pass this particular action for the Wikipedia and is calling the Wikipedia

12:57.850 --> 12:58.360
tool.

12:58.360 --> 13:03.280
And then again, it is calling the chain or chat or llama to get the right answer because it thought

13:03.310 --> 13:05.140
it thought two times, if you remember.

13:05.170 --> 13:07.780
And then it is getting the answer they're looking for.

13:07.810 --> 13:11.380
Look at the how many number of tokens being spent this time 3830.

13:11.410 --> 13:16.180
Which is crazy because last time while we did it, it was a bit straightforward, if I'm remembering

13:16.210 --> 13:20.050
correctly, it was around how many tokens that we spent.

13:20.890 --> 13:22.690
Uh, yeah.

13:22.720 --> 13:31.630
I think for the Wikipedia, uh, we spent just 5.18 token and in total was 1000.

13:31.660 --> 13:35.890
Ah, yeah, it was 1355 tokens for these tools.

13:35.890 --> 13:41.890
But with the agent we are spending a lot of tokens there because it is doing quite a lot of different

13:41.920 --> 13:42.580
operation.

13:42.610 --> 13:43.270
Guess what?

13:43.270 --> 13:45.970
I'm going to change the question a bit this time as well.

13:46.450 --> 13:57.070
So I'm going to say, uh, what is the sum of uh, two and four?

13:57.670 --> 14:06.940
And did Donald Trump see, uh, and did Donald Trump win the won the 2024 presidential election?

14:07.060 --> 14:16.120
I'm going to say this and I'm going to say structure the response for me in JSON format.

14:16.990 --> 14:21.600
I'm asking so many things this time, and I'm gonna run this particular code.

14:21.630 --> 14:22.110
Look at that.

14:22.110 --> 14:27.330
Now the agent executed, chain executes again, and it calls the add numbers.

14:27.330 --> 14:28.890
There is an observation of six.

14:28.890 --> 14:31.080
And then it's going to call Wikipedia.

14:31.140 --> 14:33.960
And then it does that as well.

14:33.960 --> 14:39.390
And there is this final chain comes in and it is going to respond it for us over here.

14:39.420 --> 14:44.340
Unfortunately this is not in JSON format though, but it has given me both the answers.

14:44.370 --> 14:48.750
See that 24 the sum of two and four uh, four is six.

14:48.750 --> 14:52.230
As Donald Trump has not won 2024 presidential election.

14:52.260 --> 14:53.010
Crazy.

14:53.040 --> 14:57.060
He did win, but I don't know why this is giving the wrong answer there.

14:57.300 --> 15:03.840
Um, maybe I need to ask in a different way because, uh, Donald Trump won 24 presidential election,

15:04.680 --> 15:10.830
uh, and became a president, uh, in 2025.

15:10.860 --> 15:14.790
Probably not sure the agent was giving up so early this time.

15:15.120 --> 15:16.770
Let me try to run this again.

15:18.590 --> 15:23.840
So it's first calling the Wikipedia this time, instead of really calling that sum of two and four.

15:24.560 --> 15:25.430
Look at that.

15:27.320 --> 15:27.650
Ah.

15:27.680 --> 15:29.540
Why this is wrongly answering this question.

15:29.540 --> 15:31.280
I have no idea why this is happening.

15:31.310 --> 15:36.800
And he says Kamala Harris won in 2026 with 226 electoral vote.

15:36.890 --> 15:38.330
This is hallucination, guys.

15:38.330 --> 15:42.530
This is not how the the AI agent should respond.

15:42.560 --> 15:50.480
But now if I go to the AI agent over here, you will notice that this agent has got, uh, a lot of

15:50.480 --> 15:51.380
things over here.

15:51.410 --> 15:51.950
Look at that.

15:51.950 --> 15:54.830
It's just doing, uh, the calling of the ad number.

15:54.860 --> 15:56.660
It's also calling the Wikipedia.

15:56.690 --> 15:57.560
They're like two tools.

15:57.560 --> 16:03.620
It's been calling, uh, in one single time, and then it's responding in order to figure out this particular

16:03.620 --> 16:11.120
failing, uh, failing action there, we need to probably write a better chat prompt to get the answer

16:11.120 --> 16:11.990
for us over there.

16:11.990 --> 16:14.390
So which we are going to be doing in our next lecture.

16:14.390 --> 16:21.020
But you got the idea how this particular, uh, agent is really responding to us over here.


========================================================================================

WEBVTT

00:00.050 --> 00:00.560
All right.

00:00.560 --> 00:06.320
So now we saw how in our last lecture, there was some craziness going on with the, uh, with the question

00:06.320 --> 00:11.240
of the Donald Trump won the 2024 presidential election, it says Kamala Harris has won it, which is

00:11.240 --> 00:12.110
completely wrong.

00:12.110 --> 00:17.090
So what I have tried is like, I'm just trying to create a prompt template here.

00:17.090 --> 00:22.190
So the prompt template is going to actually serve as the question.

00:22.460 --> 00:24.020
Uh, pretty much like this.

00:24.050 --> 00:28.700
Like this is exactly the same kind of prompt template, this chat prompt template I'm passing in here.

00:28.700 --> 00:33.320
I'm asking that you are an expert in math and latest news across the globe.

00:33.530 --> 00:38.660
Uh, and then the user is asking, what is the sum of 22 and five?

00:38.660 --> 00:42.410
And Donald Trump won the presidential election of USA in 2024.

00:42.470 --> 00:44.900
And give me both the answers in JSON format.

00:44.900 --> 00:49.160
So this is the this is the total prompt that I have got over here.

00:49.460 --> 00:52.580
And now I'm going to use this prompt.

00:52.580 --> 00:55.400
I'm going to ask the question to agent.

00:55.400 --> 00:59.750
And we'll see if agent can answer that particular uh, question for me.

01:00.020 --> 01:01.790
Uh I have seen there is some anomaly.

01:01.820 --> 01:06.200
Sometimes it doesn't work really, but we will see if that is the case still.

01:06.200 --> 01:10.700
So I'm going to say uh, result and put it over here.

01:10.730 --> 01:15.880
But this time I'm going to use prompt template instead of the query that I was passing in before, and

01:15.880 --> 01:18.100
now I'm going to execute this particular code.

01:18.100 --> 01:19.300
So we'll see what can happen.

01:19.300 --> 01:20.110
So look at that.

01:20.110 --> 01:22.480
I need to provide two separate response.

01:22.480 --> 01:26.410
One for the math problem and another one for the historical fact.

01:26.440 --> 01:32.650
I will use the tool to first do that, first the question and then Wikipedia for the second look at

01:32.650 --> 01:33.070
that.

01:33.100 --> 01:37.870
It can able to think about this one first like like how the thinking model works.

01:37.870 --> 01:42.160
And then it is going to go with the add number function.

01:42.160 --> 01:46.000
And then it is going to give me the response as seven which is two plus five is seven.

01:46.000 --> 01:50.560
And then it is going to go with the uh, with the Donald Trump question.

01:50.590 --> 01:53.290
And again, unfortunately I don't know why is it always saying it's.

01:53.290 --> 02:00.100
No, because because President Donald Trump is the president of 2025 and he won the election in 2024.

02:00.100 --> 02:01.750
Uh, for some reason, it is not giving me.

02:01.750 --> 02:02.410
That's what I was saying.

02:02.440 --> 02:03.430
It's still going crazy.

02:03.460 --> 02:04.990
Just let's ignore about this question.

02:04.990 --> 02:17.650
Let's ask about what is the, uh, latest movie, uh, of Tom cruise, uh, hitting, uh, theater in

02:17.650 --> 02:23.710
2025, uh, which is Mission Impossible, uh, final recon, I guess.

02:23.950 --> 02:27.070
Uh, so let's see if we get the correct answer there.

02:27.730 --> 02:29.830
So the first answer is correct.

02:29.830 --> 02:31.780
The math problem just amazing.

02:31.780 --> 02:33.520
And Top Gun Maverick.

02:33.550 --> 02:35.530
To be honest, that's not the right one.

02:35.860 --> 02:38.650
We'll see what's going to happen with Wikipedia.

02:39.370 --> 02:40.990
Oh, look at that.

02:40.990 --> 02:42.280
It's still not correct.

02:42.280 --> 02:43.270
For some reason.

02:43.270 --> 02:48.880
It's not bringing me the right answer, even though I'm actually calling the correct tools in here.

02:48.910 --> 02:49.540
Look at that.

02:49.570 --> 02:52.480
This is going to the agent executor.

02:52.750 --> 03:00.580
Uh, it's calling, uh, the chat llama with the add numbers, and it's going to go to the Wikipedia

03:00.610 --> 03:01.270
as well.

03:01.300 --> 03:08.950
I don't know, for some reason it thinks Maverick is the latest movie, uh, of top of the Tom cruise.

03:09.070 --> 03:14.980
Uh, but you got the idea, like, how we can actually call how our agents can actually invoke two tools

03:14.980 --> 03:17.860
while we call that particular when we ask that question.

03:17.860 --> 03:23.080
And we can also see both of them, uh, how many times it's been called.

03:23.080 --> 03:26.740
It is all showing up over here in the agent executor.

03:26.740 --> 03:33.910
In our next lecture, we'll talk about another tools, which is the playwright tool that we can use

03:33.910 --> 03:41.830
with our agent to grab or extract the page from a web page and then give the response to us back.


========================================================================================

WEBVTT

00:00.080 --> 00:06.800
In this lecture, we are going to talk about how we can make use of our agent to perform other operation,

00:06.800 --> 00:11.150
not just about like the current information or anything like that, but we are going to see how we can

00:11.150 --> 00:20.420
build an agent which can do real time data extraction or web page data extraction using a playwright

00:20.450 --> 00:20.930
tool.

00:20.930 --> 00:24.830
So that is what we are going to be discussing in this particular lecture.

00:24.830 --> 00:31.010
So in order to do that I'm going to use a tool which is already built by the community, which is the

00:31.670 --> 00:33.890
uh, let's say lang chain.

00:36.830 --> 00:37.460
R tool.

00:37.460 --> 00:40.280
So if I just go navigate there, this is the tools.

00:40.580 --> 00:46.490
Uh, and if you just go all the way down, you can see that it's a web browsing tool, which is, uh,

00:46.490 --> 00:50.750
there are three tools available and one tool which I really like is the playwright browser tool.

00:50.750 --> 00:57.770
So if I just go choose this tool, you can see that this tool is quite interesting because it has got,

00:57.860 --> 01:00.920
uh, a bundle of toolkits included.

01:00.920 --> 01:06.810
One is the navigate tool, which is going to navigate the browser to any specified URL that you have

01:06.840 --> 01:11.700
got, and you can navigate back tool which is going to navigate you to the previous page.

01:11.730 --> 01:13.620
Click tool, extract text tool.

01:13.620 --> 01:14.910
Extract hyperlink tools.

01:14.940 --> 01:16.410
Get elements tool.

01:16.650 --> 01:17.850
Current page tool.

01:18.120 --> 01:23.430
These are things that are very, very interesting for us to work with because now we can use this within

01:23.430 --> 01:25.020
our code.

01:25.020 --> 01:30.270
And we'll see how that we can make use of it with our large language model as well of course.

01:30.990 --> 01:35.970
But before we start using it with our large language model and with our agents, I'm going to first

01:35.970 --> 01:39.600
use this tool and I will show you how we can make use of it.

01:39.630 --> 01:45.780
So in order for doing that, I'm going to go back to our Visual Studio Code over here.

01:45.810 --> 01:52.680
I'm going to put a markdown here, uh, using playwright uh, browser tool.

01:52.710 --> 01:57.120
And I'm going to add the code over here.

01:57.390 --> 02:03.170
Uh, so in order for working with that, we need to install the playwright, as you can see over here.

02:03.170 --> 02:12.830
So I'm going to go ahead and install that just playwright and also need to install the playwright web

02:12.830 --> 02:14.210
browser toolkit.

02:14.240 --> 02:20.030
I think the Playwright web browser toolkit is just going to be added for us with the toolkits that we

02:20.030 --> 02:20.510
have got.

02:20.510 --> 02:21.920
So I think that should be fine.

02:21.920 --> 02:24.260
So I'm going to put the code over here.

02:24.260 --> 02:28.760
So these are the things just require the from Lang Chain community.

02:28.760 --> 02:32.030
And we have this playwright uh browser toolkit.

02:32.030 --> 02:38.750
And we also need to run and create a async browser code which is this one.

02:38.750 --> 02:41.750
So if you want to run the synchronous code you can also do that.

02:41.750 --> 02:45.110
But if you're going to run the asynchronous code, this is what you should do.

02:45.110 --> 02:52.370
And because we're going to be running this code in the notebooks, we also need to call another library,

02:52.400 --> 02:59.780
which is the uh nest underscore async IO, because this is going to make your code to run, uh, in

02:59.780 --> 03:04.050
the loop in the Repl, loop in the, in the the notebook itself.

03:04.050 --> 03:11.040
And the way you can invoke this is by using nest underscore async dot apply, which is going to do it

03:11.040 --> 03:11.730
for you.

03:12.420 --> 03:17.280
So this is the important part that we have to do in order for our code to execute.

03:17.280 --> 03:25.230
And now we actually need to create the the async browser which which is basically in the playwright,

03:25.230 --> 03:31.770
we need to create the browser instance which can uh, which can be helpful for us to navigate to a page

03:31.770 --> 03:32.700
and things of that nature.

03:32.700 --> 03:39.150
So this is the, uh, this is the place where we create the browser instance, and I'm going to initialize

03:39.150 --> 03:45.450
all the toolkit which the playwright team has provided, like all these toolkits, which is required

03:45.450 --> 03:47.340
for, uh, me to execute.

03:47.340 --> 03:54.390
So I'm going to say, uh playwright web browser toolkit dot and I'm going to say from browser and the

03:54.390 --> 03:58.680
browser is going to be the async browser, which is going to be this guy.

03:58.710 --> 04:02.310
I'm going to list all the toolkit and I will show you how it's going to look like.

04:02.310 --> 04:10.850
So I'm going to say tools is equal to uh toolkit dot uh get tools because remember we need to have all

04:10.850 --> 04:16.610
these tools in place so that we can then pass it to the agent in our upcoming lectures, which can then

04:16.640 --> 04:19.250
execute based on the tools that we have got.

04:19.250 --> 04:25.490
And we can also pass these tools, uh, to perform an app operation using the large language models.

04:25.490 --> 04:31.220
So let's see how many tools that we have got, uh, within this particular async browser.

04:31.220 --> 04:36.650
So we have got Click tools, Navigate Tools, navigate back tool, extract tool and all these things

04:36.650 --> 04:38.900
that we actually saw over here.

04:39.980 --> 04:40.550
All right.

04:40.580 --> 04:43.040
It says current web page tools.

04:43.070 --> 04:47.750
There is a typo there I think this is current web page tool okay cool.

04:47.780 --> 04:51.350
But anyways these are the tools that we have got listed over here.

04:51.350 --> 04:53.720
And now we know what we need to do with this particular tools.

04:53.720 --> 04:54.020
Right?

04:54.020 --> 05:00.800
We can execute this tool by ourselves if we wanted to or if we wanted to uh, use it with LM, we can

05:00.800 --> 05:01.490
do that as well.

05:01.490 --> 05:10.050
So let's try to just use this tool locally and we will see how we can able to navigate to a tool.

05:10.050 --> 05:17.610
So for doing that, first of all, I'm going to get all the tools because I'm going to not use the,

05:18.180 --> 05:20.700
uh, the agent for now.

05:20.700 --> 05:27.990
So I'm just going to say tool dot name, like how we did in our, uh, last lecture while we were talking

05:27.990 --> 05:29.910
about tools, uh, last section.

05:29.910 --> 05:32.460
So I'm going to just do that same thing over here as well.

05:32.490 --> 05:35.790
Tool uh, in tools.

05:35.790 --> 05:40.470
So I'm going to grab all the tools and I'm going to create like a navigate tool.

05:40.470 --> 05:53.490
And this tool I'm going to get by name and I'm going to pass it as navigate uh to Navigate browser,

05:53.520 --> 06:00.540
probably because it's going to be navigating to the browser.

06:01.890 --> 06:04.290
So that is what I'm giving over here.

06:04.350 --> 06:11.690
Uh and then I also need to get the element for that matter, if I want to get it so I can do it as well.

06:11.960 --> 06:22.040
And if I want to get the elements, I can just do get uh, element tool is equal to tools by name.

06:22.400 --> 06:27.860
Uh, and I'm going to say get elements, something like that.

06:27.980 --> 06:31.370
So yeah, these are the tools that I have got over here.

06:31.400 --> 06:36.620
And let's try to print both the navigate tool and the Get Element tool.

06:36.920 --> 06:42.050
You'll notice that we're going to get this particular output over here for both the navigate tool as

06:42.050 --> 06:43.850
well as for the Get Element tool which is great.

06:43.880 --> 06:48.380
Now let's try to use this particular tool and see how that can uh can work.

06:48.380 --> 06:54.230
So I'm going to say uh await navigate tool dot a run like asynchronous run.

06:54.320 --> 06:57.740
And I'm going to say uh URL.

06:58.760 --> 07:07.260
And I'm going to pass the URL here as http colon e app.swami.com Uh, slash employee.

07:08.340 --> 07:17.340
So I'm going to ask the, uh, the tool to navigate me to this particular, uh, page, and you see

07:17.340 --> 07:21.540
that it returns me true over here, which means it could able to navigate it correctly.

07:21.540 --> 07:26.790
And I'm going to grab all the, uh, the table information from this particular link.

07:26.790 --> 07:33.960
So if I'm just going to go copy this URL and if I'm going to go search for this particular URL, I'll

07:33.960 --> 07:34.500
look at that.

07:34.500 --> 07:39.990
We have got these many users over here, uh, in this particular page.

07:39.990 --> 07:42.030
And I want to grab all the information.

07:42.030 --> 07:44.130
I wanted to list it down over here.

07:44.130 --> 07:53.670
So in order for me to do that I'm going to say await, uh, get Element Tools dot a run, and then I'm

07:53.670 --> 08:05.850
going to pass a selector here and that is going to be probably, uh, TD uh, I want to select all the

08:05.850 --> 08:08.060
uh, attributes.

08:13.370 --> 08:18.950
Inside the TD, which is going to be, uh, inner text for that matter.

08:19.820 --> 08:25.040
So if I want to get all the inner text from this particular TD, which is TD, is nothing but this particular

08:25.070 --> 08:27.140
TR, because it's a table row.

08:27.140 --> 08:30.380
And inside the table row you have got TD, which is the table data.

08:30.380 --> 08:34.940
So it is this is how like the tables are being designed in HTML file.

08:34.940 --> 08:37.160
So now I want to get all the information.

08:37.160 --> 08:37.730
Look at that.

08:37.760 --> 08:42.410
It just instantly gives me all the information over here.

08:44.480 --> 08:46.520
See which is amazing.

08:46.520 --> 08:47.810
This is powerful guys.

08:47.840 --> 08:51.440
Now we can see that this tool is quite amazing.

08:51.470 --> 08:58.460
Using this tool we could able to extract the web page and we can grab the information from the web page.

08:58.490 --> 09:04.130
In our next lecture, we will see how we can use this tool along with our AI agent.

09:04.310 --> 09:08.120
And we will see if we could able to perform the action that we are looking for.


========================================================================================

WEBVTT

00:00.110 --> 00:09.470
So now we are going to start writing the code for our agent to invoke the playwright, uh, browser

00:09.470 --> 00:13.670
tool that we have got before, um, that we discussed earlier.

00:13.670 --> 00:16.160
So we will see how we could able to achieve that.

00:16.160 --> 00:22.730
So essentially my idea is this I want to invoke the or use this playwright browser tool, uh, especially

00:22.730 --> 00:30.800
to grab the, uh, the page information which my agent, uh, which my LLM cannot do unless until I

00:30.800 --> 00:38.630
have that capability because we know that our agent, our Llms, don't have the ability to talk with

00:38.630 --> 00:43.010
the external world to get the real time informations right.

00:43.010 --> 00:53.210
But now we are going to see how our, uh, our LLM can get these information by extracting the page

00:53.300 --> 00:56.210
information and give me the details that we are looking for.

00:56.240 --> 01:02.550
We can also inquire from these information like what is the salary of Karthik for that matter?

01:02.550 --> 01:06.450
And what is the salary of Ramesh or John for that matter?

01:06.450 --> 01:07.680
So we can ask these questions.

01:07.680 --> 01:11.070
We can also check what is the email address of Karthik from this page.

01:11.070 --> 01:16.950
You can ask that so you can extract the information and then you can start querying from that particular

01:16.950 --> 01:17.520
information.

01:17.520 --> 01:22.650
So those things we can do and these abilities are only happening because we have got this playwright

01:22.650 --> 01:30.900
browser utility which can grab the external page information by opening the real browser instances.

01:30.900 --> 01:32.820
So we'll see how that we can achieve it.

01:32.820 --> 01:36.030
So for doing that once again we're going to write the code over here.

01:36.030 --> 01:42.420
And the code is going to look pretty much exactly the same way how we used our agent code here.

01:42.420 --> 01:45.360
So I'm going to copy this whole agent code.

01:45.780 --> 01:49.380
And I'm going to come all the way down here and I'm going to paste it.

01:50.010 --> 01:52.320
And this code remains exactly the same.

01:52.320 --> 01:53.760
The tools is going to be the tools.

01:54.030 --> 01:59.310
Uh, the agent type is going to be the structured chat zero shot, uh, description.

01:59.310 --> 02:02.620
But the query is not this query.

02:02.620 --> 02:03.460
Probably.

02:03.670 --> 02:06.670
I'm just going to say over here.

02:08.680 --> 02:22.720
What are the links in HTTP colon double slash e app.com/employee page.

02:22.720 --> 02:26.650
So basically I'm going to check what are the hyperlinks available in this particular page.

02:26.680 --> 02:28.720
So there are so many hyperlinks available here.

02:28.720 --> 02:35.110
So all these delete are hyperlinks edits or hyperlink benefits or hyperlink register login employee

02:35.140 --> 02:39.280
details about home are all hyperlinks maybe even this one.

02:39.280 --> 02:42.550
The web hosted hosting and Swami com is also a hyperlink.

02:42.550 --> 02:48.760
So let's see if this guy can get me all this particular response over here and over here.

02:48.760 --> 02:55.810
Instead of running like the agent dot run of the query before I execute it, we need to make sure that

02:55.810 --> 02:59.350
we are going to be running this in an asynchronous mode.

02:59.350 --> 03:04.400
Because remember this code that we have got, the tool that we have got is an asynchronous code.

03:04.400 --> 03:08.390
So we need to run this in a run like asynchronous fashion.

03:08.390 --> 03:14.300
And if you're going to be writing running in a synchronous way, then we need to use the await keyword.

03:14.420 --> 03:16.190
If not, the code is not going to work.

03:16.190 --> 03:18.860
So I'm going to say await over here.

03:18.860 --> 03:21.050
And that's going to get the results for us.

03:21.080 --> 03:24.050
And now let's try to run this code and see what's going to happen.

03:24.080 --> 03:24.590
Look at that.

03:24.590 --> 03:30.650
Now this is going to run in the asynchronous fashion and it is entering the new agent executor chain.

03:30.680 --> 03:32.780
It's going to navigate to the browser which is this one.

03:32.780 --> 03:37.700
And it is extracting all the hyperlinks because there is a tool for extract hyperlink.

03:37.880 --> 03:41.180
And it is looking at all the hyperlinks over here.

03:41.210 --> 03:43.190
Look at that employee ID.

03:43.190 --> 03:48.320
It has got 2371489 are all hyperlinks.

03:48.560 --> 03:51.200
And it is just printing that over here.

03:51.230 --> 03:55.880
And please note that some link might not work directly visible to the page and could not be part of

03:55.880 --> 03:55.970
it.

03:55.970 --> 04:01.190
So it shows me that these are the hyperlinks available over there, which is amazing.

04:01.220 --> 04:06.640
Now let's say I'm going to say extract the table details of the page.

04:06.640 --> 04:09.580
Because we saw that there was some table there.

04:09.580 --> 04:16.330
So I'm going to say extract the table, uh data from this particular page.

04:16.330 --> 04:22.150
So now this is going to keep on uh extracting all the table details.

04:22.180 --> 04:26.050
Look at that uh, over here and is thinking about it.

04:26.050 --> 04:30.220
And finally, it should have printed that detail for me.

04:30.940 --> 04:32.890
Uh, is it still doing?

04:33.520 --> 04:34.420
Yeah, I think it has.

04:34.420 --> 04:34.990
Did it.

04:35.020 --> 04:35.980
Oh, look at that.

04:36.010 --> 04:40.180
See, it has got all the details and it is printing that for me over here.

04:40.180 --> 04:42.970
Maybe I need to just ask this question even more.

04:42.970 --> 04:43.750
Better?

04:43.840 --> 04:51.550
Uh, extract the table data for me in this page, uh, and print it in JSON.

04:52.780 --> 04:54.490
So now if I do it.

04:55.360 --> 04:56.620
Yeah, it's doing it.

04:56.650 --> 04:57.850
Observation.

04:58.660 --> 05:00.790
Yeah, it's doing quite a lot of different operations this time.

05:00.790 --> 05:05.850
So if you just go back to our, uh, Lang Smith over here.

05:05.850 --> 05:09.630
You should see a lot of calls are really happening for us over there.

05:09.660 --> 05:11.640
There are some errors as well.

05:11.670 --> 05:13.620
I don't know what's that, but look at that.

05:13.620 --> 05:14.490
So.

05:14.520 --> 05:16.290
Oh, my God, look at that.

05:16.320 --> 05:19.980
How many calls are really happening with our agent this time?

05:19.980 --> 05:23.340
It just keep on doing a lot of different operation there.

05:23.340 --> 05:30.240
It's calling the, uh it's calling the chatbot Lama, and then it just keep on extracting that information,

05:30.240 --> 05:32.100
parsing it again, parsing it again.

05:32.100 --> 05:38.880
And finally, I think it is going to get that response for us over here, uh, as a human response.

05:38.880 --> 05:40.170
So look at that.

05:40.740 --> 05:41.700
Uh, okay.

05:42.030 --> 05:42.540
There we go.

05:42.540 --> 05:45.510
So we got this multiple action response over here.

05:45.510 --> 05:49.860
So if I go to the text editor, uh, you should see.

05:49.860 --> 05:52.590
But I could see here, like I got the multiple action response.

05:52.590 --> 05:53.400
The name is Karthik.

05:53.400 --> 05:54.480
Salary is 400.

05:54.510 --> 05:56.310
Sorry 4000 and duration worked.

05:56.310 --> 05:56.760
Is this.

05:56.760 --> 05:57.780
And this is the email.

05:57.810 --> 06:00.240
You see that it's all in JSON format right now.

06:00.240 --> 06:03.880
And it just keep on printing that value for me over here.

06:03.880 --> 06:05.740
And then it is getting that response.

06:05.740 --> 06:14.590
And finally, it also failed in a JSON decode error for some reason, because maybe the the data has

06:14.590 --> 06:19.030
got something which the JSON parser couldn't able to parse it for some reason.

06:19.060 --> 06:20.890
And that's the reason why this is failing.

06:20.890 --> 06:27.010
But never mind, you still saw that the the response was all just coming through from this particular

06:27.010 --> 06:27.640
page.

06:27.850 --> 06:38.140
And, and let's say now if I wanted to uh, now let's say if I wanted to do extract the table data from

06:38.140 --> 06:50.950
this particular page, uh, and check and get me the salary average for all the employees.

06:53.230 --> 06:54.610
I'm just going to ask this question.

06:54.610 --> 06:58.540
I never asked it before, but let's see if it could able to do that.

06:58.870 --> 07:02.170
Um, so let's see, what is it doing.

07:02.500 --> 07:03.980
So it's extracting it.

07:03.980 --> 07:12.470
And now hopefully it could able to get the average salary of all the employees in this particular list.

07:12.470 --> 07:18.560
And most importantly, you will notice that all these are all happening from our local large language

07:18.560 --> 07:19.970
model over here.

07:19.970 --> 07:27.770
And this could cost your machine's performance hit as well because this could be slower if you have

07:27.800 --> 07:33.500
a slower machine, and if you have a faster machine, this execution will be even more faster.

07:33.530 --> 07:36.770
It is not that slow that you are seeing in my machine.

07:37.130 --> 07:37.940
Look at that.

07:37.940 --> 07:40.160
So it gets an observation here.

07:40.190 --> 07:42.170
The index 4000 is a salary.

07:42.170 --> 07:49.250
So for all the salaries it has got over there and still it is trying to process because the final oh

07:49.280 --> 07:49.580
there we go.

07:49.610 --> 07:54.680
The final answer the average salary of the employee is 2022.

07:54.920 --> 07:56.780
Uh .22.

07:56.810 --> 08:03.950
So this is the average approximate salary of all the employees in this particular company over here,

08:03.990 --> 08:08.460
which is very bad because you see that there are some 200 salary as well.

08:08.490 --> 08:11.790
That's the reason why the average has reduced tremendously.

08:11.790 --> 08:17.010
But yeah, now we could able to get this information from the agent over here.

08:17.070 --> 08:23.220
And this is all happening because of the the access of the external browser capability that we have

08:23.250 --> 08:23.460
got.

08:23.490 --> 08:25.650
And we get these information out from here.

08:25.650 --> 08:31.110
Everything is happening within our local large language model where it does the execution.

08:31.590 --> 08:36.330
I'm just curious, what if we change the model over here and then try to run that?

08:36.330 --> 08:37.770
I will let you to do it.

08:37.770 --> 08:44.040
Just try to use a better model like llama 3.3 or 3 dot two model, which has the tooling support, and

08:44.040 --> 08:49.890
try to run this and see how the performance is and how better response that you get it from there,

08:49.890 --> 08:55.860
so that you will notice that the things will be better if you use these kinds of latest large language

08:55.860 --> 08:56.430
model.

08:56.760 --> 09:03.930
So that's about how you use the external tools along with agents, and you get the responses for your

09:03.930 --> 09:05.220
web page extraction.


========================================================================================
