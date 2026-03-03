WEBVTT

00:00.140 --> 00:02.030
Welcome to the next section of our course.

00:02.030 --> 00:09.680
And in this section we are going to talk about bit more complex option of testing our systems using

00:09.710 --> 00:10.250
ragas.

00:10.250 --> 00:16.670
So we are going to be testing our Raag based system using a ragas over here.

00:16.670 --> 00:23.930
So if you remember in our last sections of our course, we talked about the uh Raag system, like how

00:23.930 --> 00:31.400
we built a RAC by reading the data from the PDF file and how we extracted those data and stored into

00:31.430 --> 00:36.350
a vector database, uh, in the Croma database, these things.

00:36.350 --> 00:37.790
And we also retrieved the data.

00:37.820 --> 00:46.370
Now, our idea is to test this Rag system in such a way that we can, uh, we can actually verify if

00:46.370 --> 00:55.850
our, uh, agent is going to get the correct data from this particular database, which is being extracted.

00:55.850 --> 01:05.380
And the way that we can evaluate this particular Rag system essentially, is to Uh, have a test set

01:05.380 --> 01:12.370
of data which we are going to be injecting and verifying if the response that we're looking for is absolutely

01:12.370 --> 01:17.710
correct or not, but for doing that, definitely with the human intervention, if you do it, it's going

01:17.740 --> 01:23.020
to take a lot of time because you need to create quite a lot of big data set for doing that, but instead

01:23.020 --> 01:32.020
you can actually create a sample data set and then try to evaluate using the large language model as

01:32.020 --> 01:33.160
an evaluator.

01:33.160 --> 01:34.750
So you can do that as well.

01:34.750 --> 01:37.000
That is going to make your life even more simpler.

01:37.000 --> 01:43.090
That is what the non-traditional testing we were talking about in our last section of this course.

01:43.090 --> 01:49.060
So we're going to be using the non-traditional testing approach, where the LMS being the evaluator,

01:49.060 --> 01:51.580
because it will have all the context of what to verify.

01:51.580 --> 01:58.720
And you will have the vector database is going to give you the details, which gives the detail to the

01:58.720 --> 01:59.230
LMS.

01:59.230 --> 02:03.010
And you also will have an expected outcome that you are looking for.

02:03.010 --> 02:10.550
And then you can evaluate all of these together Within your, uh, within your ragas over here.

02:10.550 --> 02:12.680
So you'll notice that in here.

02:12.800 --> 02:17.810
Um, so you have got a prompt that has been sent over here and this particular prompt data that you're

02:17.810 --> 02:20.900
going to have or nothing but your test data.

02:20.900 --> 02:33.860
So here is where all your test data, uh, with uh, expected and actual, uh, prompt, uh, request

02:34.640 --> 02:37.370
and response are going to be sitting.

02:37.370 --> 02:44.300
So let me make this as uh, medium, very large so that you can see a bit more clearly.

02:44.300 --> 02:46.910
So that is what we are going to be doing over here as a prompt.

02:46.910 --> 02:52.670
And then we're going to be sending to um, uh, sending not to the, to the model directly, but we

02:52.700 --> 02:59.330
are going to be sending it to the, uh, to the evaluator so that we can verify whether we have got

02:59.330 --> 03:05.750
the context, recall faithfulness and factual correctness of the responses that we are looking for.

03:05.750 --> 03:08.630
So that is the whole idea over here.

03:08.630 --> 03:15.920
So in order for us to perform this testing operation, we do require our earlier sections knowledge.

03:15.920 --> 03:23.270
We are going to be using the chroma database, which is going to store the data, uh, or the documents.

03:23.270 --> 03:24.980
And we're going to be using embedding.

03:24.980 --> 03:29.690
And again, the embedding is going to be from our embedding that we were doing before.

03:29.690 --> 03:31.670
So I'm going to be using that particular embedding.

03:31.790 --> 03:33.590
And we need to retrieve the data.

03:33.770 --> 03:41.810
And then finally we need to pass that particular uh chain uh to run it and see what it's going to be,

03:41.810 --> 03:42.770
the response and things.

03:42.770 --> 03:45.200
So those things we are going to be doing it over here.

03:45.200 --> 03:51.290
So in order to achieve these operation, um, make sure that you are not directly jumping into this

03:51.290 --> 03:52.130
particular section.

03:52.130 --> 03:57.290
If you are very keen on learning about testing and you are ending up into this particular section,

03:57.290 --> 04:01.100
you can't really understand unless until you have watched my earlier sections of this course.

04:01.100 --> 04:05.600
So please go and watch there before we start doing the testing operation itself over here.

04:05.600 --> 04:07.610
So that is the whole idea of this particular section.

04:07.610 --> 04:13.940
We are going to see how we can make use of our existing knowledge to test our Rag system using ragas.

========================================================================================

WEBVTT

00:00.080 --> 00:05.240
So now we are going to start testing the rack based system that we have got over here using our Visual

00:05.240 --> 00:06.140
Studio Code.

00:06.140 --> 00:10.520
But in order to start doing that using ragas, the first thing which we need to do over here is we need

00:10.520 --> 00:17.330
to have a document store, which is going to have all the documents, like a PDF file, which can be

00:17.330 --> 00:20.270
storing the information on a vector database.

00:20.270 --> 00:23.810
And then we need to retrieve the database data from here.

00:23.810 --> 00:27.410
And we also need embedding while we store the data into the vector database.

00:27.410 --> 00:31.790
You remember all these details we already discussed in our earlier sections of this course.

00:31.790 --> 00:38.540
So please make sure that you have already gone through the section which is going to be, I guess this

00:38.540 --> 00:44.630
one, like building the rag with the documents over here where we discussed how we we do all those things

00:44.630 --> 00:45.140
over there.

00:45.140 --> 00:50.780
So that is the foundation of what we are going to be doing in this particular section as well.

00:50.810 --> 00:51.620
But guess what?

00:51.620 --> 00:56.750
This time, just for simplicity, like additional simplicity purpose, I'm not going to use any external

00:56.750 --> 01:03.720
PDF file, which is something that I need to extract and things just to get a sense that the Rag system

01:03.720 --> 01:05.190
can be tested using ragas.

01:05.190 --> 01:12.090
Using the evaluation, I am going to be creating a doc just like a structure of the document with the

01:12.090 --> 01:12.930
page contents.

01:12.930 --> 01:20.100
And then I'm also going to create some reference questions and stuff, and then we can just use that

01:20.100 --> 01:23.010
particular doc over here for evaluating.

01:23.010 --> 01:26.010
So that is what is the whole idea in this particular lectures.

01:26.010 --> 01:26.820
And couple of them.

01:26.820 --> 01:32.040
And then following that we're also going to test our own rag that we have built with this particular

01:32.100 --> 01:35.100
chroma lang DB that we have got over here.

01:35.130 --> 01:36.600
We're going to test this as well.

01:36.600 --> 01:41.070
So it is going to be interesting to see how our evaluation really works.

01:41.070 --> 01:43.170
So we are going to create all those things over here.

01:43.170 --> 01:48.210
So we'll just go step by step so that you can have a clear understanding of how we are going to be testing

01:48.210 --> 01:50.010
all of these using ragas.

01:50.010 --> 01:57.180
So I have also created a simple notebook file over here for our testing in this particular lecture.

01:57.180 --> 02:00.600
So testing a rag based system with the LLM being an evaluator.

02:00.600 --> 02:05.050
So I have added this file, this line of code which is required, as you know already.

