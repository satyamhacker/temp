WEBVTT

00:00.050 --> 00:01.730
Welcome to the next section of our course.

00:01.730 --> 00:06.620
And in this section we are going to talk about understanding toolings in large language models.

00:07.040 --> 00:13.730
So tooling is another great concept of the large language model, which can help your large language

00:13.730 --> 00:19.460
model to use external tools and libraries while it performs any action.

00:20.000 --> 00:26.300
I know it sounds crazy that LM is going to use some other external tools to perform an operation, but

00:26.300 --> 00:28.610
the tools are going to be very, very essential.

00:28.610 --> 00:37.460
While you are going to give your LM an extra leverage or mileage to go and search for external data,

00:37.490 --> 00:43.280
probably, or even going to go and perform an action which your large language model is not trained

00:43.280 --> 00:43.790
for.

00:43.820 --> 00:45.740
That is what is this tooling is all about.

00:45.740 --> 00:49.130
So for instance this is a simple example that you can see here.

00:49.160 --> 00:54.350
I'm going to ask like did Donald Trump won the 2024 presidential election.

00:54.470 --> 01:00.470
And if I'm going to pass this via Lang chain with our prompt, and if you're going to ask it to the

01:00.860 --> 01:09.310
model, your model is not going to be responding unless until it has trained with 2024 data in it.

01:09.310 --> 01:15.790
I'm sure most of the models today in 2020 5th February, none of the model has actually been trained

01:15.790 --> 01:17.350
with 2024 data.

01:17.350 --> 01:22.390
So you are going to get a response saying, nope, I don't have the context of your 24 due to the cutoff

01:22.390 --> 01:23.680
of the trained data.

01:24.190 --> 01:27.760
That is what you are going to be getting up from the model.

01:27.760 --> 01:30.130
So let's try this and see if that is the case.

01:30.130 --> 01:34.030
So I'm going to go to my hyper terminal over here.

01:34.030 --> 01:37.840
And I'm going to say uh oh llama.

01:37.840 --> 01:40.150
And I'm going to run the model.

01:40.150 --> 01:43.930
And I'm going to ask the exact same question that I have asked over here.

01:44.320 --> 01:46.630
Copy that, paste it over here.

01:46.660 --> 01:48.400
And I'm going to hit enter.

01:48.400 --> 01:49.540
So let's see what it's going to.

01:49.570 --> 01:50.500
So look at that.

01:50.500 --> 01:58.240
So as of my last update on October 2024, 2023, there has been no official result of the 2024 US presidential

01:58.240 --> 02:01.870
election as it hasn't taken place yet.

02:01.900 --> 02:06.100
That is what you're going to be getting with the Q1 2.5 model.

02:06.100 --> 02:11.230
We're going to be using the same exact model right now for all our discussion, as you know.

02:11.260 --> 02:18.700
But once we start using the tooling operation, you are going to get this response.

02:18.700 --> 02:20.290
So this is what I'm talking about.

02:20.290 --> 02:24.670
You're going to get the actual response like the same question, but it's going to say yes, Donald

02:24.700 --> 02:27.880
Trump won the election in 2024, but how is that happening?

02:27.970 --> 02:34.210
You'll notice that we have included a tool binding with a Wikipedia tool.

02:35.350 --> 02:37.570
So that is what is tooling support guys.

02:37.570 --> 02:38.620
Now you got the idea right.

02:38.620 --> 02:45.160
So there is something called as a Wikipedia tool or Bing search tool or maybe Google search tool, whatever

02:45.160 --> 02:47.650
tool that you wanted to fuse if they have got one.

02:47.650 --> 02:55.360
Or you can also make your own, and then you can integrate this Wikipedia tool along with your tool

02:55.390 --> 02:58.420
binding for your large language model.

02:58.420 --> 03:05.800
And the moment you do it, you are going to start getting the responses from your large language model.

03:05.800 --> 03:06.970
And it's going to say yes.

03:06.970 --> 03:09.070
Donald Trump won the election in 2024.

03:09.310 --> 03:13.480
Based on the prompt, how you have written over here, the answer is going to be summarized and it's

03:13.480 --> 03:15.580
going to give an up to you over here.

03:15.610 --> 03:17.670
And that is what is the tooling support guys.

03:17.700 --> 03:19.020
And now you got the idea right.

03:19.050 --> 03:24.300
This this is going to give an extra mileage to your large language model with the details that you're

03:24.300 --> 03:29.640
looking for, which is something not your large language model is already trained with.

03:29.670 --> 03:34.380
If your large language model has got no context of that particular question that you're asking, then

03:34.380 --> 03:41.580
this model is going to go and search for the available tool it has got, and then it is going to generate

03:41.580 --> 03:44.190
the answer for you, and it's going to give it to you back.

03:44.220 --> 03:46.470
And that is the power of the tooling support.

03:46.500 --> 03:53.160
So about this tooling we just go to Lang Chain.com website over here and see that under the tools,

03:53.160 --> 03:54.720
the components of the tools.

03:54.930 --> 03:57.060
Uh, there is this tools over here.

03:57.060 --> 04:00.630
So tools are the utilities designed to be called by the model.

04:01.350 --> 04:04.500
Their inputs are designed to be generated by models.

04:04.500 --> 04:08.100
And their outputs are designed to be passed back to the models.

04:08.130 --> 04:12.150
And the toolkit is a collection of tools meant to be used together.

04:12.300 --> 04:18.120
And if you write your own tools, see how to you you would like to contribute to the integration.

04:18.180 --> 04:19.380
See the contribution integration.

04:19.380 --> 04:22.530
So you can write your own tools as well.

04:22.560 --> 04:26.120
I mean we'll talk about that in a in this particular section anyways.

04:26.120 --> 04:29.870
But for now just see the existing tools is already available.

04:29.900 --> 04:30.320
Look at that.

04:30.320 --> 04:33.860
The Bing search tool brave search tool DuckDuckGo search.

04:33.860 --> 04:39.710
So these are the tool which is going to be helpful just for the search operation and see the return

04:39.710 --> 04:40.280
datas.

04:40.310 --> 04:45.380
If you're going to search with this Bing search tool with its API, probably you are going to get the

04:45.380 --> 04:49.700
URL of the uh, of the search term that you are looking for in a website.

04:49.700 --> 04:54.320
It's going to give you the snippet of that particular search item, and it's also going to return you

04:54.320 --> 04:55.280
the title.

04:55.370 --> 04:58.640
Same thing will happen for the brave search DuckDuckGo.

04:58.640 --> 05:03.380
And there are some more search engines which are also going to return you what is called as an images

05:03.380 --> 05:05.930
that you're looking for, like a tabular search.

05:06.110 --> 05:11.930
Uh, and there are many plans available like how to use these tools.

05:11.930 --> 05:17.630
But if you go any one of the tool, for instance, the brave search tool, it is just like an yet another

05:17.630 --> 05:22.130
library that you have to install after you install the long chain community, which we already did in

05:22.130 --> 05:23.780
our earlier sections of this course.

05:23.780 --> 05:29.830
And once you install the brave search over here, then you have to supply the API keys.

05:29.830 --> 05:34.270
And then once you have the API key, you can then integrate this particular tool.

05:34.270 --> 05:37.540
Or maybe you can just run this tool by using this value.

05:37.540 --> 05:38.800
And it's going to get you the response.

05:38.800 --> 05:40.720
And now you can use this tool.

05:40.720 --> 05:44.380
You can bind this particular tool with your large language model.

05:44.380 --> 05:50.590
And your large language model is going to start responding to that particular question that you're looking

05:50.590 --> 05:50.890
for.

05:50.920 --> 05:54.880
You can actually see all these details that we are talking about over here in the language, like how

05:54.880 --> 05:56.140
we were doing before.

