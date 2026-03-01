##video-1

WEBVTT

00:00.110 --> 00:06.320
Welcome to the first section of our course building and testing AI agents, rags and chatbots using

00:06.320 --> 00:11.180
Lang chain with Olama and local large language models.

00:11.210 --> 00:16.970
I know the heading of this course is quite big, but as the heading suggests, the entire course itself

00:16.970 --> 00:22.520
is going to be so deep, and we are going to be talking about a lot of details about how we can build

00:22.550 --> 00:27.470
AI agents, rags and chatbots in much, much detailed fashion.

00:27.500 --> 00:33.530
We'll also be seeing how we can test these using the testing techniques, which are available to ensure

00:33.530 --> 00:39.410
that these agents, or rags and chatbots, does not hallucinate and gives the precise answer that we're

00:39.410 --> 00:40.220
looking for.

00:40.640 --> 00:45.230
But before we get into all these details, let's first understand what is this Lang chain?

00:45.710 --> 00:52.220
Well, Lang chain is a framework for developing applications powered by large language models.

00:52.640 --> 00:56.420
And you can see that this is the architecture of this Lang chain itself.

00:56.420 --> 01:00.630
And don't worry about the architecture right now because we're just starting up over here.

01:00.630 --> 01:04.380
But you will see that these are things that we are going to be commonly using.

01:04.380 --> 01:07.590
While we talk about the link chain in this entire course.

01:07.590 --> 01:10.680
One is the link chain itself, which is the library.

01:10.680 --> 01:17.940
And then it's going to be a link graph, which is going to be helpful for you to use it with the agents

01:17.940 --> 01:19.260
and powering the agents.

01:19.260 --> 01:23.670
And that is going to be a lot of integration components which is used by the link chain.

01:23.700 --> 01:28.830
These components are going to be something that we'll be talking in our upcoming lectures of this section.

01:28.830 --> 01:32.910
And there are going to be long chain platforms which are going commercial platform, which are mainly

01:32.910 --> 01:37.710
used for deployment purpose, which you can use to deploy your large language model application and

01:37.710 --> 01:39.930
can be widely used by the consumers.

01:39.930 --> 01:45.240
And there is one of the most important thing which is going to be common for all these components like

01:45.270 --> 01:48.540
architecture components and deployment is going to be the Lang Smith.

01:48.540 --> 01:54.090
And this Lang Smith is very, very important because this is going to be helpful for debugging playground

01:54.120 --> 01:58.470
prompt management annotation testing and monitoring purpose.

01:58.470 --> 02:04.340
And this also commercial, as you can see over here, but you can use the free version for our development

02:04.340 --> 02:06.560
that we are going to be doing in this particular course.

02:06.560 --> 02:09.020
So this is the complete framework of the link chain.

02:09.020 --> 02:14.030
I know it is very, very high level by now, but once we get into this link chain more deeper, you'll

02:14.030 --> 02:17.240
understand these components slowly and steadily.

02:17.240 --> 02:21.650
But first of all, let's understand what are the things that we are going to be using this link chain

02:21.650 --> 02:22.130
for.

02:22.130 --> 02:28.790
Well, using this link chain we can build chatbots like ChatGPT, frequently asked questions, customer

02:28.790 --> 02:29.750
support applications.

02:29.750 --> 02:33.710
So all these things we can build using this link chain.

02:33.740 --> 02:40.820
We can also build a rag which is nothing but retrieval augmented generation which will extend the large

02:40.820 --> 02:46.580
language models knowledge with external data source like documents and knowledge sources.

02:46.580 --> 02:49.940
And we can also use this link chain for building AI agents.

02:49.940 --> 02:54.740
So the agents that can plan, reason and execute the action that you're looking for.

02:54.770 --> 02:59.700
And you can also use the link chain for AI powered search, which is like an intelligent search using

02:59.700 --> 03:04.050
the natural language, which will be using embedding and vector database to make this happen.

03:04.080 --> 03:09.600
It can be used for text summarization and content generation as it names data extraction and processing,

03:09.600 --> 03:11.970
and also for AI powered code generation.

03:11.970 --> 03:18.180
So we can write automated tests using the playwright or selenium, or for that matter, using this lang

03:18.210 --> 03:18.720
chain.

03:18.720 --> 03:21.270
So you see that this is very, very powerful.

03:21.270 --> 03:25.770
All these applications that you're going to be building are going to be powered by this Lang chain.

03:25.770 --> 03:32.730
Even browser use one of the application, which is mainly used for performing web data extraction,

