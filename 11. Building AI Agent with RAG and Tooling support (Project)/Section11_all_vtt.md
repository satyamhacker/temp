WEBVTT

00:00.080 --> 00:01.940
Welcome to the next section of our course.

00:01.940 --> 00:08.720
And in this section we are going to talk about how we can build agents with rag and tool support with

00:08.720 --> 00:11.600
our local large language model.

00:11.810 --> 00:19.700
If you remember, until our last section, we were trying to use our local large language model and

00:19.700 --> 00:27.320
binding all these tools that we created earlier, including custom tools and also the Wikipedia tools

00:27.320 --> 00:29.510
and also playwright tools for that matter.

00:29.510 --> 00:37.310
And then we use these agent to to take the decision based on the query that we ask, or the prompt that

00:37.310 --> 00:39.440
we pass to the large language model.

00:39.440 --> 00:45.350
And then the agent will choose which tool which is appropriate to perform an action.

00:45.350 --> 00:47.720
And then it gives us the response back.

00:47.720 --> 00:55.760
And now in this section we are going to go a level further where we are going to be doing a bit more

00:55.790 --> 01:02.800
operation, where we are going to be doing the or calling the rag as a tool.

01:02.800 --> 01:06.190
So we are going to create a rag tool this time.

01:06.220 --> 01:12.640
If you remember we were discussing about the rag earlier, which is nothing but the retrieval augmented

01:12.640 --> 01:20.140
generation where we can actually extract the data from external files, split them and embed them and

01:20.140 --> 01:21.430
store them into the database.

01:21.430 --> 01:28.600
And then we use this vector database to query, which can also be passed as a reference to our large

01:28.600 --> 01:35.230
language model, which can be retrieved and generate the answer for us from those stored data.

01:35.620 --> 01:41.260
So you already saw those information in our earlier sections of this course, and we are going to go

01:41.290 --> 01:50.710
a level further this time to use these Rag operations as well, along with our playwright tool, which

01:50.740 --> 01:54.640
actually helps us extract the data from any given web page.

01:54.640 --> 02:01.360
And then it is going to use the knowledge that it has acquired from the Rag or the retrieval augmented

02:01.360 --> 02:05.040
generation, like all the documentation and the knowledge it has got.

02:05.040 --> 02:09.960
And then based on both of these knowledge, it is going to give us the response for us.

02:09.960 --> 02:13.830
So you will see that we are going to use quite a lot of different tools this time, and we're going

02:13.830 --> 02:21.690
to empower our local large language model with all the information that it can then use to serve or

02:21.690 --> 02:25.410
help us serve the information that we are looking for.

02:25.410 --> 02:31.740
So now you will see that our local large language model is more powerful because now it has support

02:31.770 --> 02:39.060
to a lot of different tool bindings over here, along with the retrieval augmented generation data.

02:39.210 --> 02:43.440
So it's going to use this vector data store to retrieve the data as well.

02:43.440 --> 02:49.440
And then you can see that there is going to be a lot of potentials and power going to come for this

02:49.440 --> 02:51.810
particular large language model.

02:51.810 --> 02:58.380
So let's say if I'm going to give a page to this particular large language model asking is this page

02:58.380 --> 03:02.910
has got any bias for this particular web page?

03:02.910 --> 03:02.910
Webpage.

03:02.910 --> 03:09.990
So what is going to do is immediately the Q1 model will not have the ability to go and talk to the actual

03:09.990 --> 03:14.250
page, because the given page is an external internet page that it needs to access.

03:14.250 --> 03:20.970
So it will go and ask the agent, and the agent will know that which tool binding can help us extract

03:20.970 --> 03:24.330
the page information or navigate to that particular page.

03:24.330 --> 03:30.960
And now this guy, the the agent is going to invoke the the playwright tool for us.

03:30.960 --> 03:37.530
And based on that particular information, it is going to then, uh, it is going to invoke this particular

03:37.530 --> 03:42.210
tool, and this playwright is going to perform all the action for us, and then it's going to give the

03:42.210 --> 03:44.100
page information to the agent.

03:44.100 --> 03:50.310
And the next operation we asked is, how about, uh, whether the page is talking about any bias information?

03:50.310 --> 03:55.590
Now, the bias information details is something which is already available with this tool that we are

03:55.590 --> 04:02.070
going to be building in this particular section, where it is going to in turn call the, uh, Rag data,

04:02.100 --> 04:08.570
which is something we already have in our earlier sections, which is going to store the external informations