02:05.050 --> 02:09.640
And now I'm gonna add a few more details over here.

02:09.640 --> 02:17.170
So basically I'm going to be using, as I told you, the chroma DB and the Allama embedding, which

02:17.170 --> 02:24.670
we were using earlier in our other sections for the embedding as well as for the vector store.

02:24.670 --> 02:26.440
So I'm going to do the exact same thing over here.

02:26.440 --> 02:30.640
So let me just copy this code from here and let's do this.

02:30.640 --> 02:35.650
I'm going to put a probably markdown over here.

02:35.650 --> 02:38.800
And I'm going to say embedding.

02:39.130 --> 02:45.100
And this embedding is going to be these lines of code.

02:45.100 --> 02:48.670
And I'm going to use the same Allama 3.2 latest model.

02:48.700 --> 02:50.410
Let me open the Allama.

02:51.940 --> 02:54.280
And now let's try to run this.

02:54.310 --> 02:54.820
All right.

02:54.850 --> 02:56.050
So embedding is done.

02:56.290 --> 03:01.450
And now I'm also going to create the vector stores over here.

03:01.450 --> 03:05.980
but the vector stores, I don't really have to create, like how I have created over here, because

03:05.980 --> 03:11.680
I'm going to be creating the vector stores in such a way that I'm just going to need this chroma import.

03:11.680 --> 03:15.790
But the document I'm going to create the entire document structure this time.

03:15.790 --> 03:17.860
That is the idea over here.

03:17.860 --> 03:22.660
So I'm going to probably import in the same line over here.

03:22.690 --> 03:23.380
There we go.

03:23.650 --> 03:28.000
And here I'm going to create the the document structure as I was telling.

03:28.000 --> 03:34.390
So what is the data and document structure like I'm going to do is I'm going to say from Lang chain

03:34.780 --> 03:37.330
of doc store.

03:37.330 --> 03:42.280
And I'm going to create the document and I'm going to import the documents over here.

03:42.310 --> 03:42.880
Right.

03:43.570 --> 03:46.840
And then I'm going to create a docs.

03:47.200 --> 03:50.260
So you will notice that this is an array of document that I'm creating.

03:50.260 --> 03:54.640
So basically this is a multi shot sample test that we are going to be doing in ragas.

03:54.670 --> 03:57.160
That's the reason why I wanted to create this over here.

03:57.160 --> 04:03.660
And I'm going to create the document with um with It's probably a page content.

04:05.790 --> 04:08.370
And the page content is equal to.

04:08.400 --> 04:13.560
I'm going to write a series of content here, like playwright is a modern web automation testing tool

04:13.560 --> 04:16.470
and selenium is widely used, something like that.

04:16.470 --> 04:22.320
So I wanted to create a sample details which is going to look something like this.

04:22.350 --> 04:24.900
I don't want to write that, so I'm just going to copy paste it.

04:24.900 --> 04:29.460
So you see that the playwright is a modern automation library for end to end testing.

04:29.460 --> 04:32.310
It supports multiple browsers like Chrome, Firefox and WebKit.

04:32.340 --> 04:33.570
This is one of the document.

04:33.600 --> 04:38.550
Similarly, selenium is widely used open source framework for web automation, supporting multiple programming

04:38.550 --> 04:39.660
languages and browsers.

04:39.660 --> 04:42.240
So I'm adding all the tool details over here.

04:42.240 --> 04:46.830
I'm also saying some more details like playwright allows network interception, headless execution and

04:46.830 --> 04:51.960
tracing for debugging, complex web applications and all those features I'm just adding over here.

04:51.960 --> 04:52.980
So these are the documents.

04:53.010 --> 04:55.320
I mean, you can keep on adding any number of document.

04:55.320 --> 05:00.900
But just for this simple ragas evaluation testing I want to keep things simple over here.

05:00.930 --> 05:01.170
Right.

05:01.200 --> 05:06.030
These are the documents that I have got, and you see that the document structure is pretty much the

05:06.030 --> 05:11.070
same structure, like how we do with the vector stores which stores the document.

05:11.070 --> 05:12.750
That's the whole idea over here.

05:12.750 --> 05:15.300
And I want to create some questions here.

05:15.300 --> 05:20.970
So this is the question that we are going to ask to infer uh, during the evaluation purpose.

05:21.000 --> 05:22.110
Look at that already.

05:22.110 --> 05:23.070
This I is writing.

05:23.070 --> 05:29.280
And the questions I have also prepared, which I'm going to be pasting it over here so you can see that.

05:29.280 --> 05:33.060
So what is the playwright what is playwright and what browsers does it supports.

05:33.060 --> 05:39.000
So mainly I'm expecting the response from the vector stores will be like playwright is a modern automation

05:39.000 --> 05:40.830
library for automation testing.

05:40.950 --> 05:43.770
Uh, multiple browsers like Chrome, Firefox and WebKit.

05:43.770 --> 05:45.540
That is the knowledge that it has got.

05:45.540 --> 05:49.290
So it should give me when I ask what is the playwright and what browser does it support?

05:49.320 --> 05:54.180
It should give me the the details like it supports Chrome, Firefox and WebKit.

05:54.180 --> 05:58.920
So similarly, if I ask the selenium question over here, it should give me this answer.

05:58.920 --> 06:00.210
As you can see over here.

06:00.720 --> 06:03.010
So it's pretty much like a 1 to 1 match that I have added.

06:03.010 --> 06:08.740
But you can add any number of questions over here, maybe like a follow up questions, and maybe based

06:08.740 --> 06:12.100
on the number of datas that you have got, these things will change.

06:12.190 --> 06:17.350
But you'll notice that there are 12345671234567.

06:17.350 --> 06:22.690
So totally, exactly one on one match that I have made for documents as well as with the questions,

06:22.690 --> 06:25.960
so that it always matches as expected.

06:25.960 --> 06:33.160
And we we will see if the the response coming up from this particular vector store is actually matching

06:33.250 --> 06:34.930
with both of them or not.

06:35.050 --> 06:41.800
And the similarities that we are going to match is exactly evaluated using the ragas.

06:41.860 --> 06:42.430
All right.

06:42.430 --> 06:45.490
So this is the document that I have created over here.

06:45.490 --> 06:48.730
And the next one is the vector store that I wanted to create.

06:48.730 --> 06:52.750
So in order for me to create the vector stores it's also very, very simple.

06:52.780 --> 06:56.470
I'm going to say vector stores is equal to.

06:56.500 --> 06:58.810
And I'm going to call our Croma database.

06:58.810 --> 07:00.970
And I'm going to import from documents.

07:00.970 --> 07:06.350
This time Uh, I'm just going to say docs, which we already have over here, this array.

07:06.350 --> 07:11.120
And I'm going to pass the embedding, which is the embedding that I have created over here.

07:11.120 --> 07:14.030
So this is going to create the vector stores for us.

07:14.030 --> 07:14.900
That's all.

07:14.900 --> 07:18.170
So hope you got the idea like what we are trying to do over here.

07:18.170 --> 07:21.470
So this is the prerequisite setup that I wanted to make.

07:21.530 --> 07:27.110
Uh, pretty much like the rack system that we have built already, this kind of setup.

07:27.140 --> 07:30.440
Right now, we need to do a few more things.

07:30.440 --> 07:32.090
We need to add the retriever.

07:32.360 --> 07:40.820
And we also need to check, um, with the retrieval, uh, QA for that matter, to see how we can retrieve

07:40.820 --> 07:41.300
the data.

07:41.330 --> 07:50.600
If you remember, we tried doing that as well, uh, in our last section using the retrieval QA and