03:32.730 --> 03:34.260
uses Lang chain a lot.

03:34.260 --> 03:37.080
And we talked about something called as Lang Smith over here.

03:37.080 --> 03:42.030
As I told you, this is one of the most important key component of this entire journey that we are going

03:42.060 --> 03:43.170
to be doing in this course.

03:43.170 --> 03:50.010
So Lang Smith is an evaluation and debugging platform for large language model applications built by

03:50.010 --> 03:51.300
the Lang Chain team itself.

03:51.300 --> 03:57.540
So it helps developers test, optimize, and monitor their AI application by providing powerful tools

03:57.560 --> 04:03.080
for tracing, logging, debugging and benchmarking different large language model components.

04:03.080 --> 04:07.160
And we are going to be using this language with quite a lot in this course, as I told you before.

04:07.700 --> 04:12.590
So in this course, as you can see over here, we are going to be doing all these operations.

04:12.620 --> 04:16.310
We are going to first understand the basic building blocks of long chain.

04:16.310 --> 04:20.660
This is going to take a couple of sections to understand how things will work, and then how we can

04:20.660 --> 04:27.170
create our own long chain chains and how we can use with the large language models run the chains.

04:27.170 --> 04:33.380
And also we can use these syntax that we have learned over here, the concepts that we have learned

04:33.380 --> 04:34.340
from here.

04:34.340 --> 04:41.660
And then we'll implement these to build the chatbots, build rags or retrieval augmented generations.

04:41.690 --> 04:45.410
We can also be building agents or the AI agents.

04:45.410 --> 04:49.940
And then finally we'll be testing all these things that we have built over here.

04:50.120 --> 04:54.620
And you will see that all these components that we are going to be doing over here are going to be done

04:54.620 --> 05:01.530
with the all Arma and local large language models, and the local large language models can be llama

05:01.530 --> 05:05.250
three R2 or Dbsk R1 or Qn 2.5 model.

05:05.250 --> 05:13.290
It can be of anything as long as your machine can execute or support running these large language models

05:13.290 --> 05:19.200
within your local machine, you can use any number of parameters, so you can see that you can use 8

05:19.200 --> 05:22.350
billion parameter or 2 billion parameter, or 6 billion parameter.

05:22.350 --> 05:24.870
It depends upon how your machine can handle those.

05:24.870 --> 05:27.780
And we are going to be using that in this particular course.

05:27.780 --> 05:32.400
I'm going to be prevalently using the llama 3.28 billion parameter mostly.

05:32.400 --> 05:36.270
If your machine can handle more than that, you are very happy to use them.

05:36.270 --> 05:37.710
And guess what?

05:37.710 --> 05:44.550
The more and more billion parameters your large language model supports, the better your language applications

05:44.550 --> 05:47.940
response is going to be and more accurate the response is going to be.

05:47.940 --> 05:51.780
And as I said, let's talk about the prerequisite of this course.

05:51.960 --> 05:55.020
We are going to be using Windows or Mac operating system.

05:55.020 --> 06:00.440
So I'm going to be mostly using Mac operating system because I run everything in my Mac OS as well as

06:00.440 --> 06:05.870
I have Mac, Apple M1 machine, so I will be using that as a host machine for all the execution.

06:05.900 --> 06:10.490
And we also need to have Python for execution, because the entire operation that we are going to be

06:10.490 --> 06:12.950
using in the long chain is going to be Python.

06:12.950 --> 06:17.240
Long chain also has JavaScript version, but we are going to be using the Python version here.

06:17.240 --> 06:20.000
And then you need to have a good machine configuration.

06:20.030 --> 06:28.310
Of course it can be M1 or higher, or maybe windows with a GPU like 208 0 or 3 080, or even 4090 for

06:28.340 --> 06:28.850
that matter.

06:28.850 --> 06:33.950
If you have any of these GPU, which is amazing, you will have a very good inferencing time and it

06:33.950 --> 06:36.170
should be very, very faster when you execute them.

06:36.200 --> 06:41.150
You also need to have Visual Studio Code, of course, and Olama, because Olama is the one that we

06:41.150 --> 06:46.520
are going to be using as a platform to run the local large language models.

06:46.520 --> 06:50.450
So these are the precursor of this course guys, and I'm quite excited with this course for you.

06:50.450 --> 06:55.820
So talk to you in our next lecture where we are going to be talking about why lamb-smith in first place.

========================================================================================

WEBVTT

00:00.080 --> 00:01.850
In this lecture, we'll understand why.

