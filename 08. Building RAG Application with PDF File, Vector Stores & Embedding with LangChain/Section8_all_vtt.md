WEBVTT

00:00.020 --> 00:01.730
Welcome to the next section of our course.

00:01.730 --> 00:08.300
And in this section we are going to build a retrieval augmented generation or otherwise called as Rag

00:08.300 --> 00:09.080
applications.

00:09.080 --> 00:15.800
So basically one of the most powerful application enabled by the large language model is the sophisticated

00:15.800 --> 00:17.720
question and answering chatbots.

00:17.960 --> 00:25.100
So while we say sophisticated question and answering if you know that while you try to ask any of the

00:25.100 --> 00:31.490
questions to a large language model over here, you know that you are going to get the response based

00:31.490 --> 00:37.280
upon how this model is being trained by the large data set that it knows.

00:37.580 --> 00:43.760
But what if you are going to be asking a question which are specifically known to your company or your

00:43.760 --> 00:50.840
organization, and you are building a large language model application, especially for your company.

00:50.840 --> 00:57.650
So if you wanted to do these kind of operation, then you need to somehow feed the external source of

00:57.650 --> 01:00.500
data to the large language model.

01:00.530 --> 01:08.450
I mean, you can either fine tune the model and then you can make the data aware with that particular

01:08.450 --> 01:09.590
large language model.

01:09.590 --> 01:18.020
But instead of you doing this way, you can actually make use of the rag where you can supply the specific

01:18.020 --> 01:21.860
source of your information to your large language models.

01:21.860 --> 01:25.790
And that is what we are going to be doing in this particular section as well.

01:25.790 --> 01:32.000
We are going to be building a retrieval augmented generation application, which is going to read the

01:32.000 --> 01:34.670
PDF files or external files.

01:34.670 --> 01:40.280
And then it is going to enable your large language model with that information.

01:40.280 --> 01:44.960
So it is going to be adding more intelligence and context to your large language model.

01:44.960 --> 01:48.680
So that is what we are going to be discussing in this particular section.

01:48.680 --> 01:54.290
And you can see that this particular section we are going to discuss two most important part.

01:54.320 --> 01:57.170
The one is the extraction and indexing part.

01:57.170 --> 02:00.540
Another one is going to be the retrieval and generation part.

02:00.570 --> 02:05.490
So this is this both combined is called as actually a rag.

02:05.490 --> 02:10.380
But the one that we are going to be first doing is going to be on the extraction and indexing side.

02:10.380 --> 02:17.730
So you can notice that over here on the extraction and indexing part of it, we are going to be reading

02:17.730 --> 02:19.470
from some external files.

02:19.470 --> 02:21.810
And in this case it's going to be a PDF file.

02:21.810 --> 02:27.720
And then we are going to split these files into multiple chunks.

02:27.750 --> 02:32.970
Now you may ask like Karthik, why do we even need to split the files into multiple chunks?

02:32.970 --> 02:33.990
Well guess what?

02:34.020 --> 02:42.450
While we are going to have a quite a large set of data, we need to split the data into multiple chunks

02:42.450 --> 02:48.540
so that there will be a context window support for your large language model.

02:48.540 --> 02:56.160
And you may know that if you go to this particular link over here especially, it is about the lemma

02:56.160 --> 02:57.810
3.2 information.

02:57.810 --> 03:07.100
You can notice that this particular model can have a context length of around 128 K tokens, and this

03:07.100 --> 03:10.340
is the state of the art in their class on the device.

03:10.370 --> 03:15.890
It can use case can be used on the device like summarization, instruction following and other tasks.

03:15.890 --> 03:21.290
So these kinds of large language model itself supports 128 K of token.

03:21.290 --> 03:28.730
So if you're going to have a more sized data like large big size of data that you are going to be passing

03:28.730 --> 03:36.500
in as a question to these kind of models, then your model is going to struggle and it is going to have

03:36.500 --> 03:38.900
hard time finding the information that you're looking for.

03:38.900 --> 03:41.660
So maybe that information is not going to be even matching.

03:41.660 --> 03:43.610
What is your actual question?

03:43.610 --> 03:52.010
So if our document that we are trying to load has got a long length of data, then the context window

03:52.040 --> 03:56.600
will make the model to struggle to find the information for very long input.

03:56.600 --> 04:03.490
So because of this we need to split the files into smaller chunks, so that it can be easy for the large

04:03.490 --> 04:08.770
language model to find the similarities of the information that you are looking for.

04:08.770 --> 04:14.530
And once we split information into multiple chunks, which is the file data that we have got, we are

04:14.530 --> 04:19.180
then going to embed these data to vectors.

04:19.180 --> 04:20.410
As you can see over here.

04:20.410 --> 04:23.530
And this embedding part is one of the most important part as well.

04:23.530 --> 04:29.560
So this embedding can be done either by using your own technique or by using large language models.

04:29.590 --> 04:34.570
I mean, there are so many different large language models available which does the embedding part much,

04:34.570 --> 04:35.260
much easily.

04:35.260 --> 04:40.480
So we are going to be doing this embedding part, which is going to convert the text into vector dimension

04:40.480 --> 04:42.220
for that particular text.

04:42.220 --> 04:45.340
And then we are going to be storing into a database.

04:45.340 --> 04:48.130
And this database can be any of the database.

04:48.130 --> 04:54.430
It could be a vector based database like fires or chroma or even Azure Cosmos DB.

04:54.490 --> 04:54.910
There.

04:54.940 --> 04:57.510
There are so many database available for doing this operation.

04:57.510 --> 05:00.390
So we are going to be storing the data into this particular.

05:00.510 --> 05:01.200
Database.

05:01.200 --> 05:07.080
So I will also show you quickly like how this, uh, this embedding as well as this.

05:07.110 --> 05:09.750
Database that we are going to be using is going to be looking like.

05:09.750 --> 05:10.380
So if you're just going.

05:10.410 --> 05:13.830
To go to uh, the link chain.

05:14.100 --> 05:17.190
And if I'm going to search for, uh.

05:19.350 --> 05:29.580
F a I s or the files over here, you can see that this is the vector store available, uh, in the long

05:29.610 --> 05:30.060
chain.

05:30.060 --> 05:37.710
So if I stand for Facebook, AI similarity search is a library for efficient similarity search and clustering

05:37.710 --> 05:39.090
of dense vector.

05:39.090 --> 05:44.340
And it contains algorithm that search in a set of vectors of any size and up.

05:44.370 --> 05:50.220
One of the possibility does not fit in the Ram, and it includes supporting code evaluation and parameter

05:50.220 --> 05:50.790
tuning.

05:50.790 --> 05:52.950
That is what this file is all about.

05:52.950 --> 05:57.060
And if you go to this, uh, left hand side, you see that there are vector stores available.

05:57.060 --> 06:00.570
So you will notice that there are many different vector stores available.

06:00.570 --> 06:08.040
So it can be Astra DB, Vector Store, chroma Clickhouse or Databricks, Elastic Store, Search Firestore,

06:08.070 --> 06:11.970
In-memory Vector Store, Milvus and things of that nature.

06:11.970 --> 06:13.020
So there are so many of them.

06:13.020 --> 06:16.530
Even SQL server is also there to perform this operation.

06:16.530 --> 06:19.350
So that is what is the the offline version.

06:19.350 --> 06:23.490
And you can also use the cloud version of the same thing over here that I have got so many different

06:23.490 --> 06:28.770
providers for doing the same kind of operation, and we are going to be actually using what is called

06:28.770 --> 06:34.740
as chroma, because chroma seems to be like, uh, having all the support, like delta ID filtering,

06:34.740 --> 06:38.190
search by vector, search by score, async operation.

06:38.190 --> 06:40.830
I mean we are going to use all the potentials anyways.

06:40.830 --> 06:43.320
But but yeah, chroma seems to be a good fit.

06:43.470 --> 06:48.420
Uh, and if I just go and select this chroma, as you can see over here, the chroma is an AI native

06:48.420 --> 06:53.700
open source vector database focused on developer productivity and happiness, which is great.

06:53.700 --> 06:59.780
And chroma is licensed under Apache 2.0, so we can just use it for free without any cost incurred on

06:59.810 --> 07:00.920
that usage.

07:01.580 --> 07:05.330
And the way you can use this database is available over here.

07:05.360 --> 07:06.950
We'll talk about that once we get there.

07:06.950 --> 07:08.300
But you got the idea right.

07:08.330 --> 07:12.800
Like this is how things are going to work in the Chrome world.

07:13.220 --> 07:17.240
But as I said, we also need to talk about the embedding.

07:17.240 --> 07:26.300
So I'm going to search for the long chain long chain embedding over here.

07:26.300 --> 07:30.710
And you see that we have got some, uh, embedding models over here.

07:30.710 --> 07:36.110
So these are the different kinds of embedding models which are available in the long chain.

07:36.110 --> 07:41.000
And these embedding models will create a vector representation of a piece of text.

07:41.030 --> 07:46.310
Essentially as you can see over here, this document will have quite a lot of different text inside

07:46.310 --> 07:46.460
it.

07:46.460 --> 07:50.420
And we are going to be converting these text into vector representation.

07:50.420 --> 07:53.930
And that can be done easily using this embedding models.

07:53.930 --> 07:56.510
And there are different types of model available, as I told you.

07:56.540 --> 08:05.030
You can see that Azure, Google, AWS, Hugging Face, llama, cohere, Mistral AI and Nvidia Voyager

08:05.060 --> 08:06.650
fake IBM Watson.

08:06.650 --> 08:12.320
So yeah, these are the different providers available and there are different model supports that.

08:12.320 --> 08:15.230
So as I told you these are the providers.

08:15.350 --> 08:20.510
But the models you can also use llama 3.1 or 3.2 for that matter.

08:20.510 --> 08:23.600
It also supports embedding operation.

08:23.600 --> 08:25.940
So you can use that model as well if you wanted to.

08:26.330 --> 08:30.650
So yeah, that is what we are going to be doing in this particular section.

08:30.650 --> 08:37.550
And we'll see how we could able to achieve these operation for the extraction and indexing.

08:37.550 --> 08:42.980
And once we do all these extraction and indexing, once we store the data into the database, the next

08:43.010 --> 08:46.370
operation is going to be retrieval and generation.

08:46.370 --> 08:49.280
Because this is where our bread and butter is all about.

08:49.280 --> 08:54.870
We are going to be using this data that whatever we have stored into the database, and we are going

08:54.900 --> 09:03.180
to use it for our question and answering with the power of the stored data and along with our local

09:03.180 --> 09:07.110
large language model that we have got, which is running in the O Lama.

09:07.110 --> 09:11.400
So that's where the retrieval and generation is going to happen.

09:11.400 --> 09:16.920
So we will try to fit all the discussion in this particular section for the extraction and indexing

09:16.920 --> 09:17.730
in one section.

09:17.730 --> 09:22.290
And then we try to split it out the retrieval and generation in separate section.

09:22.290 --> 09:26.400
Or if we have more bandwidth we can fit it in the same section itself.

09:26.400 --> 09:30.150
So we'll see how that goes, how complex this particular section is going to be.

09:30.150 --> 09:36.000
And because I'm just creating this entire thing from the scratch, I don't even have the the idea of

09:36.000 --> 09:38.310
how long this particular section is going to be.

