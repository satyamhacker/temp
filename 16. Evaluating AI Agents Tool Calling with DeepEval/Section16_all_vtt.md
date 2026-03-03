WEBVTT

00:00.110 --> 00:01.760
Welcome to the next section of our course.

00:01.760 --> 00:06.890
And in this section we are going to talk about how we can test the AI agent tool callings.

00:06.890 --> 00:12.590
So tool calling is another important feature that we saw in our earlier sections of this course, where

00:12.590 --> 00:19.610
we were talking about how we can do use the tooling support that we have got over here that we have

00:19.640 --> 00:23.030
built, and we can fuse that with our AI agents.

00:23.030 --> 00:28.310
And the decision engine in this case is going to be our large language model.

00:28.310 --> 00:33.530
But still the tool is the one which is responsible for invoking the appropriate tool for us, for instance,

00:33.530 --> 00:39.020
the Wikipedia tool or the subtract custom tool or addition tool or playwright tool that we have built.

00:39.050 --> 00:44.240
So all these tools, it's going to be invoked by the AI agent for us.

00:44.240 --> 00:47.150
And these are the tools which are going to be invoked for us.

00:47.150 --> 00:52.430
And just consider this like we have got our organization with more than hundreds and thousands of tools,

00:52.430 --> 00:59.120
and we need to test how these tools are correctly being invoked based on a given input parameter.

00:59.120 --> 01:04.340
So in order for making that happen, we need to ensure that the AI agent calls the exact tool.

01:04.340 --> 01:11.060
And in order to measure this, we are going to be using our deep eval feature with tool correctness

01:11.110 --> 01:12.370
evaluation metrics.

01:12.370 --> 01:17.050
So this is the feature where it is going to be helping us to perform the same kind of operation that

01:17.050 --> 01:18.040
you are seeing over here.

01:18.040 --> 01:21.880
We are going to be passing the same kind of data to our deep valve.

01:21.880 --> 01:30.040
But just that over here we are going to verify whether the invoked tool coming from the actual tool

01:30.040 --> 01:34.270
is matching to the expected tool invocation that we have got.

01:34.300 --> 01:39.670
And the way that we can do it is using the tool correctness metrics available in deep eval, as you

01:39.670 --> 01:40.570
can see over here.

01:40.570 --> 01:47.380
So this tool correctness metric is an a generic LM metrics that assess your large language models agents

01:47.380 --> 01:49.360
function tool calling ability.

01:49.360 --> 01:57.010
And it calculated by comparing whether every tool that is expected to be used was intended as called

01:57.010 --> 01:57.880
there or not.

01:57.910 --> 02:01.000
And you can see that they have got some required arguments.

02:01.000 --> 02:04.840
You need to pass the input actual output tool called an expected tool.

02:04.840 --> 02:09.040
So these are the only thing which is as a required argument for this tool correctness metrics.

02:09.040 --> 02:11.590
And they have given a simple example over here.

02:11.590 --> 02:17.290
And most importantly you can notice that this particular tool metrics the tool correctness metrics.

02:17.290 --> 02:25.110
You can't really use it with the confident I portal so you can see that they don't really have an evaluate

02:25.110 --> 02:28.020
method like deep eval dot evaluate method.

02:28.020 --> 02:29.370
You can't really use it over here.

02:29.370 --> 02:35.550
So if you just go to the contextual relevance metrics over here, you can see that you can evaluate

02:35.550 --> 02:38.700
in bulk using this evaluate method.

02:38.700 --> 02:44.940
And this evaluate method is the one which is going to call the confident AI's portal.

02:44.940 --> 02:48.780
And it's going to show you the graph and all those things that we were doing in our last lecture section

02:48.780 --> 02:49.620
of this course.

02:49.620 --> 02:56.370
But over here, uh, in this particular tool, correctness, you can't see that there is going to be

02:56.370 --> 02:58.200
an evaluate method supported.

02:58.200 --> 03:03.780
So evaluate method is not supported to perform this operation at the moment during the time of recording.

03:03.780 --> 03:05.190
So maybe in future they will.

03:05.220 --> 03:10.830
But at the moment they don't really have the way to do a comparison of the tool correctness and things

03:10.830 --> 03:11.580
of that nature.

03:11.580 --> 03:18.990
So you don't see those information in your, uh, confident AI portal that we were discussing in our

03:18.990 --> 03:20.340
last section of the course.

03:20.340 --> 03:23.490
So you don't see that fancy, uh, you know, graphs and stuff.

03:23.490 --> 03:25.800
But over here it is very straightforward.

03:25.800 --> 03:30.150
All you have to do is you need to just prepare the data for the LM test case, like how we did in our

03:30.150 --> 03:31.350
earlier section of the course.

03:31.410 --> 03:34.350
And the only thing is you need to just call the tool correctness metrics.

03:34.350 --> 03:35.910
And then you can do a measure.

03:35.910 --> 03:37.770
And that is going to do the measurement for you.

03:37.770 --> 03:43.470
And they have got a lot of different parameters that you can pass in, uh, to ensure that the tool

03:43.470 --> 03:45.150
correctness mechanism works fine or not.

03:45.150 --> 03:50.760
And the way it is calculated is basically tool correctness is the number of correctly used tool, which

03:50.760 --> 03:54.600
is from the input and output parameter and the total number of tools being called.

03:54.630 --> 03:58.830
Based on that, it is going to give you the average of the tool correctness over here.

03:59.610 --> 04:06.360
And you will also notice that for the tool called parameter we need to have, we need to call a class

04:06.360 --> 04:07.440
called as tool call.

04:07.440 --> 04:09.540
And you need to pass the name of the tool.

04:09.540 --> 04:15.480
And you can also pass not just the tool call, but you can also pass the input parameter output parameter

04:15.660 --> 04:19.110
in this particular tool called so that it will become even more realistic.

04:19.110 --> 04:23.940
Because every tool that we build, we will have an input parameter and an output parameter, or maybe

04:23.940 --> 04:26.880
an output itself for from that particular tool.

04:26.880 --> 04:29.220
So we can pass those informations as well.

04:29.310 --> 04:33.690
So we will see how we can make all of these happen in this particular section.

04:33.690 --> 04:41.880
And we can ensure that we can also test the AI agents tool calling feature from within our tool Correctness

04:41.880 --> 04:42.660
metrics.

========================================================================================

WEBVTT

00:00.020 --> 00:03.710
So now I'm in the Visual Studio Code and I'm going to start writing the code.

00:03.710 --> 00:07.970
And in this section is going to be like an extension of our last section itself.

00:07.970 --> 00:12.680
So if you have watched our earlier section order code that I'm going to be writing over here is going

00:12.710 --> 00:15.590
to be pretty much exactly the same like our last section.

00:15.590 --> 00:21.230
So I would recommend you to please go and watch our earlier section where we were talking about how

00:21.230 --> 00:24.200
we can do RAC testing with deep eval.

00:24.230 --> 00:29.510
The same idea is going to be used over here, but just that it's going to be a different metrics altogether.

00:29.510 --> 00:33.200
And we are going to be using AI agent instead of RAC over here.

00:33.200 --> 00:36.350
And the coding is going to remain exactly the same for the deep level.

00:36.380 --> 00:37.730
It's not going to be much of a change.

00:37.730 --> 00:43.700
So this section is going to be very small compared to our last section, because we have discussed even

00:43.700 --> 00:47.450
the portal in our last section, like the confident AI portal.

00:47.450 --> 00:53.450
And here there is no confident AI portal itself because of the way this tool correction metrics really

00:53.450 --> 00:53.840
works.

00:53.840 --> 00:56.270
So we don't really need to go through that as well.

00:56.270 --> 00:59.360
So it's going to be just like a straightforward verification over here.

00:59.360 --> 01:03.530
So all the code that we are going to be seeing over here are going to remain exactly the same.

01:03.540 --> 01:05.880
and it is going to be very, very straightforward.

01:05.880 --> 01:09.270
So I'm going to copy paste all the codes which is sitting over here.

01:09.270 --> 01:11.640
And I'm going to start writing the code.

01:11.640 --> 01:17.250
So most of the code that you're going to be seeing is going to be just reused from here, from the existing

01:17.340 --> 01:18.750
section that we have discussed.

01:18.750 --> 01:25.110
So I'm going to go and even we don't even require this confident AI API key this time because guess