04:08.570 --> 04:14.870
from the PDF file, and it is stored in here in this particular vector data store, which is the data

04:14.870 --> 04:16.640
which has got all the different information.

04:16.640 --> 04:22.760
So we're going to use this data and then we're going to return it back from the tool to the agent.

04:22.760 --> 04:28.280
And then that agent is going to perform the rest of the operation for us to verify if there is a bias

04:28.280 --> 04:29.360
information there or not.

04:29.360 --> 04:35.150
And then it's going to give the information back to the to the customer or to the person who is asking

04:35.150 --> 04:36.410
this particular question.

04:36.440 --> 04:36.920
Look at that.

04:36.950 --> 04:38.900
There is so many things going on over here.

04:38.930 --> 04:40.880
I know this is a lot of different things.

04:40.880 --> 04:42.050
Uh, over here.

04:42.080 --> 04:46.580
This is just like a fun project which I have created, and I wanted to show you how we can utilize all

04:46.580 --> 04:51.170
the potentials and learnings that we have did in our earlier sections of this course.

04:51.530 --> 04:53.360
So this section is going to be really fun.

04:53.360 --> 04:58.820
So I'm quite excited to show you what are the things that you can do in this particular section to make

04:58.820 --> 05:05.300
your agent more powerful and more meaningful, to return you the answer that you're looking for?

========================================================================================

WEBVTT

00:00.020 --> 00:00.530
All right.

00:00.530 --> 00:06.200
So now we are going to see how we can build this entire thing that you are seeing over here in the code

00:06.230 --> 00:06.620
base.

00:06.620 --> 00:10.910
So overall, the functionality that you are going to be seeing over here are something we have already

00:10.910 --> 00:14.570
discussed in our earlier sections of this particular course.

00:14.570 --> 00:18.710
So all the details that we are going to be talking are going to be something that we are going to be

00:18.710 --> 00:22.160
extracting the informations from here that we have already discussed.

00:22.160 --> 00:27.740
So I'm just going to probably just copy paste some of the code or like most of the code, except that

00:27.740 --> 00:30.470
I'm going to create a tool for this particular rag alone.

00:30.470 --> 00:35.630
And then we'll see how we can fuse them all together and make use of the code that we have already written.

00:35.630 --> 00:38.690
So it's going to be just like a copy paste code for this particular section.

00:38.690 --> 00:43.160
I'm not really going to write a lot of code this time, so please refer to the earlier section, because

00:43.160 --> 00:46.790
if you don't really watch the earlier section, and if you jump directly in this particular section,

00:46.790 --> 00:48.530
this section is not going to make any sense.

00:48.530 --> 00:54.830
So I would recommend you please go and watch there first before watching this particular section.

00:54.950 --> 01:01.840
Well that's it said I'm going to go to my Visual Studio Code and I have already created A notebook file

01:01.840 --> 01:02.440
over here.

01:02.440 --> 01:10.330
And I've also imported the, uh, the env file, uh, and the, uh, the model over here.

01:10.330 --> 01:10.990
Amazing.

01:10.990 --> 01:17.530
And now, as I told you, we have already, uh, did quite a lot of different operation over here.

01:17.530 --> 01:21.400
So I'm just going to copy paste the code one by one.

01:21.400 --> 01:28.360
So maybe the first tool that I wanted to import is going to be, uh, probably uh, yeah.

01:28.390 --> 01:29.170
This guy.

01:29.170 --> 01:38.140
So I'm going to go copy this entire thing and I'm going to go ahead and paste it.

01:38.170 --> 01:44.260
Maybe we don't require the, uh, uh, the Wikipedia and the custom tool this time just for the simplicity

01:44.260 --> 01:44.770
purpose.

01:44.770 --> 01:51.490
I'll just keep it simple to use the playwright tool instead of these, uh, code that we have got.

01:51.640 --> 01:58.750
Uh, so for the playwright code, maybe I'm going to go here and I'm going to go and copy these things,

01:58.750 --> 02:10.020
and I'm going to add the probably markdown here playwright tool code, which is going to be these definitely

02:10.020 --> 02:10.800
we need them.

02:10.800 --> 02:14.790
And we also need the tool information from the playwright.

02:14.790 --> 02:18.990
So I'm going to go copy that and I'm going to paste it over here.

02:19.020 --> 02:19.890
I'm going to run this.

02:19.890 --> 02:23.160
This is going to bring all the tools that the playwright tool has got.

02:23.190 --> 02:25.800
We don't really need to run this part and this part.