09:38.310 --> 09:44.190
So that's the reason why I'm saying that maybe we can split into multiple section, but for now, let's

09:44.190 --> 09:44.910
see how it goes.

09:44.910 --> 09:51.210
So let's get started with the extraction and indexing part, starting our next video where we are going

09:51.240 --> 09:54.870
to start extracting, uh, our PDF files.

========================================================================================

WEBVTT

00:00.050 --> 00:05.060
So now we are going to see how we can start doing the extraction and indexing.

00:05.060 --> 00:11.540
And for the first operation of the abstracting and indexing is we need to extract the file that we are

00:11.540 --> 00:16.910
going to work with for our large language model to get more intelligence and context.

00:16.910 --> 00:18.590
So how are we going to do that?

00:18.590 --> 00:22.610
Well, in order for us to extract the file, first of all you need to have some files.

00:22.610 --> 00:30.440
So what I have did over here is I have added some files over here in our section five of Rag with document

00:30.440 --> 00:30.950
over here.

00:30.950 --> 00:34.370
So I have created this particular file.

00:34.400 --> 00:36.230
I mean I have added some papers really.

00:36.230 --> 00:40.730
So these are basically some large language model papers that I have added.

00:40.730 --> 00:44.030
So I can quickly show you what this document is going to be.

00:44.030 --> 00:50.000
So if I just reveal in finder, um, over here, you see that we have got some attention, which is

00:50.000 --> 00:52.160
nothing, but the attention is all you need.

00:52.190 --> 00:52.940
Paper.

00:53.030 --> 00:54.710
Um, this is this one.

00:54.920 --> 00:59.000
This is the actual paper which is used.

00:59.030 --> 01:04.720
I mean, for sure, you might have known that this is the paper which is used to show how the transformer

01:04.900 --> 01:08.890
model has gained the the power of attention.

01:08.890 --> 01:12.850
And based on that, the entire large language model trend has started up.

01:12.850 --> 01:15.640
So yeah, that is what this particular paper is all about.

01:15.640 --> 01:22.300
So we are going to store this particular, uh, paper into our vector database.

01:22.300 --> 01:27.010
And then we're going to retrieve from there, and we're going to make use of the large language model

01:27.010 --> 01:31.630
as well, while answering or questioning the large language model.

01:31.630 --> 01:35.980
And then we are also going to have this particular PDF file, which is this guy, as you can see.

01:36.010 --> 01:41.980
And this is going to be testing and evaluating, uh, the large language model for correctness, non-toxicity

01:41.980 --> 01:43.090
and fairness.

01:43.090 --> 01:45.580
So this is also one of the most interesting paper.

01:45.580 --> 01:50.770
And I have learned quite a lot of the details from this particular paper, because this paper will also

01:50.770 --> 01:58.510
tells you like how you can use the LM for testing of the factual correctness of LM, testing of logical

01:58.510 --> 02:03.970
reasoning and correctness of LM, and how you can evaluate for a multilingual safety of LMS.

02:03.970 --> 02:09.870
Social bias of LMS and all those details so we can ask them testing related questions from this particular

02:09.870 --> 02:10.320
document.

02:10.350 --> 02:11.400
So this is amazing.

02:11.400 --> 02:17.040
And finally, I also have got the LM forgetting, which is the catastrophic forgetting in the large

02:17.040 --> 02:17.790
language model.

02:17.820 --> 02:22.110
So this is one of the most important key concept that we are going to be doing in this particular section

02:22.110 --> 02:25.290
anyways, which is the context length that I was talking about.

02:25.290 --> 02:31.350
And the catastrophic forgetting in LM is mainly during the continual fine tuning.

02:31.350 --> 02:38.340
So we can ask some questions related to how the large language model loses the context while it keeps

02:38.340 --> 02:44.430
on learning new data and forgetting the old data while it is being trained.

02:44.430 --> 02:47.430
So that is what this particular document is all about.

02:47.610 --> 02:52.920
And we are going to extract this document and we are going to store this particular document as well.

02:52.920 --> 02:57.180
So we will see how we can able to achieve all these operation in this particular section.

02:57.180 --> 03:02.430
So for that, I am once again going to create a new notebook over here.

03:02.430 --> 03:04.560
I am going to go save this particular notebook.

03:04.890 --> 03:12.430
I'm going to call this particular notebook as the rag for PDF.

03:13.060 --> 03:17.290
I'm going to save this over here and we can start working from here.

03:17.290 --> 03:28.840
So the first part which I'm going to do is I'm going to do Rag with a PDF data extraction uh, to give

03:28.870 --> 03:31.360
context to LM.

03:32.470 --> 03:33.280
Amazing.

03:33.280 --> 03:36.580
So that's the main topic that we have got.

03:36.580 --> 03:40.540
And over here I'm going to start working with the PDF extraction.

03:40.540 --> 03:47.200
So in order for me to read the PDF and extract, uh, the information from the PDF, we need to have

03:47.200 --> 03:49.390
some sort of document loaders.

03:49.390 --> 03:53.500
So there are many different document loaders available in uh, the long chain.

03:53.500 --> 03:57.910
So if you just go over here and if you see here in the components, they have got what is called as

03:57.910 --> 03:59.170
the document loaders.

03:59.170 --> 04:04.930
So this is the most important detail that we also need to know while working with the external data

04:04.930 --> 04:05.410
sources.

04:05.410 --> 04:09.970
For instance if you have a CSV Data like a large set of X data.

04:10.000 --> 04:14.020
And if you want to load them and work with that, you can use what is called a CSV loader.

04:14.050 --> 04:15.190
You see that that's straightforward.

04:15.220 --> 04:18.850
You can just call the CSV loader and put your CSV file there.

04:18.850 --> 04:22.420
And then you can load the loader using this particular method.

04:22.420 --> 04:23.230
That's all.

04:23.230 --> 04:24.250
That's what it's going to do.

04:24.280 --> 04:31.120
And if you want to load a web page by doing web scraping and get information out from that particular

04:31.120 --> 04:34.660
web page, you can also do that using this particular web loader.

04:34.660 --> 04:36.730
And then there is this unstructured.

04:36.880 --> 04:42.220
If you have got the unstructured page and if you want to parse that and get the structured data details,

04:42.220 --> 04:44.590
then you can use this unstructured package.

04:44.620 --> 04:49.810
Similarly there is something called as a recursive URL sitemap fire crawl a third party application

04:49.810 --> 04:53.110
which does that for you, and also the doc link which is a third party.

04:53.110 --> 04:55.750
And also there is this hyper browser which is also third party.

04:55.780 --> 04:59.770
You can use it for performing all the different web scraping that you wanted to do.

04:59.770 --> 05:04.720
And also you can run this in headless mode to uh, to perform all the operations.

05:04.720 --> 05:05.830
So this is quite interesting.

05:05.830 --> 05:09.340
I was just reading through this one hyper, uh, browser platform.

05:09.340 --> 05:13.790
You'll notice that the hyper browser platform is a platform for running and scaling headless browsers

05:13.790 --> 05:20.570
in secure, isolated containers built for web automation and AI driven use cases.

05:20.750 --> 05:24.710
And most importantly, it will also do capture handling.

05:24.740 --> 05:30.080
It will automatically solve capture for streamline automated workflows, which is awesome.

05:30.440 --> 05:37.520
So we can use this kind of tool while we actually are going to be working with the data extractions

05:37.520 --> 05:38.000
and stuff.

05:38.120 --> 05:41.450
This is also quite interesting way of doing data extractions.

05:41.990 --> 05:45.230
And yeah, these are the different types of document loaders we have got.

05:45.260 --> 05:51.890
And in the PDF part we have something called as py pdf uh unstructured Amazon Textract.

05:52.040 --> 05:53.810
Mathematics PDF.

05:53.810 --> 05:55.340
Plumber PDF.

05:55.370 --> 05:55.670
PDF.

05:55.700 --> 05:56.870
PDF directory.

05:57.020 --> 05:58.130
There are so many of these.

05:58.130 --> 06:04.010
And similarly there are cloud providers social platform messaging platform productivity tools.

06:04.280 --> 06:07.400
You can see there are so many document loaders available.

06:07.760 --> 06:12.600
Well, the one document that we are going to be using in this particular section is nothing but the

06:12.690 --> 06:14.880
PDF pi PDF.

06:14.880 --> 06:21.330
So I'm going to go to my Visual Studio over here, and I need to install the Pi PDF in order for me

06:21.330 --> 06:24.450
to start extracting the data from my PDF file.

06:24.450 --> 06:27.150
So I'm going to say pip.

06:29.280 --> 06:34.740
Install pi pdf and I'm going to run it.

06:34.740 --> 06:38.940
But before that I need to select the kernel uh over here.

06:38.940 --> 06:41.610
And I'm going to run this over here.

06:41.610 --> 06:46.110
So you see that the Pi PDF is now immediately installed, which is quite amazing.

06:46.260 --> 06:57.570
And once we have the Pi PDF then we have to, uh, load our, uh, as usual stuffs from the uh, environment

06:57.570 --> 07:02.430
variable as well as set the, uh, the LM object.

07:02.430 --> 07:06.360
So I'm going to go copy this whole code that we have written already.

07:06.360 --> 07:13.110
And I'm not even going to add any like description, their like meta information because you already

07:13.110 --> 07:14.340
know about these things.

07:14.340 --> 07:17.520
We have did this enough time so far.

07:17.520 --> 07:22.710
And also we're going to import the whole armor.

07:23.910 --> 07:25.530
And I do that over here.

07:25.980 --> 07:26.640
Run it.

07:26.670 --> 07:31.470
That's going to have our LM, uh, object, which is amazing.

07:31.920 --> 07:36.510
And I think that's all from this particular piece of code.

07:36.510 --> 07:37.980
We don't require that anymore.

07:38.010 --> 07:43.710
And now we're going to do the first part of our diagram, which is going to be the extracting of the

07:43.710 --> 07:44.340
files.

07:44.340 --> 07:46.500
So that is the first part that we have to do.

07:46.530 --> 07:58.140
So in order for the extraction of the files, we are going to say maybe put a markdown here and one

07:58.170 --> 08:06.450
extracting the PDF files, all these PDF files I need to extract right now.

08:06.450 --> 08:11.160
So in order for me to do that I'm going to add the code here.

08:11.160 --> 08:15.330
I'm going to say from lang chain underscore community.

08:15.360 --> 08:21.340
So basically what I'm going to do over here is if I just go back to the document loader over here and

08:21.340 --> 08:27.280
if I'm going to go hit this PDF, the pie PDF over here, you'll notice that the pie PDF, in order

08:27.280 --> 08:30.190
for me to call it I need to install this pie PDF.

08:30.220 --> 08:36.010
And then we also need to import the document order from the pie PDF loader over here.

08:36.010 --> 08:41.020
So this is the code that we have to do in order for me to extract the data from the PDF file.

08:41.020 --> 08:43.840
So I'm going to do this exact same thing over here.

08:44.110 --> 08:46.240
Um pie PDF loader.

08:46.360 --> 08:51.460
Uh, and then we need to mention the files that I'm going to be extracting.

08:51.490 --> 08:51.820
Right.

08:51.850 --> 08:53.560
So where are these files really.

08:53.560 --> 08:55.900
So all these PDF files are sitting over here.