05:56.590 --> 05:58.240
That's going to happen as well.

05:58.240 --> 06:03.730
You will see all the different observability, traceability, and you can also monitor what's going

06:03.730 --> 06:07.660
on behind the scene with these kinds of operations that we are doing.

06:07.660 --> 06:10.330
So that is the tool for you over here.

06:10.810 --> 06:13.720
And you can also see more tools like not just the search tool.

06:13.720 --> 06:18.760
You can also see there is a code interpreter tool, which is going to be interpreting the code that

06:18.760 --> 06:19.660
you're going to use.

06:19.660 --> 06:25.300
And then it's going to give you the the code result, pretty much like how you can interpret with the

06:25.330 --> 06:26.500
coding that you're looking for.

06:26.530 --> 06:29.650
It supports languages like Python, JavaScript and Ruby.

06:29.680 --> 06:30.610
Just amazing.

06:30.640 --> 06:31.480
You can use that.

06:31.510 --> 06:36.910
There are some productivity tools available as well over here like GitHub toolkit, GitLab toolkit,

06:36.910 --> 06:38.620
Gmail Toolkit, and more.

06:38.620 --> 06:42.130
And one of the most important thing that we are going to be talking about in our next section.

06:42.130 --> 06:48.130
When we talk about the agents, we are going to be also using this playwright browser toolkit, which

06:48.130 --> 06:53.290
is also going to be helpful for you to write the UI test using playwright.

06:53.320 --> 06:58.720
I mean, not exactly UI test, but you can also use this playwright tool to do web extraction.

06:58.720 --> 07:04.750
Get the responses from a website, and you can also see every single thing is used by your AI agent

07:04.750 --> 07:05.650
as well.

07:05.680 --> 07:07.030
While it's going to take action.

07:07.030 --> 07:08.890
So those things, we can do it as well.

07:08.920 --> 07:14.350
Similarly, there are supports for the databases and there are multiple different tools that still keep

07:14.350 --> 07:16.240
on evolving and emerging.

07:16.270 --> 07:18.790
And you can also write your own custom tool, as I told you.

07:18.820 --> 07:24.430
And that is also going to be helpful for your large language model to perform an action while you ask

07:24.430 --> 07:29.410
the question, if large language model doesn't really know what exactly to do with that particular question.

07:29.770 --> 07:33.160
So that is the tool for you guys, and this is what we are going to be discussing in this particular

07:33.160 --> 07:33.760
section.

07:33.760 --> 07:40.480
And it is going to be quite exciting to see how large language model decides to use a tool.

========================================================================================

WEBVTT

00:00.000 --> 00:04.980
So until our last section, we were discussing about how we can work with rags and how we can read from

00:04.980 --> 00:06.060
the external documents.

00:06.060 --> 00:13.230
And we also told, like using the Rag operation, we can give an additional knowledge to our large language

00:13.230 --> 00:20.460
model by extracting a PDF file, storing it into a vector stores, and also helping large language model

00:20.490 --> 00:23.520
to get the context that it doesn't know before.

00:23.520 --> 00:26.280
So that is what was the rag that we were talking about.

00:26.310 --> 00:31.500
And now we're going to add even more intelligence to large language model with the power of agents.

00:31.500 --> 00:35.280
So I'm going to go ahead and create a section over here.

00:35.490 --> 00:39.630
I'm going to call this as section six.

00:39.630 --> 00:42.300
And I'm going to call this as agents.

00:42.450 --> 00:46.860
And I'm going to create a new Jupyter notebook.

00:46.860 --> 00:51.660
And I'm going to save it I'm going to call this as agents.

00:52.980 --> 00:56.100
And over here I'm going to start writing the code.

00:56.100 --> 01:02.550
So the first thing which we're going to do as usual is going to be calling the dot import.

01:02.780 --> 01:05.780
as a dot env import for the env file.

01:05.780 --> 01:07.400
I'm going to do that over here.

01:07.640 --> 01:12.860
And I'm also going to call our uh chat olama.

01:12.860 --> 01:14.810
So I'm going to do that as well.

01:14.810 --> 01:16.550
So these are things which we always do.

01:16.550 --> 01:18.650
So I'm going to go ahead and do that.

01:18.920 --> 01:21.170
Um, let me get rid of this line.

01:21.170 --> 01:22.100
We don't even need it.

01:22.100 --> 01:24.140
And we also need to select the kernel.

01:24.140 --> 01:27.410
I'm going to go choose that and save it.

01:27.410 --> 01:29.300
And I'm going to run that.

01:29.300 --> 01:33.110
So I'm just running this very quickly because we have did this millions of time already.

01:33.110 --> 01:37.190
And now we are going to do a markdown over here.

01:37.190 --> 01:40.100
And I'm going to say we need to install a tool over there.

01:40.130 --> 01:40.340
Right.

01:40.370 --> 01:43.760
So installing a community tool.

01:43.760 --> 01:49.400
So we're going to just use the existing tool that's already available instead of us creating a new tool

01:49.400 --> 01:50.090
altogether.

01:50.090 --> 01:56.420
So this tool as I told you is going to be all the tools is listed over here, as you can see.

01:56.420 --> 02:01.250
And one of the popular tool probably I'm not going to go with the search tool or anything like that.

02:01.280 --> 02:05.610
I'm just thinking of using the, Um, uh, Wikipedia tool.

02:05.760 --> 02:09.990
It is going to be offering us quite a lot of latest information, because, you know, Wikipedia is

02:09.990 --> 02:15.210
going to keep on updating every single time, while there is going to be any of the new message coming

02:15.210 --> 02:16.620
up over the internet.

02:16.800 --> 02:19.290
Uh, so it's going to be community driven as well.

02:19.290 --> 02:21.900
So I'm thinking of using this Wikipedia over here.

02:21.900 --> 02:25.140
So we need to install this particular package, uh, which is also straightforward.

02:25.140 --> 02:29.400
As you can see we need to use this particular command uh, to do that.

02:29.400 --> 02:35.070
So I'm going to go over here and I'm going to put the markdown.

02:35.070 --> 02:37.710
So code um bang symbol.

02:37.710 --> 02:41.070
And I'm going to install the Wikipedia.

02:41.250 --> 02:41.940
Look at that.

02:41.940 --> 02:44.130
So that's the installation of the Wikipedia.

02:44.130 --> 02:46.950
We already have the community so we don't really need it.

02:47.070 --> 02:49.170
Uh, the long chain community.

02:49.320 --> 02:58.110
Uh, but now we need to call this Wikipedia tool by writing these two lines like this is the two library

02:58.110 --> 02:59.160
that I need to import.

02:59.160 --> 03:01.350
So let's start using it.

03:01.380 --> 03:08.610
So I'm going to say from long chain community dot tools import Wikipedia query run and utilities is

03:08.610 --> 03:09.510
going to be this one.

03:09.510 --> 03:12.000
So this is going to import these two libraries for me.

03:12.330 --> 03:12.810
There we go.

03:12.840 --> 03:13.680
That's done.

03:13.770 --> 03:19.230
And now we're going to start using this particular Wikipedia within our code.

03:19.230 --> 03:21.420
So let's see how we can use that particular tool.

03:21.420 --> 03:24.840
Well in order to use the tool it is very straightforward.

03:24.840 --> 03:30.180
All you have to do is let's say I'm going to call this as Wikipedia, uh, as a variable.

03:30.180 --> 03:34.980
And I'm going to call the Wikipedia query run over here.

03:34.980 --> 03:37.530
This is the class that I need to need it.

03:37.590 --> 03:48.270
And in this particular class file I'm just going to probably say API wrapper as the Wikipedia API wrapper.

03:48.270 --> 03:53.580
So this is the wrapper that I really need for my run operation to really happen.