01:25.110 --> 01:25.530
what?

01:25.560 --> 01:30.120
We are not even going to pass any of the key information over there.

01:30.120 --> 01:32.640
So I'm just going to leave that guy as it is.

01:32.730 --> 01:37.560
And then we are going to start creating our tool that we are going to be working with.

01:37.560 --> 01:45.360
So the first thing that we are going to do is, I'm going to say creating the tools to pass in our AI

01:45.390 --> 01:48.120
agent, and I'm going to hit tick.

01:48.150 --> 01:53.160
And the tools, you remember the custom tools that we were building in our earlier sections of the course?

01:53.160 --> 01:56.970
I'm just going to use the exactly the same idea from the long chain.

01:56.970 --> 02:04.020
I'm going to get all the tools, and I'm going to go paste those tools over here.

02:04.050 --> 02:05.040
I'm going to run that.

02:05.040 --> 02:08.860
And we need to create the list of the tools like how we do before.

02:08.860 --> 02:13.390
So I'm going to do the list of the tools and I'm going to paste it over here.

02:13.390 --> 02:15.760
We don't even have the Wikipedia, so I'm just going to leave that.

02:15.760 --> 02:21.580
I'm just going to take the custom tools this time just for the demonstration purpose, and I'm going

02:21.580 --> 02:27.610
to create that tool, and then we're going to call our AI agent to perform the operation.

02:27.610 --> 02:33.340
And remember the agent discussion we were doing in our section seven of this folder structure, not

02:33.340 --> 02:36.550
the actual section seven of the Udemy course that you have got.

02:36.580 --> 02:44.020
But the section over here in the the structure of our Visual Studio Code.

02:44.020 --> 02:51.400
So over here you can see that this is the agent code that we wrote, which is going to invoke our custom

02:51.430 --> 02:52.600
tools that we have built.

02:52.600 --> 03:01.960
So I'm going to put a markdown over here and I'm going to say the AI agent code to invoke our custom

03:01.960 --> 03:04.390
Toolings something like that.

03:04.390 --> 03:07.090
And I'm going to add the code over here.

03:07.090 --> 03:09.800
So the tools is the tools that we just created over here.

03:09.800 --> 03:13.190
I have copy pasted that and we are going to start running it.

03:13.580 --> 03:14.930
This is just going to work fine.

03:14.930 --> 03:18.020
So if I let's say remove this guy from here.

03:18.410 --> 03:19.850
So what is the sum of two and four.

03:19.850 --> 03:23.960
So if I execute it this is going to run uh the agent executor chain.

03:23.960 --> 03:29.120
And you know what is going to happen because this is going to call our custom tool like add number tools,

03:29.150 --> 03:31.910
which we have defined over here.

03:32.000 --> 03:36.860
And then the LM is going to respond it like the sum of two and four is six.

03:37.010 --> 03:38.750
So that it is very straightforward.

03:38.750 --> 03:40.790
So basically this is what is really happening.

03:40.790 --> 03:43.160
So if you give what is the sum of two and four.

03:43.190 --> 03:48.560
And then this the agent is going to choose appropriately the add numbers tool.

03:48.560 --> 03:49.970
And then it is going to give us the answer.

03:49.970 --> 03:56.540
So if I am going to ask the question uh, what is the uh double of two, which is going to be the multiplication

03:56.540 --> 03:57.260
in this case.

03:57.260 --> 04:01.580
And what I tried to run this, it is going to solve this by multiplying the two number.

04:01.580 --> 04:04.190
You can see that the thought is coming from the large language model.

04:04.190 --> 04:08.150
But in turn, the AI agent is going to invoke the multiply numbers tool.

04:08.150 --> 04:09.500
And then it is going to run them.

04:09.500 --> 04:11.450
And it's going to give us the answer as four.

04:12.080 --> 04:14.790
And the same thing is going to happen if you try to do a subtraction.

04:14.790 --> 04:21.270
So these are the operations that we have got from our AI agent and our custom tools that we have built.

04:21.270 --> 04:29.340
And now the question is, how do we test whether the AI agent correctly invokes the tool that we have

04:29.370 --> 04:30.270
built on the top?

04:30.750 --> 04:31.770
That is the quest, right?

04:31.800 --> 04:35.160
This is the thing that we are going to be discussing in this particular section.

04:35.160 --> 04:43.800
So in order to do that, we are first going to create our data set, which is the golden data set as

04:43.800 --> 04:49.500
we discussed in our last section of the course, which is this golden data set that we're talking about.

04:49.500 --> 04:53.580
But over here the questions are going to be a bit different comparatively, which is going to be the

04:53.580 --> 04:56.220
question like what is the sum of two and four?

04:56.280 --> 05:01.020
And then the answer is going to be the sum of two and four is maybe six.

05:01.020 --> 05:02.940
And similarly what is the double of two.

05:02.970 --> 05:05.640
Then the answer is going to be the double of two is four or something like that.

05:05.640 --> 05:07.770
So I'm going to write all of these over here.

05:08.010 --> 05:11.970
And then I'm also going to add the tool columns as well.

05:11.970 --> 05:16.200
So all of these things that we're going to be discussing in our next lecture of this course.


========================================================================================

WEBVTT

00:00.200 --> 00:07.100
All right, so now that we need to see how we can test the tool callings of our AI agent, and for that

00:07.100 --> 00:09.110
we need to prepare the golden data set.

00:09.110 --> 00:20.180
So I'm going to say preparing the golden data set for deep level a test case that we are going to be

00:20.180 --> 00:20.570
creating.

00:20.600 --> 00:20.780
Right.

00:20.810 --> 00:22.940
That's what we are essentially going to do over here.

00:22.940 --> 00:28.520
So in order to do that, I'm going to go and I'm going to say once again golden underscore data set.

00:28.550 --> 00:29.780
It can be of any name.

00:29.780 --> 00:34.130
And over here I'm going to start writing the array of all the data sets.

00:34.130 --> 00:36.440
So basically the first one is going to be the question.

00:36.440 --> 00:43.370
And I'm going to say what is the sum of two and four.

00:43.370 --> 00:51.890
So for this particular question the answer is the expected answer that I'm looking for from the realm

00:51.890 --> 00:59.510
is going to be the sum of uh, two and four is six, something like that.

00:59.540 --> 01:05.560
And similarly, I'm going to have one more question over here, which is going to be this what is the

01:05.560 --> 01:07.180
double of the two and four?

01:07.210 --> 01:10.900
Then the answer is going to be this one.

01:10.900 --> 01:14.470
And maybe I'm going to ask one more question over here.

01:14.470 --> 01:17.260
So what is the what is two minus four.

01:17.290 --> 01:18.520
Then it's going to be minus two.

01:18.550 --> 01:21.970
So you can see that in all of these places we are going to be asking the question.

01:22.000 --> 01:24.490
We're going to get the expected answer over here.

01:24.490 --> 01:32.410
But the problem that we have over here is we are not telling which tool that we are going to be calling

01:32.410 --> 01:33.190
itself.

01:33.220 --> 01:39.940
So we need to check the tools being called along with this particular answer, because the expected

01:39.940 --> 01:41.680
answer is not the important part over here.

01:42.010 --> 01:44.290
The important part is which tool is being called.

01:44.290 --> 01:52.300
That is, what is the quest for us to verify whether the agent is really invoking the correct tool for

01:52.300 --> 01:53.560
this particular question?

01:53.560 --> 01:58.000
Because as you see, when I say what is the double of two, it is going to invoke the multiply numbers

01:58.000 --> 01:58.630
tool.

01:58.720 --> 02:01.780
And this is the action that we have got.

02:01.930 --> 02:08.520
And this is the parameter which has been passed over here like a as two and b as two.

02:08.550 --> 02:18.330
So with this knowledge in place, the way that you can design the toolings over here comes a bit more

02:18.330 --> 02:19.470
tricky this time.

02:19.470 --> 02:21.210
This is where you need to learn this part.

02:21.480 --> 02:26.940
Over here you can just say var deep eval dot test underscore case.

02:26.940 --> 02:30.810
See these details are not unfortunately there in the documentation.

02:30.810 --> 02:32.730
So far the documentation is quite poor.

02:32.730 --> 02:38.820
So I just ended up doing a bit of a digging around how I can get through all this information.

02:38.820 --> 02:43.560
So this is how I ended up creating the golden data set over here.