08:55.900 --> 08:58.540
So I can write some ugly code this time.

08:58.540 --> 09:04.960
So I'm going to say PDF one is equal to uh dot slash attention dot pdf.

09:04.960 --> 09:10.600
And the next PDF that I have got is going to be a dot slash.

09:10.600 --> 09:12.130
Uh, I'm forgetting.

09:12.130 --> 09:19.750
And I also have got another PDF which is going to be PDF three, uh, which is going to be a testing

09:19.750 --> 09:21.790
and evaluation of large language models.

09:21.790 --> 09:24.340
So these are the things that we have got over here.

09:24.610 --> 09:26.680
Uh, let me stop this thing.

09:26.680 --> 09:27.790
We don't even need that.

09:27.970 --> 09:42.130
Uh, and we now need to put all these PDF files into an array like PDF one and PDF two and PDF three,

09:42.160 --> 09:43.480
something like this.

09:43.870 --> 09:51.940
And we can now store all these PDF into an probably a documents array, so that we can then process

09:51.940 --> 09:56.440
that particular documents array splitting and making into smaller chunks.

09:56.440 --> 10:03.670
So that I'm going to do something like this for PDF in PDF files.

10:03.790 --> 10:10.030
So I'm going to iterate through all of them and let me now load all these files.

10:10.030 --> 10:12.010
So how do I how am I going to load this.

10:12.010 --> 10:13.420
So loader is equal to.

10:13.450 --> 10:15.580
This is the same code that I'm using really.

10:15.910 --> 10:18.130
Uh and PDF loader.

10:18.130 --> 10:19.240
So py pdf loader.

10:19.240 --> 10:23.660
So py pdf loader and I'm going to pass the pdf file.

10:23.660 --> 10:24.980
So look at that.

10:24.980 --> 10:27.530
This is how I load all the PDF files.

10:27.530 --> 10:29.030
And I'm going to pass through this loader.

10:29.030 --> 10:34.010
And over here I'm going to store into the documents array.

10:34.010 --> 10:43.340
So all the files uh pages is going to be stored into this particular uh documents array.

10:43.430 --> 10:43.940
Right.

10:43.940 --> 10:50.120
So once I have this particular documents array I can now print and I will show you how this particular,

10:50.150 --> 10:52.040
uh, documents is going to look like.

10:52.040 --> 11:01.850
So I'm just going to say probably, uh, length of the documents over here if I try to run this, um,

11:03.410 --> 11:04.070
oops, sorry.

11:04.100 --> 11:05.480
Load dot load.

11:05.480 --> 11:10.190
I forgot to call this particular method and let me try to run this.

11:10.520 --> 11:16.580
So it is right now loading all the files like totally one, two, three files.

11:16.580 --> 11:21.740
And it has ordered around 253 pages in this particular array.

11:21.770 --> 11:26.300
So this particular document now has got 253 pages for us.

11:26.300 --> 11:29.990
So if I want to print any one of the page I can also do that.

11:29.990 --> 11:38.690
So I'm going to say uh, print uh documents uh, of maybe I'm going to print just the first page for

11:38.720 --> 11:39.410
that matter.

11:39.410 --> 11:46.220
And if I try to run that look at that, I am going to get the entire information over here.

11:46.460 --> 11:53.330
And I think this is all coming from the attention dot PDF file.

11:53.330 --> 11:58.850
So you see that we have got the detail here like subject, uh, title uh, and then traps.

11:58.850 --> 12:04.220
And the source is going to be attention dot PDF file and the page number total pages 15 pages.

12:04.220 --> 12:09.320
So it has now extracted around 15 pages in this particular one document over here.

12:09.560 --> 12:12.740
Uh, and you see that it has got the page content.

12:12.740 --> 12:15.530
So you can actually get the page content and you can do it.

12:15.530 --> 12:16.010
But yeah.

12:16.010 --> 12:23.030
So this is how you can notice that the document is, uh, currently being extracted into PDF files and

12:23.030 --> 12:24.290
stored it over here.


========================================================================================

WEBVTT

00:00.080 --> 00:00.470
All right.

00:00.470 --> 00:09.080
So in this lecture we are going to talk about how we can now split this particular gigantic 253 pages

00:09.080 --> 00:19.550
document into, uh, into smaller chunks with a set of uh, set of indexes, probably, uh, and how

00:19.550 --> 00:21.110
we can actually achieve that.

00:21.110 --> 00:26.270
Well, in order for us to achieve this operation, we are going to use this, uh, this library from

00:26.270 --> 00:29.540
the long chain with a text splitter.

00:29.540 --> 00:37.190
So if you just go back to long chain over here and if you're going to search for, uh, text splitter,

00:37.220 --> 00:43.940
something like this, uh, you will notice that we have got, um, this text splitter over here.

00:43.940 --> 00:50.480
And these text splitters are basically going to be helping us to do, uh, a lot of text splitting that

00:50.480 --> 00:54.440
we wanted to do this split test and transform documents and things of that nature.

00:54.440 --> 00:59.090
And one of the text splitter that we are going to be using probably is going to be the recursive character

00:59.120 --> 01:00.170
text splitter.

01:00.170 --> 01:03.890
So that is what we are going to be using in this particular section.

01:03.890 --> 01:07.610
So I'm going to say uh, what is this one.

01:09.050 --> 01:12.440
A two hour text splitting.

01:12.440 --> 01:18.320
So I'm going to use the link chain text splitters.

01:18.320 --> 01:25.010
And I'm going to import a recursive character text splitter over here.

01:25.010 --> 01:33.710
So what I use this recursive text splitter I could able to split the text like how I wanted to.

01:33.740 --> 01:42.050
So I can say splitter is equal to recursive character text splitter.

01:42.050 --> 01:49.190
And over here I can now specify the chunk size, because I need to split the text into multiple chunks

01:49.190 --> 01:53.360
so I can split based on the chunk size.

01:53.360 --> 01:58.100
And I'm going to say every chunk needs to be of 1000 characters.

01:58.280 --> 02:05.420
And then I also need to have a chunk overlap over there.

02:05.420 --> 02:07.640
And the overlap is going to be 200.

02:07.640 --> 02:08.750
So what does that really mean?

02:08.750 --> 02:18.150
Basically, you are going to have a chunk of 1000 characters in one of your chunk, and you are going

02:18.180 --> 02:22.380
to have another chunk as well starting from 1001.

02:22.380 --> 02:29.670
But while these texts are going to be split into multiple chunks, there are chances that you may lose

02:29.670 --> 02:33.840
some of the text from exact position where it is starting.

02:33.840 --> 02:41.130
So it is always wise to have a overlap so that even if there is a duplicate wordings or duplicate characters

02:41.130 --> 02:43.560
in two chunks, that doesn't matter.

02:43.560 --> 02:50.640
But your large language model will have more context when it tries to combine those chunks together.

02:50.640 --> 02:57.840
So that's the reason why we need to have this chunks overlap, so that it knows that this is the continuation

02:57.840 --> 03:00.570
of the actual context that it is working with.

03:00.570 --> 03:06.420
And I'm also going to add a start index, uh, which is going to be true.

03:06.420 --> 03:11.520
And this is important that we need to do because we will know what is the index that we're starting

03:11.520 --> 03:11.940
with.

03:11.970 --> 03:12.600
All right.

03:12.600 --> 03:17.730
So these are the things that we are going to have in the recursive character test text split.

03:17.820 --> 03:21.540
And finally I'm going to do the splitting of the documentation.

03:21.540 --> 03:28.900
So I'm going to say all splits is equal to text splitter dot split the document.

03:28.900 --> 03:33.430
So you see that this particular method split document is from this particular text splitter.

03:33.790 --> 03:35.980
And I need to split which document.

03:35.980 --> 03:38.230
Which is this guy the documents that we have got.

03:38.230 --> 03:43.210
So I'm going to say documents that's going to split the entire documents for me.

03:43.210 --> 03:48.910
And now we can just say how much the length of all these particular document is all about.

03:48.910 --> 03:52.390
So I'm going to say all splits and let's try to run that.

03:52.480 --> 03:55.000
This is going to be 640.

03:55.030 --> 04:06.940
You see that now we have splitted this this document of 253 into 640 different, uh, splits and main

04:06.970 --> 04:07.450
chunks.

04:07.450 --> 04:13.870
So each chunks is going to have quite a lot of data in there.

04:13.870 --> 04:16.660
And as I told you, there are like 1000 characters in there.

04:16.660 --> 04:22.900
So it's going to be, um, it's going to be stored in every single chunks for you.

04:23.050 --> 04:26.650
And now we are pretty good to go with this particular chunk.

04:26.650 --> 04:33.460
We can then finally start doing the embedding part of all these chunked data that we have got.


========================================================================================

WEBVTT

00:00.020 --> 00:07.970
In this lecture, we can talk about how we can embed our text representation of data into vector representation

00:07.970 --> 00:10.820
using the embedding models.

00:10.850 --> 00:17.000
As I told you in the first lecture of this section, we are going to have quite a lot of different,

00:17.000 --> 00:19.160
uh, ways to embed the models.

00:19.160 --> 00:24.410
And we are going to be using the O Lama, of course, to perform the embedding.

00:24.410 --> 00:28.220
And we are going to use this particular piece of code, the O Lama embedding.

00:28.220 --> 00:31.790
And the model that we are going to be using is going to be Lama 3.2.

00:31.820 --> 00:38.000
In this particular case, and this way, this embedding can help us do the vectorization of the piece

00:38.000 --> 00:39.440
of text that we are going to be passing.

00:39.440 --> 00:46.700
And you know that we have already splitted the text into multiple chunks, so we can now easily split

00:46.700 --> 00:47.300
them all.

00:47.330 --> 00:49.580
I mean, embed them all over here.

00:49.580 --> 00:51.620
So let's see how we can actually do that.

00:51.620 --> 00:55.760
So I'm gonna again go back to my notebook uh, over here.

00:55.760 --> 01:00.860
And I'm going to do uh, part three which is the embedding part.

01:00.860 --> 01:06.320
So I'm going to do that and I'm going to add the code there.

01:06.320 --> 01:13.440
So once again for the piece of code I'm just going to say uh, link chain, uh, underscore olama,

01:14.010 --> 01:18.900
uh, and I'm going to import the olama embeddings.

01:19.080 --> 01:22.140
And this will help us do the embedding, as I told you.

01:22.140 --> 01:26.310
So I'm going to say embedding Olama embedding.

01:26.310 --> 01:35.310
And the model which I'm going to be using, uh, is going to be a lemma 3.2 latest model.

01:35.310 --> 01:36.750
So I already have the particular model.

01:36.750 --> 01:39.270
As you remember we we used that before as well.

01:39.270 --> 01:44.400
So I'm going to use that particular model which I have already downloaded within my local machine.

01:44.400 --> 01:49.110
So in order to check how this embedding is going to create the vector, I'm just going to quickly show

01:49.110 --> 01:50.640
you how the vector is going to look like.

01:50.640 --> 01:58.710
So I'm going to say uh vector underscore one is equal to maybe embeddings uh dot embed query.

01:59.220 --> 02:04.560
And over here I'm going to say all splits because this is the one that has got all of the splits.

02:04.560 --> 02:08.550
I'm just going to take the first one from the split just zero.

02:08.850 --> 02:12.000
And I'm going to use the page content over here.