03:53.580 --> 03:55.500
So this API wrapper is going to go in turn.

03:55.500 --> 03:57.780
And I'm going to call the API of the Wikipedia.

03:57.780 --> 04:01.980
And it's going to give the result that we are passing in as the query to it.

04:01.980 --> 04:11.490
So for instance, if I'm going to ask um, like the tool um response is equal to I'm going to say,

04:11.520 --> 04:18.120
uh, Wikipedia dot and there is this um, a batch is just like an asynchronous batch that you can pass

04:18.120 --> 04:24.960
in, or you can do a run with your question asking any one of the question that you're looking for.

04:24.960 --> 04:34.170
For instance, I'm going to ask that, uh, give me, um, sorry, details of avatar movie.

04:34.560 --> 04:35.280
Uh.

04:37.560 --> 04:38.370
Over here.

04:38.370 --> 04:40.650
And I'm going to print this particular response.

04:40.650 --> 04:46.980
So I'm going to say print off the, uh, tool response, something like that.

04:46.980 --> 04:52.710
And if I try to run this particular code, you will notice that it's going to go and search this detail

04:52.710 --> 04:56.640
that I have given in the, uh, Wikipedia.

04:56.640 --> 04:58.980
And you see that it's going to give me the result over here.

04:59.010 --> 05:05.550
So the page avatar franchise and it says avatar is an American epic science fiction movie, uh, media

05:05.550 --> 05:09.030
franchise created by James Cameron, blah, blah, blah.

05:09.030 --> 05:12.150
It's all going to come up and this is going to be the first flame over here.

05:12.180 --> 05:18.060
I mean, the context over here just ends because that is the total context that we have set, uh, to,

05:18.060 --> 05:19.860
uh, to return from this particular tool.

05:19.890 --> 05:22.020
I mean, we can increase this context anyways.

05:22.020 --> 05:26.490
Uh, depends on what question that we're really asking, but this is already quite a lot of different

05:26.520 --> 05:27.390
text there.

05:27.390 --> 05:30.660
And we have set the maximum token to use as well.

05:30.900 --> 05:35.670
And we have really not told anything to really use for this particular tool as well.

05:35.670 --> 05:38.640
So that's the reason why you're just getting this particular value there.

05:38.640 --> 05:44.850
So this is about how you use the tool, uh, which is already available in the community.

05:44.850 --> 05:51.150
So you can use all other tools pretty much how they have mentioned over here in the documentation.

05:51.150 --> 05:52.800
You can just use that tool as well.

05:52.800 --> 05:58.500
There is no harm if you're going to be using any one of the probably, uh, search tool, you could

05:58.500 --> 05:59.670
use that as well.

05:59.670 --> 06:04.980
For instance, uh, let's say another popular search tool which is very easy to use is like the duck

06:05.010 --> 06:06.330
duck go search.

06:06.330 --> 06:12.970
So you need to first of all install this duck, duck, uh, go search and then start using it over here.

06:12.970 --> 06:18.970
So I'm going to go put the code, put a bank symbol, install the DuckDuckGo search.

06:18.970 --> 06:24.760
And once this installation is done, I'll just copy this whole thing and try it out.

06:24.790 --> 06:26.350
It's just going to work over there.

06:26.380 --> 06:29.650
I mean, I saw there was some issue when I tried to run this.

06:29.680 --> 06:31.960
The DuckDuckGo search was saying me no good.

06:31.990 --> 06:36.670
DuckDuckGo search result was found for some reason, and that's the reason why I don't want it to show

06:36.670 --> 06:39.730
you this particular example.

06:39.730 --> 06:45.460
But yeah, I mean, as long as this particular thing just works, it is going to give you the response.

06:45.460 --> 06:49.330
But for some reason this is not, um, happening in my machine.

06:49.390 --> 06:53.200
And that's the reason why I don't want it to show you this particular example over there.

06:53.200 --> 06:58.150
But you got the idea, right, like how you use this particular tool within your machine.

06:58.360 --> 07:07.180
Um, and now the next operation that we're going to talk about is how we can write our own tool, like

07:07.210 --> 07:13.030
a custom tool to actually start build from the complete ground up.


========================================================================================

WEBVTT

00:00.080 --> 00:09.140
Now let's talk about building the custom tools that we can write our own and then start using it using

00:09.140 --> 00:10.970
the large language model.

00:10.970 --> 00:12.770
So how do we actually do that?

00:12.770 --> 00:23.210
Well, if you just go to the tool page of our lamp chain, they have given this how tos of using creating

00:23.210 --> 00:23.840
your own tool.

00:23.840 --> 00:29.960
So when constructing an agent, you need to provide it with a list of tools that you can use beside

00:29.960 --> 00:33.110
the actual functions that is called.

00:33.140 --> 00:34.880
And the tool consists of several components.

00:34.880 --> 00:38.570
It says name, description, arg, schema, return direct.

00:38.840 --> 00:45.800
And they have got some details over here like how you can write the functions lang chain runners and

00:45.800 --> 00:47.810
subclasses from the base tools.

00:47.810 --> 00:51.860
So these are three different ways that you can actually create a tool.

00:51.860 --> 00:57.290
It can be either a functions like a normal Python function, or you can write a Java like a lang chain

00:57.290 --> 00:57.920
Runnables.

00:57.920 --> 01:02.130
Or you can also use a subclass of base Bayes tool.

01:02.130 --> 01:03.870
And then you can write from there.

01:03.870 --> 01:06.240
So all these things you can do it.

01:06.270 --> 01:08.520
And then you need to create a function.

01:08.520 --> 01:12.750
For instance, if you're just going to create a function all you have to do is just use a decorator

01:12.780 --> 01:17.220
add tool decorator for any of your Python code.

01:17.220 --> 01:20.010
And that becomes a tool already.

01:20.010 --> 01:20.400
Amazing.

01:20.400 --> 01:22.770
That's very easy and straightforward way of doing it.

01:22.800 --> 01:26.550
Or you can also create an async implementation of the tool over here.

01:26.790 --> 01:28.440
And these are the details which is available.

01:28.440 --> 01:34.050
And the one which I was talking about with the uh with the structured tool.

01:34.050 --> 01:35.070
So this is the structure tool.

01:35.070 --> 01:36.930
That is what we are going to be writing anyways.

01:36.960 --> 01:43.650
And they also have got this, uh, creating runnables like tools from Runnables where they have given

01:43.650 --> 01:51.780
like how you can create a runnables like chain as tool, you can make even a chain as a tool and then

01:51.780 --> 01:54.060
you can respond from there on as well.

01:54.060 --> 01:58.020
This is also something that you can do to create a tool.

01:58.020 --> 02:01.800
So you can make an entire runnables as a chain.

02:01.800 --> 02:04.780
And then you can use this subclass based tool.

02:04.780 --> 02:06.250
So you can use this subclass.

02:06.310 --> 02:12.310
You can see that the base tool has been passed in the class method, uh in a class constructor.

02:12.310 --> 02:15.970
And then you can uh you can create the tool from there.

02:16.000 --> 02:18.220
So these are three different ways that you can create a tool.

02:18.220 --> 02:22.960
And we'll first start off with the with the add tool decorator in this particular lecture.

02:22.960 --> 02:31.090
So for doing that I'm going to put a markdown over here I'm going to say creating custom tools.

02:31.090 --> 02:34.750
And I'm going to start adding things over here.

02:34.750 --> 02:45.100
So for building a custom tool we are going to import this from Lang chain dot tools I'm going to import

02:45.610 --> 02:46.480
tool.

02:47.440 --> 02:47.890
That's it.

02:47.890 --> 02:52.600
That is the only, uh, import that I have to do in order for me to work with the tools.

02:52.600 --> 03:00.760
And over here I'm going to, uh, create a method called as def of add numbers for that matter.