02:43.560 --> 02:48.270
So over here you just need to give a parameter called as tool called.

02:48.300 --> 02:51.000
And this parameter I mean it can be any name to be honest.

02:51.000 --> 02:54.480
But over here in the tool called you need to create an array.

02:54.480 --> 02:57.210
And then you need to call this tool called class.

02:57.420 --> 03:02.220
And within this tool class tool called class you need to give the name as.

03:02.220 --> 03:04.390
So for this one you can see that?

03:04.420 --> 03:05.470
This guy.

03:05.590 --> 03:08.140
This is going to be add numbers tool that we are going to be calling.

03:08.170 --> 03:08.680
Right.

03:08.680 --> 03:16.120
And the parameters that we are going to be passing for this particular uh so parameters it can be input

03:16.120 --> 03:20.230
parameters or maybe uh yeah I think there is an input parameter.

03:20.230 --> 03:28.300
So I'm going to choose the input parameter uh which is going to be this the value is going to be uh,

03:28.300 --> 03:37.540
the input parameter which is going to be a is equal to two and b which is equal to a four.

03:37.570 --> 03:38.680
That's what we are passing in right.

03:38.710 --> 03:42.970
This is the input parameter that we are going to pass in for this add numbers.

03:42.970 --> 03:44.260
So now you got the idea right.

03:44.290 --> 03:49.330
This is what we are we really wanted to do in this particular place so that it could able to identify

03:49.360 --> 03:50.440
things more easily.

03:50.440 --> 03:55.900
And the same thing is going to happen for the tool calls for the multiplications over here.

03:56.020 --> 03:58.030
Uh, just that this is going to be multiply numbers.

03:58.030 --> 04:02.530
So it's just going to say multiply numbers tool is going to be invoked.

04:02.530 --> 04:04.900
And this is the same thing that we are going to pass in.

04:05.140 --> 04:11.610
And the same thing is going to happen for the, uh, for the subtract numbers, which is this tool is

04:11.610 --> 04:13.740
going to be invoked if I'm not wrong.

04:14.220 --> 04:15.900
So you want to keep things simple.

04:15.900 --> 04:19.290
That's the reason why I just wanted to do, uh, in this operation over here.

04:19.290 --> 04:20.940
So this is the subtract numbers.

04:20.940 --> 04:22.590
We're just going to call this input parameters.

04:22.680 --> 04:23.970
This is the multiply number.

04:24.000 --> 04:24.900
This is input parameters.

04:24.900 --> 04:26.370
And this is the add numbers.

04:26.370 --> 04:27.990
It's going to have this input parameters.

04:27.990 --> 04:29.220
So hope you got the idea.

04:29.220 --> 04:32.730
So this is what is the golden data set that we are going to be creating.

04:32.730 --> 04:36.570
And now we can just print the golden data set and see how it actually looks.

04:36.570 --> 04:39.390
So you see that the Golden data set will have a tool called.

04:40.110 --> 04:42.390
It also will have the name and input parameters.

04:42.390 --> 04:44.880
And it's going to have the question and the expected answer.

04:44.880 --> 04:51.000
So now that we have this golden data set, we need to convert this golden data set into the test case

04:51.000 --> 04:52.470
format if you remember correctly.

04:52.470 --> 04:57.390
So that is what something that we need to do so that we can push this to this, um, this confident

04:57.450 --> 04:59.550
AI cloud using their evaluate.

04:59.550 --> 05:04.230
But that is what is the procedure that we need to follow in order to make this happen.

05:04.230 --> 05:07.530
So that is something we'll be doing in our next lecture.


========================================================================================


WEBVTT

00:00.020 --> 00:00.530
All right.

00:00.530 --> 00:06.710
So now that we have the golden data set, we need to just see how we can create the test case um, which

00:06.710 --> 00:10.970
is the LM test case format, which we did in our last section of the course as well, which is this

00:10.970 --> 00:14.900
guy uploading the golden data set to evolve and doing all sorts of things.

00:14.900 --> 00:17.150
So let me just do the exact same thing.

00:17.150 --> 00:18.230
No change in here.

00:18.230 --> 00:21.590
So I'm going to do the markdown and I'm going to say upload.

00:21.830 --> 00:31.760
Uh the golden data set in uh two deep evolve like that.

00:31.760 --> 00:35.660
And I'm going to copy I've already copied the code.

00:35.660 --> 00:37.340
So I'm just going to paste that over here.

00:37.340 --> 00:42.200
And we are going to push the code as well.

00:42.680 --> 00:44.900
So I'm going to say dataset dot push.

00:44.900 --> 00:52.100
This is going to be the uh testing uh tool calls something like that.

00:52.100 --> 00:54.830
And I'm going to push the change over there.

00:55.370 --> 00:58.580
Um, oh I guess what.

00:58.580 --> 01:02.150
We forgot to actually include this guy.

01:02.180 --> 01:05.000
So now I remember we need this one.

01:05.690 --> 01:14.090
Uh, and, and and, and I'm going to go to this because without logging in, we can't really push the,

01:14.090 --> 01:17.540
the data into the Cloud.

01:18.110 --> 01:23.150
So yeah, that was something which was a miss in our last lecture.

01:23.270 --> 01:24.260
There we go.

01:24.260 --> 01:26.990
And you can see that this is going to go to the confident eye.

01:26.990 --> 01:31.820
And it's going to put the data there pretty much like how we saw in our last section of this course.

01:31.850 --> 01:36.800
I mean we don't really have to worry about this confident eye portal itself right now, as I told you,

01:36.800 --> 01:42.170
because all we have to do is we are not going to use the evaluate feature at the moment.

01:42.170 --> 01:48.710
And that's the reason why this thing that we are going to pushing into the, into the portal itself

01:48.710 --> 01:51.620
is of not of any use, to be honest.

01:51.620 --> 01:53.210
But guess what?

01:53.330 --> 01:57.680
The the way that we do this evaluate data set over here has got a reason.

01:57.680 --> 02:00.680
Because if you just see this data at the moment.

02:00.680 --> 02:06.740
So if I just going to say, uh, that data set and if I try to run this data set, you will see that

02:06.740 --> 02:09.080
the test case is kind of empty at the moment.

02:09.080 --> 02:18.680
But the moment you do the data set dot pull and then you put this, uh, test case tool calling over

02:18.680 --> 02:19.100
here.

02:19.100 --> 02:25.790
And if you run this, it is going to pull the data from the, uh, from the cloud.

02:25.790 --> 02:34.340
And if you just go and check the data set right now, it is the same data set that we have got.

02:34.370 --> 02:39.890
If I run this, you'll see that you will have the, uh, test cases with the LM test case over here.

02:39.890 --> 02:46.490
And this is coming only because while you do a push, and then if you do a pull from the deep data set,

02:46.520 --> 02:49.940
the test cases will get populated for you over here.

02:49.940 --> 02:56.840
This is the main reason why we need to do a do a push to the cloud and then pull to a cloud.

02:56.900 --> 02:58.190
Pull from a cloud.

02:58.850 --> 03:01.430
Yeah, that's the only reason why I am doing this way.

03:01.430 --> 03:05.510
There may be some other way of doing this in a better way, but I think this is the what this is the

03:05.510 --> 03:07.220
detail, what they have given in the documentation.

03:07.220 --> 03:11.210
So I'm just following exactly what they have mentioned in the documentation as well.

03:11.210 --> 03:15.410
So yeah, this is how you actually create the golden data set.

03:15.410 --> 03:18.620
And then you push the golden data set to the deep eval.

03:18.620 --> 03:23.840
And then you pull the data set and have your test case being populated for you over here.

03:23.870 --> 03:32.150
And the next quest that we have is to actually call our AI agent and also create our, uh, our test

03:32.150 --> 03:38.930
case with all the LM test case format, which has got, uh, which is going to have the, uh, the tool

03:38.930 --> 03:44.300
calls and the actual output and all those details, like how we did in our last section of the course

03:44.300 --> 03:49.040
for the RAC, the same thing we are going to be doing in our next lecture of this course.


========================================================================================

WEBVTT

00:00.050 --> 00:04.280
Now is the time to do our actual AI agents calling.

00:04.280 --> 00:10.520
So this is the place where we are going to be calling our AI agent by while creating the test case itself,

00:10.550 --> 00:12.140
the LM test case.

