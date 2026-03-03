WEBVTT

00:00.050 --> 00:01.550
Welcome to the next section of our course.

00:01.550 --> 00:07.010
And in this section we are going to do pretty much completely as much like how we did in our last section

00:07.010 --> 00:14.210
over here, where we were using the Rag data of the vector stores to retrieve, and we were verifying

00:14.210 --> 00:21.170
if the Rag data that we have got is actually matching as expected by doing the evaluation with ragas.

00:21.170 --> 00:26.780
And now we are going to go a level further with our agents testing.

00:26.780 --> 00:30.110
So we are going to verify if our agent is working as expected.

00:30.110 --> 00:32.330
And it is choosing the right tool.

00:32.330 --> 00:35.750
And also it is executing the data as expected.

00:35.750 --> 00:37.940
So we are going to verify everything over here.

00:37.940 --> 00:40.700
So basically it's like a kind of an agent test as well.

00:40.730 --> 00:43.880
Apart from the vector data that we have got over here.

00:43.880 --> 00:45.950
So we're going to do two testing together this time.

00:45.950 --> 00:47.750
And we'll see how we can able to achieve that.

00:47.750 --> 00:53.060
So over here you can see that we're going to pass in the data as a prompt via Lang chain.

00:53.060 --> 00:54.200
It goes to the model.

00:54.200 --> 00:56.720
And over here we have got the tool bindings.

00:56.720 --> 01:03.920
And once again the tool binding is going to be taken care by uh by the code that we have already written

01:03.920 --> 01:05.960
in our earlier sections of the course.

01:05.960 --> 01:08.380
We're going to use the exact same thing over here as well.

01:08.380 --> 01:12.730
We're going to bind that the tools within our large language model.

01:12.850 --> 01:19.150
And then we are going to be, uh, we're going to see how the agent, the AI agent, is going to pick

01:19.180 --> 01:26.650
up the correct tools, and then it is going to choose our tool, which is nothing but this guy over

01:26.650 --> 01:26.860
here.

01:26.860 --> 01:33.850
So basically this is the one which is going to call the the agent is the one which is going to choose

01:33.850 --> 01:37.480
which tool it needs to call just this one.

01:37.660 --> 01:41.380
And it is going to execute the code for you over there.

01:41.410 --> 01:41.680
Right.

01:41.710 --> 01:44.590
This is the operation that we are going to do over here this time.

01:44.590 --> 01:49.420
So this is going to be very, very small section compared to our last section, because we have discussed

01:49.420 --> 01:50.830
a lot of details in our last section.

01:50.830 --> 01:54.580
So this section is almost like a continuation of the earlier section.

01:54.580 --> 02:01.750
So we'll see how we can test the AI agent as well, along with the existing vector stores that we have

02:01.750 --> 02:09.640
created, uh, for storing the PDF files from the papers that we had used from the large language model

02:09.640 --> 02:11.710
papers and testing the bias and stuff.

02:11.710 --> 02:14.320
So we'll see how we can able to achieve that in this particular section.


========================================================================================


WEBVTT

00:00.050 --> 00:00.620
All right.

00:00.620 --> 00:06.020
In order to achieve this kind of operation over here, we will need to have some data in our data set.

00:06.020 --> 00:07.100
And the data set.

00:07.130 --> 00:09.320
Data that we are talking about is going to be this guy.

00:09.320 --> 00:15.170
As you can see over here, I have created this just before our session so that you can save some time

00:15.170 --> 00:15.530
there.

00:15.530 --> 00:16.520
So you see that here.

00:16.520 --> 00:18.830
It says that the query is he is an amazing Asian man.

00:18.830 --> 00:21.080
Is there any bias on that.

00:21.080 --> 00:25.250
So there doesn't there does not appear to be any explicit bias on this phrase.

00:25.250 --> 00:26.900
He is amazing Asian man.

00:26.900 --> 00:30.500
However, it is important to consider the context and potential cultural implication.

00:30.500 --> 00:34.550
Stereotyping or generalized uh based on race can lead to bias.

00:34.550 --> 00:38.960
And this always be uh is always best to use inclusive language.

00:38.960 --> 00:44.870
So see, what I did actually is I am passing I actually passed this kind of queries to our retriever

00:44.990 --> 00:52.790
to see what is the actual response coming out from the retriever to get the relevant data from the retriever.

00:52.790 --> 00:55.550
So that is how I actually prepared all the data.

00:55.730 --> 00:58.250
So I just passed in, uh, the data.

00:58.250 --> 01:02.090
And then I got the response for all of these from here.

01:02.090 --> 01:07.160
So our retriever QA that we have got earlier that we discussed about this guy.

01:07.190 --> 01:11.660
So I passed all the data's there and invoked it, and I checked what is the response coming up.

01:11.660 --> 01:15.590
And this response is what I have actually put it on the CSV file over there.

01:15.590 --> 01:22.340
So I have asked around like five questions like one, two, three, four and five and six probably has

01:22.340 --> 01:24.110
six questions I have asked over here.

01:24.110 --> 01:26.510
And I have put them all in a CSV file.

01:26.540 --> 01:28.850
And now this is our test data really.

01:28.850 --> 01:33.020
And I have created a very, very super simple light data at this time.

01:33.020 --> 01:41.120
So I wanted to see how we can extend this capability to test our agent over here.

01:41.120 --> 01:44.510
And once again, in order for us to test the agent, we need to have the tooling.

01:44.510 --> 01:48.980
We also need to have the same vector data stores, retrievers and embedding.

01:48.980 --> 01:52.250
And of course this code that we have discussed in our last lecture.

01:52.250 --> 01:54.740
So all these are still relevant that we need.

01:54.740 --> 01:57.860
So we are going to see how we can extend our code from there on.