03:00.790 --> 03:01.600
Right.

03:01.900 --> 03:10.160
I'm going to say the number which I'm going to be adding is basically going to be an variable like there

03:10.160 --> 03:10.940
are two parameters.

03:10.940 --> 03:16.940
One is the int like a which is of an int type, and b which is also of an int type.

03:16.940 --> 03:20.780
And this guy is also going to return me an integer.

03:22.430 --> 03:23.090
Right.

03:23.090 --> 03:25.190
That is what this particular method is doing.

03:25.190 --> 03:31.730
And over here I'm going to say a description property which is important for the LM to understand.

03:31.760 --> 03:36.320
While it calls the tool because it needs to know which tool it needs to call.

03:36.320 --> 03:42.770
So you need to have a description there and you're going to say add two numbers and return.

03:45.170 --> 03:46.430
Results.

03:47.150 --> 03:48.710
That is what this particular tool is doing.

03:48.710 --> 03:52.340
And I'm going to return an integer as well.

03:52.340 --> 03:56.660
So I'm going to say add into a and int b.

03:57.290 --> 03:58.250
Look at that.

03:58.850 --> 04:05.730
This is how I actually create the simple super simple function in the Python.

04:05.730 --> 04:13.260
And in order to make this function as an tool, I need to use this add tool decorator.

04:14.520 --> 04:15.240
That's it.

04:15.270 --> 04:18.630
This is already a tool right now.

04:18.630 --> 04:26.190
So if I want to, um, invoke this particular tool, you know how we do it in our large language model

04:26.220 --> 04:28.560
or prompts or whatever runnables that we have?

04:28.560 --> 04:30.090
This is already a runnable right now.

04:30.090 --> 04:37.470
So in order for me to invoke this, all I have to do is like print off, add numbers, dot invoke over

04:37.470 --> 04:37.980
here.

04:37.980 --> 04:41.790
And because it requires two parameter to be passed, you know how we do that.

04:41.790 --> 04:50.010
So we are just going to say a which is going to be ten and B, uh, which is going to be 20 for that

04:50.010 --> 04:50.430
matter.

04:50.430 --> 04:52.830
And let's try to print the value.

04:52.860 --> 04:54.030
Look at that 30.

04:54.900 --> 05:00.300
So this is how we invoke this particular, uh, custom tool over here.

05:00.300 --> 05:05.460
But this is we're calling the tool directly, like how we have called over here for the Wikipedia dot

05:05.460 --> 05:05.970
run.

05:06.020 --> 05:08.600
Or you can also use Wikipedia Invoke for that matter.

05:08.630 --> 05:13.130
Same thing happens for both of them and that is what we are doing over here.

05:13.130 --> 05:16.610
We can even call run, which is also going to return the same thing.

05:16.640 --> 05:20.420
You can also call invoke, which is also going to call the exact same thing.

05:20.420 --> 05:21.770
That is what we have done.

05:21.770 --> 05:27.260
We have created a simple tool and we have invoked it like how we did for the Wikipedia.

05:27.290 --> 05:31.070
And the same thing goes on for the rest of the tools as well.

05:31.070 --> 05:34.370
So for instance, I'm going to create three more tools over here.

05:34.670 --> 05:39.830
I'm going to say probably subtract numbers.

05:39.830 --> 05:42.770
And I'm going to just say subtract.

05:42.770 --> 05:47.630
And I'm going to say subtract two numbers and return result.

05:47.630 --> 05:50.330
And if I'm going to say multiply.

05:53.390 --> 05:58.040
And I'm going to say multiply two numbers.

05:58.040 --> 06:02.330
And I'm just going to multiply them I'm going to return the result.

06:02.330 --> 06:08.970
So this is how I can create three tools over here Uh, within my custom tools, which is amazing.

06:09.000 --> 06:09.390
Right.

06:09.390 --> 06:10.350
And guess what?

06:10.350 --> 06:18.690
We can now even add these tools into an array, and we can call all these tools one by one as well.

06:18.690 --> 06:21.720
We can see all these tools one by one as well.

06:21.720 --> 06:27.540
So for instance if I want to see all of them, like if I want to add all these tools into an array,

06:27.570 --> 06:37.110
I'm going to say tools is equal to uh, I'm going to say probably the Wikipedia tool and add numbers,

06:37.650 --> 06:41.340
uh, subtract numbers and multiply numbers.

06:41.340 --> 06:49.650
And if I wanted to print all these tools, um, for instance, I wanted to store all the tools into

06:49.680 --> 06:56.010
a collection, but along with their names and what this tool does, because this is required for me

06:56.010 --> 06:59.340
in the later point of operation, which I'm going to be doing.

06:59.340 --> 07:03.300
And that's the reason why I also need to do it right now.

07:03.300 --> 07:09.730
So I'm going to say list of Rules is equal to.

07:09.760 --> 07:16.840
And what I'm going to do is I'm going to iterate through all the tools, which is going to be for tool

07:16.840 --> 07:18.640
in tools.

07:18.640 --> 07:22.900
And I wanted to store all the tool names and the tool details in them.

07:22.900 --> 07:26.230
So the way I'm going to do it is I'm going to say tool dot name.

07:26.560 --> 07:30.400
And this is the tool that I wanted to store in.

07:30.880 --> 07:34.570
And now let's try to print this list of all the tools that I have got.

07:34.660 --> 07:40.870
See, I have not just the custom tools alone, but I have also used the already built in built tool,

07:40.900 --> 07:43.720
which is the Wikipedia tool that I have just downloaded from the community.

07:43.900 --> 07:50.500
And while I run this particular code over here, uh, oops, sorry, multiply numbers.

07:50.980 --> 07:52.780
Or maybe I did not even executed this line of code.

07:52.780 --> 07:53.740
That is a problem.

07:54.160 --> 07:54.940
Run that.

07:54.940 --> 07:57.310
And now let's try to run this.

07:57.340 --> 07:58.060
Ah, there we go.

07:58.060 --> 07:59.050
So that is working.

07:59.050 --> 08:05.380
So you see that now we have all the tools that Wikipedia add numbers subtract subtract numbers and multiply

08:05.380 --> 08:05.740
numbers.

08:05.740 --> 08:13.820
So this is already going to store me all the different details of my, uh, of my tools over here.

08:13.820 --> 08:14.300
And look at that.

08:14.330 --> 08:16.190
How the Wikipedia tool is going to be shown.

08:16.190 --> 08:18.140
It's a Wikipedia query run.

08:18.170 --> 08:26.540
This is the API wrapper has been used and it has got the, uh, details like how this particular tool

08:26.540 --> 08:31.340
is going to be executed and the total number of top k result that is going to return is three.

08:31.370 --> 08:32.870
The language is going to be English.

08:32.870 --> 08:35.120
And these are the details of this particular tool.

08:35.120 --> 08:38.300
Similarly for add numbers it is a structured tool.

08:38.330 --> 08:44.330
See that this is a structured tool because we have structured it in this way and it is an add numbers.

08:44.330 --> 08:49.910
The description is this and this is the thing that is going to do right.

08:49.970 --> 08:53.660
Same for the subtract numbers and the multiply numbers.

08:53.660 --> 08:59.870
So now we have created a tool list which is going to show me all the tools which is available within

08:59.870 --> 09:00.680
my system.

09:00.710 --> 09:08.300
And the next operation that we actually need to do is how we can invoke this tool with the power of

09:08.300 --> 09:10.880
our large language model, which is magic.


========================================================================================

WEBVTT

00:00.020 --> 00:05.090
In this lecture, we are going to see how we can make use of these tools that we have got, like custom

00:05.120 --> 00:11.480
tools as well as the one that we have downloaded from the community, like Wikipedia tool and use it