02:26.070 --> 02:29.430
And also we are going to invoke the agent at the last stage.

02:29.430 --> 02:31.740
So we don't need that particular piece of code as well.

02:31.770 --> 02:32.520
Cool.

02:32.550 --> 02:39.570
And once we have the playwright tool we are then going to bring our rag information which is this guy,

02:39.600 --> 02:44.160
the tool which is going to hold the Rag information.

02:44.160 --> 02:50.100
So for doing the Rag operation, you remember we need to uh, we need to do embedding.

02:50.100 --> 02:54.390
And we also need to do, uh, quite a lot of different operations.

02:54.390 --> 02:57.300
So just go back to the rag file over here.

02:57.300 --> 03:03.350
As you can see, we need to do the extraction of the PDF and we need to do the text splitting.

03:03.350 --> 03:06.380
And then we need to do the embedding and then vector stores.

03:06.380 --> 03:07.610
But guess what.

03:07.640 --> 03:14.360
Instead of us doing this extraction of the PDF and just splitting it all together, if you remember,

03:14.390 --> 03:24.050
we already actually stored the, uh, the, the database of the extracted, uh, database and splitted,

03:24.050 --> 03:30.260
uh, data into the chroma underscore Langston DB, which is this guy, right?

03:30.290 --> 03:32.720
So this is the database which has got all the different information.

03:32.720 --> 03:38.960
So why not we just call this particular database directly instead of, again, uh, doing all these

03:38.960 --> 03:43.490
different operations one by one because this is not going to be worth it if we're going to do it again.

03:43.490 --> 03:50.660
So what I'm going to do is I'm probably not going to do the extracting the PDF file and doing the text

03:50.690 --> 03:51.470
splitting.

03:51.740 --> 03:59.180
Rather, we can just use the existing the Chrome chroma underscore lang database, which can make more

03:59.180 --> 03:59.810
sense right.

03:59.840 --> 04:01.240
So we can just probably do that.

04:01.240 --> 04:04.360
So we also need this embedding part.

04:04.360 --> 04:09.940
So we uh so I'm going to just copy this code, uh, that you are seeing over here because we're going

04:09.970 --> 04:14.170
to use the same olama embedding with the model of lemma 3.2 latest model.

04:14.170 --> 04:15.370
So I'm going to do that.

04:15.370 --> 04:17.680
So I'm going to add the markdown over here.

04:17.740 --> 04:28.150
And I'm going to say uh initialize uh vector and a retriever with uh embedding.

04:28.540 --> 04:32.230
So this is the important part that we're going to do.

04:32.230 --> 04:37.600
And we're going to add the embedding as the first thing this time.

04:37.600 --> 04:39.670
And I'm going to add the code over here.

04:39.670 --> 04:40.900
So this is the embedding part.

04:40.930 --> 04:42.490
So I'm going to run that over here.

04:42.490 --> 04:48.040
And once we have the embedding part the next part is going to be adding the uh chroma database.

04:48.160 --> 04:54.250
And we also need to add a vector data store which is going to store the particular data from the chroma

04:54.250 --> 04:56.770
database, which we'll be doing in our next lecture.

04:56.770 --> 05:01.240
But hope you got the idea of how we are going to go around in this particular journey.


========================================================================================


WEBVTT

00:00.050 --> 00:00.680
All right.

00:00.680 --> 00:03.680
So now we're going to add the chroma DB over here.

00:03.680 --> 00:06.920
So I'm going to go add the code for the chroma.

00:06.920 --> 00:09.650
So let's go here and see how we did that.

00:09.920 --> 00:10.190
Okay.

00:10.190 --> 00:15.140
So we need to definitely import the chroma uh which is this guy.

00:15.170 --> 00:16.400
So I'm going to do that.

00:16.580 --> 00:22.310
And we are not going to really run the uh run the all split and then the embedding.

00:22.310 --> 00:27.260
So because this is the one which is going to create the vector store, uh, with all the different uh,

00:27.260 --> 00:32.000
data for us, rather you can see that we can retrieve from the persistent vector data store.

00:32.030 --> 00:37.760
This is what I really need because I wanted to use the existing persistent database, which is the chroma

00:37.790 --> 00:39.320
lang chain DB.

00:39.380 --> 00:43.010
So I'm going to use this code as you are seeing over here.

00:43.010 --> 00:47.000
So let's go copy this and paste it over here.

00:47.000 --> 00:52.460
But guess what this particular chroma lang chain db is not in this directory.