00:12.140 --> 00:26.000
So in order to do that, I'm going to say creating LM test case and invoking the AI agent.

00:26.000 --> 00:27.770
So this is the place that we are going to be doing it.

00:27.770 --> 00:29.990
So I'm going to add the code over here.

00:29.990 --> 00:36.170
So the code is going to look pretty much exactly the same, like how we were doing even in our last

00:36.170 --> 00:37.370
section of the course.

00:37.970 --> 00:39.650
Like this one as you can see.

00:39.650 --> 00:42.230
So over here I'm saying query with the context.

00:42.260 --> 00:49.040
I was calling our Rag documentation, if you remember, and then we were creating the retrieve documents,

00:49.070 --> 00:50.510
the retrieve the context.

00:50.510 --> 00:54.590
And then we were calling the QA chain, which was actually getting us the response.

00:54.590 --> 00:59.300
And then we were returning both the retrieved context as well as the response.

00:59.300 --> 01:04.350
So the retrieval context was the vector data store and the response was from the large language model.

01:04.380 --> 01:12.060
And over here, because we are going to be calling our AI agent and we wanted to return the tool calling,

01:12.090 --> 01:18.840
there is a bit of a change that I have to do this time on the AI agent itself and tell you what I really

01:18.840 --> 01:19.680
mean about that.

01:19.710 --> 01:26.700
So let's say I'm going to create the method like what we have did in our last, uh, section.

01:26.940 --> 01:30.270
I'll go copy this, paste it over here.

01:30.300 --> 01:32.310
Guess what the query the content is going to remain.

01:32.310 --> 01:35.970
Uh, maybe this is going to query the AI agent.

01:35.970 --> 01:42.060
Uh, so instead of me doing the retrieval, retrieval of the document over here, we are essentially

01:42.060 --> 01:44.730
going to be basically, essentially required over here.

01:44.730 --> 01:48.120
Looks like basically we require a response from our AI agent.

01:48.150 --> 01:48.510
Right.

01:48.540 --> 01:54.750
So the agent that we have created before and I'm going to call the invoke method, and I'm going to

01:54.750 --> 01:58.500
pass the question to the AI agent like what I have did.

01:58.590 --> 02:04.080
Um, over here, as you can see, I'm going to call the agent instead of run.

02:04.080 --> 02:06.050
You can also call the invoke method doesn't matter.

02:06.050 --> 02:08.570
And then you can pass the query or the question.

02:08.600 --> 02:09.140
Right.

02:09.140 --> 02:11.030
That is what I am doing over here.

02:11.030 --> 02:17.900
So while I call the agent, uh, with a question, it is going to give me the response over here.

02:18.170 --> 02:20.930
But I don't want the response.

02:20.930 --> 02:25.940
As I told you, we need to verify whether the tool is correctly being called or not because while I

02:25.970 --> 02:33.500
call the I the agent dot invoke method, as you can see, the response actually has got the result for

02:33.500 --> 02:37.940
us over here, like for or whatever.

02:38.000 --> 02:38.690
Right.

02:38.690 --> 02:42.260
So let's say I'm going to call the invoke method here.

02:42.470 --> 02:44.900
Doesn't matter what I try to run this code.

02:44.900 --> 02:46.580
What is the double of two.

02:46.610 --> 02:52.550
Then you see that it is giving me uh, the input, which is what is the double of two and the output

02:52.550 --> 02:53.360
is four.

02:53.390 --> 02:56.480
See, while I call invoke, the response is a bit different this time.

02:56.480 --> 02:59.360
So it's going to give me the input and the output.

02:59.360 --> 03:06.960
But what I need this time from the agent is not just the response, but I also wanted to get me the

03:06.960 --> 03:12.240
tools which has been called from that particular agent.

03:12.570 --> 03:13.560
Can I return that?

03:13.590 --> 03:18.270
Remember in our last sections, in earlier sections of this course, while we're talking about the tool

03:18.270 --> 03:26.520
calling feature, we talked about what tool is being invoked by the large language model, by doing

03:26.520 --> 03:28.980
the LM tool LM with the tools and invoke.

03:28.980 --> 03:33.180
And it gives us the tool name and the arguments, something like that.

03:33.180 --> 03:34.110
And what is the type?

03:34.140 --> 03:35.460
It's a tool called types.

03:35.460 --> 03:41.220
So if we call the tool calls parameter it gives us what tool that we are being used.

03:41.280 --> 03:45.030
Same idea that we're going to do over here as well.

03:45.090 --> 03:49.140
And there is an additional parameter that we need to add over here.

03:49.140 --> 03:52.680
And they call it as like return intermediate.

03:54.960 --> 03:57.150
Steps is equal to true.

03:57.150 --> 04:01.380
And that for this the reason why we need to have a good understanding of the long chain library and

04:01.380 --> 04:07.200
see we have the potential to even customize our agent the way the test really needs.

04:07.320 --> 04:09.350
So this is pretty awesome.

04:09.350 --> 04:13.250
So we have got all the ability because we have learned everything in our earlier section.

04:13.250 --> 04:19.220
So it is so easy for us to go and change things over here, and we can customize our test as well during

04:19.220 --> 04:20.180
that point of time.

04:20.900 --> 04:26.570
So this written intermediate steps is equal to true will actually now return not only the results,

04:26.570 --> 04:30.200
but it will also give you an intermediate steps over here.

04:30.200 --> 04:35.120
And this intermediate steps will have an agent action with the tools being called.

04:35.150 --> 04:35.810
Look at that.

04:35.810 --> 04:36.860
This is amazing.

04:36.860 --> 04:40.040
You can just get the tools like multiply numbers.

04:40.040 --> 04:45.620
And you can also get the tool inputs which is the input parameters, which is like a is equal to two

04:45.620 --> 04:47.480
and b as two as well.

04:47.480 --> 04:50.240
And there is a log like that and I know blah blah blah.

04:50.270 --> 04:52.310
So I don't really require the log there.

04:52.310 --> 04:57.410
But the last parameter you see there is going to be an answer of four, which is the response coming

04:57.410 --> 04:57.950
out.

04:58.100 --> 05:05.990
So this is something we really are looking for in order for us to create that the structure, like the

05:05.990 --> 05:11.760
tool calls, which is going to have the name and the input parameter as these, so we can create this

05:11.760 --> 05:17.550
kind of structure while we have the intermediate steps coming out over here.

05:17.550 --> 05:18.810
So hope you got the idea.

05:18.810 --> 05:25.200
This intermediate steps from the from the actual agent that we are running during the invoke method

05:25.200 --> 05:32.130
will actually help us formulate the data that we need for our tool calls.

05:32.130 --> 05:39.120
Because if you go to the documentation of the tool correctness, we need to pass the tool called and

05:39.120 --> 05:45.270
the expected tools, the expected tools we can get it from our golden data set doesn't matter, because

05:45.270 --> 05:49.050
we have already created the golden data set with the tools being called.

05:49.050 --> 05:55.560
This is the expected tools, but the tool calls is the tool which is going to come actually from your

05:55.590 --> 05:56.790
LM agent.

05:57.000 --> 06:00.390
And we need to get the name and the parameters.

06:00.390 --> 06:08.310
So that's the reason why we need this intermediate steps to get the details, which we can now pass

06:08.310 --> 06:10.710
it to our LM test case.

06:11.220 --> 06:12.540
Hope you are with me.

06:12.560 --> 06:18.770
If not, just try to watch this video one more time, but we are going to write the code to use the

06:18.770 --> 06:22.400
intermediate steps to create the agent response over here.

06:22.400 --> 06:24.080
And guess what?

06:24.110 --> 06:29.450
Now we have got all the details for the intermediate steps I can now use.

06:29.480 --> 06:35.690
Maybe I can just store this, uh, this response that we have got, which is the, uh, sorry, sorry

06:35.690 --> 06:36.860
for juggling around a lot.

06:36.890 --> 06:39.380
So we have we have got the results over here.

06:39.380 --> 06:43.970
So if I just go and print just the result, something like this.

06:43.970 --> 06:49.010
And if I hit run, you see that we get an array of input output and intermediate steps.

06:49.010 --> 06:54.980
So if I just want to say what is the intermediate steps alone I get this particular value.

06:55.250 --> 07:04.940
So my idea is I wanted to get the tools and the tool input these two things so that I can actually guess

07:04.940 --> 07:07.310
what I can actually verify.