00:11.480 --> 00:13.700
with our large language model.

00:13.700 --> 00:16.040
So we are going to see how we can actually achieve that.

00:16.040 --> 00:24.230
And we are going to test if our large language model can actually grab the correct tool for that matter,

00:24.230 --> 00:31.130
because you see that now we have not only mapped Wikipedia, but we have also mapped or we have also

00:31.340 --> 00:33.110
built our own custom tools.

00:33.110 --> 00:40.400
We are going to bind those tools with our large language model, and we are going to see if that all

00:40.460 --> 00:47.660
works, and if the large language model can intelligently select that particular tool that we are supposed

00:47.660 --> 00:50.240
to use, like we are expecting it to use for that matter.

00:50.240 --> 00:52.490
So we will see how that can actually happen.

00:52.580 --> 00:59.600
Well, we have got this list of tools here already, and now we need to map these tool or bind these

00:59.600 --> 01:01.850
tools with our large language model.

01:01.880 --> 01:06.720
And again Lang long chain is so much sophisticated and that is the reason why long chain is so popular,

01:06.720 --> 01:14.910
because it now helps you provide the mechanism to bind your tools with the existing large language model.

01:14.910 --> 01:19.950
So for instance, this particular large language model that you can see over here is the chatbot llama

01:19.980 --> 01:21.570
that we have got over here.

01:21.720 --> 01:26.550
And I wanted to ask the question to this particular large language model.

01:27.120 --> 01:30.600
For instance, if I want to ask uh lm dot invoke.

01:30.720 --> 01:35.250
So response is equal to lm dot invoke.

01:35.400 --> 01:50.550
Uh and I want to say uh when did uh, avatar movie released, uh, The Ways of Water.

01:51.090 --> 01:58.920
Uh, so I'm gonna just say, uh, print and response dot content.

01:58.920 --> 02:05.870
And now if I try to run this, maybe this particular LM was actually trying to give the answer?

02:05.870 --> 02:11.690
As you can see over here, because The Ways of Water is a is a 2020 second 2022 movie.

02:11.690 --> 02:15.980
So of course it is trying to get that particular answer for us over here.

02:15.980 --> 02:23.420
But what if I ask some latest, uh, details like a Donald Trump election result for that matter?

02:23.420 --> 02:26.690
If I ask that question, this particular film is not going to answer for us.

02:26.690 --> 02:27.290
Right.

02:27.290 --> 02:36.380
But now I wanted to see instead of the LM actually grabs the information from the existing knowledge

02:36.380 --> 02:38.810
that it has learned over here.

02:38.810 --> 02:44.960
I wanted this album to use the tool, which is this tool like Wikipedia tool, and go and search there

02:44.960 --> 02:49.790
to get the answer instead of what it has learned already.

02:49.790 --> 02:51.530
That is what is my whole idea.

02:51.530 --> 02:55.850
So if I wanted to do that, all I am going to do it is I'm going to comment this code.

02:55.850 --> 02:58.010
I will just for the comparison purpose.

02:58.010 --> 03:05.690
What I'm going to do is I'm going to create a new variable called as LM with tools, something like

03:05.690 --> 03:06.110
that.

03:06.110 --> 03:08.210
And I'm going to say LM dot.

03:08.240 --> 03:08.900
And look at that.

03:08.900 --> 03:12.770
We have got a method called as bind tools.

03:13.550 --> 03:21.860
So this bind tools is going to be binding all the tools for us over here.

03:21.860 --> 03:25.580
But before I do that you know what.

03:25.610 --> 03:34.850
Not all the large language models that we have got over here, like the Cuban 2.5 is going to be supporting

03:34.850 --> 03:35.930
the Toolings.

03:35.930 --> 03:41.660
So if we use deep seq R1 for that matter, you can't really use it because deep seq R1 doesn't support

03:41.660 --> 03:48.260
the tooling, only the Q and 2.5 at the moment supported llama supported, but not all the llama models

03:48.260 --> 03:51.140
that you download will have the support for the tooling.

03:51.140 --> 03:57.380
So if we just go back to our, um, our llama website and if you go to the models, you see that we

03:57.380 --> 03:59.360
have got this tools option over here.

03:59.360 --> 04:06.170
So if I go and choose the tools, you see that these models like llama theta 33.23.1 Q1 2.5 model that

04:06.170 --> 04:10.220
we are using these models all supports toolings.

04:10.220 --> 04:12.440
But see, there is no deep sea core here.

04:12.440 --> 04:16.880
So if I try to use a deep sea model, that model will not support tooling for that matter.

04:16.880 --> 04:23.750
So if you can't bind the tools like Wikipedia tools or custom tools that you have got, you can't bind

04:23.780 --> 04:27.650
to the deep sea carbon model because it is not even supported.

04:28.130 --> 04:34.580
So that's the reason why make sure that you choose the right model, which does offer the support for

04:34.580 --> 04:35.150
tools.

04:35.150 --> 04:40.670
I'm sure Deep Sea is going to support tools pretty soon, but at the moment they don't support it.

04:40.670 --> 04:45.050
So as we know that the Q and 2.5 model does support tools.

04:45.050 --> 04:49.550
So it is very easy for us to now do the bind over here.

04:49.550 --> 04:51.380
So LM dot bind will work.

04:51.380 --> 04:55.490
So you can use the not the bind bind tools.

04:55.550 --> 04:58.640
And over here I need to pass the tools.

04:58.640 --> 05:02.870
So the tools is nothing but the tools that we have created.

05:02.870 --> 05:07.190
This guy all these tools I'm going to pass it over here.

05:08.300 --> 05:08.870
Right.

05:08.870 --> 05:16.910
And now I'm going to invoke this particular LM with the tools option that I have got.

05:16.910 --> 05:26.960
So for doing that, I need to probably do something like this tool, uh, call response probably uh,

05:26.960 --> 05:31.580
and I'm going to say, uh LM with tools, which is this one.

05:31.580 --> 05:36.470
And you remember we have this method called as invoke or run method.

05:36.470 --> 05:37.760
Whichever method that you want, you can use it.

05:37.790 --> 05:39.800
I mean, invoke is the right method to do it.

05:39.830 --> 05:41.000
Invoke.

05:41.090 --> 05:51.890
And over here I'm going to call when uh, did author movie uh got release or whatever.

05:51.920 --> 05:54.530
Same question I'm asking this time as well.

05:55.700 --> 06:02.330
And now I wanted to print, uh, what is really getting as an response for this particular question

06:02.330 --> 06:03.110
that I'm asking.

06:03.110 --> 06:04.220
So I'm going to save this code.

06:04.220 --> 06:11.780
And if I try to run this this time, you will notice that in the tool called response, we are not going

06:11.810 --> 06:14.960
to get the actual answer for the question.

06:14.990 --> 06:22.580
Rather, we're actually getting some metadata and all those stuffs over here.

06:22.580 --> 06:26.390
And if you just go all the way, look at that.

06:26.390 --> 06:32.930
It says tool calls and the tool calls, it says name as Wikipedia.

06:32.930 --> 06:40.820
So basically it knows that for this question it needs to not answer from the content or the knowledge

06:40.820 --> 06:42.080
that it already has.

06:42.080 --> 06:47.480
The Cuban model already has been trained with, even though it knows the answer already, like 2022,

06:47.510 --> 06:51.260
it's it got released, but it won't give you the answer right away.

06:51.260 --> 06:57.650
Rather it goes I mean, the model goes and find the latest information from the tools.

06:57.650 --> 06:58.010
Smart.

06:58.040 --> 06:58.850
So smart right.

06:58.880 --> 07:01.670
Like this model is so smart that it could able to do that.

07:01.790 --> 07:04.280
It finds a tool like Wikipedia is there.