00:52.490 --> 00:52.700
Right.

00:52.730 --> 00:58.310
Because we can either copy paste from there to here in this particular section folder as well.

00:58.550 --> 01:00.650
Instead we can just reuse it.

01:00.740 --> 01:04.460
I'm just going to say dot slash dot dot slash.

01:04.520 --> 01:09.350
and I'm going to go to the section five of the RAC document and slash.

01:09.350 --> 01:11.060
We have this chroma DB.

01:11.210 --> 01:11.870
Look at that.

01:11.870 --> 01:12.980
That's straightforward right.

01:13.010 --> 01:17.720
We can just get there directly to get the persistent storage.

01:17.720 --> 01:25.160
And we can probably check if we could able to uh, work with this particular vector store just to test

01:25.160 --> 01:27.830
if you're really having the connectivity there.

01:27.830 --> 01:31.040
So if I run this, you will notice that what is bias testing.

01:31.040 --> 01:34.940
It could able to answer me like how it's supposed to.

01:34.970 --> 01:37.100
So which means the connectivity is working fine.

01:37.100 --> 01:43.190
So which means the vector store has got the data from this particular directory which is great.

01:43.670 --> 01:48.620
So our Chrome DB, the Chrome DB is also working for us without any problem.

01:48.800 --> 01:55.640
And the final operation probably in this particular retriever operation is going to be, uh, the retriever

01:55.640 --> 01:57.590
itself, the retriever in the Lang chain.

01:57.590 --> 01:59.060
So this is very important.

01:59.060 --> 02:00.470
So we have to do that.

02:00.500 --> 02:02.720
I think there is a typo there for the retriever.

02:02.840 --> 02:05.870
Uh, let me just fix that over here.

02:05.870 --> 02:08.800
So, Three.

02:08.830 --> 02:14.110
Where are from vector stores.

02:14.110 --> 02:17.830
So that is what we are going to be doing over here.

02:17.830 --> 02:20.110
And the retriever is going to be this guy.

02:20.140 --> 02:23.890
So let's go copy paste it over here.

02:23.890 --> 02:29.950
And if I run this this is the retriever which is going to have the similarity search from the vector

02:29.950 --> 02:30.880
database.

02:30.910 --> 02:31.780
Amazing.

02:31.960 --> 02:36.340
And now we can perform the rest of the operation.

02:36.340 --> 02:39.400
We don't really need this document retrieval manually or things of that nature.

02:39.400 --> 02:41.020
We are not going to do that.

02:41.020 --> 02:51.190
But now we are going to build a tool which is going to call the retriever that we have got over here

02:51.490 --> 02:54.370
to give us the answer that we are looking for.

02:54.370 --> 02:58.210
So this is the most important part that we are going to be talking about.

02:58.210 --> 03:01.270
So this is where the tool is going to be created for us.

03:01.270 --> 03:03.460
So how do we actually do that?

03:03.460 --> 03:13.240
Well, in order for me to create the tools, I'm going to just say creating a tool to, uh, to retrieve

03:13.240 --> 03:17.680
the data from vector stores.

03:18.040 --> 03:19.390
Uh, vector stores.

03:19.420 --> 03:19.810
Right.

03:19.840 --> 03:21.580
So how do we create the tool?

03:21.580 --> 03:24.610
We already discussed about that in our earlier sections as well.

03:24.610 --> 03:31.960
So the way that you can create the tool is are we going to call the from Lang Chain uh over here.

03:31.960 --> 03:37.360
And I'm going to call the tools and I'm going to import tool.

03:37.390 --> 03:38.080
Right.

03:38.110 --> 03:40.420
That's going to be importing the tool.

03:40.420 --> 03:43.540
And I'm going to create a tool over here.

03:43.540 --> 03:44.950
So I'm going to decorate it.

03:45.040 --> 03:46.930
Bias detection.

03:47.530 --> 03:52.210
Uh and I'm going to pass the query which is going to be of a string type.

03:52.330 --> 03:56.770
Uh and it returns me a string as well.

03:56.890 --> 03:57.100
Right.

03:57.130 --> 03:58.960
That's what it's going to be doing over here.

03:58.960 --> 04:07.870
So over here in this particular um, in this particular bias detection, I'm going to return, uh,

04:07.870 --> 04:08.980
something like this.

04:08.980 --> 04:16.260
So basically I'm going to be, uh, writing a prompt over here, uh, something like this.

04:16.260 --> 04:25.890
And I'm going to say what kind of bias is mentioned in this article.