07:07.700 --> 07:12.470
I can actually pass those information to the tools called and the input parameter to the LM test case.

07:12.800 --> 07:15.650
So that is something we are going to be doing in our next lecture.



========================================================================================


WEBVTT

00:00.080 --> 00:06.500
So now that we have got our, uh, intermediate results from the tools, which is going to give us the

00:06.500 --> 00:13.250
multiply numbers, and this is the tool name and the tool input parameters, we can now try to formulate

00:13.250 --> 00:18.920
this kind of structure with our actual test cases that we are looking for.

00:18.920 --> 00:20.420
So how do we actually do that.

00:20.420 --> 00:28.070
So what I'm going to do is I'm going to write the the method over here, uh, in a bit of uh, the customized

00:28.070 --> 00:29.090
fashion over here.

00:29.090 --> 00:37.370
So I'm going to say intermediate result is equal to basically that's going to be the response of the

00:37.370 --> 00:40.730
intermediate result, as you know, which is going to be this one.

00:40.760 --> 00:42.710
I'm going to go copy paste that.

00:43.280 --> 00:44.750
So it's not intermediate result.

00:44.750 --> 00:49.520
It's intermediate steps I guess maybe we can just name this as intermediate steps as well.

00:49.520 --> 00:56.540
And now with this intermediate steps that we have got, we can get the uh the actual results like how

00:56.540 --> 00:58.880
we actually did over here, as you can see.

00:58.880 --> 01:04.760
So if you just go, uh, way further, which is this one.

01:04.760 --> 01:05.650
So intermediate steps.

01:05.650 --> 01:07.210
We got this particular thing over here.

01:07.210 --> 01:14.530
So if I just say zero it is going to give me the the first ten elements is going to be this one.

01:14.530 --> 01:20.770
And over here my idea is I wanted to write pretty much like a written as, like a tuples over here.

01:20.800 --> 01:22.840
What I'm going to say agent action.

01:22.840 --> 01:25.630
And the result is equal to this one.

01:25.630 --> 01:27.490
So this is basically going to be a tuple.

01:27.490 --> 01:35.140
And I can now get the uh agent action which is the the actual agent name that we're looking for.

01:35.140 --> 01:40.660
So for that I'm going to say uh tool uh maybe.

01:40.990 --> 01:41.350
Yeah.

01:41.380 --> 01:49.150
Tool which is going to be the tool name that I'm looking for so I can get it from the agent action,

01:49.480 --> 01:54.130
uh, of dot uh, tool that's going to give me the tool name.

01:54.130 --> 01:59.530
And if I want to get the, uh, tool input, which is going to be this one, then I can just say tool

01:59.560 --> 02:05.590
underscore input, which is equal to, uh, agent action dot tool underscore input.

02:05.590 --> 02:10.310
So basically this is going to return me a tuple in Python.

02:10.400 --> 02:13.100
I'm just going to store in the in the agent action.

02:13.100 --> 02:18.020
And the result and this agent action is going to be these value that we're going to be getting over

02:18.020 --> 02:18.290
here.

02:18.290 --> 02:18.890
The tool.

02:18.890 --> 02:21.470
So you can just get the tool over here.

02:21.470 --> 02:27.050
And now if we're just going to print the tool and the tool input, if I try to run this thing over here,

02:27.050 --> 02:29.540
you see that the tool name is going to be the multiply number.

02:29.540 --> 02:34.970
And the tool input is going to be a of two comma two and b as two.

02:35.390 --> 02:36.680
So hope you got the idea right.

02:36.680 --> 02:39.470
This is basically I'm creating from this particular array.

02:39.500 --> 02:43.310
I'm just creating the entire tuples over here even further.

02:43.310 --> 02:48.440
If you want to go even further to go even more crazy about this entire stuff, because we also have

02:48.470 --> 02:52.250
got the result of four in here, which is the output.

02:52.280 --> 02:55.730
You can also get that information as well, for instance.

02:55.730 --> 03:04.370
So if I just say tool output, uh, like that is equal to this one half one, which means that it's

03:04.370 --> 03:05.690
going to give you the tool output.

03:05.690 --> 03:11.540
So now if you're just going to say print the tool output over here, let's try running it.

03:12.050 --> 03:14.760
Um it looks like I messed up with the result over here.

03:14.790 --> 03:15.030
See that?

03:15.030 --> 03:18.030
This is the same name I'm actually using, which is crazy.

03:18.030 --> 03:20.730
I've just wrongly used that name two times.

03:20.730 --> 03:22.560
So let me just try to run this again.

03:23.400 --> 03:25.410
And maybe this name should be different.

03:25.440 --> 03:27.960
It should be like a results or anything like that.

03:27.990 --> 03:28.740
Yeah.

03:28.770 --> 03:29.850
Results.

03:29.970 --> 03:31.590
If I run this one over here look at that.

03:31.590 --> 03:35.490
So you get the multiply numbers, the input parameters and the output.

03:35.490 --> 03:36.570
As for the tool output.

03:36.570 --> 03:37.230
As for.

03:37.230 --> 03:42.360
So all of these are required for me while I create the LM test case.

03:42.360 --> 03:46.830
And these are the things which is required for the input over here.

03:46.830 --> 03:48.570
As you can see the tool called.

03:48.570 --> 03:53.670
And of course they have not really added any documentation for input parameters and the output details

03:53.670 --> 03:56.190
which we are going to be doing over here.

03:56.190 --> 04:02.550
But hope you got the idea, like how you can massage your intermediate steps that you are getting and

04:02.550 --> 04:06.690
create the tool name, tool input and the tool output that you're looking for.

04:06.690 --> 04:07.320
Something like this.

04:07.320 --> 04:10.680
Now this structure, just hold this thought over here.

04:10.680 --> 04:14.520
Just this structure is going to be used for your tool calls.

04:14.520 --> 04:16.800
As you can see over here, the expected tools.

04:16.800 --> 04:19.430
You see that the multiply numbers multiply numbers.

04:19.460 --> 04:22.850
The input parameter is, which is going to be the a as this and b is this.

04:23.000 --> 04:26.360
Look at that and the output is going to be four for this one.

04:26.360 --> 04:27.920
And the output is over here.

04:27.920 --> 04:34.310
So we can now compare this expected tools with the actual tools that we have got over here.

04:34.820 --> 04:35.360
Right.

04:35.360 --> 04:39.230
And now let's going back to our our code over here.

04:39.230 --> 04:43.190
And just like try to implement the exact same thing that we have written over here, I'm going to copy

04:43.190 --> 04:46.340
this whole thing, uh, which is this one.

04:46.340 --> 04:53.120
And I'm going to go paste into the method that we have created over here.

04:53.510 --> 04:57.560
Uh, just this one, uh, something like that.

04:57.590 --> 05:02.750
We can just say the indentation is important in Python, so I'm going to just do the indentation over

05:02.750 --> 05:03.410
here.

05:03.770 --> 05:06.050
Um, and what else we have got.

05:06.050 --> 05:09.200
So we have got the intermediate steps and that intermediate steps.

05:09.200 --> 05:16.520
We are going to pass it over here, uh, which is going to be this intermediate steps of zero.

05:16.550 --> 05:17.330
Right.

05:17.420 --> 05:20.690
Uh, that is going to get me the agent action and the results.

05:20.690 --> 05:24.580
And then we have got the, uh, Tool output as well.

05:24.580 --> 05:26.140
So we get the tools and tool input.

05:26.170 --> 05:30.940
Now I'm going to return all of these to the color method.

05:30.970 --> 05:34.420
Color of this particular method is going to be I'm going to return the tool.

05:35.050 --> 05:36.730
I'm going to return the tool input.

05:36.730 --> 05:42.820
And I'm also going to return the tool output so that all of these can be returned to the color.

05:42.820 --> 05:47.110
So at any time if I'm going to pass any question to this one, it's going to invoke the AI agent is

05:47.110 --> 05:48.640
going to get you the response.

05:48.880 --> 05:54.220
And it's also going to get you the intermediate steps, um, which is going to have the details that

05:54.220 --> 05:55.390
you're looking for over here.

05:55.390 --> 05:59.050
If you want to get the response as well, you can get the response as well, because we're not really

05:59.050 --> 06:00.250
returning the response.

06:00.250 --> 06:02.830
Um, probably return the response as well if you wanted to.