07:04.280 --> 07:07.100
I'm already, uh, have the ability to do that.

07:07.100 --> 07:13.370
And now it is passing the argument with the query saying Avatar the Way of Water release date is now

07:13.400 --> 07:16.440
the model is asking the question on behalf of you.

07:16.470 --> 07:19.440
Like when the when was the movie got released?

07:19.560 --> 07:21.030
And look at that.

07:21.030 --> 07:22.350
This is amazing, right?

07:22.380 --> 07:24.120
Like this is what is really happening.

07:24.120 --> 07:30.900
So you can also print the, uh, tool calls and you can just see the tool calls alone here.

07:30.930 --> 07:34.710
See, this is what is really happening for us behind the scenes.

07:34.740 --> 07:43.500
Now this model, uh, while you invoke the model, which is bound with the tools, it suggests that

07:43.500 --> 07:46.140
you need to use this tool for us over here.

07:46.170 --> 07:47.850
That's what is really happening.

07:47.850 --> 07:54.600
And now, if you go back to our, uh, like, the Lang Smith over here, look at what's really happening

07:54.600 --> 07:55.530
over here.

07:55.680 --> 07:59.130
Uh, on the chat model, the chat olama.

07:59.490 --> 08:01.140
Um, look at that.

08:01.170 --> 08:04.080
It has the functions and tools like Wikipedia.

08:04.440 --> 08:08.250
Uh, and it gets the details, like what this particular Wikipedia is all about.

08:08.250 --> 08:12.180
And add numbers, the add two numbers type integer subtract.

08:12.210 --> 08:14.700
And it has got a and b, which is amazing.

08:14.760 --> 08:17.310
It also gives subtract numbers multiply numbers.

08:17.310 --> 08:23.480
So it shows you what are the functions and tools being supported and what's even being called.

08:24.440 --> 08:26.000
I mean, I really love this.

08:26.000 --> 08:31.400
Uh lamb-smith to be honest, because it gives so much of information which are very, very important.

08:31.400 --> 08:37.160
While we do the debugging of our LLM, like what happens if some prompt goes wrong?

08:37.160 --> 08:43.430
And guess what, in the input we have asked the human of this one, and the AI has really called the

08:43.430 --> 08:49.760
Wikipedia tool, and it has supplied this particular query for us over there, and there is no YAML

08:49.760 --> 08:52.430
response because of course there is no response for that.

08:53.090 --> 09:02.240
This is really is what happens while you actually call the, uh, the chat olama, uh, from your code.

09:02.420 --> 09:06.140
Now, that is what has really happened over here.

09:06.140 --> 09:08.720
And now let's change our question a bit.

09:08.750 --> 09:13.250
Let's say I'm going to ask not this, what did the when did the other movie was released?

09:13.460 --> 09:18.770
Uh, what's the sum of two and four now?

09:18.770 --> 09:25.760
I wanted my custom ad numbers to be invoked this time because I'm asking what's the sum of two and four?

09:26.540 --> 09:28.250
So I'm going to save this code.

09:28.250 --> 09:34.670
And if I try to run this, look at what's going to happen, it's going to call the ad numbers here.

09:34.670 --> 09:38.870
And the arguments is A is two and B is four.

09:39.110 --> 09:41.210
And then it's going to do a tool calls.

09:41.450 --> 09:42.110
Look at that.

09:42.140 --> 09:50.480
If I go to the chat or llama here see ad numbers is being called and it is supplying these values there.

09:50.690 --> 09:51.380
Amazing.

09:51.380 --> 09:53.810
So this is this is really pretty good.

09:53.840 --> 09:55.220
And so what.

09:55.220 --> 10:01.880
Uh, so let's say if I want to ask a question, what is the double of two?

10:01.910 --> 10:06.350
I don't know, I'm just going to ask maybe, uh, I haven't tried that query before.

10:06.380 --> 10:07.340
So let's see what's going to happen.

10:07.370 --> 10:07.790
There we go.

10:07.820 --> 10:09.560
So look at the double of two.

10:10.130 --> 10:12.770
The LM knows that this is a multiplication that you're talking about.

10:12.770 --> 10:15.380
So it's just going to say multiply numbers.

10:16.070 --> 10:18.320
And it has passed the argument two of two.

10:18.800 --> 10:25.490
And if we just go to chat llama you will notice that the multiply number tools has been called, which

10:25.490 --> 10:26.120
is amazing.

10:26.120 --> 10:35.480
So this is how we can see that we could able to, uh, use our LM to invoke a particular tool for us

10:35.480 --> 10:37.970
over here and give you the details back.

10:37.970 --> 10:41.000
But now the question actually comes is, hey, Karthik.

10:41.090 --> 10:41.450
Fine.

10:41.450 --> 10:49.880
I mean, your lm, uh, it's actually invoking the right tool for the given query from the user, but

10:49.910 --> 10:51.470
where is the execution result?

10:51.470 --> 10:53.390
Because two into two should be four.

10:53.390 --> 10:55.430
And where can I see the result output?

10:55.430 --> 10:58.670
And what about the result for the when did the movie avatar was released?

10:58.700 --> 10:59.810
It should be 2022.

10:59.840 --> 11:01.520
Where is that particular result coming up?

11:01.520 --> 11:03.350
What about addition result?

11:03.350 --> 11:04.310
Where are those?

11:04.340 --> 11:05.300
Well guess what.

11:05.330 --> 11:12.470
Those things we have to do a bit more to be honest, which we'll be doing in our next lecture, but

11:12.500 --> 11:16.730
because it requires quite a lot of different changes that I have to make over there in order for us

11:16.730 --> 11:21.020
to execute this particular course, because at the moment we're just invoking the tool.

11:21.020 --> 11:24.980
We are not really executing the tool, which we'll be doing in our next lecture.


========================================================================================

WEBVTT

00:00.050 --> 00:07.040
So now that we have got a bit of understanding of how we came all the way from the model without having

00:07.070 --> 00:16.550
tool support and the model with having the bounded tool support, and also how we bounded the LM with

00:16.550 --> 00:19.910
a custom tools and how it actually calls those tools.

00:19.910 --> 00:23.210
But now we are going to see this logic.

00:23.210 --> 00:24.440
This is very important.

00:24.440 --> 00:27.380
This is something which we have to write a bit of code there.

00:27.380 --> 00:33.410
So you will notice that while the user asks the question like what is the sum of two and four?

00:34.430 --> 00:38.570
And this particular request goes to like a chain with a prompt template.

00:38.570 --> 00:41.900
And then we pass it to the model.

00:41.900 --> 00:51.050
And the model has got the tool binding for the addition, uh, custom tools, subtraction custom tools

00:51.050 --> 00:56.450
and Wikipedia custom tool, or maybe the custom built tool.

00:56.750 --> 01:02.090
And you will notice that because you are going to be asking two and four.

01:02.120 --> 01:05.150
Now there is going to be a tool calling happen.

01:05.150 --> 01:12.080
So there is this tool calling happens over here where this tool calling will now have should have a

01:12.080 --> 01:16.910
logic because we have seen until the tool calling because the Q1 model was actually rightly selecting

01:16.910 --> 01:21.230
the adhesion custom tool for this particular question.

01:21.230 --> 01:28.010
But now we need to write a logic over here to say you need to select this particular custom tool and

01:28.010 --> 01:34.880
also execute this particular custom tool for me and give me the response back like sum of two and four

01:34.910 --> 01:35.750
is six.

01:36.950 --> 01:39.320
This is something we have to do right now.

01:39.320 --> 01:44.900
So we have seen that the tool calling is happening and it is selecting the tools for us, the right

01:44.930 --> 01:45.650
tool for us.

01:45.650 --> 01:50.180
Based on the three boundary tool it has got four boundary tool it has got.