00:01.880 --> 00:02.960
Lang chain.

00:04.130 --> 00:08.480
Well, lang chain can help us do quite a lot of different operations.

00:08.510 --> 00:12.830
The main purpose of Lang Chain is it standardizes the component interfaces.

00:12.950 --> 00:19.700
As you know, there are growing number of models coming up every single day, like OpenAI's GPT model

00:19.700 --> 00:24.650
and cloud anthropic model, and Google's Gemini model and Microsoft's Pi model.

00:24.650 --> 00:30.140
And then there is suddenly Chinese deep sea model, and there is also Qnn model.

00:30.140 --> 00:32.300
And there are even more models coming up lately.

00:32.300 --> 00:36.980
This year, while there is going to be a new model from Russia and other countries are going to come

00:36.980 --> 00:37.790
up pretty soon.

00:37.790 --> 00:42.320
So you see that all these models are going to be keep on growing every single time.

00:42.320 --> 00:47.840
And the related components of the AI application has resulted in a wide variety of different APIs that

00:47.840 --> 00:50.720
the developer need to learn and use every single time.

00:50.720 --> 00:56.420
And this diversity can make it challenging for developers to switch between providers or combine components

00:56.420 --> 01:02.400
when building applications, and Lang Chain exposes a standard interface for key components, making

01:02.400 --> 01:04.560
it so easy to switch between these providers.

01:04.590 --> 01:07.950
So basically, this long chain is agnostic to any of the model.

01:07.950 --> 01:13.140
And it supports all these model by providing an interface for all of these models.

01:13.140 --> 01:18.600
And there is also this observability and evaluation pattern available in the long chain by default.

01:18.600 --> 01:23.220
So as an application becomes more and more complex, it becomes increasingly difficult to understand

01:23.220 --> 01:28.800
what is really happening within these applications and how these applications are going to be querying

01:28.800 --> 01:30.690
with these large language models.

01:30.690 --> 01:34.740
And now with the power of this language, Smith.

01:35.310 --> 01:40.650
The observability and the evaluation is just embedded inside the chain itself.

01:40.650 --> 01:45.660
And as it said, let's talk about the standardization of the component and interfaces even more.

01:45.690 --> 01:51.570
But as you see, long chain provides a consistent interface for working with with chat models from different

01:51.570 --> 01:58.630
providers like Anthropic Cloud, OpenAI, Alarma, Microsoft Azure, Google Vertex, and more, and

01:58.630 --> 02:05.440
using either long chains, message format or Openeye format, you can make a consistent messaging of

02:05.440 --> 02:07.450
the data from your application.

02:07.450 --> 02:10.330
And also there is a standard tool calling API.

02:10.360 --> 02:16.660
So basically the standard interface for binding tools to model access tool called request made by these

02:16.660 --> 02:18.850
model is going to be very, very easy.

02:18.850 --> 02:24.430
And also Lang Chain has got standard APIs for structured output, which can be helpful for you to get

02:24.430 --> 02:30.970
a structured response from the large language models, something like a JSON response or text response

02:30.970 --> 02:32.740
or a string response that you're looking for.

02:32.770 --> 02:39.250
And also Lang chain provides support for async programming, efficient batching, and a rich streaming

02:39.250 --> 02:44.590
API, so you can stream the response from the large language model much, much easily just by using

02:44.590 --> 02:46.300
the stream method which is available.

02:46.300 --> 02:50.290
It is so easy and I will show you how these things work, and I'm quite excited to show you how these

02:50.290 --> 02:51.370
things work, really.

02:51.400 --> 02:56.230
And finally, integration with Lang Smith for monitoring and debugging production grade application

02:56.230 --> 03:01.660
based on the large language model is also amazing, and this is something I keep on telling from last

03:01.660 --> 03:02.170
lecture.

03:02.170 --> 03:08.200
You will be seeing how amazing they are and as I said, the entire standard model integration is going

03:08.200 --> 03:09.640
to look something like this.

03:09.640 --> 03:14.080
And you can see that the long chain has got the integration with the long chain or lemma, or long chain

03:14.110 --> 03:16.360
OpenAI or long chain anthropic.

03:16.360 --> 03:19.570
And any model that is going to come up, they are going to be supported.

03:19.570 --> 03:21.130
Guys, this is so cool.

03:21.130 --> 03:23.410
So that is the power of the long chain itself.

03:23.410 --> 03:28.390
They are going to keep on building all these integration embedded inside their platform.