06:02.860 --> 06:07.690
I mean, it depends if you really wanted to return the response, you can do that as well, because

06:07.690 --> 06:13.510
this response is something that you can use as an, uh, as the response that you are giving to the,

06:13.540 --> 06:14.230
to the caller.

06:14.230 --> 06:16.180
But I don't think we really need the response.

06:16.180 --> 06:19.180
So I'm just going to limit from here on.

06:19.750 --> 06:26.440
So this is how you can, you can uh, you can create this particular method with all the input that

06:26.440 --> 06:28.720
is required for your LM test case.



========================================================================================


WEBVTT

00:00.020 --> 00:00.260
All right.

00:00.290 --> 00:06.530
So now we have all the nuts and bolts required for our, uh, for our test case to be executed, which

00:06.530 --> 00:14.450
is going to be this code that we have written in our last section of this course, which is this guy,

00:14.480 --> 00:17.420
this creating a test case required for the deep, deep eval.

00:17.450 --> 00:19.340
So I'm going to go copy this entire code.

00:19.340 --> 00:21.770
And I'm going to go put this over here.

00:21.770 --> 00:29.060
I'm going to say creating a test case for deep eval.

00:29.060 --> 00:32.960
And this is the place where we are going to be pasting this entire code.

00:32.960 --> 00:34.070
And guess what?

00:34.070 --> 00:39.140
Instead of the query with the context, we have got query with AI agent, and we're going to pass the

00:39.170 --> 00:45.140
golden of input, which is still hold true because we have got the same golden, uh, data structure

00:45.140 --> 00:46.550
as you can see over here.

00:46.550 --> 00:47.780
We're going to have the questions.

00:47.780 --> 00:51.620
We're going to have the expected answers and the tool calls.

00:51.620 --> 00:54.290
So those are the things that we have to pass it over here.

00:54.290 --> 00:56.960
So just go over here.

00:56.960 --> 01:01.610
So uh sorry sorry for juggling around.

01:01.610 --> 01:06.340
So for the test case, as you can see, uh, the agent, the query with the agent is going to return

01:06.340 --> 01:07.840
us quite a lot of things, right?

01:07.870 --> 01:10.690
It is going to give us the tool.

01:11.020 --> 01:13.390
Let's see what it's going to return to return us the tool.

01:13.420 --> 01:15.070
Tool input and tool output.

01:15.100 --> 01:19.240
These are things which has been returned for us from this particular method.

01:19.240 --> 01:25.540
And now I'm going to use these information while I'm actually going to create the expected outputs and

01:25.540 --> 01:25.840
things.

01:25.840 --> 01:27.370
So I'm going to go delete these things.

01:27.370 --> 01:35.260
So based on the documentation over here you can see that we have got the tool calls.

01:35.260 --> 01:39.190
So I'm going to say tool called is equal to.

01:39.220 --> 01:44.470
Now we're going to say the tool calls which is going to be tool call.

01:44.500 --> 01:46.690
So I'm going to call the class over here.

01:46.690 --> 01:51.220
And on the name of the tool call we need to give the name of the tool that we are passing in.

01:51.250 --> 01:55.270
Remember the name of the tool is going to be the tool that we have got.

01:55.300 --> 01:58.780
And if you put a comma there, you see that this is something which is not there in the documentation.

01:58.780 --> 02:00.700
You can also pass the input parameters.

02:00.700 --> 02:05.530
And this input parameters is nothing but this tool input that we have got.

02:05.530 --> 02:08.440
So I'm going to pass that tool input over here.

02:08.440 --> 02:12.220
And if you just do control space, you see that we have got output as well.

02:12.220 --> 02:15.730
So over here I can just say tool outputs.

02:15.730 --> 02:21.310
You can actually pass reasons as well like reasoning as well, which is the log that was there as I

02:21.310 --> 02:23.260
don't want to pass that in or complicate this code.

02:23.260 --> 02:25.480
So I'm just going to leave this guy as it is.

02:25.510 --> 02:26.050
Right.

02:26.050 --> 02:29.200
So that is the information that we have to pass it over here.

02:29.200 --> 02:30.820
And let me close the parentheses.

02:30.820 --> 02:34.030
So this is going to be the tool called that we have got.

02:34.450 --> 02:36.940
And also we need the expected tool.

02:36.940 --> 02:42.670
So this expected tool is nothing but the golden dot.

02:43.090 --> 02:48.670
Uh and I think we have written something called as tool called tools called.

02:48.700 --> 02:49.060
Right.

02:49.060 --> 02:52.030
So that is what we have given in the tool in the Golden.

02:52.030 --> 02:53.560
So I'm going to pass that over here.

02:53.560 --> 02:58.390
So we have got all these informations created for the test case.

02:58.420 --> 02:59.770
The test case over here.

02:59.770 --> 03:02.380
Like I think we need a comma there.

03:02.590 --> 03:03.250
Yeah.

03:03.430 --> 03:05.920
So so it has got the input.

03:05.950 --> 03:09.040
It has got the tool calls and the expected uh tools.

03:09.610 --> 03:16.440
Uh And now we can convert this to the Goldens and we can see how that works.

03:16.440 --> 03:17.700
But guess what?

03:17.700 --> 03:18.600
We have really not.

03:18.750 --> 03:19.980
So we have only given the input.

03:19.980 --> 03:23.370
We have not passed the actual so actual output.

03:23.370 --> 03:28.020
So for the actual output we need to give the response coming from the AI agent itself.

03:28.020 --> 03:30.240
And that's the reason why I wanted to return this response.

03:30.270 --> 03:32.430
Probably I can just say response.

03:32.550 --> 03:34.140
I'm going to return that as well.

03:34.140 --> 03:36.960
And I'm going to say response.

03:36.960 --> 03:40.320
And now I can pass the response over here.

03:40.350 --> 03:41.670
Just the AI agent's response.

03:41.700 --> 03:42.090
Right.

03:42.120 --> 03:43.290
So I can pass that.

03:43.290 --> 03:46.650
So now you see that input actual output tools called and expected tools.

03:46.680 --> 03:51.000
These are the things which is required arguments for the metrics that you're going to measure.

03:51.000 --> 03:55.740
The tool correction metrics like input actual output tools called and expected are tools.

03:55.740 --> 03:58.740
So we have created all of these over here.

03:58.740 --> 04:03.480
And now we just need to run this over here.

04:03.480 --> 04:04.440
Uh there we go.

04:04.440 --> 04:05.340
We got some problem.

04:05.340 --> 04:06.240
What is this.

04:06.270 --> 04:08.370
And it says the query agent is not defined.

04:08.400 --> 04:11.460
I think we need we have not even executed this this code.

04:11.460 --> 04:18.300
And if I run this, you will notice that this time it is going to run all the different test cases that

04:18.300 --> 04:23.970
we have got like one by one, because we are running them in the for loop for us over here, and it

04:23.970 --> 04:31.230
is going to create this, um, this for us on the, on the test case, on the data for us over here.

04:31.230 --> 04:36.930
So if I just going to go to the data and if I try running it so you can see that it has got all the

04:36.930 --> 04:41.700
details for us, like the input, uh, like the name as the ad number for this particular test.

04:41.700 --> 04:46.890
And then it has got the input parameters and the output numbers coming up for us over here.

04:46.890 --> 04:52.080
And similarly it is giving all the it is also creating all the details for us, like the subtract numbers

04:52.080 --> 04:55.290
and the input parameters that we have passed in.

04:55.290 --> 05:01.320
So every single thing that we are seeing over here is all formulated based on the tools that we have

05:01.350 --> 05:02.340
called over here.

05:02.340 --> 05:06.840
And then it is storing that value, and then it is preparing the test case for us over here.

05:06.840 --> 05:13.800
The last operation that we have to do right now is to ensure that these test can be evaluated with the

05:13.800 --> 05:17.610
tool collection metrics, which we are going to be doing in our next lecture.


========================================================================================

WEBVTT

00:00.020 --> 00:00.410
All right.

00:00.440 --> 00:07.010
So now that we have created the LM test case with the input, the actual output and the tool calls,

00:07.010 --> 00:09.980
if I'm not wrong, which is going to be the tools called over here.

00:09.980 --> 00:12.710
And then we also need to have our expected tools.

00:12.710 --> 00:16.670
But you notice that the expected tools is kind of none over here without this.

00:16.670 --> 00:18.950
This validation is just going to fail.