07:50.600 --> 07:52.580
to retrieve the document, this one.

07:52.580 --> 07:54.650
So we are going to do this one as well.

07:54.650 --> 07:59.990
Uh, this time, instead of writing our own manual steps of doing it, uh, I'm going to use the retrieval

07:59.990 --> 08:03.530
QA to verify to retrieve the data out from the, uh, from the chain.

========================================================================================

WEBVTT

00:00.050 --> 00:07.820
So now we're going to see how we can bring up this retrieval QA into our discussion over here to retrieve

00:07.820 --> 00:10.940
the data, uh, from our vector store.

00:10.940 --> 00:11.930
So I'm going to do that.

00:11.930 --> 00:15.050
So I'm going to probably just leave this guy over here.

00:15.050 --> 00:18.920
And I'm going to add a, uh, markdown over here.

00:18.950 --> 00:23.570
And I'm going to say uh, retrieval QA.

00:23.570 --> 00:28.730
And we also need the retriever retriever, uh, this time.

00:28.730 --> 00:32.270
And I'm going to add the code down below.

00:32.270 --> 00:35.090
So we need this, um, retriever QA.

00:35.120 --> 00:44.840
And over here I'm going to say retriever uh is equal to we're going to call our vector stores as retriever.

00:44.840 --> 00:50.570
And I'm going to pass the search uh quarks, quarks.

00:50.570 --> 00:57.260
So I'm going to say search quarks is equal to um maybe k is equal to three.

00:57.260 --> 01:00.200
So totally three records that we're going to retrieve every single time.

01:00.230 --> 01:02.840
We're just going to retrieve the information out from that.

01:02.900 --> 01:04.580
Remember, that's the same thing that we were doing before.

01:04.610 --> 01:12.170
So if I just ask the retriever, um, over here, and if I try to run that, it is going to, uh, probably

01:12.170 --> 01:13.580
I did not even run this code.

01:14.150 --> 01:15.200
Let me run this.

01:15.800 --> 01:16.580
Uh oh.

01:16.580 --> 01:16.820
Yeah.

01:16.850 --> 01:18.260
Source the vector stores.

01:18.260 --> 01:22.760
And now, if I run this, you'll notice that it's going to bring that particular data over here for

01:22.760 --> 01:23.030
us.

01:23.060 --> 01:23.600
Right.

01:23.600 --> 01:26.720
This is what is being stored in the retriever for us, which is great.

01:26.720 --> 01:31.310
And now we need to bring in our, uh, retrieval QA for that matter.

01:31.310 --> 01:38.930
So in order for me to bring that up, I'm going to say QA chain is equal to, uh, retrieval QA.

01:39.110 --> 01:41.960
And I'm going to call our from chain type.

01:42.170 --> 01:47.240
And over here I'm going to pass the LM and the retriever.

01:47.270 --> 01:50.960
These are the two things we really require, uh, to be passed for the QA chain.

01:50.960 --> 01:58.250
And once we have the QA chain, now, we can use this for our, uh, questions to answer if that particular

01:58.250 --> 01:59.870
answer really matches or not.

01:59.870 --> 02:03.600
So that is the thing that is going to happen using this particular key chain.

02:03.600 --> 02:08.670
So you can ask the question from here, and you can get the retrieved document out from this particular

02:08.700 --> 02:09.210
key chain.

02:09.210 --> 02:16.770
So so what I really mean is that if I'm going to ask like, um, what playwright does the question which

02:16.800 --> 02:21.030
is not in the query question section, but I'm just asking one question over here, just a random question.

02:21.030 --> 02:24.330
And I wanted the vector store to give me that particular answer.

02:24.330 --> 02:28.770
So I'm going to say, Shane, uh, we have this invoke or maybe run method.

02:28.770 --> 02:33.570
Whichever method that we're going to call, let's say run, uh, and I'm going to pass the query over

02:33.570 --> 02:34.080
here.

02:34.080 --> 02:38.400
And I wanted to, uh, get this particular response.

02:38.400 --> 02:41.820
And then I need to retrieve the relevant documents out from it.

02:41.820 --> 02:46.650
So I'm going to say, uh, retrieved uh, docs.

02:46.680 --> 02:49.380
And no, not this one.

02:49.380 --> 02:57.840
So I'm going to say retriever dot get, uh, relevant documents.

02:58.770 --> 03:02.490
And over here I can just pass the query as well.

03:02.490 --> 03:07.570
And then let's print both the response as well as the retrieved document.

03:07.570 --> 03:11.350
So I'm going to say response and the retrieved documents.

03:11.350 --> 03:13.810
And let's try to run this code.

03:15.730 --> 03:17.560
This is going to throw us an error I know why.

03:17.590 --> 03:19.810
Because we need to probably add like a parameter here.

03:19.840 --> 03:21.700
Like LM is equal to LM.

03:21.700 --> 03:30.400
And um retriever is equal to retriever because the parameter is not matching the position.

03:30.400 --> 03:33.490
So we probably need to just give uh explicitly.

03:34.180 --> 03:34.870
There we go.

03:35.050 --> 03:38.260
Now you can notice that we could able to run this code.

03:38.260 --> 03:42.970
And you will see that the retrieved document is going to be, uh, coming up for us over here, which

03:42.970 --> 03:44.800
is these are the documents.

03:44.800 --> 03:46.960
So this is the response just coming up for us over here.

03:46.990 --> 03:51.910
Like playwright allows network interception, uh, headless execution and, uh, tracing, debugging,

03:51.910 --> 03:52.990
complex web application.

03:52.990 --> 03:55.180
It is a modern automation testing order.

03:55.300 --> 03:58.840
Modern automation library for end to end testing that supports multiple browser, including Chrome,

03:58.840 --> 03:59.890
Firefox, and WebKit.

03:59.890 --> 04:06.550
So you can see that our, uh, our QA chain because it has the access to the large language model,

04:07.420 --> 04:12.430
it could able to summarize everything based on the question that we have asked, like what playwright

04:12.460 --> 04:13.300
does?

04:13.480 --> 04:15.700
It has given us that information over here.

04:15.700 --> 04:21.280
And you will see that there is this relevant document for this query been retrieved from the vector

04:21.280 --> 04:23.380
stores is also coming up for us over here.

04:23.410 --> 04:27.490
See that how it has retrieved the information like player velocity network interception.

04:27.580 --> 04:29.710
It has also got some selenium stuffs over there.

04:29.710 --> 04:34.780
And then it is bringing up the playwright is modern automation library for automation testing.

04:34.780 --> 04:38.560
Because remember the K is three there just this one.

04:38.560 --> 04:40.960
That's the reason why it could retrieve three.

04:40.960 --> 04:46.900
Uh talk like first three of the document from the document stores.

04:47.290 --> 04:49.450
So that is what is really happening over here.

04:49.450 --> 04:57.070
So now we have all these set up operations there for performing the evaluation using ragas.

04:57.100 --> 05:00.010
The next step is now we need to prepare the data set.

05:00.010 --> 05:05.110
And then we need to pass this data set to ragas to do the evaluation, which we'll be doing in our next

05:05.110 --> 05:05.620
lecture.

========================================================================================

WEBVTT

00:00.050 --> 00:00.590
All right.

00:00.590 --> 00:05.240
So now we are going to start creating the data set for the ragas.

00:05.240 --> 00:13.730
So when I say data set for ragas let's go and search in the ragas.io over here the documentation.

00:13.730 --> 00:19.940
And if I go to the documentation and if you just go search the core concept.