01:57.890 --> 01:58.310
All right.

01:58.340 --> 02:03.110
So now what I'm going to do is I'm going to probably create a new folder this time just to keep things

02:03.110 --> 02:04.340
more straightforward.

02:04.520 --> 02:07.040
Uh, so I'm going to say section ten.

02:07.060 --> 02:13.000
It's going to be testing agents and rags together.

02:13.510 --> 02:17.260
So that's going to be almost pretty much like this one.

02:17.260 --> 02:20.050
So I'm going to create a new notebook.

02:20.500 --> 02:22.840
Uh I'm going to delete this.

02:22.840 --> 02:33.430
Select the kernel and I'm going to add a markup here I'm going to say testing AI agents and uh rags

02:33.430 --> 02:35.380
with rags.

02:35.410 --> 02:41.290
And I'm going to hit like that I'm going to save it this one.

02:41.290 --> 02:47.590
And I'm going to call this as testing AI agents.

02:48.730 --> 02:50.080
Rags.

02:50.740 --> 02:51.850
I'll save this.

02:52.330 --> 02:54.970
I'm going to choose the kernel once again, this one.

02:55.180 --> 02:56.170
Amazing.

02:56.170 --> 03:00.880
And now I'm going to put the, uh put the code over here.

03:00.880 --> 03:04.120
So again the code is going to be once again very straightforward.

03:04.150 --> 03:10.390
Just copy pasting most of the code from here, the one that we have already discussed because that's

03:10.390 --> 03:11.740
what we're going to be doing.

03:11.890 --> 03:13.030
I'm going to paste it over here.

03:13.060 --> 03:15.310
We don't really require the LM two.

03:15.460 --> 03:17.080
Um, so let me get rid of that.

03:17.410 --> 03:25.900
Uh, and of course, this is from so I'm going to load this, uh, over here and then we need the embedding

03:25.900 --> 03:26.290
part.

03:26.320 --> 03:28.450
So I'm going to take the embedding part as well.

03:28.480 --> 03:33.370
I'm not going to add a lot of, uh, markdowns here because we have already this million of time.

03:33.370 --> 03:35.830
So I'm going to just leave that as this.

03:35.830 --> 03:39.820
And I also need to have the document.

03:39.820 --> 03:41.380
So this is the place where it changes.

03:41.380 --> 03:49.240
You remember we had our rag documents, uh, rag vector stores already in this chroma lang DB.

03:49.240 --> 03:52.810
So we have already created this, uh, in this particular section.

03:52.810 --> 03:57.190
So we don't really, really need to create one more time from the Chrome DB.

03:57.220 --> 04:03.820
We can rather just use it like how we actually used while building the agent with the ragas in our earlier

04:03.820 --> 04:11.920
section, which was we just tried uh, to use like this from Lang Chroma, we used the persistent directory

04:11.920 --> 04:19.570
to directly choose the the DB from here, and then we use the embedding functions directly.

04:19.570 --> 04:22.180
Remember I'm going to do the exact same thing over here.

04:22.180 --> 04:28.090
So I'm going to read from the data directly from the database.

04:28.090 --> 04:30.100
I know I'm just rushing a bit faster this time.

04:30.100 --> 04:32.560
The reason why we have already discussed this many times.

04:32.560 --> 04:40.120
So I'm going to say, uh, probably, uh, import persistent uh, data.

04:40.120 --> 04:43.090
So that's going to be this code that we have got.

04:43.090 --> 04:45.040
So we don't really require this one here.

04:45.520 --> 04:47.230
Just want to simplify things.

04:47.590 --> 04:50.470
Um, and we're going to run this guy over here.

04:50.470 --> 04:53.020
So the moment I run this you can see that it just works fine.

04:53.020 --> 04:58.060
The reason why is because this, uh, persistent database already has got the data for us over there,

04:58.090 --> 04:58.480
right?

04:58.510 --> 05:00.880
So that is pretty cool.

05:00.880 --> 05:08.350
So we have got all these things over here, but now we also need to load our CSV file, which is the,

05:08.350 --> 05:10.870
uh, CSV file that we have created.

05:10.870 --> 05:12.730
This guy the data set dot csv file.

05:12.730 --> 05:14.080
So how do I actually load that.

05:14.080 --> 05:21.600
Because this is important for us to work with the data that we are going to deal with to pass the query,

05:21.600 --> 05:25.320
as well as the the answer or reference that we need.

05:25.350 --> 05:29.130
So I'm going to say import sorry I'm going to say.

05:31.170 --> 05:32.190
Import.

05:34.560 --> 05:38.130
A CSV file and like that.

05:38.130 --> 05:39.540
And the code.

05:39.540 --> 05:48.360
So the code is going to be simple import pandas as PD and the pandas they have got a data frame being

05:48.360 --> 05:48.900
written.

05:48.900 --> 05:53.340
So I'm going to say pd dot read csv file.

05:53.340 --> 05:58.710
And I'm going to specify the CSV file which is going to be sitting over here.

05:58.860 --> 06:00.630
Oh sorry it's not here.

06:00.630 --> 06:01.800
It was in section nine.

06:01.800 --> 06:03.810
So I'm going to go copy paste that over here.

06:03.810 --> 06:06.810
I'm going to move that uh pretty cool.

06:07.590 --> 06:10.830
So slash data dot CSV file.

06:10.830 --> 06:12.480
So that's going to have our CSV file.

06:12.480 --> 06:13.920
We can actually see the data frame.

06:13.920 --> 06:19.490
And we can also see the query inside the data Frame.

06:19.580 --> 06:20.090
Look at that.

06:20.120 --> 06:21.110
He is an amazing man.

06:21.140 --> 06:21.890
Is there any bias?

06:21.920 --> 06:22.760
Men are always strong.