02:12.000 --> 02:13.680
So this is going to be the first vector.

02:13.680 --> 02:16.650
And I'm going to create a second vector.

02:16.650 --> 02:20.770
So vector two probably I'm going to say I'll split off one.

02:20.770 --> 02:22.630
So I mean the first split.

02:22.630 --> 02:25.600
So this zero is the first split one is the second split.

02:25.600 --> 02:27.520
I'm going to take that out over here.

02:27.520 --> 02:30.070
And I'm going to do a small assertion here.

02:30.070 --> 02:37.360
So I'm going to say assert of the length of the vector one is equal to length of the vector two.

02:37.390 --> 02:38.530
So look at that.

02:38.530 --> 02:42.730
Basically I'm just going to see if so what is going to be the length of both of them.

02:42.850 --> 02:44.500
Are they both are equal.

02:44.500 --> 02:45.970
So we're going to assert that.

02:46.000 --> 02:52.510
And then we are going to print the uh the generated uh vector lengths.

02:52.510 --> 02:58.420
So I'm going to say print uh length of the vector.

02:58.960 --> 02:59.800
Uh oops.

02:59.830 --> 03:02.620
Vector one over here.

03:02.620 --> 03:03.970
So let's see what's going to basically happen.

03:03.970 --> 03:07.450
So if I try to run this particular code over here look at that.

03:07.450 --> 03:12.340
Now this embedding is happening and the assertion has got passed as you can see over here.

03:12.340 --> 03:16.540
So both the vector has got same exact length.

03:16.540 --> 03:21.130
So this vector one has got the same length as opposed to uh the second vector.

03:21.130 --> 03:25.930
So that is how the vector splitting is going to happen using this embedding model that we have got.

03:25.930 --> 03:31.710
And you will notice that uh, we are also going to do, uh, the length and the length of the vector

03:31.710 --> 03:32.610
one is this one.

03:32.610 --> 03:43.200
And I'm also going to print the, uh, probably the length of vector one and length of vector two.

03:43.230 --> 03:45.000
I'm just going to put a comma there.

03:45.120 --> 03:48.180
And if I try to print it out look at that.

03:48.180 --> 03:52.260
The vector length of vector one and vector two are pretty much exactly the same.

03:52.350 --> 03:55.740
This is the reason why we need to use this embedding.

03:55.740 --> 04:04.140
And because once we do this embedding, we can then start using this vector for the, uh, for the storage

04:04.140 --> 04:10.020
in the vector stores and from vector stores, we can then retrieve the value, uh, along with the large

04:10.020 --> 04:13.410
language model to perform the sequence matchings and stuff.

04:13.440 --> 04:15.270
Those things we are going to be doing later on.

04:15.270 --> 04:16.860
So this is the embedding part.

04:16.890 --> 04:20.220
I know this is very straightforward because we are using the llama embedding.

04:20.220 --> 04:25.200
But there are some uh, cases where you will be using different sort of embedding for that matter.

04:25.200 --> 04:30.810
And I am trying to use the most simplest version while building the, uh, while building this particular

04:30.810 --> 04:35.610
rack application, but depends upon the nature and complexity of your application and use case.

04:35.610 --> 04:38.820
You may be using different embedding for that matter.

========================================================================================

WEBVTT

00:00.080 --> 00:07.340
And now it's time for us to do the final operation of this particular, uh, this particular extraction

00:07.340 --> 00:16.610
and indexing operation, which is storing the embedded vectors into the storage, which is on the vector

00:16.610 --> 00:17.780
databases.

00:17.810 --> 00:21.260
And if you remember, we already have discussed about the vector stores.

00:21.260 --> 00:27.200
The vector stores are going to store the embedded data and perform similarity search.

00:27.200 --> 00:28.340
That is what is going to do.

00:28.370 --> 00:32.180
And there are many different types of vector stores available, as I told you as well.

00:32.210 --> 00:40.130
So basically you are going to use either in-memory Xtradb, chroma for us, Milvus and many more.

00:40.160 --> 00:44.750
They also have got what is called as SQL server for that matter, and you can use it as well if you

00:44.750 --> 00:45.320
wanted to.

00:45.350 --> 00:51.980
And we are going to be using the chroma over here, which is the, uh, which is the AI native open

00:51.980 --> 00:54.770
source vector database focused on developer productivity.

00:54.860 --> 00:56.450
That is what we are going to be using.

00:56.450 --> 00:59.030
And this is very straightforward to use it as well.

00:59.030 --> 01:07.190
And the way you can use it is you need to first of all install the Lang chain chroma tool, uh, within

01:07.230 --> 01:09.420
our within our system.

01:09.420 --> 01:11.970
So make sure that we actually do that.

01:12.120 --> 01:17.310
And once we have it, we can then start using it over here.

01:17.310 --> 01:22.230
And once again we need to have the Lang Smith API key for the traceability purpose.

01:22.260 --> 01:27.930
We are going to be doing all those things over there pretty soon, and then we can see the traceability

01:27.930 --> 01:31.710
and stuff and see that we have already did the embedding in our last lecture.

01:31.710 --> 01:33.300
So this is not even required.

01:33.300 --> 01:40.110
And while we use with the chroma database, we just have to use the vector stores is equal to chroma.

01:40.110 --> 01:46.380
And the collection name, the embedding function which is this embedding and the persistence uh persistent

01:46.410 --> 01:50.400
directory is going to be the chroma lang chain underscore DB.

01:50.400 --> 01:56.520
So basically this is the place where it is going to store a local copy of your, uh, embedding data.

01:56.550 --> 02:01.830
This is very, very important because you don't really have to run this line of code every single time.

02:01.830 --> 02:09.570
Rather, you can just use from the local data store while you retrieve the data from the for the Rag

02:09.570 --> 02:10.110
operation.

02:10.110 --> 02:12.660
So that is what this particular stuff is going to be doing.

02:12.780 --> 02:18.530
Uh, and the same thing is applicable for any other types of vector stores as well.

02:18.530 --> 02:22.970
So for instance, if you're going to be using this for years, which is the Facebook AI similarity search

02:23.000 --> 02:26.870
library, which is also one of the most popular library in community.

02:26.900 --> 02:32.780
People do use this a lot as well, and you can see that it contains algorithms that search in a set

02:32.780 --> 02:38.330
of vectors of any size up to once that is possible, we do not even fit in the Ram.

02:38.360 --> 02:39.050
Look at that.

02:39.050 --> 02:40.850
It can just do the similarity search.

02:40.850 --> 02:43.940
So good, uh, of this big size.

02:43.940 --> 02:46.370
And over here the code is also pretty similar.

02:46.400 --> 02:52.760
You're going to have an embedding, and then you will see that it is going to use an in-memory, um,

02:52.760 --> 02:54.110
data store doc store.

02:54.110 --> 02:57.800
And then it is going to do these, these, these things, which is amazing.

02:57.950 --> 03:00.170
So you can do that as well.

03:00.230 --> 03:02.420
And like how the details are going to be managed.

03:02.420 --> 03:04.040
It's all shown in here.

03:04.070 --> 03:04.760
Amazing.

03:04.760 --> 03:06.260
So this is about us.

03:06.350 --> 03:12.230
And as I told you we are going to be using the chroma in our case for our Rag operation.

03:12.230 --> 03:14.330
So we'll see how we could able to achieve that.

03:14.330 --> 03:16.190
So I'm going to go to this chroma again.

03:16.190 --> 03:21.680
And let's first do the setup so that we can talk about how we can use the Uh, chroma.

03:22.280 --> 03:24.590
In our next lecture of this course.

03:24.590 --> 03:32.090
So I'm going to go to the, uh, Visual Studio Code and let's try to do a markdown over here.

03:32.360 --> 03:41.840
I'm going to say for off vector stores and I take and I'm going to add the code.

03:42.110 --> 03:45.290
This is the installation part that I'm going to be doing.

03:45.290 --> 03:50.240
And I'm just going to say chroma lang chroma, which is this one.

03:50.360 --> 03:54.230
I'm going to just install the latest and the greatest version of the Lang Chroma.

03:54.260 --> 03:55.400
I've tried it before.

03:55.520 --> 03:56.600
It just works fine.

03:56.600 --> 04:01.430
So I'm not worried about using the latest version without any hesitation.

04:01.430 --> 04:05.810
So let's run this particular piece and see what's really going to happen.

04:05.960 --> 04:06.530
There we go.

04:06.530 --> 04:10.820
It's installed and we can just comment this particular piece because we don't need to run this every

04:10.820 --> 04:11.570
single time.

04:11.570 --> 04:14.510
So that's what I'm going to be doing over here.

04:14.780 --> 04:19.850
And now we are going to be using the chroma over here.

04:19.850 --> 04:27.920
And we'll start writing the code, and we'll see how we can start storing the document details into

04:27.950 --> 04:29.000
our chroma.

========================================================================================

WEBVTT

00:00.110 --> 00:05.150
So let's get back to the documentation one more time to see what they have told us to do it.

00:05.150 --> 00:07.910
So this is what they have told us over here.

00:07.910 --> 00:11.780
So from Lang chain chroma import chroma and there is this vector store.

00:11.810 --> 00:15.650
I'll probably copy this code and I'm going to paste it over here.

00:15.800 --> 00:19.850
Uh so chroma and you see that I'm going to be using this chroma.

00:19.850 --> 00:26.660
And then the collection name and the embedding function and the persist directory which is going to

00:26.660 --> 00:29.570
be chroma lang chain DB.

00:30.140 --> 00:30.860
Uh, which is great.

00:30.890 --> 00:35.270
I mean, I don't have any problem with using any of the name, so I'm just going to go with that.

00:35.270 --> 00:41.570
But the only thing which I don't think is going to be fitting in our requirement is going to be the

00:41.570 --> 00:42.830
collection name over here.

00:42.830 --> 00:47.540
So instead of this collection name, I'm going to give what is called as documents.

00:47.540 --> 00:54.200
And the documents which I'm going to be giving over here is going to be all splits.

00:54.200 --> 01:01.990
So the one that we have splitted into multiple chunks, which is this guy over here is what we are going

01:02.020 --> 01:03.610
to be giving over here.

01:03.610 --> 01:10.780
And the embedding function is the embedding function that we have created over here in the step three.

01:10.810 --> 01:13.030
So that is what I have put over here.

01:13.060 --> 01:13.960
This is step two.

01:13.990 --> 01:15.010
This is step three.

01:15.010 --> 01:20.050
And we also are going to store the data into this particular chroma lang DB.

01:20.080 --> 01:23.080
So that's going to be this particular case over here right.

01:23.110 --> 01:25.840
So that is going to be the vector store for us guys.

01:25.870 --> 01:29.230
And we'll see how the vector store is going to store the data.

01:29.260 --> 01:31.900
This process is going to take a long time.

01:31.900 --> 01:40.210
And it is also going to blow my Max fan for the first time, because it does require quite a lot of

01:40.210 --> 01:42.790
different operation to be taken care.

01:43.390 --> 01:49.810
And look at that while I try to run this particular code over here, it says that the documents of all

01:49.810 --> 01:57.460
store, all splits cannot be done because the because the keyword documents is unexpected.

01:57.460 --> 02:00.520
So we can't really pass the documents over here.