00:20.390 --> 00:26.420
And I think there was somewhere it was mentioned that evaluation data sets, as you can see over here

00:26.420 --> 00:33.140
for the singleton samples as well as for the uh, maybe multi set sample loading from hugging face,

00:33.170 --> 00:33.800
whatever.

00:33.830 --> 00:39.980
You will notice that this is the sample for creating the individual sample uh, which has got something

00:39.980 --> 00:44.120
like user inputs retrieved context response and reference.

00:44.120 --> 00:49.820
So this is what is exactly the singleton sample really looks for and for multi multi-turn sample.

00:49.850 --> 00:56.180
Basically in the ragas you need to have multiple sets of the same data, but that's what you're going

00:56.180 --> 00:58.790
to be passing in the multi term samples.

00:58.850 --> 01:02.990
Because we are working with multi term samples for injecting multiple datas.

01:03.020 --> 01:05.110
We need to create this kind of sample.

01:05.110 --> 01:06.640
But how do we actually create this?

01:06.760 --> 01:08.620
This user inputs is very familiar.

01:08.620 --> 01:11.290
This is our query that we have got over here right.

01:11.320 --> 01:15.100
That's the the query that we have to pass which is this one.

01:15.100 --> 01:22.270
And then the retrieved context is the one which is going to be coming up from our vector stores, which

01:22.270 --> 01:26.770
is, uh, just from the vector store that we have got over here.

01:26.800 --> 01:27.220
Right.

01:27.220 --> 01:33.490
So the, the relevant documents, probably this guy, this is the, uh, this is going to be the retrieved

01:33.490 --> 01:34.180
context.

01:34.180 --> 01:39.640
And the response is going to be the one, this one which is coming from our QA chain, from our large

01:39.640 --> 01:44.920
language model, while we pass the large language model and the retriever, if we just give these two

01:44.950 --> 01:48.910
information, the retriever QA is going to give us that particular information.

01:48.910 --> 01:50.950
So that is going to be the response from our LLM.

01:50.950 --> 01:52.390
So we're going to store that as well.

01:52.390 --> 02:00.700
And the reference is going to be the page content which is nothing but the docs page content.

02:00.700 --> 02:03.040
So I'm just going to say doc dot page content.

02:03.040 --> 02:05.620
So for this question this is the reference that we have got.

02:05.620 --> 02:12.000
So we are explicitly passing that as well, because this is the one which is used by the ragas to evaluate

02:12.000 --> 02:14.850
how close the reality is.

02:14.850 --> 02:21.660
The ground truth is based on the answer that is being generated from the vector store, as well as from

02:21.660 --> 02:22.890
the QA chain.

02:22.890 --> 02:29.550
So that is what we are going to evaluate in this particular, um, ragas over here.

02:29.550 --> 02:35.100
That's the reason why we need to have for the single term sample, or maybe any sample for that matter.

02:35.100 --> 02:40.980
You need to have this for properties user input, retrieved context, um, and then response and a reference.

02:40.980 --> 02:47.010
So we're going to do all these four things like you have to create all these things for our data set.

02:47.010 --> 02:54.960
And because we have got multi shot sample data set and we need to pass all these datas along with the

02:54.960 --> 02:57.210
response as well as the retrieved document.

02:57.210 --> 02:59.160
We have to create a structure this time.

02:59.190 --> 03:00.270
So let's see how we can do it.

03:00.270 --> 03:11.960
So I'm going to put a markdown over here I'm going to say creating multi shot Sample data set for ragas.

03:12.290 --> 03:16.130
I'm gonna take their, uh, for data.

03:16.250 --> 03:20.210
I'm just interested in adding this kind of stuff's their data.

03:20.480 --> 03:21.560
Uh, look at that.

03:21.590 --> 03:22.430
Cool.

03:23.270 --> 03:25.610
You can have a visual, uh, clue.

03:25.640 --> 03:26.990
Like what's really happening there?

03:27.020 --> 03:27.320
All right.

03:27.350 --> 03:27.650
Cool.

03:27.680 --> 03:31.250
So I'm going to say data set is equal to an array.

03:31.280 --> 03:32.900
So I'm gonna create an empty data set here.

03:32.900 --> 03:35.810
And I'm going to say I'm just going to turn off this thing.

03:35.840 --> 03:43.190
So it's annoying, uh, to get this kind of response from our copilot.

03:44.300 --> 03:44.840
All right.

03:44.840 --> 03:45.500
It's disabled.

03:45.500 --> 03:49.550
And now over here, I'm going to say probably we're just gonna hide this one.

03:49.550 --> 03:50.480
We don't need that.

03:50.480 --> 04:01.910
And I'm going to say here, uh, for question, and I'm going to add the doc in zip of both the questions

04:01.910 --> 04:10.690
and the docs that we have created before the questions and doc, which are these one, the questions

04:10.690 --> 04:12.040
and the docs.

04:12.040 --> 04:15.400
I'm just going to add, uh, on the array over here.

04:15.400 --> 04:17.380
I'm going to loop both of them together.

04:17.380 --> 04:24.850
And I'm going to say here and I'm going to say relevant, uh, docs over here.

04:24.850 --> 04:30.640
We know that the relevant documents that we have got is going to be the document that we are getting

04:30.640 --> 04:33.130
from here, which are these one, as you know.

04:33.130 --> 04:37.870
So I need to iterate through these documents as well, because you know that we have got like three

04:37.870 --> 04:40.840
documents for every relevant documents.

04:40.840 --> 04:47.800
I need to iterate through all the documents, and then I need to, uh, store them all, uh, in the,

04:48.070 --> 04:50.440
uh, in the array for the relevant documents.

04:50.440 --> 04:57.700
So I'm just going to say I'm going to iterate through all the documents in the, uh, retriever dot,

04:57.730 --> 05:00.280
get relevant documents.

05:00.640 --> 05:03.190
And I'm going to say question.

05:03.190 --> 05:07.840
So I'm going to iterate through and I'm going to get all the relevant documents based on the question

05:07.840 --> 05:08.620
that I'm passing in.

05:08.620 --> 05:10.180
So these are the relevant documents.

05:10.180 --> 05:13.430
And I'm going to create a response over here.

05:13.430 --> 05:19.490
And the response is going to be the QA chain dot run of the question.

05:19.880 --> 05:22.850
The exact same thing that we were doing before this guy.

05:23.120 --> 05:23.630
Right.

05:23.660 --> 05:26.330
So that's been added over here.

05:26.330 --> 05:31.670
And now I need to create the structure like how we have got over here like these.

05:31.670 --> 05:36.140
So the user input retrieved context response and reference.

05:36.140 --> 05:41.570
So for doing that I'm going to say dataset dot append the array that I have created over here.

05:42.140 --> 05:51.590
And in this array I'm going to say the first one is going to be the user input, which is going to be

05:51.590 --> 06:05.120
the question and the retrieved contexts, which is going to be the relevant docs.

06:05.840 --> 06:13.160
And the response is going to be the response obviously is this one.

06:13.460 --> 06:22.240
And finally we need to have the reference for the ragas to do a reference of where this documents are

06:22.240 --> 06:22.810
going to come from.

06:22.810 --> 06:26.050
So I'm going to say dot dot page content, right?

06:26.050 --> 06:30.280
So I'm going to have all these details over here has been appended.

06:30.280 --> 06:32.530
And now I'm going to say data set.

06:33.220 --> 06:39.250
So let's try to print this value and see how the data is going to look like over here after this execution.