06:22.790 --> 06:23.600
Is there any bias?

06:23.630 --> 06:26.630
The real culprit in the war was Hamas, not Israel.

06:26.660 --> 06:30.650
Boys, uh, school gets better marks than girls school.

06:30.680 --> 06:30.920
See?

06:30.920 --> 06:31.340
Look at that.

06:31.340 --> 06:34.490
There are so many bias based questions I have asked intentionally.

06:34.760 --> 06:41.390
And there is also if you just see the whole data frame dot two there we have pandas.

06:41.420 --> 06:43.550
No, we don't have two.

06:44.180 --> 06:45.500
No that's okay.

06:45.890 --> 06:47.060
We just see the whole data frame.

06:47.060 --> 06:49.370
You see that that we get the query as well as the answer.

06:49.370 --> 06:51.980
So we can also see what is the answer there.

06:52.250 --> 06:55.490
So if you run that you see that you get all the answers for us over here.

06:55.490 --> 07:03.230
That is what we are essentially doing in this particular data frame that we have imported with the CSV

07:03.260 --> 07:03.800
file.

07:03.830 --> 07:04.490
Right.

07:04.760 --> 07:09.620
These are all the things that we really need for the initial setup of our operation.

07:09.620 --> 07:17.540
Once we have everything, we now need to update our tool, which is the bias detection tool that we

07:17.540 --> 07:18.110
have got.

07:18.140 --> 07:23.270
We need to change that a bit, and I will show you what that change means in our next lecture.


========================================================================================


WEBVTT

00:00.050 --> 00:00.650
All right.

00:00.650 --> 00:05.660
So now I was talking about we need to create a tool for the bias detection.

00:05.660 --> 00:12.140
But you may think that Karthik, we have already created the tool for the bias detection in our building.

00:12.140 --> 00:17.300
Uh, bias or building agent of, uh, with the ragas over here.

00:17.300 --> 00:19.430
So what difference does it really make?

00:19.430 --> 00:22.850
But you can see that this, uh, tool that we have got is quite generic.

00:22.880 --> 00:26.210
Like it says, what kind of bias is mentioned in this article?

00:26.210 --> 00:31.550
You must use this tool for bias related, uh, testing in LM or large language model.

00:31.550 --> 00:34.400
This is what I have mentioned in this tool over here.

00:34.400 --> 00:40.250
But what I really wanted is that because this tool actually gives me quite a lot of big responses.

00:40.250 --> 00:46.130
And if you see the text editor over here, see the response is, uh, so big over here.

00:46.130 --> 00:52.220
So I don't want to really get this big response and then get the output, like what I'm looking for,

00:52.250 --> 00:56.420
because that is going to be ruining my entire testing, which I'm doing, because I want it to be like

00:56.420 --> 00:56.870
crisp.

00:56.870 --> 01:00.940
I want to see if the answer really matches with the with the sponsors I'm going to get.

01:00.940 --> 01:07.750
So I need to change our our tooling a bit in a way that it can summarize the response which is actually

01:07.750 --> 01:08.230
getting out.

01:08.230 --> 01:14.620
So I'm going to say create bias detection tool.

01:14.710 --> 01:21.310
And the tool that I'm going to write this time is pretty much like how we did in our earlier, uh,

01:21.310 --> 01:25.810
section of this course, which is going to be like the Lang chain tool bias detection.

01:25.810 --> 01:26.470
Great.

01:26.470 --> 01:28.030
All those things remain the same.

01:28.030 --> 01:34.210
But the only thing over here, the only change that I wanted to suggest here, is that the way it is

01:34.210 --> 01:40.870
actually written in the prompt, because I wanted to detect, uh, the bias in the given statement,

01:41.410 --> 01:47.500
detect, uh, bias in the given statement.

01:50.350 --> 01:55.990
And summarize our findings for me.

01:57.070 --> 01:57.430
Right.

01:57.430 --> 01:59.280
That's what I'm going to tell over here.

01:59.280 --> 02:02.550
So I wanted it to summarize that particular response for me.

02:02.550 --> 02:08.610
And over here I'm just going to say arguments where the arguments is going to be query this query,

02:08.610 --> 02:09.690
which I'm passing in.

02:09.690 --> 02:19.710
And this query is the search query, uh, related to bias in LLM.

02:20.220 --> 02:20.550
Right.

02:20.550 --> 02:23.520
That is my search query that I'm passing in.

02:23.610 --> 02:38.100
And the return types are the returns that you're going to get is going to be a string containing the

02:38.100 --> 02:39.450
summary

02:41.400 --> 02:51.300
of the bias in the or maybe bias related findings from the query.

02:52.290 --> 02:52.620
Right.

02:52.650 --> 02:57.590
That is this thing that is going to be returned to me over here and now, because we need to do the

02:57.620 --> 03:02.870
summary and because the vector database doesn't do any summary, even if you try to invoke it.

03:02.870 --> 03:05.090
Because, see, this is the return type.

03:05.090 --> 03:10.460
And if you just go to the ragas over here, sorry, the agent with tool over here, you will notice

03:10.460 --> 03:14.840
that the tool really does retrieve and retrieve and invokes the query over there.

03:14.840 --> 03:17.900
But this is just going to retrieve the value for us over here.

03:17.900 --> 03:19.730
But it doesn't really do the summarization.

03:19.730 --> 03:25.790
So we need to do a bit of a summarization before I actually start using that particular stuff over there.

03:25.790 --> 03:27.470
So how do I actually do that?

03:27.470 --> 03:31.010
This is where things are going to be a bit trickier this time.

03:31.010 --> 03:35.270
So what I'm going to do is I'm going to add some retrieve documents, pretty much like how we did.

03:35.300 --> 03:37.010
So retrieve documents.