02:00.520 --> 02:03.520
So what is the solution for this particular problem?

02:03.520 --> 02:09.130
Well we need to use this from documents method which does that exact same operation.

02:09.130 --> 02:16.630
So we saw this from documents is the one method which can help us do uh loading the data from the particular

02:16.630 --> 02:17.080
document.

02:17.080 --> 02:23.170
So even though we try to use the directly from here, it's only specifically used for the collection.

02:23.170 --> 02:27.370
But if you're going to be using for the documents then this from document method is what you need to

02:27.370 --> 02:28.150
be using.

02:28.270 --> 02:34.390
And you can see that even this also shows us an error like from documents over here.

02:34.390 --> 02:41.290
And the reason why this is happening is because we actually need to use not the embedding function here,

02:41.290 --> 02:46.330
but we have to use what is called as embedding, uh, to make this code to work.

02:46.330 --> 02:48.310
Uh, yeah, that is the problem, I guess.

02:48.310 --> 02:52.000
And now if I try to run this, you will notice that the code is just going to work.

02:52.000 --> 02:57.790
And you'll also immediately notice that we have got a, uh, chroma lang chain DB.

02:58.230 --> 03:01.020
Uh, like one created over there.

03:01.020 --> 03:08.790
And this is going to store all the documents for us in the vector format, and it is going to create

03:09.180 --> 03:11.700
a file for me over here.

03:11.700 --> 03:15.210
So it's going to take a bit of a time for me to save this particular data.

03:15.210 --> 03:23.640
But now you got the idea of how we can store the data from the splitted data after embedding into a

03:23.640 --> 03:27.900
persistent storage, which is using the chroma vector stores.

03:27.900 --> 03:35.640
So this is the process of how we can do this entire extraction and indexing operation while building

03:35.640 --> 03:37.860
the rack operation with PDF files.

03:37.860 --> 03:43.500
And the next operation we need to do is to retrieve this data from this particular rack operation,

03:43.500 --> 03:47.040
which is the stored data from the vector stores.

03:47.040 --> 03:50.640
We are going to be retrieving the data from the vector stores by.

03:50.670 --> 03:52.980
And also we're going to use large language models.

03:52.980 --> 03:55.650
And then we can ask the question and we're going to get the answer.

03:55.650 --> 03:58.860
So we'll see how we can do that from our next lecture.

========================================================================================

WEBVTT

00:00.110 --> 00:06.650
So now that we have the data in the vector stores, now it is time for us to start doing the next operation,

00:06.650 --> 00:11.600
which we are doing in our Rag, which is the retrieval and generation.

00:11.630 --> 00:17.300
So before we start talking about the generation part, let's start about the start thinking about the

00:17.300 --> 00:22.250
retrieval part, like how do we retrieve the information out from this vector data stores and how is

00:22.250 --> 00:25.370
the data is even stored in the vector stores in the first place?

00:25.370 --> 00:29.840
That is something that we need to understand so that it will be very, very helpful for you to see how

00:29.840 --> 00:36.380
the data stores, uh, or the data is being retrieved from which document and what is the document acting

00:36.380 --> 00:41.540
as a data source for the questionaries that we are trying to ask and everything we are going to be doing

00:41.540 --> 00:43.550
from the similarity search.

00:43.550 --> 00:49.580
And once again, all these similarity search are done by the algorithm called as cosine search, because

00:49.610 --> 00:55.970
cosine search is the one which is actually being used by the similarity search of the vector store database

00:55.970 --> 00:57.140
that we are using at the moment.

00:57.140 --> 01:01.820
So I'm going to go to our, um, Visual Studio Code over here.

01:01.820 --> 01:08.750
And I'm going to put a markdown over here and I'm going to say, uh, stage five, which is going to

01:08.750 --> 01:19.310
be the, uh, retrieving, uh, from the persistent, uh, data store, which is the vector data store.

01:20.000 --> 01:27.470
Uh, and I'm gonna put the tick over there and I'm going to add the code so the vector stores, I'm

01:27.470 --> 01:35.900
gonna, uh, this time I'm going to use the one from our, uh, local persistent database, which is

01:35.900 --> 01:38.660
going to be the chrome Chrome r lang chain DB.

01:39.170 --> 01:43.520
Uh, because I don't want to use the one which runs for like three minutes, 24 seconds every single

01:43.550 --> 01:43.760
time.

01:43.760 --> 01:46.640
It's going to take a lot of time and resources of my machine.

01:46.640 --> 01:46.970
You see that?

01:46.970 --> 01:48.050
It took me three minutes.

01:48.050 --> 01:53.030
So depending upon your machine, uh, you will have the speed difference as well.

01:53.030 --> 02:01.260
And I'm going to say the persistent directory over here is going to be uh, dot slash oops dot slash

02:01.380 --> 02:03.420
comma long chain db.

02:03.450 --> 02:09.840
Over here I'm going to use the embedding function which is going to be embedding.

02:09.840 --> 02:12.210
So this time I'm not going to use the from document.

02:12.210 --> 02:16.350
That's the reason why I can happily use this embedding function over here, which is not going to be

02:16.350 --> 02:17.280
any problem.

02:17.580 --> 02:21.000
And now I wanted to do a similarity search.

02:21.000 --> 02:26.730
So let's do a similarity search and see what we talk about that see this vector stores mainly has the

02:26.730 --> 02:28.890
power of what is called as the similarity search.

02:28.890 --> 02:37.380
So you can do similarity search and you can do similarity search by um by any one of the URI or uh,

02:37.860 --> 02:42.510
so they have got so many of these, I'm going to just go with the similarity search over here.

02:42.510 --> 02:48.870
I'm going to ask a question over here, which may be common or present in all these, uh, 2 or 3 documents.

02:48.870 --> 02:57.600
So I'm going to ask like, what is um, maybe our types of, uh, lm testing something like that, I

02:57.600 --> 03:03.240
don't know, and I want to get the top three of that particular similarities.

03:03.240 --> 03:06.240
So I'm just going to give you just the three similarities over here.

03:06.240 --> 03:08.520
And I want to print the result this time.

03:08.520 --> 03:11.430
So let's see what is going to happen the moment I do it.

03:11.430 --> 03:18.210
You see that we get the document and we also get an ID this is how it is being stored on the vector

03:18.540 --> 03:19.560
database.

03:19.560 --> 03:25.170
And you see that now we get a metadata like author creation date of the file.

03:25.320 --> 03:29.880
And the created creator is the LaTeX with hyper ref.

03:29.880 --> 03:31.890
And this is the keyword.

03:31.890 --> 03:35.220
And you see that the page number nine, page six, page 200.

03:35.220 --> 03:37.050
So there are three different places.

03:37.050 --> 03:41.100
The sources are taken for the same question that we are asking.

03:41.100 --> 03:46.140
And if I just go all the way over here, look at that.

03:46.170 --> 03:50.340
Now it is choosing this information like types of lab testing.

03:50.340 --> 03:51.720
It is choosing from three sources.

03:51.720 --> 03:59.220
One is the LM for getting PDF, other one is the attention PDF and then testing and evaluating lm PDF,

03:59.250 --> 04:00.420
which is amazing right?

04:00.450 --> 04:07.560
So this, this kind of question have the similarity search or the cosine similarity in three different

04:07.560 --> 04:09.330
places, which is amazing.

04:09.330 --> 04:14.430
And now let's ask like what is, uh, bias testing?

04:14.640 --> 04:19.770
And if I try to run that, I'm sure this is just sitting in only one document.

04:19.770 --> 04:24.120
Um, but I am not sure if the source might change.

04:24.120 --> 04:26.370
Uh, which could be the case.

04:26.370 --> 04:29.970
Uh, let's see, where is the source?

04:29.970 --> 04:31.230
In here.

04:31.260 --> 04:32.160
Yeah, look at that.

04:32.190 --> 04:34.470
Testing and evaluating llm pdf.

04:34.470 --> 04:40.710
So this I know that this particular document I saw somewhere that it has got this bias testing.

04:40.710 --> 04:47.670
So immediately the vector store could easily identify that this particular data is sitting on this testing

04:47.670 --> 04:49.680
and evaluation LLM dot pdf file.

04:49.680 --> 04:50.940
And it is reading it from there.

04:50.970 --> 04:56.730
I mean it's not going to the data to the PDF file to read this time, but based on the similarity search,

04:56.730 --> 05:02.680
it could able to find the chunk of data which is stored as a vector in the vector store database and

05:02.770 --> 05:04.510
not able to get the result over there.

05:04.510 --> 05:08.170
We can also see what is the page content of these.

05:08.170 --> 05:14.830
So let's say I'm going to do for uh doc in uh results or result.

05:14.890 --> 05:20.680
Uh, and I'm going to print the doc dot.

05:21.040 --> 05:24.400
Uh do we have something called as page underscore content.

05:24.430 --> 05:26.530
Yeah I'm going to print that over here.

05:26.560 --> 05:27.250
Let's see.

05:27.520 --> 05:28.330
Look at that.

05:28.330 --> 05:30.850
So chapter 60 logical reasoning correctness.

05:30.850 --> 05:32.920
So it is reading that from there.

05:33.220 --> 05:40.060
And you see that if I go to the text editor this is the entire information coming up over here for the

05:40.060 --> 05:41.860
question that you have asked.

05:41.890 --> 05:42.610
I'm not sure.

05:42.640 --> 05:47.620
I mean, once we format this particular data, this things will be even more better, but these are

05:47.620 --> 05:53.830
going to be acting as a context for our large language model later on while we are going to be using

05:53.830 --> 05:54.790
the drag operation.

05:54.790 --> 06:01.100
So this is the context of the information that you need for your large language model, which can use

06:01.100 --> 06:06.680
this information to analyze and give you the output for the questions that you are going to be asking.

06:06.680 --> 06:13.220
So for instance, you're going to be asking a query in the question saying, what are the types of,

06:13.220 --> 06:15.410
uh, large language model testing?

06:15.410 --> 06:24.860
Then this data is going to be going to this LLM, but it in turn going to read from the uh, read from

06:24.860 --> 06:26.360
the retrieval model.

06:26.390 --> 06:29.300
Actually, this diagram has got a one of this small change.

06:29.300 --> 06:32.420
I would say let's do that change.

06:32.450 --> 06:34.100
Why is it not getting bigger.

06:34.130 --> 06:34.670
Yeah.

06:34.700 --> 06:35.570
There we go.

06:35.750 --> 06:45.470
So we could just say the question that you ask is going to go to the, uh, large language model, but

06:45.470 --> 06:49.970
in turn you are going to be getting the answer.

06:50.270 --> 06:55.700
Retrieved from our, uh, from the data store as well, for this matter.

06:55.700 --> 06:58.220
So this is what is going to really happen.

06:58.220 --> 07:04.540
That is how your large language model is going to get the context of what your question is and where

07:04.540 --> 07:06.550
the data source it needs to read through from.

07:06.550 --> 07:10.180
And then it's going to give you the response that you're looking for, which is amazing.

07:10.210 --> 07:16.960
So we'll see this entire operation in action while we start, uh, performing this operation.

07:16.960 --> 07:18.460
We can also actually we can.

07:18.490 --> 07:20.140
I just forgot to show you one more thing.

07:20.140 --> 07:26.380
We can also see the similarity search score as well to see if the the score that you are that you are