03:28.390 --> 03:31.420
That way it supports all these different models.

03:31.420 --> 03:36.790
Even the deep sea, which just came like couple of weeks before, is going to be supported or even supported

03:36.790 --> 03:38.620
already with the long chain.

03:38.620 --> 03:45.100
So you can just use that particular integration within your large language model based applications

03:45.850 --> 03:47.830
and finally interfaces.

03:47.830 --> 03:51.670
You see that long chain has got this standard interfaces as well.

03:51.700 --> 03:55.940
All you have to do in order to invoke a large language model, It's just called the method called as

03:55.940 --> 03:56.870
Invoke method.

03:56.870 --> 04:00.710
And if you want to stream the data from the large language model, you just have to call the stream

04:00.710 --> 04:01.040
method.

04:01.040 --> 04:03.200
It can be of any large language models.

04:03.200 --> 04:08.240
All these models are going to just comply with the long chain interfaces, which is going to make things

04:08.240 --> 04:09.320
more cleaner.

04:09.350 --> 04:14.630
And also there is a batch support and even more different supports available with this interfaces.

04:14.930 --> 04:15.890
That's amazing.

04:15.890 --> 04:21.290
And that is the reason why we need to go with the long chain while working with the large language model

04:21.320 --> 04:23.060
based application and beyond.

04:23.060 --> 04:29.090
That long chain also has support for standard input outputs, tool calling, standard output, formatting,

04:29.120 --> 04:31.100
observability, catching, and more.

04:31.100 --> 04:36.500
So you see that this thing is just keep on going to expand while the platform develops and while the

04:36.500 --> 04:37.370
library develops.

04:37.370 --> 04:42.770
All these standardization is going to happen for your large language model based application.

04:43.040 --> 04:46.370
That's the power of the long chain.

04:46.370 --> 04:52.640
And this and that is the reason why we should be going with the long chain while building large language

04:52.640 --> 04:54.110
model based applications.


========================================================================================

WEBVTT

00:00.020 --> 00:03.560
In this lecture we are going to talk about Lange Chain's ecosystem.

00:04.850 --> 00:10.220
So Lange Chain library and its surrounding ecosystem is what makes Lange chain so special for building

00:10.220 --> 00:12.230
large language model based applications.

00:12.260 --> 00:18.950
So Lange chain has got two most important component, which is the Lange, Smith and Lange graph.

00:18.980 --> 00:25.640
I mean, apart from the Lange chain library itself, these two are the next most important component

00:25.640 --> 00:28.490
that the Lange chain has got in its ecosystem.

00:28.490 --> 00:34.640
So Lange Smith is mainly used for tracing and evaluating your large language models, applications,

00:34.640 --> 00:38.960
and intelligent agent to help you move your prototype to production.

00:38.960 --> 00:44.480
That is what this Lange Smith is all about, and this is mainly used for evaluation for every single

00:44.480 --> 00:50.030
step that you perform in the Lange chain, while you're writing the library and how your application

00:50.030 --> 00:52.520
really behaves under the hood, that is, what is this?

00:52.520 --> 00:53.060
Lange Smith?

00:53.060 --> 00:55.970
And you are going to be using this quite a lot in this entire course.

00:55.970 --> 00:57.740
And the next one is the Lange graph.

00:57.770 --> 01:03.710
I mean, Lange graph is a library for building stateful multi actor applications with a large language

01:03.710 --> 01:07.190
models used to create agents and multi-agent workflow.

01:07.190 --> 01:10.730
And this is again going to be very very important and useful.

01:10.730 --> 01:15.480
While you are going to be creating an agent and you will be understanding how this workflow of the agent

01:15.480 --> 01:22.530
can be controlled, binded with different tools and how you work with those agents for your production

01:22.530 --> 01:23.250
ready application.

01:23.250 --> 01:25.590
So that is what this line graph is all about.

01:25.590 --> 01:30.750
I'm going to quickly show you how this Lang Smith is going to look like, and how you can get started

01:30.750 --> 01:35.250
with this in this particular lecture, so that while we start working with the Lang Smith, you will

01:35.250 --> 01:38.310
have no surprise what this Lang Smith is all about.

01:38.310 --> 01:38.730
All right.

01:38.730 --> 01:42.540
So this is the Lang Chain website, as you can see over here.

01:42.540 --> 01:45.900
And this Lang chain has got Lang chain, lang Smith and Lang graph.

01:45.900 --> 01:47.940
And these are the three components that they have got.