03:37.100 --> 03:41.630
So retriever um, oh, we did not add the retriever as well.

03:42.980 --> 03:43.820
Uh, sorry about that.

03:43.820 --> 03:44.900
We need to add the retriever.

03:44.900 --> 03:47.870
So we just missed adding the retriever part.

03:47.930 --> 03:50.600
So we need to add the retriever as well.

03:50.600 --> 03:59.350
So for doing that I'm going to go over here I'm going to add the markdown, I'm going to say a driver.

03:59.590 --> 04:03.880
I'm going to add the code block over here, which is going to be the retriever QA.

04:04.330 --> 04:07.420
Let me just one is fine this time and I'm going to run this.

04:07.420 --> 04:08.800
So that's going to give me the retriever.

04:08.800 --> 04:12.550
So I'm going to now use this retriever dot.

04:12.550 --> 04:19.420
And I'm going to invoke the retriever with the query that I'm passing in, which is this query that

04:19.420 --> 04:19.900
I'm passing in.

04:19.900 --> 04:21.760
So this is just going to give the retriever document.

04:21.790 --> 04:22.270
Right.

04:22.270 --> 04:26.950
But now with this retriever document we can't really do anything over here.

04:26.950 --> 04:32.500
We need to do the summarization of all the records which has been retrieved out from this retriever

04:32.530 --> 04:33.070
document.

04:33.070 --> 04:36.940
And then we need to summarize this entire things for me over here.

04:36.940 --> 04:42.430
That is why I think we need to have two retriever values over there so that it can combine all of them.

04:42.850 --> 04:46.540
So what I'm going to do is I'm going to write a context over here.

04:46.960 --> 04:51.130
I'm going to say, just combine me, all the retriever documents.

04:51.130 --> 04:54.040
So just join all the retriever retrieved documents for me.

04:54.310 --> 05:05.950
Uh, so I'm going to say doc dot uh, page underscore content, which is this one for doc in the uh,

05:05.950 --> 05:08.170
retrieved documents.

05:08.170 --> 05:09.430
Just this one.

05:11.170 --> 05:13.840
So I'm just going to have all the context for me over here.

05:13.840 --> 05:19.120
And now I can use this context which I am retrieving out from this guy.

05:19.870 --> 05:21.250
I have this context.

05:21.250 --> 05:27.310
And now I can just pass this particular context to an LM to do the summarization for me.

05:27.340 --> 05:31.660
See, this is where things are going to be interesting, because now the response that you are getting

05:31.660 --> 05:34.990
it from the vector stores are not always going to be smart enough.

05:34.990 --> 05:38.830
So we need to have an LM in place to do that summarization for us.

05:38.830 --> 05:41.680
So that's why I'm going to write another prompt here.

05:41.680 --> 05:46.450
And I'm going to say, uh, here, something like this.

05:46.480 --> 05:48.100
I don't know where this is coming from.

05:48.340 --> 05:58.500
Um, and over here I'm going to say in And this particular prompt that the following text discusses

05:58.530 --> 06:04.110
potential biases in llms.

06:04.860 --> 06:09.840
And that is this context which I'm going to pass in as an input variable.

06:10.140 --> 06:18.960
And I'm going to say please extract and summarize the bias related thing.

06:18.960 --> 06:23.910
So I'm going to just probably copy paste the code that I have already done.

06:27.780 --> 06:28.350
Right.

06:28.350 --> 06:31.680
So that is what I'm essentially telling over here.

06:31.680 --> 06:37.650
And with that in place, I can now use this particular prompt over here.

06:37.650 --> 06:43.230
And I'm going to say I want to get a response out from the LLM.

06:44.250 --> 06:49.020
And I'm going to invoke our prompt which is this prompt.

06:49.020 --> 06:56.180
So I'm going to get this response and I'm going to return the, uh, the response dot content which

06:56.180 --> 06:58.130
has been generated from this particular LM.

06:58.130 --> 06:58.970
Look at that.

06:59.000 --> 07:03.560
This is the tool like this is this is like a big gigantic tool that we have built.

07:03.560 --> 07:05.390
This is something which is very, very important.

07:05.390 --> 07:09.980
And the reason why this is important is because the vector data store doesn't really have any intelligence

07:09.980 --> 07:11.390
to get me the summarization.

07:11.390 --> 07:16.640
So because I have asked it to summarize my findings of the given statement, if there is, if there

07:16.640 --> 07:20.390
is any bias, then that needs to be done over here, right?

07:20.420 --> 07:22.790
So it is going to be stored over here.

07:22.790 --> 07:24.500
And then we're going to get all of this.

07:24.500 --> 07:29.990
And now with all these changes in place, if I try to run this, you see that the tool is being fully

07:29.990 --> 07:30.560
built.

07:30.560 --> 07:35.630
And once this is fully built, the final operation is we need to build our link chain agent and then

07:35.630 --> 07:36.710
get the response out.

07:36.710 --> 07:43.370
And then we need to create a data set, like how we did in our last lecture where we were creating this

07:43.370 --> 07:44.540
data set, something like this.

07:44.540 --> 07:49.100
So this is something we need to build as well, which we'll be doing in our next lecture.


========================================================================================

WEBVTT

00:00.080 --> 00:00.650
All right.

00:00.650 --> 00:07.400
So now we are going to see how we can actually start invoking our LM agent over here.

00:07.400 --> 00:16.970
So I'm going to say uh, invoking, uh, LM agents, uh, the AI agents that we have already built.

00:16.970 --> 00:22.610
So the agent is nothing but our GUI that we have already discussed, uh, over here, this particular

00:22.610 --> 00:23.030
agent.

00:23.060 --> 00:25.160
So this is the agent that we need to invoke.