06:39.250 --> 06:46.240
So if I run this over here you will notice that, uh, the for the first time it is going to grab all

06:46.240 --> 06:46.810
the information.

06:46.810 --> 06:52.660
It's also going to do a QA chain because it is going to call the LM, and it's going to get the processed

06:52.660 --> 06:56.200
response for us over here, like how it has done this side.

06:56.200 --> 06:58.720
So it is running quite a lot over here.

06:58.720 --> 07:01.120
So it's using our LM, it's using the vector.

07:01.120 --> 07:04.330
And also it is appending that in the data set.

07:04.330 --> 07:07.570
So it's going to take a bit of a time like 21 seconds in my machine.

07:07.660 --> 07:10.390
And you'll notice that we have got this user input.

07:10.420 --> 07:14.950
Like what is the playwright and what browser does it support.

07:14.980 --> 07:21.480
The retrieval context for this question is going to be this from the LM from the vector data store.

07:21.570 --> 07:23.820
Uh, these are three things which is coming up.

07:23.820 --> 07:27.150
And the response from the LM is going to be this one, as you can see.

07:27.660 --> 07:34.860
And the reference is going to be the reference from the, uh, from the docs that we have got.

07:34.890 --> 07:39.420
See the reference and the response from the LM is pretty close to them.

07:39.450 --> 07:41.250
Like they are matching pretty close to that.

07:41.250 --> 07:46.770
That's the reason why maybe this test is going to just pass while it does the evaluation with the ragas.

07:47.220 --> 07:47.850
That's all guys.

07:47.850 --> 07:50.580
This is how we create the data set over here.

07:50.580 --> 07:55.650
And now this data set is pretty much exactly the same kind of data set that you're seeing over here

07:55.680 --> 07:57.060
with the simple term sample.

07:57.060 --> 08:01.380
But here because this is a multi term samples over here we have got a lot of datas.

08:01.380 --> 08:02.490
And you can go to the text editor.

08:02.490 --> 08:06.030
And you can see that how many datas have been created which is amazing.

08:06.030 --> 08:08.010
So we have all of these over here.

08:08.010 --> 08:14.130
And now we are going to run this with our ragas in our next lecture.

08:14.130 --> 08:15.660
And I will show you how it's going to work.

08:15.660 --> 08:16.380
And guess what?

08:16.380 --> 08:21.000
We can also see the entire operation with Lange Smith as well.


========================================================================================


WEBVTT

00:00.170 --> 00:00.830
All right.

00:00.830 --> 00:06.830
So now we are going to start doing the evaluation of these, uh, record that we have got in the data

00:06.860 --> 00:08.270
set using ragas.

00:08.270 --> 00:11.000
So I'm going to add a markdown over here.

00:11.000 --> 00:12.800
I'm going to say ragas.

00:13.040 --> 00:17.780
Uh evaluation of Rag data that we have got.

00:17.930 --> 00:19.700
Uh so there we go.

00:19.700 --> 00:21.440
And now I'm going to add the code.

00:21.440 --> 00:26.990
So for evaluation of the data set we are going to call the ragas.

00:26.990 --> 00:32.930
And over here they have got a class called as uh evaluation data set.

00:33.680 --> 00:33.950
Right.

00:33.980 --> 00:38.600
And this class you can actually create an evaluation data set.

00:38.630 --> 00:49.970
Let's say uh evaluation data set which is going to be evaluation data set dot from uh lists over here.

00:49.970 --> 00:56.150
So you can pass either from list and if you have data uh from hugging face data set, you can also import

00:56.150 --> 00:57.800
the data set from the hugging face.

00:57.920 --> 00:59.470
I mean I have created a hugging face here.

00:59.470 --> 01:03.580
I said to have all these datas earlier, which I can show you as well.

01:03.580 --> 01:05.560
You can also read from a JSON file.

01:05.560 --> 01:08.020
You can also do it from the pandas or dict.

01:08.020 --> 01:09.430
And there is something like list.

01:09.430 --> 01:13.120
And because you remember in our last lecture, we are creating a list of the data set.

01:13.120 --> 01:16.600
So we can just use this list for reading the data from.

01:16.600 --> 01:18.130
That is the data set over here.

01:18.130 --> 01:22.120
So now this code will just work fine without any problem.

01:22.120 --> 01:26.200
While I do a while, I do an import of the data set evaluation over here.

01:26.230 --> 01:30.910
The final operation we need to do is we need to call our ragas.

01:30.910 --> 01:38.140
And I'm going to import the evaluate over here and over here I'm going to be evaluating, as I told

01:38.140 --> 01:40.810
you with the LMS.

01:40.810 --> 01:48.310
So I need to import a class called as Lang chain LM wrapper, which is going to help us do the evaluation.

01:48.340 --> 01:55.810
I mean, this wrapper will now help me to create the evaluation operation itself.

01:55.810 --> 01:59.340
So what I say that, I'm going to say evaluation.

01:59.340 --> 02:06.630
LM so here is where I'm going to add an evaluation LM and I'm going to call the long chain LM wrapper.

02:06.630 --> 02:09.000
And here I need to pass the LM.

02:09.000 --> 02:16.740
So guess what this time because this is going to be an LM which is going to be acting as an evaluator.

02:16.740 --> 02:20.490
I'm going to be using a different evaluator LM this time.

02:20.490 --> 02:26.100
So I'm going to probably guess what I'm going to use the most beefy, uh, LM that I have got in my

02:26.100 --> 02:33.510
machine, which is the, uh, more sophisticated, uh, LM, for instance, which is going to be this

02:33.510 --> 02:33.810
one.

02:33.810 --> 02:39.870
As you can see, the llama 3.1 70 billion parameter is like 42 gig in my machine.

02:39.900 --> 02:45.210
And I wanted to try out this one this time just to show you, like, how you can use this big, uh,

02:45.210 --> 02:48.180
this big model as well.

02:48.540 --> 02:50.970
Uh, with your execution.

02:50.970 --> 02:56.520
I know my machine has got a bit of an inferencing power like it is 64 gig, and it's as Apple M1 Macs.

02:56.520 --> 02:59.640
So probably this thing is going to be supported.

02:59.940 --> 03:03.120
So I'm just going to relay on that at this time.

03:03.120 --> 03:06.840
So let me run this block because we need this lm2, which is great.

03:07.260 --> 03:09.960
And I'm going to add this lm2 over here.

03:10.650 --> 03:11.100
Right.

03:11.100 --> 03:12.990
So Lm2 is that Lm2.

03:13.110 --> 03:13.920
Oh no sorry.

03:13.920 --> 03:16.650
This is a Lm2 again.

03:16.770 --> 03:19.500
And we have this lm2 right now.

03:19.500 --> 03:23.970
So long chain LM wrapper is going to have this lm2 over here.

03:23.970 --> 03:30.150
And now we are going to uh, we are going to do one more importing over here.

03:30.150 --> 03:33.930
So we are going to use the metrics from ragas this time.

03:33.930 --> 03:43.110
So the metrics which I am going to be using from ragas is going to be, uh lm uh lm context recall.

03:43.110 --> 03:48.690
So which is going to be this one, and I'm going to check the faithfulness.

03:48.720 --> 03:52.530
And maybe I can also check the, uh, factual correctness.

03:52.530 --> 03:58.880
But you can see that they have got so many different, um, so many different way to verify things over

03:58.880 --> 03:59.420
here.

03:59.510 --> 04:04.520
Uh, context recall, context perception, context entity recall, things of that nature.

04:04.550 --> 04:11.090
Let's say we have got the context recall over here and we have context procession.