04:25.890 --> 04:28.350
So I'm going to do something like that.

04:28.590 --> 04:43.980
And over here I'm going to say you must use this tool for bias related testing in LM, which is the

04:43.980 --> 04:47.580
large language model.

04:48.120 --> 04:48.570
Right.

04:48.570 --> 04:52.980
So that is what I'm going to be telling in this particular tool.

04:52.980 --> 04:56.310
While the agent actually chooses this particular tool, it needs to know the context.

04:56.310 --> 04:59.550
And that's the reason why we need to add this particular details over here.

04:59.550 --> 05:03.270
And these are the prompt that we are going to be passing to the large language model.

05:03.300 --> 05:06.600
I'm going to add an arguments here.

05:06.750 --> 05:18.960
And I'm going to say query uh is going to be the search query for bias detection whatever.

05:18.990 --> 05:19.440
Right.

05:19.440 --> 05:20.700
write, maybe just query.

05:20.730 --> 05:21.810
That should be fine.

05:22.080 --> 05:24.360
You don't have to give so many details over here.

05:24.600 --> 05:25.920
Uh, that should be good.

05:26.010 --> 05:32.730
And now, what is the way this buyer detection bias detection is really going to work?

05:32.730 --> 05:39.450
Or basically now this guy is going to return me the retriever dot.

05:39.450 --> 05:41.310
And we're going to call this invoke method.

05:41.310 --> 05:50.850
If you remember this guy, which is going to get me all the different queries that we have got over

05:50.850 --> 05:56.790
here, and we can give the page content, which is going to have the page contents as well.

05:56.790 --> 05:58.890
So I'm going to just leave this guy as it is.

05:58.890 --> 06:05.190
So maybe, uh, maybe page content should be good enough, uh, if we call that.

06:05.190 --> 06:07.860
So I'm going to save this everything over here.

06:07.860 --> 06:14.430
And now the final thing that we have to do is after this particular tool, we need to create the tool

06:14.430 --> 06:14.970
array.

06:14.970 --> 06:20.010
And then we need to pass that to the agent, uh, so that we can pass the query to the agent and we'll

06:20.010 --> 06:24.180
see how the response is going to come up, which we'll be doing in our next lecture.


========================================================================================

WEBVTT

00:00.110 --> 00:05.300
So now that we have this particular tool that we have created, the bias detection, we need to add

00:05.300 --> 00:08.360
this particular tool in the list of the tools that we have got.

00:08.360 --> 00:12.200
So we have already created the tool for our playwright.

00:12.200 --> 00:17.930
If you remember over here, the tools which are these, as you can see now we need to add our new tool

00:17.930 --> 00:24.260
which we have created, which is this guy, the uh, Lang chain, uh, the bias detection tool as well.

00:24.260 --> 00:28.130
So for doing that I'm going to add a markdown over here.

00:28.130 --> 00:41.300
And I'm going to say, uh, add the um, add the bias detection, uh, tool in the array of tools.

00:41.300 --> 00:45.260
So we're going to do that over here as a code.

00:45.260 --> 00:47.570
And I'm going to say tools.

00:47.720 --> 00:53.780
Uh Dot and we have got this append and I'm going to append this bias detection as well.

00:53.810 --> 00:56.630
And let's go see the tools that we have got in total.

00:56.630 --> 00:58.790
So if you see here look at that.

00:58.790 --> 01:00.620
We have all these tools from playwright.

01:00.620 --> 01:04.700
And we also have got our structured tool the bias detection, right?

01:04.730 --> 01:07.340
So we have got all these things over here.

01:07.340 --> 01:14.600
And now let's try to create our final operation that we are going to be doing, which is the agent code.

01:14.690 --> 01:16.640
This is where the agent code comes in.

01:16.640 --> 01:28.730
So I'm going to say creating uh, creating agent code to call the rag and the tools.

01:28.730 --> 01:31.220
So I'm going to hit okay.

01:31.430 --> 01:35.720
Uh, by the way, we should not be saying that calling rag and tools because now the rag itself is part

01:35.720 --> 01:36.140
of the tool.

01:36.140 --> 01:36.650
So.

01:36.680 --> 01:37.130
Yeah.

01:37.160 --> 01:40.280
Anyways, uh, over here I'm going to write the agent.

01:40.280 --> 01:42.500
And again, the agent code is already there.

01:42.500 --> 01:48.350
Here in the playwright browser tool, I'm gonna go copy this entire thing and paste it over here.