07:26.380 --> 07:27.940
searching for is correct or not.

07:27.940 --> 07:36.970
So if we're just going to say uh vector store dot uh similarity search score, do we have that uh similar

07:36.970 --> 07:42.040
score with uh score over here.

07:42.340 --> 07:49.240
And then if I'm going to ask this exact same question that I just asked, what is the bias testing?

07:49.660 --> 07:52.540
Uh, and I'm going to put that over here.

07:52.540 --> 07:56.860
And now if I'm going to, uh, see what is the score.

07:56.890 --> 08:02.990
So I'm going to say, uh, Result of probably a zero.

08:03.590 --> 08:06.320
And if I try to run this, look at that.

08:06.320 --> 08:13.190
So we are going to get a, um, a document over here, just this one.

08:13.190 --> 08:16.370
And this is the score that we are getting over here, which is pretty correct.

08:16.400 --> 08:19.370
I mean, this is how you should see the things will be.

08:19.430 --> 08:30.080
Uh, and if I'm going to ask another question over here, what are the types LM testing?

08:30.440 --> 08:35.720
And if I hit run, you see that the similarity score, uh, similarity search score comes in over here.

08:35.750 --> 08:40.670
This things it will give you a confidence that you are, um, you have got the data that you are looking

08:40.670 --> 08:40.940
for.

08:40.970 --> 08:45.710
Now you got the exact data that is required stored in vector database.

08:45.710 --> 08:52.370
And now we're going to see how we can inject this data from this data store into our large language

08:52.370 --> 08:54.890
model while we start asking the question.

08:54.890 --> 09:00.020
So the final operation that we are going to be doing is the generation part.

========================================================================================

WEBVTT

00:00.110 --> 00:05.600
So in order for retrieving the data, if I just go to the long chain over here, you will see that there

00:05.600 --> 00:07.940
are many different retrievers available.

00:07.970 --> 00:09.800
I mean, yeah, this is the new thing as well.

00:09.800 --> 00:16.280
We have to learn about retriever is an interface that returns a document given any unstructured query.

00:16.790 --> 00:17.780
That's how it does.

00:17.810 --> 00:21.410
And it is more general than a vector store.

00:21.440 --> 00:28.700
A retriever does not need to be able to, uh, store a document only returns them and retrievers can

00:28.700 --> 00:35.540
create can be created from vector store, but are also broad enough to include a Wikipedia search and

00:35.570 --> 00:37.310
Amazon Kendra for that matter.

00:37.310 --> 00:42.290
And retrievers accept string query as an input and returns a list of document as an output.

00:42.320 --> 00:43.010
Look at that.

00:43.010 --> 00:48.350
This retriever is what we really need for our operation, because we store our data in the vector data

00:48.380 --> 00:48.800
store.

00:48.800 --> 00:55.100
And now we are going to use this retriever as a streamlined interface to retrieve the data from our

00:55.100 --> 00:55.790
data store.

00:55.910 --> 01:02.880
When I say streamlined way of retrieving the data from the data store, because today we are using the

01:03.090 --> 01:08.580
Chrome data store and tomorrow we may use fires, or tomorrow we may be using some other data stores.

01:08.580 --> 01:13.560
So we wanted to still make sure that our existing code that we are trying to retrieve from the data

01:13.590 --> 01:18.510
store still works, even though the the document store changes.

01:18.510 --> 01:24.870
So that's the reason why we need to use this retriever, because retriever will let us retrieve the

01:24.870 --> 01:28.230
data regardless of whatever vector stores that we use.

01:28.230 --> 01:34.740
The retriever is going to work with the same way, like how it used to work, because all the data store

01:34.770 --> 01:41.370
implements this retriever interface, and it will ensure that there is a smooth transitioning of our

01:41.370 --> 01:42.690
data retrieval process.

01:42.690 --> 01:45.750
And that is why this retriever is so important.

01:45.750 --> 01:51.120
And you can see that there are many different, uh, documents available.

01:51.120 --> 01:55.980
Again, they have given some details over here, like some Amazon Knowledge Base retriever, Azure AI

01:56.010 --> 01:58.440
search retriever, Elasticsearch Retrievers.

01:58.440 --> 02:04.800
These are something which is also available over here, but we are going to use the retriever that we

02:04.800 --> 02:11.310
are going to, um, need to for retrieving our database data as well.

02:11.310 --> 02:13.230
So let's see how we could able to achieve that.

02:13.230 --> 02:14.700
It's very straightforward as well.

02:14.700 --> 02:17.910
So I'm going to go here and I'm going to go to the markdown.

02:18.000 --> 02:20.430
And over here I'm just going to say eight.

02:20.580 --> 02:22.260
Um is it 8 or 7.

02:22.290 --> 02:25.680
Just see uh this is five.

02:25.680 --> 02:27.360
So maybe this is six I'm sorry.

02:27.900 --> 02:35.610
Uh, six and retrievers, uh, in uh, long chain.

02:36.960 --> 02:45.720
And I'm going to hit like that and put the code over here, and I'm going to write the retriever.

02:46.770 --> 02:51.090
Uh, so retriever is going to be I'm going to use our vector store.

02:51.090 --> 02:55.590
And within this vector store we have got this method called as as retriever.

02:55.620 --> 02:56.500
Look at that.

02:57.010 --> 02:57.850
This is pretty cool.

02:57.880 --> 03:03.880
And now with this we are going to change our vector store to retrieve the data using this retrieval

03:03.880 --> 03:04.480
format.

03:04.600 --> 03:09.190
And I'm going to set two properties in here.

03:09.190 --> 03:15.220
One is the search type which is going to be similarity.

03:15.430 --> 03:24.550
And the next one we're going to set is the search keyword, which is the arguments that we have to pass

03:24.550 --> 03:25.540
a args.

03:25.720 --> 03:34.780
And I'm going to set the keywords as k which is equal to 1 or 3 or whatever that you wanted to do.

03:34.990 --> 03:36.580
We can do that over here.

03:36.670 --> 03:41.920
So yeah, whichever is the thing that we wanted to go with I can do that over here.

03:41.920 --> 03:46.390
So let me just set one for now, because I can just show you how the response is going to look like.

03:46.390 --> 03:50.470
So this is pretty much exactly the same thing that we did over here.

03:50.470 --> 03:51.640
As you can see.

03:51.670 --> 03:52.960
Like k is equal three.

03:52.990 --> 03:54.790
And this is the similarity search.

03:55.010 --> 03:58.910
This is the same thing that I'm doing, but I'm setting it in the retriever this time.

03:58.910 --> 04:02.480
And now I can just say retriever dot.

04:02.480 --> 04:13.130
And there is this, a batch method where we can get all the documents in one single shot.

04:13.130 --> 04:17.090
So this is, as I told you, the retriever is going to retrieve the data from the vector database.

04:17.210 --> 04:18.110
We are going to use this.

04:18.110 --> 04:22.310
So I'm going to say what is the bias measurement.

04:22.340 --> 04:22.850
Look at that.

04:22.850 --> 04:24.290
I'm just going to ask this question.

04:24.530 --> 04:28.640
And I'm also going to say how to test human safety against LM.

04:28.640 --> 04:32.900
So how to test human safety.

04:33.140 --> 04:36.980
Uh, against uh LM.

04:37.160 --> 04:45.890
And I'm also going to ask probably um, maybe just this testing and evaluation, uh, document.

04:46.550 --> 04:54.150
Sorry, not the LM forgetting how LM forgets the context.

04:54.180 --> 04:56.640
So I'm going to ask three types of question over here.

04:56.880 --> 05:01.680
And I'm going to run this retriever logic over here.

05:01.830 --> 05:06.120
So let's see what is going to happen while we get this particular response over here.

05:06.120 --> 05:11.220
So because I'm setting like one as the k is equal to one, you will notice that I'm going to get the

05:11.220 --> 05:12.540
response over here.

05:12.540 --> 05:13.590
And look at that.

05:13.830 --> 05:15.780
It says LM forgetting dot pdf.

05:15.780 --> 05:21.120
I think the first one is going to be um, this this particular answer is going to be from LM forgetting

05:21.120 --> 05:26.130
that PDF over here, and it's going to give you some response for that.

05:26.130 --> 05:34.350
And then there is this how to test a human safety, which is coming from our, uh, from our, our testing

05:34.350 --> 05:36.990
and evaluation lm, pdf, uh document.

05:36.990 --> 05:42.120
And there is this testing and evaluation PDF document for these third one as well.

05:42.150 --> 05:43.230
And the second one as well.

05:43.230 --> 05:49.500
So, so yeah, these are all just being retrieved based on the questions that we are asking.

05:49.500 --> 05:52.470
So it is working as expected which is pretty cool.

05:52.500 --> 05:59.040
This is how we can see that not only just by using the vector store or similarity search, or using

05:59.040 --> 06:05.220
the similarity search value that you are going to be using over here can get the data, but retrieval

06:05.220 --> 06:13.410
is the actual interface, which is going to be used by all the different, uh, data stores or vector

06:13.440 --> 06:14.370
data stores.

06:15.210 --> 06:19.320
We need to use this retriever for our retrieval operation.

06:19.320 --> 06:24.960
And that is exactly what we are going to be doing in our next lecture while we are trying to use, uh,

06:24.960 --> 06:33.000
what is called as a manual retrieval of the data from this particular retriever.

06:33.000 --> 06:38.520
And once again, in order for us to retrieve the data, we are going to be using two approaches, and

06:38.520 --> 06:42.960
I will show you what those approaches are in our upcoming lectures, but you'll understand how awesome

06:42.960 --> 06:43.380
it is.

06:43.380 --> 06:49.530
Now we are going to start querying our large language model with the context of information that we

06:49.530 --> 06:50.790
have got in the vector store.

========================================================================================

WEBVTT

00:00.230 --> 00:01.100
All right.

00:01.100 --> 00:08.270
So now that we are going to see how we can query our actual large language model, I mean, ask our

00:08.270 --> 00:14.090
large language model to query the, uh, the data from the vector stores and get the response based

00:14.090 --> 00:15.230
on the correct context.

00:15.230 --> 00:17.960
So we'll see how that is going to happen this time.

00:17.960 --> 00:29.750
So in order for doing that I am going to say, um, this is going to be using uh, uh, document retrieval

00:31.670 --> 00:32.720
um, manually.

00:32.720 --> 00:37.760
So I'm saying manually this time and you'll understand what I really mean about that retrieval manually.

00:38.030 --> 00:40.190
Um, and I'm going to hit okay.

00:40.190 --> 00:43.430
And you'll understand why I'm saying this in a in some time.

00:43.430 --> 00:45.350
But for now, just don't worry about it.

00:45.410 --> 00:54.350
I'm just going to say, uh, link chain dot prompts, uh, maybe like chain core, uh, dot output parser.

00:54.380 --> 01:00.290
I'm going to import our string output parser, if you remember that we were using before, uh, and

01:00.290 --> 01:06.630
now over here I'm going to ask a query over here.

01:06.630 --> 01:21.570
So I'm going to say um, maybe explain how the position wise, uh, feed forward network works.

01:22.740 --> 01:26.430
Network uh, calculation works something like that.

01:26.430 --> 01:29.910
So this is the detail which is already there in the document.

01:29.910 --> 01:38.580
I'm just thinking maybe we can ask that and I'm going to say the retrieved um, docs.