04:11.210 --> 04:13.370
So we can check if we have got context procession.

04:13.400 --> 04:15.290
These are the things which I just showed you on the slide.

04:15.320 --> 04:18.560
Remember in our last section you can do you can use that.

04:18.590 --> 04:23.780
And there's also aspect critics answer similarity and answer relevance like that.

04:23.780 --> 04:25.490
So answer correctness.

04:25.490 --> 04:28.880
So you have got these kind of metrics as well.

04:28.910 --> 04:32.090
I will try to just add these over here just in case.

04:32.090 --> 04:35.840
And I have not tried these things before, but I'm just going to try it.

04:35.840 --> 04:38.420
And let's try to run this and see how the evaluation really works.

04:38.450 --> 04:42.470
I'm going to say result is equal to evaluate.

04:43.130 --> 04:45.050
And I need to pass the data set over here.

04:45.080 --> 04:49.250
Data set is going to be the evaluation data set that we created over here.

04:49.430 --> 04:52.170
And we also need to pass the matrix.

04:52.170 --> 04:57.420
The matrix is going to be all the metrics that we just have imported, which is going to be, uh, the

04:57.420 --> 05:05.100
LM context recall, uh, and the faithfulness and context precision.

05:05.100 --> 05:08.340
And finally, the answer relevance.

05:08.340 --> 05:10.920
So I'm going to add all of these over here.

05:11.310 --> 05:16.500
And we are going to print that result, uh, which is going to be over here.

05:16.530 --> 05:17.190
Right.

05:17.220 --> 05:18.720
This is going to take more time, guys.

05:18.720 --> 05:24.270
This is going to take at least, uh, quite a lot of time in my machine, uh, because we are using

05:24.300 --> 05:27.870
a bigger, uh, bigger LM model.

05:27.870 --> 05:29.730
So probably it's going to take more time.

05:29.730 --> 05:31.080
I'm getting an exception here.

05:31.080 --> 05:33.390
It says the the OpenAI.

05:33.390 --> 05:33.960
Uh, sorry.

05:33.990 --> 05:41.880
The API key must be set by passing the, uh, API key client for the OpenAI, uh, API key.

05:41.910 --> 05:48.960
Looks like what's happening at the moment is that, uh, this particular, uh, this particular evaluator

05:48.960 --> 05:52.610
is now expecting me to pass an open API key.

05:52.610 --> 05:53.600
But guess what?

05:53.630 --> 05:58.640
Because we are not going to be using the open APIs API, and we're going to use a local large language

05:58.640 --> 05:59.150
model.

05:59.150 --> 06:08.540
We also need to pass one more parameter here, which is going to be LM is equal to evaluator LM which

06:08.540 --> 06:13.730
is this one, the large language model two that we have got just for the readability purpose.

06:13.730 --> 06:17.090
I'm going to make this a bit more clear for you to see.

06:17.120 --> 06:22.220
Like what's exactly that we are passing in so that you can have it clearly visualized.

06:22.220 --> 06:24.650
So these are the evaluation metrics that I'm passing in.

06:24.650 --> 06:26.990
And this is the result over here right.

06:27.020 --> 06:31.580
So this is something that you need to pass to the evaluator so that it's going to use this evaluation

06:31.580 --> 06:38.510
with this large language model two which is going to be our, our uh, our llama two.

06:38.540 --> 06:44.690
And you can see that even if I try to add the exact evaluation LM over here, it is going to fail with

06:44.690 --> 06:46.700
the, uh, with the API key.

06:46.850 --> 06:53.650
Uh, looking for the OpenAI API key while I'm trying to use the local large language model.

06:53.650 --> 06:57.940
The reason why this is happening is that this answer relevance class that we have added over here.

06:57.970 --> 07:01.930
As I told you before, during the adding of this particular answer, I have never tried it before.

07:01.960 --> 07:06.820
This answer relevance actually looks for the OpenAI.

07:06.850 --> 07:14.560
So basically this answer relevance unfortunately works with the OpenAI alone, but not with, uh, with

07:14.560 --> 07:16.510
any other models.

07:16.510 --> 07:23.170
So if we're just going to search for, uh, answer relevance over here, uh, they have given the details

07:23.170 --> 07:25.480
over here like what is this answer relevance metrics.

07:25.480 --> 07:30.370
So you can see that they are unfortunately, the documentation really doesn't tell me that it should

07:30.370 --> 07:37.150
be the LLM provider should only be OpenAI, but it is not really working with the local large language

07:37.150 --> 07:38.800
model, which is a bummer.

07:38.800 --> 07:42.970
So we can probably remove this answer relevance over here.

07:42.970 --> 07:44.440
Maybe they will add it in future?

07:44.440 --> 07:48.490
I'm not sure, but for now, we don't have that bad luck on us.

07:48.490 --> 07:51.130
And let's try to run this code and see what's going to happen.

07:51.820 --> 07:53.920
Now notice that the evaluation has started.

07:53.950 --> 07:56.350
I'm telling you guys, this is going to take a long time for me.

07:56.380 --> 08:02.200
And because we're using the, uh, bigger, uh, large language model like larger, larger language

08:02.200 --> 08:07.270
model, like 42 gig, uh, it is going to take a long time and it's going to crank my fan as well.

08:07.270 --> 08:10.000
So once this entire execution is done, I'll be back.

08:10.030 --> 08:10.600
All right.

08:10.600 --> 08:15.490
So now you can see that we have got this execution done in four minutes and five seconds.

08:15.550 --> 08:24.820
And what I come down over here, I noticed that the context recall has got a .59, uh, in total of

08:24.820 --> 08:25.390
the score.

08:25.390 --> 08:30.790
And the faithfulness has got Nan and the context precision has got Nan, which means it's not applicable,

08:30.820 --> 08:31.330
something like that.

08:31.330 --> 08:33.790
So it's not able to find the faithfulness over here.

08:33.790 --> 08:39.220
I could see that this could be an issue with my large language models, like I'm using the bigger LM

08:39.220 --> 08:39.700
as well.

08:39.700 --> 08:44.460
And maybe the machine's performance is not up to the mark and it is not returning me the correct answer.

08:44.490 --> 08:50.370
Maybe if we use the OpenAI's, uh, API, and if you try to do the exact same thing, it could be different

08:50.370 --> 08:53.730
altogether because the data is quite lesser comparatively.

08:53.730 --> 08:55.890
And also the question is very straightforward.

08:55.890 --> 09:02.220
So I would expected this whole faithfulness to be one, because I tried the exact same thing in my other

09:02.220 --> 09:03.120
tests as well.

09:03.120 --> 09:07.050
And I saw the faithfulness was actually coming up as one before.

09:07.050 --> 09:11.760
And this test, for some reason in this language model, because it's the first time I'm using this,

09:11.760 --> 09:17.160
uh, LLM model, like the bigger model, and it is taking a toll on the faithfulness over here.

09:17.160 --> 09:18.660
So this is not quite right.

09:18.660 --> 09:22.740
So if I try to run this one more time with a different model, probably the answer will be different.

09:22.770 --> 09:25.560
But at least for now, I could see that the execution is happening.

09:25.560 --> 09:32.130
And this is how we can see that we could do the evaluation of our large language model.

09:32.130 --> 09:38.670
Just wanted to see if we could able to spend one more change on this particular test execution instead

09:38.670 --> 09:42.170
of the context precision and answer relevance that we have got.

09:42.200 --> 09:48.590
Maybe I'm going to say factual correctness over here and I'm going to say factual correctness.