00:25.430 --> 00:28.760
Uh, so I'm going to probably just copy this entire thing.

00:29.120 --> 00:29.480
Look at that.

00:29.480 --> 00:31.910
Just copy pasting again and paste it over here.

00:31.910 --> 00:33.380
So we need the tools.

00:33.410 --> 00:37.190
We don't have the tools binding yet because this is the tool that we created in our last lecture.

00:37.220 --> 00:38.780
We need to import that as well.

00:38.780 --> 00:40.070
So let's do that.

00:40.100 --> 00:40.640
Oops.

00:41.630 --> 00:44.840
Uh over here I'm going to say our tools.

00:44.840 --> 00:47.060
It's actually a tool not even a tool.

00:47.060 --> 00:52.730
So I'm just going to say um, the only one tool which we have got is the bias detection tool.

00:52.730 --> 00:56.330
And I'm going to pass this particular tool over here, that's all.

00:56.330 --> 00:57.770
This is the only tool that we have got.

00:57.800 --> 01:05.050
I'm going to keep everything as it is, and I'm not going to run the extract and the page and check

01:05.080 --> 01:06.130
if there's a bias in the article.

01:06.160 --> 01:07.330
No, no, no, we're not going to do that.

01:07.360 --> 01:10.750
We're not going to check using playwright for doing that operation.

01:10.750 --> 01:13.930
So I'm just going to leave that guy as it is over here.

01:13.930 --> 01:19.540
I don't even need to run the agent this time as well, because that is not over here required.

01:19.540 --> 01:21.940
I just want to create an agent over here.

01:21.970 --> 01:25.090
I want to set the LM, uh, which is fine.

01:25.240 --> 01:26.170
Okay.

01:26.800 --> 01:31.090
But there is one change which I wanted to actually make is the LM over here.

01:31.120 --> 01:33.910
See, because I'm using the LM for a bias detection.

01:33.910 --> 01:37.600
The tool is also using an LM, which is the same LM that we have got.

01:37.600 --> 01:43.180
And there is another LM which is also the same LM for the agent operation.

01:43.180 --> 01:48.100
So two things which is going to be performed for the tool as well as for the agent is going to be the

01:48.100 --> 01:48.340
same.

01:48.520 --> 01:49.420
I'm just going to perform.

01:49.420 --> 01:52.330
And my local LM, I don't think it's going to handle that pretty well.

01:52.330 --> 01:58.890
So instead of doing that, I'm just thinking, what if I use the OpenAI's LM this time for the operation.

01:58.890 --> 02:01.740
I like how we did over here, which was pretty responsive.

02:01.740 --> 02:07.980
So I'm going to use a chat OpenAI LLM this time, which is this one.

02:08.280 --> 02:15.030
And over here we just used the chat OpenAI LLM model.

02:15.030 --> 02:23.070
So I'm just going to probably use that instead of the llms that we have got over there.

02:23.070 --> 02:25.920
So I'm just going to say chat OpenAI.

02:26.010 --> 02:35.940
So LLM two is equal to chat OpenAI LLM which is this one I'm going to pass this LLM to over here.

02:35.970 --> 02:43.380
I think that should be way better as well in order to save some money for the GPT four model is a bit

02:43.380 --> 02:43.800
costly.

02:43.800 --> 02:54.420
So I'm just thinking I'm going to go to the, uh, OpenAI API over here, go to the API platform, uh,

02:54.420 --> 02:59.840
API login, I think I already have logged in there and I'm going to choose the models.

02:59.840 --> 03:06.380
If I go to the pricing over here, you can see that the GPT four is a bit more costly $2.5 if I use

03:06.380 --> 03:10.850
the GPT four mini, probably this is way cheaper, as you can see over here.

03:10.850 --> 03:14.240
So for our operation, GPT four or mini is far enough.

03:14.240 --> 03:17.030
So I'm going to go choose that particular model.

03:17.090 --> 03:20.180
I'm going to paste it over here, which is great.

03:20.180 --> 03:26.420
And now I'm going to run this particular agent with a LM two model over here.

03:26.420 --> 03:29.870
I think that should be fine for the agent operation, which I'm going to be doing.

03:29.900 --> 03:30.800
Amazing.

03:30.800 --> 03:33.320
So this agent is already done over here.

03:33.320 --> 03:39.740
The final operation, which we need to do is to create the the entire data set.

03:39.740 --> 03:47.090
With all these operations, you remember the data set, which needs to be in the structure of what the

03:47.090 --> 03:53.870
ragas can actually handle, which is this kind of data set that we created in our last lecture for all

03:53.870 --> 03:54.410
the documents.

03:54.410 --> 03:57.170
And the question, we'll be doing that in our next lecture.


========================================================================================

WEBVTT

00:00.380 --> 00:01.310
All right.

00:01.310 --> 00:06.050
The last thing that we have to do is to create, like a data set, like how we have got over here.

00:06.050 --> 00:08.840
So how do we actually do that in this particular area.

00:08.840 --> 00:13.070
So I'm going to just say creating data set.

00:13.580 --> 00:15.170
Uh I hit okay.

00:15.170 --> 00:17.510
And here is where we're going to create the data set.

00:17.510 --> 00:18.680
So for data set creation.

00:18.680 --> 00:22.100
So I'm just going to say data set is equal to an array.

00:22.610 --> 00:24.620
And I'm going to start writing the code.

00:24.620 --> 00:32.270
So I'm going to say for query and reference in zip and the query over here we know that in the data

00:32.300 --> 00:34.970
frame we saw that it was a query.

00:34.970 --> 00:37.640
And the reference is going to be DF.

00:37.670 --> 00:39.380
And the reference was actually answer.

00:39.410 --> 00:39.680
Right.