01:47.970 --> 01:52.800
As I told you in the ecosystem, this Lang Smith and land graph are the most important component apart

01:52.800 --> 01:54.840
from the Lang chain library itself.

01:54.840 --> 01:59.760
So if you go to the Lang Smith over here, it's going to bring up this particular page over here.

01:59.760 --> 02:03.690
And they give you the information of how this particular Lang Smith is going to be useful.

02:03.930 --> 02:08.700
Like you can see that how many people have signed up and how many logs are being traced every single

02:08.700 --> 02:13.590
day, and how many monthly active team members are there, and what are the things that it does and

02:13.590 --> 02:14.880
all those details is available.

02:14.880 --> 02:17.880
So you can just go ahead and sign up from here.

02:17.880 --> 02:19.950
And I have already signed up with my GitHub account.

02:19.950 --> 02:24.870
So if I just go, you will see that it is going to take me up to this particular dashboard over here.

02:24.870 --> 02:27.510
So this is the, uh, this is the welcome page you have got.

02:27.510 --> 02:30.750
And there are some observability traces that you can see from here.

02:30.750 --> 02:34.530
So this is the one that I have got the execute automation learning over here.

02:34.530 --> 02:39.750
And there is also a default, uh, tracing project, which is something that is not going to show you

02:39.750 --> 02:42.450
any information, but the one that you are seeing over here, this is your automation.

02:42.450 --> 02:44.790
Learning is the one that I created it over here.

02:44.790 --> 02:49.920
And if I go to this automation learning project, you will notice that it is going to show quite a lot

02:49.950 --> 02:52.260
of different options or operations over here.

02:52.260 --> 02:56.250
It's going to show me like uh, like the runnable with message history.

02:56.250 --> 02:59.940
And there is also, uh, with a lot of information over here.

02:59.940 --> 03:04.590
You can see that if I just keep going down below, it's, uh, runnable sequence comes in.

03:04.590 --> 03:09.030
And there is also runnable parallels and runnable templates, chat prompt templates.

03:09.060 --> 03:10.980
There are many things going to come up over here.

03:10.980 --> 03:16.080
So if I go and click any one of the runnable with a message history, it's going to show you some information

03:16.080 --> 03:16.620
over here.

03:16.650 --> 03:19.800
So what are the things that I have uh, given as an input.

03:19.800 --> 03:21.690
And what is the input history coming up.

03:21.690 --> 03:25.290
What is the load history and what is the check going to come up?

03:25.290 --> 03:27.960
And what is the model which is being used behind the scene.

03:27.960 --> 03:30.060
So these are things is going to happen for me.

03:30.060 --> 03:31.320
Uh, behind the scene.

03:31.320 --> 03:34.770
Guys like all these informations are going to be coming up from there.

03:34.800 --> 03:39.570
We are going to talk about how these things are going to be coming up over here, and how we can make

03:39.570 --> 03:44.910
use of this particular traceability from this particular langschmidt in later part of this course.

03:44.910 --> 03:48.960
But at least you have got the first taste of what is going to be coming up in this particular course.

03:48.990 --> 03:53.430
I mean, this long chain message is going to keep on increasing in this particular Lange Smith even

03:53.430 --> 03:55.380
further with even more information.

03:55.380 --> 03:59.430
What you're seeing over here is just the basic operation, but it's going to keep on increasing even

03:59.430 --> 04:00.180
further.

04:00.690 --> 04:02.880
So that's about the Lange Smith for us.

04:02.880 --> 04:06.090
And you can also see there is something called as Lange Graff.

04:06.090 --> 04:13.530
As I told you, this Lange graph is mainly used for the agents to control how the workflow should work

04:13.530 --> 04:13.800
with.

04:13.800 --> 04:18.990
And this is also used by many, uh, many fortune 500 companies.

04:18.990 --> 04:21.480
And you can see what they have got over here.

04:21.900 --> 04:25.680
But anyways, when we talk about agent and how we're going to be using this particular Lange graph,

04:25.680 --> 04:27.570
I'll be talking about that even further.

04:27.570 --> 04:33.090
But at least for now, you got the taste of what this Lange chain, Lange Smith and Lange Graff are

04:33.120 --> 04:34.680
starting our next section.

04:34.680 --> 04:40.530
We are going to see how we can first start working with the Olama within our local machine.

04:40.530 --> 04:41.430
What is the Olama?

04:41.430 --> 04:46.260
How to import the large language model within our local machine and start using it.

04:46.260 --> 04:49.890
And then following that, we are going to start working with the Lange chain itself.