00:18.950 --> 00:21.470
And I actually missed that part over there.

00:21.530 --> 00:28.070
If you remember over here while we were doing a copy pasting like a raw copy pasting from our last section

00:28.070 --> 00:34.220
over here, we only had the golden with the input and the expected output, but we did not pass the

00:34.220 --> 00:41.390
tool called, which is required from our golden data set, which is this one, the tool called that

00:41.390 --> 00:42.050
we created.

00:42.050 --> 00:46.700
So we actually need to do that as well I think I have missed that part.

00:46.700 --> 00:52.850
So let me quickly fix that particular part over there, which is going to be a tool called uh, over

00:52.850 --> 00:53.390
here.

00:53.390 --> 00:57.170
And then we need to create this particular data set.

00:57.410 --> 01:05.930
And we also need to upload this data set to uh, the cloud, which is the, which is the cloud which

01:05.930 --> 01:06.800
we have got.

01:06.830 --> 01:07.220
There we go.

01:07.250 --> 01:10.260
Now we have got the tools called over here, hopefully.

01:10.320 --> 01:19.620
And if I try to pull that back and if I try to run the data set, we should have something called as

01:19.620 --> 01:25.350
test case actual outputs, which is going to be this one expected outputs retrieved context.

01:25.350 --> 01:28.350
And we also have got the tools called over here.

01:28.380 --> 01:32.640
This is required while we have all these information data set.

01:32.670 --> 01:40.740
We can now pass this to our golden dot tools called so that it will create the tools called for the

01:40.740 --> 01:41.970
LM test case.

01:42.450 --> 01:50.460
And then finally we should have the expected tools to have the tools called as well, which is going

01:50.460 --> 01:52.650
to be if I just go and see that, look at that.

01:52.650 --> 01:54.630
The expected tools is not none.

01:54.630 --> 01:57.540
This time it is going to have the tools called as well.

01:57.540 --> 02:03.420
And this tool is called is nothing but the tools called that we actually created in the Golden Data

02:03.450 --> 02:03.900
set.

02:03.900 --> 02:07.410
So now we have got all the information there which is pretty cool.

02:07.410 --> 02:14.430
So with that data in place, the final operation that we are going to do is to do the the LM evaluation,

02:14.430 --> 02:21.610
which is going to be using the tool, uh, correction, uh, metrics evaluation.

02:21.700 --> 02:22.990
Ah, let's do that.

02:22.990 --> 02:23.950
The final step.

02:23.950 --> 02:26.710
So I'm going to go copy paste the code from here.

02:26.710 --> 02:28.960
And I will just write it down over here.

02:28.960 --> 02:33.760
I will actually change the code a bit as well, because the documentation is still not enough for us

02:33.760 --> 02:34.750
to do the testing.

02:35.260 --> 02:38.740
Uh, so you can see that the input, they have got something like this and this.

02:38.770 --> 02:41.650
So we don't even need this kind of part over here.

02:41.650 --> 02:47.740
The reason why we don't need this is because we have already created our test case structure, uh,

02:47.740 --> 02:48.820
in this format.

02:48.850 --> 02:49.450
Right.

02:49.450 --> 02:57.040
So we can just directly pass the entire test case structure for the, uh, for the evaluation purpose.

02:57.160 --> 03:01.270
And the way we can do it is because we have got multiple test cases in place.

03:01.270 --> 03:05.830
I'm going to write a for loop here because they don't support the bulk operation at the moment.

03:05.830 --> 03:12.400
So I'm going to say for test case in data I'm just going to have multiple uh, test cases there.

03:12.520 --> 03:16.270
And I'm just going to intend this one something like this.

03:16.270 --> 03:23.020
So this is going to be the test case which I'm passing in to measure, and I'm going to see the score

03:23.020 --> 03:23.820
and stuff.

03:23.820 --> 03:25.020
So hope you got the idea right.

03:25.050 --> 03:30.750
So in the in this particular test case correctness metrics, there is a measure method which requires

03:30.750 --> 03:31.500
a test case.

03:31.500 --> 03:34.140
And we have got multiple test case in this data.

03:34.170 --> 03:36.480
As you can see LM test case one.

03:37.080 --> 03:40.080
LM test case two and LM test case of three.

03:40.080 --> 03:43.650
So we have got three test cases including the multiplication.

03:44.370 --> 03:47.460
So all these test cases needs to be executed one by one.

03:47.610 --> 03:49.680
So this is what I'm doing over here.

03:49.680 --> 03:55.710
So while I try to run this immediately you will notice that it is going to give us the response one.

03:55.710 --> 04:01.050
So all the expected tools uh, which is this one were called uh, over here.

04:01.080 --> 04:03.840
Order is not considered, which is fine.

04:04.140 --> 04:09.840
And then there is a incomplete missing over here for some reason.

04:10.020 --> 04:13.530
Um, looks like the spelling mistake over here.

04:13.560 --> 04:14.100
Look at that.

04:14.130 --> 04:15.810
It says multiply.

04:15.840 --> 04:17.970
And what we have is not correct.

04:17.970 --> 04:23.520
So that I think they have wrongly typed somewhere while doing, while I was doing the data creation

04:23.520 --> 04:25.470
in the golden somewhere.

04:26.190 --> 04:28.110
Let me just go all the way on the top.

04:28.170 --> 04:29.010
Oh, look at that.

04:29.010 --> 04:30.680
Multiply spelling is wrong.

04:30.680 --> 04:34.880
So the multiply spelling is this one.

04:35.840 --> 04:37.700
Just my mistake.

04:37.730 --> 04:39.320
I should have read that correctly.

04:39.320 --> 04:41.900
But yeah, we have got a negative test case there.

04:41.900 --> 04:51.800
So which is also a good thing uh, to, to have in place because that way we can test like everything

04:51.800 --> 04:53.840
is working as expected as well.

04:55.130 --> 04:56.240
Uh, there we go.

04:56.660 --> 04:57.740
Let me upload it.

04:57.950 --> 04:59.960
Let me create the data set.

05:00.110 --> 05:01.790
Let me pull it back.

05:01.820 --> 05:05.900
The data set will have the correct, um, correct spelling this time.

05:05.900 --> 05:11.450
And I'm going to run, uh, this guy.

05:11.480 --> 05:15.470
But before I run this, I will also show you the metrics that I was just showing you over here.

05:15.470 --> 05:15.860
Look at that.

05:15.860 --> 05:22.460
So if there is a wrong usage of the tools, you are going to immediately get a response here saying

05:22.490 --> 05:24.710
expected this one, but card this one.

05:24.710 --> 05:27.410
So you see that that is a failure there.

05:27.920 --> 05:28.430
Right.

05:28.430 --> 05:31.970
And if the subtract number is correct then it is going to be fine.

05:31.970 --> 05:33.140
So there is a 1.0.

05:33.140 --> 05:37.280
So there is one tool failing and happening is because of the data that we have passed.

05:37.280 --> 05:41.690
But you will see that the matrix is actually measuring it correctly, and it's giving us that this is

05:41.690 --> 05:44.810
the wrong tool being called, or if this is the right tool being called.

05:44.810 --> 05:48.650
So that is how you can see the entire matrix coming up for us over here.

05:48.650 --> 05:55.130
But the moment I correct this entire thing, like let's say I'm going to run the with the correct golden

05:55.130 --> 06:03.560
data set and with the correct information that we are supposed to pass and which is going to be the

06:03.560 --> 06:04.730
correct tooling, hopefully.

06:04.730 --> 06:09.530
And if I run the tool correction this time, you see that all of them are one, one one.

06:09.530 --> 06:16.070
So because I have fixed the multiply numbers spelling there and you see that it's all correctly been

06:16.070 --> 06:17.210
called over here.

06:17.450 --> 06:25.430
So which means our agent is correctly calling the right tooling required for the right question, which

06:25.430 --> 06:27.950
means our test has got passed, which is amazing.

06:27.950 --> 06:34.580
So this is how we can do the testing of our tool correctness in the tool correctness metrics.

06:34.580 --> 06:39.860
In the deep eval tool, there are a few more changes that we can make in this particular thing for the

06:39.860 --> 06:40.070
tool.

06:40.070 --> 06:44.300
Correctness metrics based on the different kind of parameter that you can pass, which I'll be talking

06:44.300 --> 06:46.250
about quickly in our next lecture.