01:48.380 --> 01:52.220
So this code is going to remain exactly the same because it's the tools that we are passing in.

01:52.250 --> 01:54.020
We're going to pass the large language model.

01:54.050 --> 01:57.770
The structured chat zero shot react description is correct.

01:57.890 --> 02:02.090
Uh, and over here I'm going to say extract the table data from this, this this.

02:02.090 --> 02:03.710
No this is not what I'm going to do.

02:03.740 --> 02:11.480
What I'm basically going to do is I'm going to go to one of the page that I know is kind of a bias based

02:11.480 --> 02:11.960
page.

02:11.960 --> 02:15.230
So I'm going to go to this page, which I'm talking about over here.

02:15.230 --> 02:23.750
So this particular page from the Times.com, it says that the BBC coverage institutional hostile to

02:23.780 --> 02:25.430
Israel says Jewish group.

02:25.430 --> 02:29.480
So this this page has got a bit of a bias information.

02:29.600 --> 02:34.010
Um, which, which could just attack one party then from the other.

02:34.010 --> 02:38.420
I'm not going to go to the details of this particular page, but as you can see, this particular page

02:38.420 --> 02:40.370
has got a bit of a bias there.

02:40.370 --> 02:43.820
So we are going to refer what are the bias this particular page has got.

02:43.850 --> 02:50.900
And we are going to see how we can actually, uh, test the different types of biases based on this

02:50.900 --> 02:51.650
particular page.

02:51.650 --> 02:59.570
Because if you remember, in our, uh, in our testing and evaluation PDF file, we have got quite a

02:59.570 --> 03:02.300
lot of different bias informations as well.

03:02.300 --> 03:05.810
So if you just go open this particular PDF file, look at that.

03:05.810 --> 03:10.820
This particular PDF file uh is the is a training file that we gave or not?

03:10.820 --> 03:15.290
The training files, the rag file that we gave, uh, which is stored in our vector database.

03:15.290 --> 03:23.090
And it has got some methodologies for, uh, for evaluating social bias of the large language model.

03:23.090 --> 03:32.480
And this will tell you how an LLM can understand or identify what types of, uh, social bias this particular

03:32.510 --> 03:39.500
LLM can, uh, can identify and how it can be resolving and what are the types of bias that it knows.

03:39.500 --> 03:44.450
So it has got all the bias related information in this particular chapter, and it has got all the different

03:44.450 --> 03:49.040
bullet points to make you understand how the bias can be tested.

03:49.070 --> 03:49.520
You see that?

03:49.550 --> 03:51.500
How many details are there over here?

03:51.500 --> 04:00.020
So I'm going to ask our large language model if this particular page that you have got has got any bias

04:00.020 --> 04:06.920
in there, and if so, what bias are there and how I can test these bias information from that particular

04:06.920 --> 04:07.580
page.

04:07.610 --> 04:09.020
It sounds interesting, right?

04:09.110 --> 04:15.130
This is what we are going to basically be doing in this particular, um, in this particular section.

04:15.130 --> 04:19.300
So this is the the whole purpose of this particular agent that we are building over here.

04:19.300 --> 04:25.690
We're going to use the external knowledge which has been stored on our system, which is like the it

04:25.690 --> 04:31.090
could be just related to yourself that you have got a Rag system, you have all your company details.

04:31.090 --> 04:37.300
And if you're going to be writing a test case or maybe a development code or any best practices or a

04:37.300 --> 04:42.670
confluence page, you just have to retrieve the previous information that has been stored in the rag.

04:42.670 --> 04:47.800
And if you're going to be asking your LLM to perform some action based on the existing knowledge which

04:47.830 --> 04:53.170
it has gained, so it will give you the company aligned details rather something which it has learned

04:53.170 --> 05:00.490
from the training data from the internet that is different from what you have given to your rag.

05:00.520 --> 05:02.560
That is what is the whole idea over here.

05:02.560 --> 05:04.930
So now I'm going to do that.

05:04.930 --> 05:11.470
I'm going to just delete this, uh, query over here and I'm going to say extract the page.

05:13.240 --> 05:22.360
And check if there is a bias in the article, and I'm going to paste that particular article over here.

05:22.660 --> 05:33.130
Um, and we will see if now our agent can rightly call our, uh, agents to extract the page.

05:33.250 --> 05:36.820
I mean, the extraction of the page is going to be done by the playwright tool.

05:36.940 --> 05:42.100
Uh, and the bias is going to be done by our bias tool that we have created over here, the bias detection