01:38.610 --> 01:47.820
So retrieved uh, docs is equal to I'm going to ask call our retriever that we created in our last lecture

01:47.820 --> 01:50.100
which is this guy retriever.

01:50.100 --> 01:56.070
And I'm going to say dot get relevant documents.

01:56.100 --> 01:56.790
Look at that.

01:56.820 --> 01:57.960
This is so easy.

01:57.960 --> 02:04.270
So if I'm just going to ask like get the relevant document, it is going to give me all the documents.

02:04.270 --> 02:12.640
But once we get all the documents, we also need to make sure that we merge all these documents, uh,

02:12.640 --> 02:17.740
so that we can create the context text for our large language model.

02:17.770 --> 02:19.840
Right now we have to do that one as well.

02:19.840 --> 02:27.070
So I'm going to say slash n slash n uh dot join.

02:27.070 --> 02:29.050
So I'm going to join one by one.

02:29.080 --> 02:42.880
And I'm going to say uh doc dot page content right for doc in the retrieved documents.

02:42.880 --> 02:50.560
So this is going to join all the documents that we have got into one single document with some of course

02:50.560 --> 02:53.050
there is some delimiter there.

02:53.050 --> 02:57.820
And now that becomes our context text that we are going to be passing in.

02:57.820 --> 03:02.290
And now I need to create our chat prompt.

03:02.320 --> 03:03.040
There we go.

03:03.070 --> 03:06.350
So that is when our chat prompt is going to coming in.

03:06.500 --> 03:07.640
Remember our chat prompt?

03:07.640 --> 03:10.550
The olden days that we were talking about in our earlier lectures of the course?

03:10.550 --> 03:12.380
We're going to bring in that guy over here.

03:12.380 --> 03:17.660
So I'm going to say prompts import a chat message prompt.

03:17.660 --> 03:26.810
And over here on the chat message prompt I'm just going to say prompt template is equal to chat prompt

03:26.840 --> 03:29.300
template dot from template.

03:29.300 --> 03:35.420
And over here I'm going to be creating our chat prompt template.

03:35.420 --> 03:39.560
So I'm just going to say this oops.

03:41.930 --> 03:42.830
Over here.

03:42.830 --> 03:45.110
And now I'm going to create my prompt.

03:45.110 --> 03:48.920
So basically I'm going to give you some questions over here.

03:48.920 --> 03:52.040
So I can use system and then human message and all those things.

03:52.040 --> 03:54.140
But I just want to keep things simple this time.

03:54.140 --> 03:58.160
So I'm going to say you are an AI assistant.

03:58.940 --> 04:00.530
Uh, right.

04:00.530 --> 04:11.550
And you're going to use the following context to answer the question correctly, and the context is

04:11.550 --> 04:13.920
going to be the context I'm going to give.

04:13.920 --> 04:22.680
And if you don't know the answer, just tell.

04:22.740 --> 04:24.870
I don't know.

04:25.950 --> 04:26.400
All right.

04:26.430 --> 04:30.990
This is something that I'm going to say to the large language model over here.

04:30.990 --> 04:34.260
And now I'm going to give the context over here.

04:34.260 --> 04:38.640
I'm going to say the context, which I'm going to be passing in for this particular query.

04:39.150 --> 04:46.680
And I'm also going to supply the question which I'm going to be asking.

04:47.400 --> 04:50.700
Uh, so this is something I need to pass as well.

04:50.790 --> 04:54.690
And that is going to be slash slash n.

04:55.770 --> 05:02.070
And finally, I'm expecting the AI to answer, which is going to be sitting over here.

05:02.070 --> 05:05.580
So this is how my prompt template is going to be over here.

05:05.610 --> 05:05.970
Look at that.

05:05.970 --> 05:06.570
That's beautiful.

05:06.600 --> 05:06.990
Right.

05:07.000 --> 05:09.340
So that's my prompt template.

05:09.340 --> 05:14.770
And now I can use this prompt template within our pipeline to perform this operation.

05:14.770 --> 05:17.500
So I'm going to create a chain function over here.

05:17.500 --> 05:22.600
And I'm going to say prompt template which is going to be acting as an input for the large language

05:22.600 --> 05:23.080
model.

05:23.080 --> 05:26.080
And get me the output in the string parser.

05:26.110 --> 05:30.010
These are things that we did before in our earlier lectures of this course.

05:30.220 --> 05:32.560
Um, so I'm going to do that over here.

05:32.560 --> 05:34.390
And of course, you know what we need to do.

05:34.390 --> 05:41.440
So I'm going to say, uh, response is equal to chain dot.

05:41.470 --> 05:43.390
You know what it is because it's a runnable.

05:43.390 --> 05:45.940
So we need to call this invoke method.

05:45.940 --> 05:48.460
And over here we need to pass two things right.

05:48.490 --> 05:50.350
The first one is the context.

05:50.350 --> 05:52.600
And the next one is going to be the question.

05:52.600 --> 05:54.040
So these are two things that we need to pass.

05:54.040 --> 06:04.150
So I'm going to say context uh which is going to be the context text that we have got which is this

06:04.150 --> 06:04.720
one.

06:04.870 --> 06:13.240
And we also need to pass the Question, which is going to be the query that we have got, which is the

06:13.240 --> 06:13.600
question.

06:13.630 --> 06:13.900
Right.

06:13.930 --> 06:16.060
So that is the question.

06:16.630 --> 06:20.200
And now we will see what is going to be the response.

06:20.230 --> 06:23.950
So I'm going to say print response over here.

06:24.280 --> 06:25.060
Look at that.

06:25.060 --> 06:31.660
That is our actual code which is going to be retrieving the relevant documents.

06:31.660 --> 06:37.270
And then it's going to stitch all of them together, which is going to be acting as a context text.

06:37.270 --> 06:41.320
And then we are going to pass it to our prompt template for the given context.

06:41.320 --> 06:43.930
And then we're going to ask the question and we're going to get the answer.

06:43.930 --> 06:46.360
So let's see what is going to basically happen.

06:47.500 --> 06:48.610
Oh look at that.

06:48.640 --> 06:49.600
What is this.

06:49.630 --> 06:51.520
I'm getting an error there.

06:51.550 --> 06:54.010
What is this chat message prompt.

06:54.010 --> 06:57.820
Missing input value prompt.

06:58.480 --> 07:00.190
Oh sorry about that.

07:00.190 --> 07:04.270
I'm actually using this chat message prompt template instead of the chat prompt template.

07:04.270 --> 07:05.920
That is the problem over here.

07:06.400 --> 07:07.570
Ah look at that.

07:07.600 --> 07:08.710
Sorry about it.

07:08.950 --> 07:14.900
If you are using the chat message prompt template, then we need to pass the the message placeholder

07:14.900 --> 07:15.260
here.

07:15.260 --> 07:19.670
And because we're not passing the message placeholder, we should be fine just with the chat prompt

07:19.700 --> 07:20.240
template.

07:20.240 --> 07:23.120
That is the problem that we have got over here.

07:23.120 --> 07:25.160
And let me try to run this code again.

07:25.160 --> 07:27.590
So let's see what is going to happen over here.

07:27.620 --> 07:28.580
There we go.

07:28.610 --> 07:29.480
Look at that.

07:29.480 --> 07:37.820
So for this question the the actual LLM is giving us the response saying the provided contract does

07:37.820 --> 07:39.920
not have the information about this one.

07:39.920 --> 07:46.670
It seems to be discussing the method for detecting bias on social data set and conversational AI system.

07:46.670 --> 07:51.830
If you have different context or need explanation related to this topic, please provide that information.

07:51.830 --> 07:52.520
Look at that.

07:52.520 --> 07:57.140
So for this question, the LLM don't have the answer, which is amazing.

07:57.140 --> 08:00.050
That's the reason why I just gave like a very complex question over here.

08:00.050 --> 08:09.830
So maybe we can probably ask over here that how to test a translation in LLM.

08:09.830 --> 08:10.940
Something like that.

08:10.940 --> 08:16.440
So maybe this question can be answered because we have seen, uh, there are different types of testing

08:16.470 --> 08:18.270
available for the translation.

08:18.270 --> 08:21.960
Maybe this LLM knows about it and look at that.

08:21.960 --> 08:28.140
Now we can see that to test the LLM like GPT, GPT four you can find the structured approach.

08:28.140 --> 08:31.440
And they have got this information over here coming up.

08:31.440 --> 08:38.520
So these are the ways that you can do the testing to test the uh to test the translation.

08:38.520 --> 08:41.820
So these are all coming up from uh over here.

08:41.820 --> 08:48.900
So this shows that we could able to actually retrieve the information out from our documentation, which

08:48.900 --> 08:49.740
is amazing.

08:49.740 --> 08:55.920
So this proves the point that we could able to query from our large language model using this query

08:55.920 --> 08:56.640
over here.

08:56.640 --> 09:02.310
In our next lecture, I'm going to show you another way for you to write the prompt, like how you have

09:02.310 --> 09:02.970
written over here.

09:02.970 --> 09:09.720
Instead of you writing this whole prompt, we can use the, uh, the chain hub to retrieve some of the

09:09.720 --> 09:11.400
prompt from the third parties.

09:11.430 --> 09:13.230
I'll show you how we can actually use that.


========================================================================================

WEBVTT

00:00.110 --> 00:00.740
All right.

00:00.740 --> 00:08.510
So now we're going to see how we can just make use of some third party prompt from the from the hub

00:08.510 --> 00:12.080
of the lamp chain, instead of us writing all these prompts over here.

00:12.110 --> 00:17.960
I mean, this is the prompt which I have written inspired from one of the third party prompts, as you

00:17.960 --> 00:19.400
can see over here.

00:19.430 --> 00:21.050
So look at that, the rack prompt.

00:21.080 --> 00:24.140
This is the prompt that I just used like inspired.

00:24.140 --> 00:29.960
From here you can just download this prompt from using the lamp chain hub.

00:29.960 --> 00:32.600
And you can pull this particular prompt.

00:32.600 --> 00:36.470
And then you can use this particular prompt just by just one line of code over here.

00:36.470 --> 00:38.330
This is also something very much possible.

00:38.330 --> 00:43.160
So if you just go to the hub over here, you can see that there are different types of prompts available.

00:43.160 --> 00:44.660
You can also create your own prompt.

00:44.660 --> 00:46.070
You can upload it to them.

00:46.190 --> 00:50.600
And yeah there are so many different prompts available like text to SQL for that matter.

00:50.600 --> 00:53.900
So you see that how this prompt has been written over here.

00:53.930 --> 00:58.880
Given an input question, first create a synthetic correct dialect query to return to run.

00:58.880 --> 01:02.480
Then look at the result and query and return the answer.

01:02.510 --> 01:04.040
The question is here.

01:04.070 --> 01:05.420
This is the answer, blah blah blah.

01:05.450 --> 01:06.470
This is the table info.

01:06.500 --> 01:08.570
This is the few shot examples and stuff.

01:08.570 --> 01:10.040
So look at that.

01:10.040 --> 01:16.250
This is how these kind of, uh, these kinds of, uh, prompts are being created.

01:16.250 --> 01:18.290
And the one that we are going to be using is this guy.

01:18.320 --> 01:21.650
It's downloaded like 21.8 million times, which is amazing.