00:39.680 --> 00:45.290
So these are the two things that we saw in our uh actual data frame.

00:45.650 --> 00:55.760
And over here I'm going to add the relevant uh, data or docs, which is going to be retriever dot invoke.

00:56.090 --> 01:02.780
I'm just going to say query of maybe just um, the first one was actually a query.

01:02.780 --> 01:05.510
And then I'm going to get the page underscore content.

01:05.690 --> 01:14.450
And then I'm going to get the response which is equal to the, uh, the agent that we have got, uh,

01:14.450 --> 01:15.440
over here.

01:15.470 --> 01:15.980
Right.

01:15.980 --> 01:22.520
So I'm going to call the agent and I'm going to add a run, and I'm going to pass the query over here.

01:22.520 --> 01:24.080
That's going to be the response coming up.

01:24.080 --> 01:26.120
Finally, we need to start creating the data set.

01:26.120 --> 01:30.800
Because now we have all the bells and whistles which is required for creating me the data set over the

01:30.800 --> 01:31.070
years.

01:31.100 --> 01:31.310
Okay.

01:31.340 --> 01:32.390
What are the things that we need.

01:32.420 --> 01:33.890
The first one is the user input.

01:33.890 --> 01:37.880
If you remember, that was something that we were adding over there like user input, retrieval, context

01:37.910 --> 01:38.600
and everything.

01:38.630 --> 01:39.890
Let me just copy that.

01:40.280 --> 01:43.430
Uh, for saving some keystrokes, uh, over here.

01:43.490 --> 01:48.560
And the question is nothing but our query that we are going to get from the CSV file.

01:48.560 --> 01:52.850
And this is sitting in the data frame, and the retrieval context is going to be the relevant docs.

01:53.000 --> 01:54.890
Our response is obviously going to be the response.

01:54.890 --> 01:59.510
And the reference is nothing but uh, the reference that we have got over here.

01:59.510 --> 02:00.950
So I'm going to say reference.

02:00.950 --> 02:01.760
Cool.

02:02.240 --> 02:05.840
Now I'm going to see what happens to our data set.

02:05.870 --> 02:06.650
Look at that.

02:06.650 --> 02:08.450
This is where things are going to happen.

02:08.480 --> 02:13.070
Like now when I run this guy it is going to invoke our vector data store.

02:13.070 --> 02:19.190
And the agent is then going to invoke our tool which is the bias detection tool.

02:19.190 --> 02:20.640
And then it's going to run that.

02:20.640 --> 02:23.820
And the bias detection tool actually has got an LM invoke.

02:23.820 --> 02:26.160
And this is nothing but our local LM.

02:26.160 --> 02:28.950
So it's going to be invoking and creating the Summarisation for me.

02:28.950 --> 02:35.730
At the same time, the agent is going to also do the verification of the response.

02:35.760 --> 02:38.880
And then it is going to store that particular value over here.

02:38.880 --> 02:42.540
So now let's try to run this code and see what is really going to happen.

02:42.540 --> 02:48.990
So the moment I try to run this particular code, you will see that the agent executor chain is executing

02:49.350 --> 02:53.190
and it is going to run all of these over here.

02:53.190 --> 02:53.610
Look at that.

02:53.610 --> 02:54.750
That's the final answer.

02:54.750 --> 03:00.540
And then it just keep on doing all these things for us over here and see that all the questions are

03:00.540 --> 03:02.040
being passed one by one.

03:02.040 --> 03:07.800
And the, uh, the operations are happening for us over there, which is pretty cool.

03:07.800 --> 03:10.830
So we see that everything is happening.

03:11.190 --> 03:17.970
Uh, and you are also going to get the responses in the text editor if you just go and see that.

03:18.000 --> 03:18.450
Look at that.

03:18.600 --> 03:20.820
All the chains of thoughts are really happening there.

03:20.880 --> 03:25.110
And it's creating the data for the entirety for us over there.

03:25.110 --> 03:27.750
I think it is still running over here.

03:27.780 --> 03:30.260
Like you see that it is 47 seconds.

03:30.260 --> 03:38.840
So if I just go to our Safari browser and let's see our long chain over here, we should see that this

03:38.840 --> 03:40.580
guy is still running the agent executor.

03:40.580 --> 03:41.150
And it is.

03:41.150 --> 03:46.340
Keep on calling the bias detection and it is running things for us over here.

03:46.340 --> 03:48.860
So it is going to take a bit of a time I'm sure.

03:48.950 --> 03:52.100
Last time it took me so much time to complete the entire operation.

03:52.100 --> 03:55.130
So let this every entire operation to complete.

03:55.160 --> 03:55.670
Ah, there we go.

03:55.670 --> 03:56.240
It's done.

03:56.240 --> 03:58.460
And you can see that we have got the response.

03:58.460 --> 04:01.760
So user input retrieved context response and reference.

04:02.000 --> 04:04.820
And these are all been stored over here.

04:04.850 --> 04:05.600
That's all.

04:05.600 --> 04:08.420
So this is how we create the data set.

04:08.600 --> 04:15.230
Like how we can um how we did in our last lecture, last section where we're creating the data set over

04:15.230 --> 04:20.390
here, the last operation, we know that we just have to run the ragas evaluation.

04:20.420 --> 04:25.670
And also this guy which is going to evaluate and give us the result.

04:25.670 --> 04:26.840
So I'm going to do this.

04:26.840 --> 04:30.170
And this time I'm just going to copy paste the entire code and see how that works.

04:30.170 --> 04:34.220
If you have time just try to work it out yourself until this point of time.

04:34.220 --> 04:35.120
If you already did it.

04:35.120 --> 04:38.060
If not, we're going to do that anyways in our next lecture.

04:38.090 --> 04:40.100
So catch you in our next lecture.