09:48.620 --> 09:52.220
I'm going to save this, and I'm going to try to run this one more time over here.

09:52.220 --> 09:57.860
And while this is happening, I'm also going to show you the, uh, Lang Smith over here.

09:57.890 --> 10:00.770
Like what has really gone in this particular execution.

10:00.770 --> 10:05.330
You see that we have got this ragas evaluation, which is the earlier ragas evaluation that we just

10:05.330 --> 10:05.960
tried.

10:05.990 --> 10:12.980
And over here you will notice that we can see every single operation in the, in the Lang chain over

10:12.980 --> 10:13.280
here.

10:13.280 --> 10:13.970
Look at that.

10:13.970 --> 10:20.090
So it is going to show me uh it is, it has spent around 53,702 tokens this time, which is, which

10:20.090 --> 10:23.930
is really, really higher than ever we have seen before.

10:23.930 --> 10:28.970
And you can see that we have got this context recall happening there, and it is getting the retrieved

10:28.970 --> 10:30.560
context for these.

10:30.560 --> 10:31.700
And there is this user input.

10:31.730 --> 10:34.760
What playwright, what is playwright and what browser does it supports.

10:34.790 --> 10:36.860
These are the retrieved contexts for that.

10:36.950 --> 10:44.380
And then it is doing the context recall Classification in the ragas there and it is running in forests

10:44.410 --> 10:44.920
and seas.

10:44.950 --> 10:51.160
We also have got the faithfulness over here, uh, which is which says that the invalid JSON output.

10:51.160 --> 10:53.440
And that's the reason why it has got failed for some reason.

10:53.440 --> 10:54.280
Look at that.

10:54.370 --> 11:00.280
So there is this failure happened over here saying that it couldn't able to parse that particular statement.

11:00.280 --> 11:06.790
And that is the reason why we have got the faithfulness as, uh, nan or for that matter, uh, and

11:06.790 --> 11:15.700
we also have got the context precision prompt over here, uh, which has also took a toll if I was not

11:15.700 --> 11:16.450
wrong.

11:16.660 --> 11:20.440
Uh, but you can see that the entire operation for every single row is coming.

11:20.440 --> 11:25.750
So this is row zero, this is row one, this is row two, and this is row three.

11:25.750 --> 11:29.740
And this is row four five, six.

11:29.740 --> 11:32.260
So totally all the rows are being executed.

11:32.260 --> 11:36.790
And I think the number six has has executed quite a long way over here.

11:36.820 --> 11:37.540
Look at that.

11:37.570 --> 11:42.900
Like how deep it went all the way down to actually get the particular response for us.

11:42.900 --> 11:48.150
And this this proves that the execution is taking so much of time.

11:48.150 --> 11:53.670
And all of these are recorded in our, uh, in our Lang Smith, which is amazing.

11:53.700 --> 12:00.810
So this this only proves the point that using, uh, our Lang Smith itself, we can verify every single

12:00.840 --> 12:07.200
operation which is happening, uh, within the, uh, within the ragas, and we can see that.

12:07.200 --> 12:08.070
But guess what?

12:08.100 --> 12:13.920
This is not the actual way that ragas team always say to, uh, to verify things.

12:13.920 --> 12:21.120
They also tell us that you can verify using their own API keys like ragas has got something called as

12:21.180 --> 12:23.640
API dot ragas.

12:24.300 --> 12:32.310
Um, something like that I think uh, or maybe ragas, dot API app, something like that.

12:32.340 --> 12:44.600
I was just looking at that, uh, over here, uh, and okay, let's say ragas API key.

12:44.630 --> 12:52.040
If I go and search that, uh, and they have got this evaluation metrics, uh, and.

12:55.640 --> 12:55.940
Yeah.

12:55.940 --> 12:58.730
This one the app.ragas.io as you can see over here.

12:58.730 --> 13:00.560
So this this is the one thing that you can use.

13:00.560 --> 13:02.120
This is still in beta version.

13:02.120 --> 13:07.700
Uh, but you can go to their dashboard and you can see how the results are going to come up.

13:07.850 --> 13:13.520
Uh, but I have not even configured the, uh, tokens and connectivity with this particular ragas yet.

13:13.550 --> 13:18.920
We'll be doing that later, but at least for now, you can see that we can see all the evaluation happening,

13:19.040 --> 13:20.000
uh, over here.

13:20.000 --> 13:24.590
And there is this current evaluation which is currently executing, uh, in our, my, uh, in this

13:24.590 --> 13:27.980
particular change that we have did like context recall.

13:27.980 --> 13:29.600
And there is this faithfulness.

13:29.630 --> 13:30.980
Is it passing this time or.

13:30.980 --> 13:31.310
No.

13:31.340 --> 13:34.070
The the faithfulness still is failing this time as well.

13:34.090 --> 13:38.650
And there is this factual correctness, and this one is also failing for some reason.

13:39.010 --> 13:42.040
And that's the reason why it couldn't able to evaluate.

13:42.040 --> 13:45.070
So probably even these two are going to be Nan this time as well.

13:45.070 --> 13:46.630
So it's that red color there.

13:47.140 --> 13:54.220
Uh context recall is correct, but faithfulness is still throwing a timeout error uh, for some reason.

13:54.220 --> 13:59.560
And this is happening for all the rows like six rows that we have got.

14:00.430 --> 14:01.270
Uh, yeah.

14:01.300 --> 14:01.720
There we go.

14:01.750 --> 14:03.670
It does execute the entire thing.

14:03.670 --> 14:07.330
And we can see that there is an exception raised of timeout there.

14:07.330 --> 14:12.940
So maybe it's all because of our local large language model and because I'm doing a recording at the

14:12.940 --> 14:13.870
same time.

14:13.990 --> 14:18.790
Uh, and this particular stuff doesn't meet the expectation.

14:18.790 --> 14:21.070
And it just throwing us an exception immediately.

14:21.070 --> 14:27.940
So probably, uh, if we run this in the open AI key, the things will be far better comparatively.

14:27.940 --> 14:33.400
So we'll try to run the same thing in the open AI key and see how that actually works in our next lecture.


========================================================================================


WEBVTT

00:00.050 --> 00:07.430
In our last lecture, we saw how the execution of the evaluation has resulted into very, very less

00:07.430 --> 00:11.360
score on all the evaluation of the ragas.

00:11.360 --> 00:12.620
So we are going to do this.

00:12.650 --> 00:17.630
We are going to not use this particular LM, which is the Lambda 3.1 70 billion parameter.

00:17.630 --> 00:18.440
This time.

00:18.620 --> 00:24.170
Rather, I'm just going to probably just leave this guy as it is and I'm going to run from the open

00:24.170 --> 00:24.860
I this time.

00:24.860 --> 00:31.010
So in order to use the open I you can see that we can just use this uh lang chain open I import chat

00:31.010 --> 00:38.330
open I and then we can use the, uh, lang chain LM wrapper as chat open I and the model that we can

00:38.330 --> 00:39.440
specify over here.

00:39.440 --> 00:43.940
So I'm going to just do the exact same thing this time to see how it's going to improve the performance

00:43.940 --> 00:46.160
of our execution.

00:46.160 --> 00:50.900
So for doing that I'm going to go all the way to the execution that we were doing before.

00:51.080 --> 00:55.640
And over here I'm just going to import the chat open.

00:55.640 --> 01:00.740
I and we also need to use the, um, the open I embedding.

01:00.740 --> 01:05.290
But I think the open I embedding is not required because the one that we have is fine.