01:50.180 --> 01:55.910
But we haven't seen how the execution of this particular tool really happens.

01:55.910 --> 01:59.140
And for in order to see how this execution really happens.

01:59.140 --> 02:06.400
We need to write a bit of code, and for that, we also need to ensure that we write a bit of a prompt

02:06.400 --> 02:07.150
here.

02:07.510 --> 02:13.150
In such a way, we need to create a prompt template in such a way that this model can really understand.

02:13.210 --> 02:19.930
So what I really mean about that is that we are going to create a prompt message for the human message

02:19.930 --> 02:28.180
in such a way that it is going to have the query from the user, and also it is going to have the AI

02:28.210 --> 02:35.620
message which the AI is going to be giving for us, and also going to have a tool execution logic message

02:35.620 --> 02:42.790
so that the LLM can go and execute the tool or invoke the specific tool for us and get the response

02:42.790 --> 02:44.410
out from that tool.

02:44.410 --> 02:51.100
So we need to have all these three logics or all these three information in a single prompt, which

02:51.100 --> 02:53.860
the model can execute for us.

02:53.860 --> 02:56.860
And that is what we are going to do in this particular lecture.

02:56.860 --> 02:59.620
So let's see how we can actually achieve all of these.

02:59.650 --> 03:01.090
So I'm going to go here.

03:01.120 --> 03:02.710
I'm going to mark down here.

03:02.710 --> 03:11.080
And I'm going to say execute the custom tools uh from LM.

03:12.190 --> 03:16.060
And I'm going to take over here the code.

03:16.060 --> 03:18.250
And I'm going to start writing the code over here.

03:18.940 --> 03:27.400
So uh, I'm going to probably just create, uh, like a, uh, human message.

03:27.400 --> 03:36.430
I'm going to say, uh, from, uh, lang chain core dot messages, import human message.

03:37.390 --> 03:43.720
And over here I'm just going to say message is equal to human message, uh, which is probably going

03:43.720 --> 03:47.650
to be in an array, because I'm going to do quite a lot of appending right now.

03:47.650 --> 03:51.970
And I need to pass the, uh, the question over here.

03:51.970 --> 03:57.720
So probably I'm going to say, uh, query Is equal to.

03:58.680 --> 04:08.160
Or did Donald Trump win the 2024 presidential election?

04:09.720 --> 04:17.250
We know that surely our model has got no idea about this particular query that we are going to be asking.

04:17.250 --> 04:25.080
So now I wanted to see if our, uh, a large language model with the tools that we have got can actually

04:25.110 --> 04:26.580
answer that particular question.

04:26.580 --> 04:29.490
So I'm going to just say, uh, an I message.

04:29.490 --> 04:36.000
So I'm going to say this is the I message I'm going to get, uh, and I'm going to call our LLM with

04:36.000 --> 04:38.910
tools, uh Dot invoke.

04:38.940 --> 04:42.900
And over here I'm going to ask that query.

04:42.930 --> 04:45.240
I'm just going to pass that query over here.

04:45.300 --> 04:49.740
And we will see if the LLM can choose the right tool for us.

04:49.770 --> 04:50.670
Of course it does it.

04:50.670 --> 04:51.030
Right.

04:51.030 --> 04:58.410
So if I want to print the I message Dart our tool calls.

04:58.410 --> 05:06.540
And if I try to run this, you will notice that we are going to see that this is going to call or invoke

05:06.570 --> 05:09.390
the correct tool, Wikipedia, which is amazing.

05:09.420 --> 05:16.920
I wanted to append this AI message as well inside this particular messages, so that I'm just creating

05:16.920 --> 05:21.840
a prompt template right now with all the information which the LLM requires at the end to give me the

05:21.840 --> 05:22.470
right answer.

05:22.470 --> 05:24.690
So I'm going to say message dot append.

05:25.260 --> 05:28.740
And I'm going to add the AI message as well.

05:28.740 --> 05:36.660
So this is going to be my AI message which I wanted to append uh, for this particular uh, for, for

05:36.660 --> 05:37.470
this particular query.

05:37.470 --> 05:45.390
And now what I'm going to do is I need to execute the actual tool that it is going to select, but all

05:45.390 --> 05:51.000
the tools are actually sitting inside my AI message, which I'm going to be getting.

05:51.030 --> 05:51.240
Right.

05:51.270 --> 05:56.630
So let me just let me also show you the message before I actually come go further.

05:56.630 --> 05:59.210
So if I show you the message over here, look at that.

05:59.210 --> 06:03.260
The the human message has got this particular content.

06:03.260 --> 06:06.200
And there is this AI message which I just appended over here.

06:06.230 --> 06:06.650
Look at that.

06:06.650 --> 06:08.660
This human message and AI message.

06:09.440 --> 06:15.080
The last message I need is the tool message, which is the tool which I'm going to be executing.

06:15.080 --> 06:17.510
This is what I'm trying to build over here.

06:17.510 --> 06:23.540
But all these information like the AI messages, like which tool that it is going to choose, is coming

06:23.540 --> 06:28.190
from this AI message underscore, uh, AI message dot.

06:28.220 --> 06:29.360
The tool calls.

06:29.390 --> 06:29.780
Right.

06:29.780 --> 06:36.290
So I'm going to be essentially choosing which tool that I need to select and then execute.

06:36.290 --> 06:40.310
So for doing that I'm going to write a small for loop over here.

06:40.610 --> 06:49.880
Uh so I'm going to say tool call in AI underscore message dot tool calls.

06:50.000 --> 06:52.220
This is the for loop which I'm writing over here.

06:52.220 --> 06:59.870
And I'm going to say the tool name is going to be a tool call that is going to be in this particular

06:59.870 --> 07:00.680
variable.

07:01.430 --> 07:03.500
And I'm going to get the name.

07:03.530 --> 07:10.970
See that because you know that the tool uh, over here, the tool call if you just go here will have

07:10.970 --> 07:13.820
a name as a variable.

07:13.820 --> 07:15.830
So this gives me the name of the tool.

07:16.190 --> 07:21.620
Uh, and I'm just going to make it lower just in case, because maybe if the tool comes in capital letter

07:21.620 --> 07:24.110
from the, uh, LM, it could be a problem.

07:24.110 --> 07:28.340
So that's that's why I'm just for the sake of making it work.

07:28.370 --> 07:29.090
I'm just making it.

07:29.090 --> 07:34.880
I'm going to do that, and I'm going to do a method called as execute tool.

07:34.880 --> 07:36.860
So which tool I'm going to be executing.

07:37.040 --> 07:42.380
You remember the list of tools that we created on the top over here, which is going to give me all

07:42.380 --> 07:45.470
the tools with its name over here.

07:45.500 --> 07:47.900
That's what I'm going to be getting up as well.

07:47.900 --> 07:52.660
So I'm gonna get the list of the tools and I'm going to pass the tool name over here.

07:52.660 --> 07:59.770
So that's going to give me the tool which is already mapped inside my list of tools because it is marked

07:59.770 --> 08:01.870
with the name over here.

08:01.870 --> 08:03.640
So name colon and then the tool.

08:03.640 --> 08:10.120
So if I pass the tool name as a key then the value is going to be the tool itself like the actual tool

08:10.120 --> 08:10.780
itself.

08:10.930 --> 08:15.400
And now I can invoke that particular tool from the execute tool method.

08:15.400 --> 08:18.280
Isn't it because we can because this is a runnable type.

08:18.280 --> 08:20.230
So I can now invoke this tool.

08:20.230 --> 08:29.560
So I'm going to say tool invoke is equal to execute tool dot I can just call the invoke method.

08:29.560 --> 08:40.030
And I can invoke the tool with all the related details which is passed from the tool calls for me and

08:40.420 --> 08:42.970
that is the last thing I needed.