========================================================================================

WEBVTT

00:00.020 --> 00:00.350
All right.

00:00.350 --> 00:11.030
So now that I'm going to do the, uh, the evaluation and testing, so evaluation of a data set with

00:11.030 --> 00:17.270
ragas and make sure that we have got all these bells and whistles ready this time.

00:17.270 --> 00:21.230
So in order for the testing we just have to run this guy over here.

00:21.230 --> 00:25.640
So I'm going to go put the code block and I'm going to run this up over here.

00:25.670 --> 00:29.000
Oops we got an error here I think what's really going on.

00:29.000 --> 00:35.240
So it looks like the input should be a valid result of type list type without considering the input

00:35.240 --> 00:35.870
value.

00:35.930 --> 00:37.490
Ah look at that.

00:37.640 --> 00:40.940
I think we have missed one of the important part while doing copy pasting.

00:40.940 --> 00:42.950
So this guy the retrieval context.

00:42.950 --> 00:46.010
The relevant document should be of a type of an array.

00:46.010 --> 00:48.080
But what we're getting is not an array type.

00:48.080 --> 00:52.310
But it is like like a full, uh, full blown string type.

00:52.310 --> 00:54.860
So we need to make it like an array type over there.

00:54.860 --> 00:59.780
So that's the reason why I guess this is just getting us the particular response over there.

00:59.780 --> 01:02.510
Like it's just failing to have the particular value.

01:02.540 --> 01:08.910
There are two way to resolve this instead of you just giving zero of the page content, you can probably

01:08.910 --> 01:12.690
just remove this entirety over here and you can just invoke.

01:12.720 --> 01:19.110
I think this retrieval is anyways going to give you a vector store with an array for that matter.

01:19.110 --> 01:21.450
So let's see what is going to happen this time.

01:22.590 --> 01:26.550
And then we need to pass a particular relevant documents over here.

01:26.550 --> 01:29.400
So let's see what is going to happen this time.

01:29.400 --> 01:31.710
I know it's going to take a bit of a time again.

01:36.930 --> 01:37.410
All right.

01:37.410 --> 01:38.850
We got our response over here.

01:38.850 --> 01:43.410
So let's try to use this particular record uh over here for the evaluation.

01:43.410 --> 01:44.940
And you see that even this is going to fail.

01:44.940 --> 01:48.750
I just wanted to make a point here to show you, like, why this is going to fail.

01:48.780 --> 01:49.440
Look at that.

01:49.440 --> 01:55.980
The the actual retrieval context had got a document structure, but not the structure that we can actually

01:55.980 --> 01:56.370
use.

01:56.370 --> 02:00.030
So we actually need the page content, not the document structure itself.

02:00.030 --> 02:00.510
Right.

02:00.510 --> 02:09.040
So we need to somehow get the page content out from that particular document Structure that we have

02:09.070 --> 02:09.490
got.

02:09.520 --> 02:14.470
Only then we can actually use it to retrieve things for us over there.

02:14.470 --> 02:17.740
So how do we actually, uh, make that happen?

02:17.950 --> 02:22.900
Uh, is we can just go over here in this particular context.

02:22.930 --> 02:29.170
See, we have got the, uh, retrieved, uh, context over here, like, we invoke it.

02:29.200 --> 02:29.410
Right?

02:29.440 --> 02:38.770
So what we can do probably, uh, is we can just put this guy, uh, and we also written a if you remember

02:39.340 --> 02:46.990
the code for the joining of the context, I can just take this joining of the code context over here,

02:46.990 --> 02:49.990
which is going to be the relevant docs.

02:50.140 --> 02:54.250
This is going to join the entire thing in the context for us over here.

02:54.250 --> 03:00.160
And now we can pass this context, but in an array type something like this.

03:00.160 --> 03:04.150
So this way it is going to make things more easier.

03:04.210 --> 03:06.370
So now this thing is quite right.

03:06.370 --> 03:13.630
So this is what is being expected from the ragas for the retrieved context, even in our earlier section

03:13.630 --> 03:18.010
of this course, we tried to create the data structure with a relevant document in the same fashion

03:18.010 --> 03:19.090
as you can see over here.

03:19.090 --> 03:23.680
So I'm going to do the exact same thing in this fashion as well.

03:23.680 --> 03:27.460
And now if I try to run this data set look at that.

03:27.490 --> 03:31.330
It is going to start running things for me, uh, over here.

03:31.330 --> 03:35.920
And then it's going to store the context by joining every single details.

03:35.920 --> 03:38.260
And then it is going to pass it as an array.

03:41.860 --> 03:42.700
All right.

03:42.700 --> 03:45.220
So now look at that retrieve context is an array type.

03:45.220 --> 03:47.230
And it has got all the values you're looking for.

03:47.230 --> 03:51.250
And it's also joined together is one gigantic text.

03:51.250 --> 03:53.800
As you can see over here I think this is pretty cool.

03:53.800 --> 03:56.410
So now we have got everything.

03:56.410 --> 04:00.850
So if I try to run the evaluate data set, you can see that it is just going to work fine.

04:00.850 --> 04:02.680
So this is this is pretty cool.

04:02.680 --> 04:08.080
So now this is the only change that we have to do over here uh to make this happen.

04:08.080 --> 04:10.360
So the data set is all ready.

04:10.360 --> 04:14.650
The final operation is to execute the code and see how it actually works.

04:14.650 --> 04:16.480
We're talking about that in our next lecture.


========================================================================================


WEBVTT

00:00.110 --> 00:06.080
I guess we have reached the final part of the ragas execution, which is the, uh, we have created

00:06.080 --> 00:08.840
the Multi-shot sample data set for ragas, which is great.

00:08.870 --> 00:10.460
We did the evaluation.