01:05.500 --> 01:06.760
We can just leave it as it is.

01:06.760 --> 01:09.370
So I'm going to use this evaluator this time.

01:09.370 --> 01:15.640
The evaluator from the, uh, LM, which is the OpenAI LM.

01:15.640 --> 01:19.600
And once again, we need to set the, uh, OpenAI uh, key.

01:19.600 --> 01:22.090
And I have already set it in my env file.

01:22.090 --> 01:24.160
So I'm just going to use that guy over here.

01:24.160 --> 01:32.170
So this is the evaluator that we are going to be using, which is the, uh, evaluator, uh, open AI.

01:33.010 --> 01:38.380
Uh, LM so maybe open AI, lm like this one.

01:38.380 --> 01:42.820
So I'm going to replace the evaluation LM to OpenAI LM over here.

01:42.820 --> 01:46.870
I'm also going to include the answer relevance this time because we're going to use the OpenAI LM.

01:46.870 --> 01:49.360
So we'll see if the answer relevance work as well.

01:49.390 --> 01:49.720
Right.

01:49.750 --> 01:53.320
So all these things I have set over here, we don't need this evaluator.

01:53.320 --> 01:54.760
So I'm gonna get rid of that.

01:54.850 --> 01:55.600
I'm going to save it.

01:55.600 --> 02:01.030
And because I'm going to be loading the env file one more time, I'm going to restart everything, uh,

02:01.030 --> 02:04.900
from the scratch and let me run one by one the blocks.

02:04.900 --> 02:08.990
So this block we do require, uh, We also require the embedding.

02:08.990 --> 02:10.340
So I'm going to use that embedding.

02:10.340 --> 02:15.140
And I'm also going to load the document in the vector store one more time.

02:15.140 --> 02:18.260
And I'm going to set the retriever.

02:18.290 --> 02:19.490
So let's run.

02:19.520 --> 02:21.110
Let's run the retriever as well.

02:21.110 --> 02:26.420
And we're going to create the multi shot sample data set for ragas.

02:26.450 --> 02:32.990
And it's going to take a bit of a time and let's that to complete over here.

02:33.140 --> 02:33.830
All right.

02:33.830 --> 02:38.780
And now we're just going to go all the way to the ragas evaluation.

02:38.780 --> 02:46.490
And finally we're going to do this evaluation with chat OpenAI and GPT four auto model.

02:46.970 --> 02:54.440
So for executing this one you can see that you need to have the GPT, uh, the OpenAI API key access.

02:54.440 --> 02:58.970
So if you don't really have the OpenAI key access, then you can't execute like how I'm doing at the

02:58.970 --> 02:59.390
moment.

02:59.390 --> 03:03.110
And because we are using the OpenAI key, look at that so fast.

03:03.110 --> 03:06.590
The execution is like it's all cloud based and it's so fast.

03:06.590 --> 03:12.700
And I really think that this could be the way forward to go with instead of using the local LM, at

03:12.730 --> 03:18.970
least for the ragas metric evaluation because it looks like the ragas is fine tuned or optimized for

03:18.970 --> 03:22.510
the GPT four model, rather the local LM.

03:22.510 --> 03:24.670
So let's just wait and see the result.

03:24.700 --> 03:29.710
Like what result that we are going to get out from this particular evaluation.

03:30.130 --> 03:35.110
So it's 89 percentage and we're going to complete 93 percentage.

03:35.380 --> 03:36.220
There we go.

03:36.220 --> 03:38.530
And you can see that there is no time out whatsoever.

03:38.530 --> 03:42.070
Because if we were running the local machine we had a lot of timeouts.

03:42.070 --> 03:45.910
But this time we got zero time out there, which is amazing.

03:45.910 --> 03:48.820
So it's just working pretty much as expected.

03:48.850 --> 03:50.380
Look at the faithfulness.

03:50.410 --> 03:51.790
The recall is 0.85.

03:51.790 --> 03:56.620
Faithfulness is 0.57, factual is 0.5729 as well.

03:56.620 --> 03:58.210
And relevance is look at that.

03:58.210 --> 04:00.850
So correct 0.9794.

04:00.850 --> 04:06.370
So this proves the point that with local LM, maybe we have got the latency issue and the model is not

04:06.370 --> 04:07.570
going to perform pretty well.

04:07.570 --> 04:10.330
So the evaluator is just not going to work pretty fine.

04:10.330 --> 04:14.620
But if we use the OpenAI LM it is just going to work fine as expected.

04:14.620 --> 04:21.100
So if he goes to the, uh, to the lamb-smith over here, uh, which is this one?

04:21.100 --> 04:24.730
As you can see, you can see that we have used 76,000 open token.

04:24.730 --> 04:26.590
I think I'm going to lose a lot of money there.

04:26.710 --> 04:29.560
Uh, and you can see the chat open.

04:29.560 --> 04:34.600
AI is being used, uh, which is going to use the GPT four model, as you can see here.

04:34.600 --> 04:36.550
And none of them has got failed.

04:36.550 --> 04:38.740
All of these execution has got passed.

04:38.740 --> 04:44.920
So this all evaluation, you can see it from here, which is looking pretty cool.

04:44.920 --> 04:50.230
So this is the result that we actually get by using the OpenAI's LLM.

04:50.230 --> 04:56.950
And one more thing that we can do is we can just see the result and we can change it to pandas.

04:57.010 --> 05:03.190
Uh, and if we try to print this, um, this response over here, you can see that this is a user input

05:03.190 --> 05:04.780
and this is the retrieved context.

05:04.810 --> 05:06.910
This is the response and this is the reference.

05:06.940 --> 05:07.690
And look at that.

05:07.690 --> 05:11.110
The recall is 1.1 which means it is correct.

05:11.800 --> 05:13.840
And faithfulness is one which is amazing.

05:13.840 --> 05:15.430
And the factual is one as well.

05:15.460 --> 05:16.480
And the relevance is one.

05:16.480 --> 05:20.320
So based on this user input, this response it looks correct.

05:20.320 --> 05:21.640
And what has gone wrong.

05:21.640 --> 05:27.160
So if you just go here and see like why the response has gone wrong here, what is the Cyprus and how

05:27.160 --> 05:30.190
it is different then it is actually looking like?

05:30.190 --> 05:36.130
The response which has got from the retrieved context is not matching to the Cyprus related, but it

05:36.130 --> 05:38.530
is giving you the selenium WebDriver related.

05:38.530 --> 05:45.040
And that's the reason why the context recall has got zero and the faithfulness is 0.076, which is quite

05:45.040 --> 05:45.460
less.

05:45.730 --> 05:48.310
And also factual correctness is also less.

05:48.310 --> 05:52.540
But answer relevance is bit straightforward because it is talking about automation anyways.

05:52.540 --> 05:55.780
So that is why it is uh, it is making that way.

05:55.780 --> 05:58.960
And look at this one, the playwright and this, this is the answer.

05:58.960 --> 05:59.320
Relevance.

05:59.320 --> 06:00.490
So it's all looking correct.

06:00.490 --> 06:02.860
So you get all these things over here.

06:02.860 --> 06:08.110
So this shows the point that we can run the ragas uh, in the open AI.

06:08.110 --> 06:09.970
And this is going to be very, very fast.

06:09.970 --> 06:12.820
And we can verify the faithfulness factual correctness.

06:12.820 --> 06:14.320
Uh answer relevance and context.

06:14.350 --> 06:18.040
Recall everything using ragas without any problem.

06:18.040 --> 06:21.070
And it is also much, much faster way of running it.


========================================================================================