01:21.650 --> 01:23.870
So I'm going to use this particular prompt.

01:23.870 --> 01:27.290
So for that we just need to use these two lines of code.

01:27.290 --> 01:34.610
So I'm going to go to our VS code over here uh and probably copy this.

01:34.610 --> 01:46.040
And I'm going to paste markdown here uh using uh Lang Chain Hub for prompt.

01:46.070 --> 01:48.230
Write the same code.

01:48.320 --> 01:56.090
Just that this is going to be instead of the chat prompt template, I'm going to just use uh lang chain.

01:56.090 --> 01:59.540
And I'm going to import hub.

02:00.620 --> 02:07.560
And instead of this prompt that we have written over here like this big prompt, I can just say prompt

02:07.590 --> 02:13.890
is equal to, uh, hub dot, pull this particular prompt, that's all.

02:13.890 --> 02:17.880
This is all I have to do over here for the prompt.

02:17.880 --> 02:19.080
I'm going to be passing in.

02:19.230 --> 02:21.990
I'm going to pass the prompt over here and look at that.

02:21.990 --> 02:26.340
For this particular prompt you need you still have the question and the context over here.

02:26.340 --> 02:30.630
So it's going to just match whatever that we are passing in in the invocation part.

02:30.630 --> 02:33.540
So that's going to remain exactly the same.

02:33.540 --> 02:37.080
And I'm going to run this particular code.

02:37.080 --> 02:42.900
And you see that I'm going to get the response over here which is amazing.

02:42.900 --> 02:49.770
So this is how you can see that we can uh, we can use the chain hub, uh, hub to get the prompt over

02:49.770 --> 02:50.370
here.

02:51.390 --> 02:58.800
In our next lecture, I will show you how we can use one more way to retrieve, uh, the, uh, retrieve

02:58.800 --> 03:05.580
the information from our query, our large language model using retrieval QA.

========================================================================================

WEBVTT

00:00.080 --> 00:08.750
So in order for us to understand how we can retrieve the the information from our our large language

00:08.750 --> 00:13.490
model and from our document as the source, we're going to write a code something like this.

00:13.490 --> 00:16.220
So maybe I'm just going to put a markdown over here.

00:16.400 --> 00:20.960
Uh, and I'm going to say and I'm going to add the code over here.

00:20.960 --> 00:22.580
And then I'm going to start writing the code.

00:22.580 --> 00:30.710
So basically in order for doing that I'm going to say from uh, lang chain dot, that is a package called

00:30.740 --> 00:31.490
uh chains.

00:31.490 --> 00:36.170
And I'm going to import what is called as the retrieval QA over here.

00:36.170 --> 00:38.570
And this retrieval QA over here.

00:38.750 --> 00:41.270
I'm going to create a QA chain.

00:42.950 --> 00:52.010
And I'm going to say uh, retrieval QA dot from uh chain type.

00:52.010 --> 00:53.960
I don't know why there is no intellisense coming.

00:53.960 --> 00:57.020
And over here I need to pass three things.

00:57.020 --> 01:05.250
One is the LM, another one is the retriever, which is going to be the retriever that we have got.

01:05.340 --> 01:10.080
And finally, we need to return also the source document.

01:10.080 --> 01:15.540
I'm also going to show you the source document from where this information is really coming through.

01:15.570 --> 01:18.930
So I'm going to say source documents is equal to true.

01:18.960 --> 01:21.150
So I want to return that information as well.

01:21.150 --> 01:27.810
So this is some additional thing that I wanted to show you this time so that you can know what exactly,

01:28.170 --> 01:32.580
uh, we can bring to the table so that you can see where is the data really coming from.

01:32.580 --> 01:39.300
So I'm going to ask the question this time is what is training data and batching size.

01:39.300 --> 01:40.380
Something like that.

01:41.670 --> 01:42.420
Right.

01:42.960 --> 01:49.680
And I'm going to pass this to our obviously to our QA chain.

01:49.680 --> 01:57.630
So I'm going to say QA chain dot because this is going to be a runnable the QA chain I'm going to call

01:57.630 --> 01:58.860
this invoke method.

01:58.860 --> 02:03.490
And I'm going to pass the question that I have got right.

02:03.490 --> 02:07.180
And now I also wanted to print the source, as I told you.

02:07.180 --> 02:08.320
So I'm going to say sources.

02:08.320 --> 02:10.630
Maybe there can be multiple sources.

02:10.630 --> 02:19.270
So I'm just going to say source and I'm going to set to property dark dot metadata dot get.

02:19.270 --> 02:21.550
And I'm going to get the source.

02:21.550 --> 02:26.200
And if it is unknown then it's going to print the unknown for me.

02:26.680 --> 02:32.050
Uh, for dark in the response.

02:34.720 --> 02:39.310
Uh, of the source documents.

02:39.400 --> 02:45.670
So this is the documents that we are going to be getting as a response in output that we are going to

02:45.670 --> 02:47.020
get from this particular response.

02:47.020 --> 02:47.650
Really.

02:47.860 --> 02:56.110
Uh, and let's try to print the, uh, response and we will see the result, like how it is going to

02:56.110 --> 02:56.830
be coming from.

02:56.830 --> 03:01.000
And I'm also going to print the sources used.

03:01.000 --> 03:07.930
So slash n I'm also going to add and also print that out here.

03:07.960 --> 03:11.440
And I'm going to say sources used.

03:11.890 --> 03:19.600
And I'm going to say far source in sources.

03:19.630 --> 03:25.090
And I want to print the source over here.

03:25.090 --> 03:30.760
So I'm going to say source right.

03:30.820 --> 03:32.710
That's what I want to print this time.

03:32.710 --> 03:33.520
So look at that.

03:33.520 --> 03:37.750
So what I have done over here in this particular code is basically I'm using the retrieval shader from

03:37.750 --> 03:39.100
chain type method.

03:39.310 --> 03:42.880
And over here I'm passing the LLM and retriever.

03:42.970 --> 03:48.790
Uh, and also I'm going to set the return source document so that I want to show you the documents from

03:48.790 --> 03:50.440
where it has been printed.

03:50.500 --> 03:58.570
And now if I try to run this particular code, you'll notice that I'm getting an error here.

03:58.810 --> 04:03.640
And it is happening because it says that the written source documents.

04:03.640 --> 04:05.500
I guess it's documents.

04:05.530 --> 04:06.520
Oh my God.

04:07.060 --> 04:09.190
Not document, but documents.

04:09.190 --> 04:11.800
And now it should be fine.

04:11.800 --> 04:16.060
So if I try to run this particular code this time, look at that.

04:16.060 --> 04:17.890
It gets me this particular information.

04:17.890 --> 04:22.090
So when I ask what is training data and batching side, it says the content provided does not contain

04:22.090 --> 04:26.410
the information about training data and batching size, but these are typically important details for

04:26.410 --> 04:27.640
the machine learning models.

04:27.730 --> 04:29.560
Testing training process.

04:29.560 --> 04:31.420
But they were not mentioned in the given text.

04:31.420 --> 04:34.930
Therefore, I do not have enough information over here.

04:34.960 --> 04:36.010
Oh that's bad.

04:36.010 --> 04:39.130
So it is not really getting that particular information for some reason.

04:39.310 --> 04:45.310
And it's just giving like LM forgetting dot pdf file as like first source of information that it has

04:45.310 --> 04:46.450
got for some reason.

04:46.450 --> 04:52.420
But let's say I'm going to ask um, probably what is training data and batching.

04:52.780 --> 04:58.600
And if I try running it again, you will notice that it gives me that information over here.

04:58.600 --> 05:05.040
Training data refers to the collection of examples used to train the machine learning models, and these

05:05.040 --> 05:08.190
examples consist of input data and blah blah blah.

05:08.190 --> 05:10.440
So this is coming from our source.

05:10.470 --> 05:13.260
Attention is all you need which is amazing.

05:13.260 --> 05:16.080
So this is working as expected for us over here.

05:16.080 --> 05:22.380
And similarly if I'm going to ask the position feed forward network like how that works, um, I'm going

05:22.380 --> 05:24.390
to probably ask that question.

05:24.390 --> 05:32.610
And if I try running it over here, uh, one more time, you will notice that I'm going to get that

05:32.610 --> 05:37.980
particular response as well and is coming from the attention dot PDF file, which is amazing.

05:38.010 --> 05:40.260
So these things are there in this particular document.

05:40.260 --> 05:43.410
And that's the reason why these are all coming up for us over here.

05:43.410 --> 05:45.270
So maybe we can ask this question right.

05:45.300 --> 05:47.100
Testing of the factual correctness.

05:47.250 --> 05:52.440
So what exactly is testing after fitting uh, actual correctness of LM tells?

05:52.440 --> 05:54.420
Probably I'm just going to ask this question.

05:54.420 --> 05:59.460
So that way we can see if the LM can answer that question.

06:00.090 --> 06:00.420
Yeah.

06:00.420 --> 06:00.750
There we go.

06:00.780 --> 06:05.700
The testing of factual correctness of large language models involves assessing their ability to provide

06:05.700 --> 06:08.370
accurate information that blah, blah, blah.

06:08.400 --> 06:10.020
It's all coming up over here.

06:10.020 --> 06:11.130
So there we go.

06:11.130 --> 06:14.340
So that is also something coming up over here.

06:14.340 --> 06:16.410
So this is the retrieval QA for us.

06:16.440 --> 06:21.870
Like how we can use it I mean but most of the time we are going to be using this one, as you can see

06:21.870 --> 06:27.420
over here, because this is the correct way of us to, uh, perform any of the action.

06:27.420 --> 06:37.110
And if you need even more finer control over your your actual query, then you need to use the one that

06:37.110 --> 06:41.610
we have used, like using manually, uh, over here, which is this guy.

06:41.640 --> 06:42.750
So you are an assistant.

06:42.750 --> 06:47.670
Use the following and correctly answer just till the, uh, I don't know, over here.

06:47.850 --> 06:50.880
Um, the question, this is the answer.

06:51.030 --> 06:56.640
Uh, also, you can also say also summarize the results.

06:56.790 --> 06:58.170
Uh, summarize the.

06:58.200 --> 07:05.190
And now if I'm going to ask this question over here, the same question that I asked before, uh, to

07:05.220 --> 07:08.670
the retrieval QA and look at that.

07:08.670 --> 07:11.700
So it's giving me all the answers over here.

07:11.790 --> 07:12.540
Oh there we go.

07:12.540 --> 07:15.300
So this is the MD format as well.

07:15.300 --> 07:17.220
And we're going to get this particular response.

07:17.220 --> 07:25.590
So this is like higher uh, control or maybe finer control over how we can, uh, we can assess our

07:25.590 --> 07:30.570
large language model to have more information and we can get the responses back.

07:30.570 --> 07:38.340
And you can see that we are doing a rag operation, this time with our PDF file that we have stored

07:38.340 --> 07:39.690
in our vector stores.

07:39.690 --> 07:42.750
And then we are retrieving it from our large language model.

07:42.750 --> 07:50.700
So this is the power of how we can make use of the Rag to make our LLM even more intelligent and get

07:50.700 --> 07:54.330
more context while it tries to extract the information out.

07:54.330 --> 07:59.760
That's it guys, this is all about how we can create a rag for the PDF document.


========================================================================================