08:42.970 --> 08:44.650
And this one as well.

08:44.650 --> 08:48.550
I can append it in the message over here.

08:48.550 --> 08:54.910
And now if I try to print the message, you will notice that I will not only have the human and the

08:54.910 --> 09:00.430
AI message like how I had before, I will now also have the tool calls as well.

09:00.460 --> 09:02.470
Like the tools message as well over here.

09:02.500 --> 09:03.190
Look at that.

09:04.300 --> 09:08.980
So this is also going to be coming for me along with it.

09:08.980 --> 09:14.860
But actually instead of the tool calls which I have wrongly mapped over here, I need to I need to map

09:14.860 --> 09:17.500
the tool invoke because that is what I really need.

09:17.530 --> 09:22.600
I wanted to see like an AI message instead of the actual tool call itself.

09:22.600 --> 09:25.750
So I'm going to, uh, append the tool invoke message.

09:25.780 --> 09:26.830
Oh, look at that.

09:27.070 --> 09:29.530
Because I'm doing it for the second time.

09:29.530 --> 09:32.530
It's just, uh, making things messy here.

09:32.860 --> 09:34.090
Uh, probably.

09:34.090 --> 09:35.440
I need to now set.

09:35.470 --> 09:38.320
I need to just clear this message.

09:38.470 --> 09:40.690
So now it is actually correct.

09:40.690 --> 09:43.300
So we have the human message and the AI message.

09:43.300 --> 09:46.180
And I also need the tool message to be added.

09:46.180 --> 09:54.240
So now if I run this code over here, you should see the AI message, human message and the tool message.

09:54.240 --> 10:01.620
So we have three messages which is required for our AI to really execute things.

10:01.650 --> 10:02.130
Look at that.

10:02.130 --> 10:03.150
It's already this.

10:03.180 --> 10:04.980
This thing is being executed.

10:04.980 --> 10:07.200
Uh, because we did the invoke method.

10:07.230 --> 10:08.220
See that?

10:08.310 --> 10:11.040
Uh, the content of the Wikipedia is already coming up over here.

10:11.040 --> 10:16.050
So list of Donald Trump 2024 presidential election endorsement Summary A range of notable individuals,

10:16.080 --> 10:23.340
groups, organizations endorse Donald Trump for 24 US presidential election and 24 presidential election.

10:23.370 --> 10:30.750
The summary is blah, blah blah, and it has got all the details that is needed for the LLM to get the

10:30.750 --> 10:34.380
context to give me the answer that I'm going to be asking further.

10:34.410 --> 10:41.340
That is what or that is how you can actually create this particular message, which is required for

10:41.340 --> 10:42.480
the LLM to execute.

10:42.510 --> 10:48.090
In our next lecture, we will see how we can execute this whole entire message along with LLM so that

10:48.090 --> 10:49.620
it gives me the response back.


========================================================================================

WEBVTT

00:00.050 --> 00:00.560
All right.

00:00.560 --> 00:07.460
So now we are in the final state of executing the code from our large language model, because we already

00:07.460 --> 00:10.520
have the methods which is required for the LM to process.

00:10.760 --> 00:17.180
And because we have got all these messages, I'm sure our large language model can easily execute these

00:17.180 --> 00:20.690
details and get us the response back.

00:20.720 --> 00:29.510
So for doing that, I'm just going to go over here, uh, the code and I'm going to say, uh, maybe

00:29.540 --> 00:38.300
final output is equal to uh LM with tools dot invoke.

00:38.570 --> 00:42.050
So I'm going to invoke it and I'm going to pass the entire message.

00:42.080 --> 00:45.170
See this message that I'm going to pass in.

00:45.260 --> 00:47.930
And now this is going to print.

00:48.050 --> 00:57.680
So if I now print the final output dot content over here, you should see that content coming up for

00:57.680 --> 00:57.890
me.

00:57.920 --> 01:03.440
So for that question that you have asked now the LM is going to process and it's going to say based

01:03.440 --> 01:08.610
on the information provided from Wikipedia, Donald Trump did win the 2024 presidential election.

01:08.640 --> 01:09.630
Look at that.

01:09.660 --> 01:18.660
Now, our LM has got the capability to get me the answer based on the tool that we have that we have

01:18.690 --> 01:19.260
bounded.

01:19.260 --> 01:26.220
So our local large language model, which did not even have access to the internet before, has got

01:26.220 --> 01:27.210
the internet access.

01:27.210 --> 01:32.070
And it is getting the details from the tools that it has got, the Wikipedia tools.

01:32.070 --> 01:33.270
And now look at that.

01:33.270 --> 01:36.360
It is getting the response, giving the response to me.

01:36.360 --> 01:45.180
And if I go to Lamb-smith this time, uh, over here, chat Olama, you will notice that it has selected

01:45.180 --> 01:51.780
the Wikipedia and it is giving me the response over here, which is amazing.

01:51.780 --> 01:55.530
So that is what is really happening over here.

01:55.950 --> 02:00.660
So it has called the Wikipedia and it has got me the answer.

02:00.660 --> 02:04.650
So Wikipedia tool is executing over here and in the chat.

02:04.650 --> 02:05.250
Olama.

02:05.670 --> 02:09.900
Um, it has really got that particular answer as this one.

02:09.900 --> 02:13.390
So this is the output that it has given to me over there.

02:13.660 --> 02:16.780
This is fabulous.

02:16.810 --> 02:27.430
And now, if I want to change the question a bit, uh, what is the sum of two and 22, which is 24?

02:27.430 --> 02:34.690
And if I try executing it, executing it, and if I try executing this particular code, the sum of

02:34.720 --> 02:36.580
two and 22 is 24.

02:36.610 --> 02:37.240
Look at that.

02:37.240 --> 02:38.380
So that is also working.

02:38.380 --> 02:43.180
So the custom tool is also being called and invoked and executed.

02:43.180 --> 02:46.540
And it is giving me the response correctly over here.

02:47.440 --> 02:54.130
And if I want to ask another question what is the double of two.

02:54.910 --> 02:56.710
Execute this code block.

02:56.740 --> 03:00.670
Execute this code block and execute this code block.

03:00.700 --> 03:02.590
The double of two is four.

03:02.590 --> 03:06.010
So it has really called the multiply numbers.

03:06.370 --> 03:10.270
And it has given me the answer as four.

03:11.080 --> 03:17.750
So hope you got the idea of how the large language model can invoke the tools that we have built, the

03:17.750 --> 03:23.690
custom tools, and also the community built tools without any hesitations with the code that we have

03:23.690 --> 03:24.530
written over here.

03:24.530 --> 03:34.760
So this is the power of you building a tools and also enabling your local large language model to have

03:34.760 --> 03:39.230
the support of running the tools or binding the tools along with it.

03:39.230 --> 03:45.170
And make sure while you use all these functionality, your large language model has got the tooling

03:45.170 --> 03:46.220
support in it.

03:46.340 --> 03:47.810
That's the end of the tools guys.

03:47.810 --> 03:49.040
Hopefully you got the idea.

03:49.040 --> 03:55.250
There are so many things still need to cover, and I hope you already have the whole wide range of idea

03:55.250 --> 03:57.230
of how you can do everything yourself.

03:57.230 --> 04:03.320
Just go ahead and create your own templates, kind of, uh, tools, uh, like the structure tools,

04:03.320 --> 04:09.140
and also try to even invoke the custom tools from the prompt template that you're going to be creating.

04:09.140 --> 04:11.810
And then you call these tools from within.

04:11.840 --> 04:14.630
You're going to be doing a fabulous job there, I'm sure.

04:14.630 --> 04:21.170
But this has already given you a wide range of idea of how you can make use of the tools within your

04:21.170 --> 04:22.850
large language model application.