05:42.100 --> 05:42.670
tool.

05:42.820 --> 05:47.200
Uh, so I'm going to save this, and I'm going to run this code over here.

05:47.200 --> 05:51.100
And you will notice that the agent executor chain is going to initiate.

05:51.100 --> 05:56.380
And you'll notice that the immediately the navigate browser of the playwright tool is been kicking in.

05:57.970 --> 06:03.340
And you can see that the the navigation is going to happen to the this particular page.

06:03.340 --> 06:07.360
And it is doing some observation of this particular page.

06:07.420 --> 06:12.670
Probably I think it's going to extract all the text from this particular, uh, page that this is the

06:12.670 --> 06:21.370
tool being called over here and it is doing all these things and there is a failure.

06:21.400 --> 06:22.540
Ah, look at that.

06:22.570 --> 06:23.410
Oh, look at that.

06:23.410 --> 06:24.190
This is a problem.

06:24.190 --> 06:31.180
I don't want to use the page content here, because sometimes the page content can go wrong with our

06:31.180 --> 06:31.570
tool.

06:31.570 --> 06:34.300
So I'm just going to use just the invoke method.

06:34.300 --> 06:38.830
That's why I was hesitant to accept the suggestion from our GitHub copilot.

06:39.490 --> 06:40.300
Sometimes.

06:40.300 --> 06:40.930
That is crazy.

06:40.960 --> 06:48.370
You don't have to really, really use uh, some suggestions which the which the, uh, the GitHub copilot

06:48.370 --> 06:49.150
gives to you.

06:49.150 --> 06:51.280
And I also need to append it.

06:51.280 --> 06:52.000
But guess what?

06:52.030 --> 06:56.350
Because we have appended two times, it can go wrong as well.

06:56.350 --> 06:57.910
So let me go.

06:58.030 --> 07:03.310
Uh, probably clear the tools that we have got.

07:03.310 --> 07:05.950
So tools dot clear.

07:06.400 --> 07:07.060
Um.

07:09.100 --> 07:10.450
And I clear the tools.

07:10.480 --> 07:10.720
Okay.

07:10.750 --> 07:12.580
This is the tools that we have got.

07:12.820 --> 07:19.120
Uh, and I also need to add our new tool.

07:19.150 --> 07:21.850
So this one these tools.

07:21.940 --> 07:22.450
Look at that.

07:22.450 --> 07:25.870
Now we have only one bias detection tool over here.

07:25.900 --> 07:26.800
Which is amazing.

07:26.800 --> 07:28.870
And I'm going to execute the code.

07:28.870 --> 07:30.400
We will see how that works this time.

07:30.400 --> 07:33.400
So navigating to the browser there we go.

07:33.400 --> 07:35.740
And now it's extracting the text.

07:36.250 --> 07:37.570
And hopefully it's gonna.

07:37.600 --> 07:38.290
Yeah there we go.

07:38.320 --> 07:42.490
See now this time it is not really failing because it's fine.

07:42.520 --> 07:44.410
It's really doing what it is supposed to.

07:44.440 --> 07:49.960
And if you go to the text editor over here so that we can know what is really happening behind the scene,

07:50.470 --> 07:52.930
um, it's still working on, I think.

07:52.960 --> 07:54.400
Yeah, look at that.

07:54.430 --> 07:57.610
Given this, let's focus back on the correct article.

07:57.820 --> 07:58.630
Uh, look at that.

07:58.630 --> 08:02.800
So it has got some details and it has, uh, finished the chain.

08:02.800 --> 08:04.240
And look at that.

08:04.240 --> 08:06.430
It seems there is a mix up in the document content.

08:06.460 --> 08:12.910
The extracted text does not relate to, uh, and it says it's not related to some information over there,

08:13.120 --> 08:15.730
but let's just go.

08:15.730 --> 08:21.250
And this is the detail which is given the given this, let's focus back on the credit article and the

08:21.250 --> 08:24.220
relevant part of the article states these details.

08:24.220 --> 08:30.700
And to assess the bias, there is a source credibility, content analysis and prospective representations

08:30.700 --> 08:33.010
on here and the bias detection.

08:33.100 --> 08:37.270
For this one is the positive bias direction and evidence.

08:37.270 --> 08:41.620
So these are the things that our agent has found.

08:41.620 --> 08:48.400
And it has now written all this information based on our retrieval retriever that we have written.

08:48.400 --> 08:51.370
So these informations are coming actually from the retriever guys.