========================================================================================


WEBVTT

00:00.050 --> 00:05.060
The last operation in this particular section is going to be checking the tool correctness metrics of

00:05.060 --> 00:06.350
different parameters.

00:06.380 --> 00:10.490
This is something which I end up digging in this particular library a bit as well.

00:10.490 --> 00:16.580
So what I really mean about that is that go copy this and put a mark down here.

00:16.580 --> 00:23.690
And I'm going to say digging into tool correction metrics.

00:24.380 --> 00:33.470
And this one as you can see over here you can use this tool correction metrics in a even more better

00:33.470 --> 00:43.310
fashion, which is going to be you can just say probably like a tool metrics is equal to tool correction

00:43.310 --> 00:44.030
metrics.

00:44.030 --> 00:47.840
And in this tool correction metrics we just go to this particular class file a bit.

00:47.840 --> 00:51.020
You will notice that there are many different parameters that you can pass in.

00:51.050 --> 00:54.260
Like these are the required parameters like these.

00:54.290 --> 01:00.440
And you can also pass a lot of details as well like the threshold evaluation parameters include reasons

01:00.440 --> 01:04.790
strict mode verbose exact match should consider ordering.

01:05.450 --> 01:07.130
So consider your two.

01:07.160 --> 01:12.480
Your agent is going to call multiple different tools in a different order, or maybe in a sequence of

01:12.480 --> 01:15.510
order, and you wanted to measure the tools order as well.

01:15.510 --> 01:17.730
You can do it over here.

01:18.090 --> 01:22.590
I mean, at the moment in our test case, we don't have like multiple tools being called for one single

01:22.590 --> 01:23.070
query.

01:23.070 --> 01:29.700
But if you have a if you have a situation where you also need to check for the queries, you can also

01:29.700 --> 01:32.790
do that in in multiple different orders as well.

01:32.820 --> 01:38.250
You remember, uh, in our earlier sections of this course, while I was showing you with the agent,

01:38.250 --> 01:44.430
you can ask two questions, uh, together, for instance, you can ask what is the sum of two and four?

01:44.430 --> 01:47.760
And did Donald Trump won 2024 presidential election?

01:47.760 --> 01:52.620
Then these two questions are going to be executing two chain calls.

01:52.680 --> 01:56.430
One is the Wikipedia and also another one is the ad numbers.

01:57.000 --> 02:02.220
So if you're going to verify these two are going to be called in a sequence of order.

02:02.220 --> 02:04.590
Or maybe they are called together as well.

02:04.590 --> 02:07.410
If you're going to verify in these kind of fashion you can do that.

02:07.410 --> 02:11.370
So all these metrics you can evaluate using this tool collection metrics.

02:11.580 --> 02:15.150
So in order to show you what are the things that you can pass over here.

02:15.150 --> 02:18.090
You can pass a threshold, let's say 0.5.

02:18.120 --> 02:19.710
I mean, the one is the threshold in our case.

02:19.710 --> 02:22.500
So I can just say it should be always one.

02:22.500 --> 02:23.520
You can do that.

02:23.520 --> 02:26.970
And you can pass the evaluation parameters over here.

02:26.970 --> 02:33.360
And the parameters is nothing but the the LM test case I think there is an there is something called

02:33.360 --> 02:37.980
as LM test case, uh, of uh test case parameters.

02:37.980 --> 02:39.990
So you can pass the params.

02:40.140 --> 02:43.200
And over here you can pass the input.

02:43.350 --> 02:46.650
So that is going to verify the input parameter.

02:46.770 --> 02:51.990
And similarly you can just say uh actual output.

02:51.990 --> 02:53.520
You can verify that.

02:53.520 --> 03:01.230
And then you can also verify uh the expected output and expected tools.

03:02.280 --> 03:07.920
So you can verify all of these in the evaluation parameter like how we have got all these informations

03:07.950 --> 03:09.720
in our data already.

03:10.110 --> 03:10.530
Right.

03:10.560 --> 03:13.830
These things you can verify it as well which is pretty cool.

03:14.070 --> 03:23.910
And you can also verify should include a reason true and should exact match, which is true because

03:23.910 --> 03:25.020
it should be exactly matching.

03:25.020 --> 03:27.030
The tool name should consider order.

03:27.060 --> 03:32.580
Probably not, because at the moment we don't really have any of these sequence or ordering, but I'm

03:32.580 --> 03:37.770
just going to say true because we just have only one tool at the moment and you can say strict mode

03:37.920 --> 03:39.960
as true as well if you wanted to.

03:40.410 --> 03:43.920
There is one bug if you try to include the verbose mode.

03:44.070 --> 03:47.280
I tried doing that like true, it just fails abruptly.

03:47.280 --> 03:48.540
I will show you in a minute.

03:48.900 --> 03:52.950
But these are the things that you can pass this tool metrics and this tool metric.

03:52.980 --> 03:56.070
You can pass it over here.

03:56.070 --> 04:01.530
So basically instead of creating the tool collection something like this, you can just say tool metrics

04:01.530 --> 04:02.670
dot measure.

04:02.760 --> 04:06.240
So this will measure every single things for you.

04:06.240 --> 04:08.550
So you get the score you get the reason.

04:08.760 --> 04:11.610
Um guess what I can just say score.

04:11.880 --> 04:27.360
Uh and reason and I can also print probably print uh metrics dot uh include reason and I can also print

04:27.480 --> 04:38.780
uh metrics dot expected tools, and I can also print a metrics dot evaluation parameters.

04:38.780 --> 04:43.520
So I can put all these over here for my reporting purpose, so that I can see that everything works

04:43.520 --> 04:45.080
as expected or not as well.

04:45.080 --> 04:45.650
Look at that.

04:45.650 --> 04:48.260
It's just going to show me every single things over there.

04:48.260 --> 04:54.620
So you see that this is this is the power guys like we have got like all of these information coming

04:54.620 --> 04:55.790
up for us over here.

04:55.790 --> 05:00.260
Like it is going to have the name like the parsing result.

05:00.260 --> 05:02.000
All the expected tools are coming up.

05:02.000 --> 05:07.610
And the true is for this, uh, is for the reason which is true.

05:07.610 --> 05:11.180
And then this is the tool being called uh, which is the include reason.

05:11.180 --> 05:13.430
And then we have got all this information.

05:13.430 --> 05:17.030
So expected tools for some reason is not coming up over there.

05:17.030 --> 05:19.010
But we have got the information.

05:19.010 --> 05:22.130
So but so yeah this is how you can see everything.

05:22.130 --> 05:23.210
You can print it out.

05:23.240 --> 05:29.270
As I told you, if you just give verbose mode as true for some reason it just gives me it runs in a

05:29.270 --> 05:31.130
loop and then it fails abruptly.

05:31.130 --> 05:31.970
Look at that.

05:32.180 --> 05:33.890
It just keeps on running like that.

05:34.160 --> 05:41.880
And at the at the end it just fails, saying that the maximum recursion depth exceeded and then it fails.

05:41.880 --> 05:47.280
So that's the reason why I don't want to show you the verbose mode as true there.

05:47.550 --> 05:50.370
But other than that, everything looks quite right.

05:50.400 --> 05:51.720
It just works fine.

05:51.990 --> 05:55.830
And this is how you can see the results are all coming up for you.

05:55.830 --> 06:01.050
So yeah, these are the things that we can actually do it from our tool correction metrics.

06:01.050 --> 06:03.930
We can pass multiple different parameters and we can get the response out.

06:03.960 --> 06:09.660
As I told you, the only bummer of this entire thing is that we can't we can't run the evaluate method,

06:09.660 --> 06:15.900
like how we did in our last section, which can run on the open AI and get the deep values result and

06:15.900 --> 06:23.310
get into the into the metrics in the dashboard, the confident AI, those things are still not supported.

06:23.430 --> 06:28.470
So you can't see something like these kind of fancy metrics, but at least you got the idea.

06:28.500 --> 06:30.780
You got the response coming up over here.

06:30.780 --> 06:35.580
This is how we can validate our agent calling the correct tool.

06:35.580 --> 06:38.880
And it gets the responses like how we are looking for.

06:39.840 --> 06:40.350
That's it guys.

06:40.350 --> 06:42.660
Once again thank you so much for purchasing this course.

06:42.660 --> 06:44.100
And you guys have a great day.


========================================================================================