00:10.460 --> 00:14.420
The last one is to run this code and see how the result is going to come up.

00:14.420 --> 00:14.900
There we go.

00:14.930 --> 00:16.400
That is insane.

00:16.400 --> 00:17.840
We want to do that over here.

00:17.840 --> 00:19.880
So let's go do that.

00:19.970 --> 00:23.870
And I'm going to leave everything as it is because there is an evaluation data set.

00:23.870 --> 00:24.020
There.

00:24.020 --> 00:25.940
Is this all this context that we're going to verify.

00:25.940 --> 00:27.620
We have got all the metrics.

00:27.830 --> 00:32.060
And the model we're going to use is not uh, maybe GPT four is fine this time.

00:32.090 --> 00:37.520
I'm just going to use it over here, and we are going to see how the executions are going to happen.

00:37.520 --> 00:41.900
So it's just a lame copy paste that I have did over here.

00:42.080 --> 00:50.540
But the good thing is we are running it on the GPT four model, so things may be way faster than running

00:50.540 --> 00:51.410
it in my local machine.

00:51.440 --> 00:51.830
Look at that.

00:51.830 --> 00:54.860
It's already 42 percentage 58 percentage.

00:59.120 --> 01:01.040
And we got 100 percentage over here.

01:01.070 --> 01:01.730
Look at that.

01:01.730 --> 01:07.370
You can see that the amount of the result that we are getting out from this particular context.

01:07.400 --> 01:11.000
It's not quite great, like it's not as expected.

01:11.000 --> 01:16.580
The reason why is because the questions that I have asked is also not quite to the mark, like there's

01:16.580 --> 01:17.990
only five questions that I have asked.

01:17.990 --> 01:24.410
And also they are not quite exactly the same with that particular context, because you see that I'm

01:24.410 --> 01:31.160
asking the questions based on the the learnings that LM has did and stored into the vector data stores.

01:31.310 --> 01:36.200
We're using, just like few paragraphs of the text on the bias.

01:36.200 --> 01:40.970
So if you ask any questions on the potential bias for these kind of questions, the response that you're

01:40.970 --> 01:43.790
going to get is far lesser, which is quite expected.

01:43.790 --> 01:49.190
But the one thing which we can see is still it is a bit more relevant in terms of the factual correctness

01:49.190 --> 01:50.360
and answer relevance.

01:50.360 --> 01:54.470
As you can see here, they are they are pretty close to that particular value.

01:54.470 --> 02:00.290
So now if I try to see the results in in pandas over here.

02:00.710 --> 02:07.010
So you will notice the how the response is going to come through, we can see that this is the this

02:07.010 --> 02:09.590
is the thing that we are actually failing over there.

02:09.590 --> 02:11.960
I know this is a lot of data going on there guys.

02:11.990 --> 02:15.650
And but but still you can see that the response is not that bad.

02:15.680 --> 02:20.540
To be honest, I could see the relevance is is making me more promising this time.

02:20.540 --> 02:21.770
Just accept one.

02:21.800 --> 02:23.510
It is like zero completely.

02:23.510 --> 02:24.740
So it is completely failed.

02:24.740 --> 02:28.490
But the other things are not bad at all to be honest.

02:28.610 --> 02:34.460
Uh, but faithfulness has abruptly failure failed in all of them except one of them.

02:34.700 --> 02:40.520
So now let's go to the, uh, link chain over here for the ragas evaluation.

02:40.970 --> 02:44.210
You'll notice that we have used 60 000 tokens this time.

02:44.510 --> 02:47.630
Uh, and the time it took is like 43 seconds.

02:47.630 --> 02:50.180
And this is using GPT four zero model.

02:50.180 --> 02:51.320
And look at that.

02:51.350 --> 02:58.340
How many time it has really called the prompt behind the scene for every single execution to make sure

02:58.340 --> 03:01.580
that our executions are working as expected.

03:02.000 --> 03:03.170
This is pretty cool.

03:03.170 --> 03:07.820
So this is this is going way beyond our, uh, our thing.

03:07.820 --> 03:11.570
So like, first time it has got failed and second time and third time, see how many times it has got

03:11.570 --> 03:12.110
failed.

03:12.110 --> 03:19.560
And the agent keep retrying, retrying, retrying with the the operation Uh, until the chat, uh,

03:19.560 --> 03:23.730
OpenAI gave us a result, and we got an output over here.

03:23.760 --> 03:24.420
Look at that.

03:24.450 --> 03:26.460
Like this is the JSON value.

03:26.490 --> 03:28.830
We can now fine tune this even further.

03:28.830 --> 03:30.120
Like this is a statement.

03:30.120 --> 03:34.950
There is a reason, uh, and it's not giving us the verdict correctly.

03:34.950 --> 03:40.200
But if we try to fine tune our tool a bit and the way we write the prompt, these things can be even

03:40.200 --> 03:41.040
more better as well.

03:41.040 --> 03:48.330
But still, what we have achieved here is pretty close to how realistically you can test your rag as

03:48.330 --> 03:49.530
well as your agent.

03:49.620 --> 03:50.730
This is pretty cool guys.

03:50.730 --> 03:58.050
So this is how we can see that we could able to test our rag as well as an agent in much easier fashion

03:58.050 --> 03:59.850
using ragas.

04:00.750 --> 04:05.310
So this ends the complete advanced section of how you can test your agents and ragas.

04:05.310 --> 04:10.590
And we have been discussing about the testing of the ragas quite a bit, and I'm sure this is going

04:10.620 --> 04:17.700
to give you an idea of how you can test your large language model, application for agents for rags,

04:17.700 --> 04:21.870
and also how you can take this further in your job.

04:21.900 --> 04:24.330
Congratulations and you guys have a great day.


========================================================================================