08:51.370 --> 08:56.530
Our retriever is doing all this magic for us over here because the bias detection tool is doing all

08:56.530 --> 08:57.400
those things for me.

08:57.400 --> 08:58.990
And now guess what?

08:58.990 --> 09:07.270
If I go to our, uh, Safari browser and to the actual, uh, Lang Smith over here?

09:07.540 --> 09:11.350
I see, last time it failed, it's showing me that information, but this one is the last one which

09:11.350 --> 09:12.190
has got past.

09:12.190 --> 09:15.790
And you will notice immediately that there are so many things really happening.

09:15.790 --> 09:23.710
So our agent executor is calling the, uh, LM chain, which is going to be calling the the model for

09:23.710 --> 09:29.890
the first time, and the model is going to then call the the bounded tool, which is the navigate browser,

09:29.890 --> 09:32.710
which is going to navigate to this particular website.

09:32.860 --> 09:34.810
And then it's going to return to 100.

09:34.900 --> 09:38.350
And then it is going to go to the long chain again.

09:38.350 --> 09:43.900
And this guy is going to uh, to get all the information over there.

09:43.900 --> 09:48.490
And then it is going to extract the text from this particular page, which is this entire page.

09:48.490 --> 09:51.070
As you can see, this whole page has been extracted.

09:51.070 --> 09:59.200
And it is then going to pass to the, uh, to the chat or llama one more time, uh, to see if it can

09:59.200 --> 10:01.930
be, uh, used somewhere.

10:01.930 --> 10:05.950
And then it is going to call the bias detection, because that was my next question.

10:05.950 --> 10:12.190
So you see that the bias detection is now going to call our information which it has stored from the

10:12.190 --> 10:13.030
Rag.

10:13.060 --> 10:14.230
Look at that.

10:14.350 --> 10:15.430
That's amazing.

10:15.430 --> 10:19.420
And see the source of this particular file is going to be testing and evidence lm dot pdf file.

10:19.450 --> 10:24.510
So as I told you the bias detection informations are all available in this particular PDF file, so

10:24.510 --> 10:26.700
it is reading from there.

10:26.730 --> 10:28.140
That's why it has happened.

10:28.140 --> 10:34.650
And the total pages 223 and the page label that it has read is from 127.

10:34.650 --> 10:41.010
So probably if we go to our PDF file and look at that, this is the page number 127 which I'm talking

10:41.010 --> 10:41.430
about.

10:41.430 --> 10:47.220
So just going back over here, page number 127.

10:47.250 --> 10:48.300
Oh look at that.

10:48.300 --> 10:50.760
So it's all the bias information guys.

10:50.760 --> 10:55.650
All these bias informations are read from this particular page over here.

10:55.680 --> 10:57.690
The social bias of LM.

10:58.260 --> 11:04.980
So it has read that and it has correctly given that particular information for us over here.

11:04.980 --> 11:10.740
So based on these information it went to the vector stores and got the information from there.

11:10.740 --> 11:15.840
And then it is returning as the last output over here.

11:15.840 --> 11:20.130
So this is the this is the system which is getting me that question.

11:20.130 --> 11:24.390
And this is the human which is going to ask the question from the system.

11:24.540 --> 11:27.210
And then this is the output which is going to come up over here.

11:27.210 --> 11:31.800
And you will notice that this book, this summarize, should be sufficient to understand the bias in

11:31.800 --> 11:32.280
this article.

11:32.280 --> 11:35.400
To further analysis, need to request additional steps to be taken.

11:35.400 --> 11:35.940
Care.

11:36.330 --> 11:37.980
And here you go.

11:39.330 --> 11:47.190
Hope you got the idea of how we can fuse all of these learnings that we have did so far into one single

11:47.190 --> 11:55.560
place, and we have got all the different information monitored and observed with our langschmidt over

11:55.560 --> 11:55.770
here.

11:55.800 --> 11:59.760
And once again, that is the power of Langschmidt guys, as I told you, Langschmidt can not only just

11:59.760 --> 12:08.460
used for the observability, but we can also evaluate how our large language models and the chains and

12:08.460 --> 12:12.720
the agent is going to be performing and how it is calling the right tool to perform the operation.

12:12.720 --> 12:18.720
So we can use this for our testing operation as many times as possible, so that the testing is so much

12:18.720 --> 12:28.260
easier compared to just using the verbose information which you get from this particular notebook over

12:28.260 --> 12:28.860
here.

========================================================================================
