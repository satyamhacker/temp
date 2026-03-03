WEBVTT

00:00.140 --> 00:05.870
Welcome to the next section of our course building and testing AI agents, rags and chatbots using Lang

00:05.870 --> 00:09.500
chain with Olama and local large language models.

00:09.530 --> 00:15.710
And in this section we'll be talking about testing, also known as evaluation of our large language

00:15.710 --> 00:16.460
models.

00:16.460 --> 00:21.470
So we are going to understand how we can actually perform that evaluation of large language model in

00:21.470 --> 00:22.250
this particular section.

00:22.250 --> 00:29.090
So Llms are typically evaluated using standardized set of data sets designed to assess their performance

00:29.090 --> 00:35.570
across a diverse range of tasks, such as text summarization or open book question answering or code

00:35.570 --> 00:42.140
generation and language understanding, and these data sets serves as a benchmark to provide a fair

00:42.140 --> 00:48.650
and competitive analysis of different models, helping researchers and developers gauge their effectiveness

00:48.680 --> 00:50.870
in handling real world scenarios.

00:50.870 --> 00:54.140
So that is how we can really assess a large language model.

00:54.140 --> 01:01.070
It's not something like a normal software code that you write in a Python, and then you assess it,

01:01.070 --> 01:06.130
that whatever that we have written in the Lang chain and then verify some unit test and write it with

01:06.130 --> 01:07.210
some end to end test.

01:07.240 --> 01:12.310
Now those things, we can't do it because we are really accessing an large language model in here in

01:12.310 --> 01:13.480
order for us to test them.

01:13.480 --> 01:16.960
These are the things that we have to do to make this happen.

01:18.160 --> 01:24.880
And in the large language model, evaluation metrics used in the benchmarking LMS vary depending on

01:24.880 --> 01:26.650
the type of task being assessed.

01:26.680 --> 01:29.830
Most tasks are evaluated using traditional LNP metrics.

01:29.830 --> 01:31.360
Some of these metrics are.

01:31.360 --> 01:36.580
The traditional metrics are like exact match, which measures whether the model generates the answer

01:36.790 --> 01:40.000
is an exact word to word match with the ground truth.

01:40.030 --> 01:45.820
And there are other common metrics includes the blue or bilingual evaluation, understudy for machine

01:45.820 --> 01:52.990
translation, and there is also called as rogue or otherwise called as recall oriented understudy for

01:53.170 --> 01:54.070
gisting evaluation.

01:54.070 --> 01:57.340
So these are the things that is already there to validate it.

01:57.340 --> 02:02.230
And the final one is the F1 score for the classification and information retrieval task.

02:02.230 --> 02:08.140
So you can see that these are the traditional way of testing the large language models.

02:08.140 --> 02:15.530
So if you have really got my other course in Udemy on understanding, test and fine tuning the AI models

02:15.530 --> 02:16.550
with hugging face.

02:16.580 --> 02:22.670
In this particular course, I have also talked about how we can do functional testing of the AI models

02:22.670 --> 02:28.160
using temperature testing, repeatability testing, question answering, named entity recognition and

02:28.160 --> 02:28.610
stuff.

02:28.610 --> 02:36.380
And I have also talked about the evaluation of the AI model using the unseen data as question and answering

02:36.380 --> 02:43.670
models using NLP libraries, and also how we can do the fuzzy match logic and also the bias fairness

02:43.670 --> 02:45.260
and testing of the AI models.

02:45.260 --> 02:49.490
So these are things that you can see that most of these testing that we are doing in this particular

02:49.490 --> 02:57.410
course are exclusively for testing the large language models in such a way that they actually respond

02:57.410 --> 03:00.530
as based on the ground truth that we have got.

03:00.530 --> 03:05.690
And the same thing happens over here as well with the exact match.

03:05.690 --> 03:14.360
Blue, rogue and F1 score for the classification and the LM evaluation metrics fall into two broad categories.

03:14.360 --> 03:17.200
One is the traditional and non-traditional, as I just told you.

03:17.200 --> 03:20.800
So traditional we just saw in our last slide.

03:20.800 --> 03:26.290
And the non-traditional metrics leverages the semantic understanding and the model's own capability

03:26.290 --> 03:27.970
to assess generated text.

03:27.970 --> 03:34.870
And this can work with or without reference text using techniques like embedding similarities, perplexity,

03:34.870 --> 03:36.970
and LM based scoring.

03:37.030 --> 03:45.100
You might have seen these things like embedding similarities and perplexity in our earlier lectures

03:45.100 --> 03:49.690
of this course or earlier sections of this course where we are doing embedding, while we are doing

03:49.690 --> 03:52.840
the vector database to store the data.

03:52.840 --> 03:59.290
And we needed the embedding models to do the embedding of the conversion of the text to vectors.

03:59.290 --> 04:01.420
So we were using an embedding models.

04:01.420 --> 04:03.790
So embedding is a technique to do that.

04:03.790 --> 04:05.440
And uh similarities.

04:05.440 --> 04:12.340
We also saw the similarities score for the vector database while we were trying to pass a text.

04:12.340 --> 04:14.080
And it was giving us a response.

04:14.080 --> 04:16.420
And we were doing the embedding similarities over there.

04:16.420 --> 04:20.630
So those things we have already seen even in our earlier sections of this course.

04:20.630 --> 04:26.510
And that's exactly what they're talking about over here, as well as one of the non-traditional metrics

04:26.510 --> 04:30.710
that you can use to evaluate how your LLM really behaves.

04:31.100 --> 04:37.370
And we'll talk about the another most important part of the evaluation is the bird score.

04:37.370 --> 04:40.040
So this is a bidirectional encoding based approach.

04:40.040 --> 04:46.340
That is candidates text and reference text are fed into the DL model separately to obtain embeddings.

04:46.340 --> 04:52.310
And the token level embeddings are then used to calculate the pairwise cosine similarity matrix over

04:52.310 --> 04:52.850
here.

04:52.850 --> 04:58.730
So this is the way that you can use the embedding uh, to perform the similarities of the text.

04:59.330 --> 05:05.600
So you can see that these are the different ways that we can use the techniques to perform the testing,

05:05.600 --> 05:07.430
uh, in the large language models.

05:07.430 --> 05:12.170
But because we are not going to be focusing just on the large language model, but we are focusing on

05:12.170 --> 05:19.730
how we can test the application, which is built with lang chain like AI agents or Rag based applications

05:19.730 --> 05:21.500
or even the chatbots.

05:21.500 --> 05:23.540
How do we actually perform these operations?

05:23.540 --> 05:26.270
We are going to talk about that in our next lecture.

========================================================================================

WEBVTT

00:00.080 --> 00:04.640
In this lecture we talk about non-traditional evaluation of large language models.

00:04.640 --> 00:10.640
So beyond traditional metrics like blue or rogue, more advanced evaluation techniques focuses on semantic

00:10.670 --> 00:13.430
understanding and fluency of the text.

00:13.460 --> 00:18.410
Three such techniques are embedding similarities perplexity and LM based scoring.

00:18.440 --> 00:20.600
Like how we saw in our last lecture.

00:20.600 --> 00:23.240
So what is this embedding similarity is all about?

00:23.240 --> 00:29.180
Well, embedding similarity measures how semantically close two pieces of text are, rather than just

00:29.180 --> 00:31.100
comparing exact word.

00:31.130 --> 00:33.800
This is done by using similarity between two vectors.

00:33.800 --> 00:39.950
Generated text and reference text is calculated using the cosine similarities Euclidean distance or

00:39.980 --> 00:40.970
dot product.

00:40.970 --> 00:45.920
So these are the things that we use to do the vector comparison over there.

00:45.920 --> 00:52.490
And if you remember, we were also doing this vector similarity using the vector store of similarity

00:52.490 --> 00:56.870
underscore search with score we try to provide like explain.

00:56.870 --> 00:58.280
The attention is all you need.

00:58.310 --> 01:03.470
And we also had one more result which is saying explain attention in transformer.

01:03.470 --> 01:08.550
So we were having two uh same similar kind of the text over there.

01:08.580 --> 01:10.260
They talk about the same thing.

01:10.260 --> 01:12.060
You can see that attention is all you need.

01:12.090 --> 01:13.740
And attention in transformer.

01:13.860 --> 01:19.350
While this vector database had got the similar storage of the text in there after embedding.

01:19.350 --> 01:22.350
So we saw the score were pretty close for both of them.

01:22.350 --> 01:24.060
So they are not like different at all.

01:24.060 --> 01:25.350
They're pretty close to that.

01:25.440 --> 01:27.660
And that was just printed for us over here.

01:27.660 --> 01:33.900
So this is how we verified like how semantically close two pieces of text are rather than just comparing

01:33.900 --> 01:35.160
the exact word.

01:35.190 --> 01:38.280
So this we already saw in our earlier sections of this course before.

01:39.510 --> 01:41.370
And the next one is the perplexity.

01:41.370 --> 01:46.770
So perplexity is the measure of how well a language model predicts a given text.

01:46.800 --> 01:50.640
Lower perplexity means better fluency and coherence.

01:50.640 --> 01:57.690
So that is another way that you can measure or predict how a given text is going to be performed during

01:57.690 --> 01:59.010
the given point of time.

01:59.010 --> 02:01.560
And finally, the LM based scoring.

02:01.560 --> 02:06.600
This is quite interesting because we are going to be doing this LM based scoring in this particular

02:06.600 --> 02:11.040
course most of the time, because that is amazing, because you will see that instead of relying on

02:11.040 --> 02:15.960
traditional metrics, LMS themselves can be used to evaluate generated text.

02:15.990 --> 02:22.470
This can be done using prompt based evaluation, where another LM is prompted to rate the generated

02:22.470 --> 02:27.960
response based on criteria like relevance, coherence, factuality, or and grammatically.

02:27.960 --> 02:30.960
And then it also does the ranking based evaluation.

02:30.990 --> 02:33.810
The LM compares multiple outputs and rank them.

02:33.810 --> 02:36.240
And finally self-consistency.

02:36.270 --> 02:40.740
The LM generates multiple responses and evaluates them for consistency.

02:40.740 --> 02:48.840
So you will notice that in here, for the very first time, we are going to be using another LMS, which

02:48.840 --> 02:55.680
is going to act as a teacher LMS, which is going to act as a teacher, LMS, which is going to really,

02:55.680 --> 02:58.140
really stand aside.

02:58.140 --> 03:06.420
And then it is going to be it is going to be helping you to test how you can actually verify the prompt

03:06.420 --> 03:10.050
based evaluation or ranking based evaluation and self-consistency.

03:10.050 --> 03:13.980
So there are going to be two LMS to perform an action in here.

03:13.980 --> 03:21.330
And this is the one way of you to verify the LM based scoring to see if they are as expected.

========================================================================================

WEBVTT

00:00.110 --> 00:04.580
In this lecture we'll be talking about LMS evaluation libraries.

00:04.580 --> 00:09.950
So what are the different LMS evaluation libraries available to perform these operations that we were

00:09.950 --> 00:13.310
talking about like traditional and non-traditional way of testing them.

00:13.310 --> 00:17.300
There are many libraries available to evaluate the large language models.

00:17.300 --> 00:22.070
Some of the most popular among the community are the OpenAI's evals library.

00:22.070 --> 00:25.730
And there is another one is called as the Ragas Library.

00:25.730 --> 00:27.380
So OpenAI's evolves.

00:27.380 --> 00:33.620
As it mentioned, the evals provide a framework for evaluating large language models or systems built

00:33.620 --> 00:34.550
using LMS.

00:34.580 --> 00:43.460
It offers an existing registry of evals to test different dimensions of OpenAI models, and the ability

00:43.460 --> 00:51.050
to write your own custom evolves for use case you care about, and this is mainly focused on how you

00:51.050 --> 00:58.340
can do testing of your models with OpenAI specific models, which is that's where this eval is very

00:58.340 --> 00:58.730
good at.

00:58.730 --> 01:00.560
And it does this for you.

01:00.560 --> 01:05.890
And there is another library, as I told you, is going to be the Ragas Library and the ragas is the

01:05.890 --> 01:12.340
open source evaluation library built to supercharge evaluation of large language model applications.

01:12.370 --> 01:21.310
It uses a Sota LMS assisted method to quantify the performance of LMS application using automated metrics,

01:21.310 --> 01:28.000
so you can also evaluate the performance of the pipeline that you have built using frameworks like Lama

01:28.000 --> 01:32.920
index, using it without needing an annotated evaluation data set.

01:32.920 --> 01:35.320
So you can do all these things in ragas.

01:35.350 --> 01:40.840
And just to keep things very, very straightforward, I'm going to quickly show you these two libraries

01:40.840 --> 01:44.470
pages and you will understand how these libraries are really built.

01:44.470 --> 01:52.420
So if I just go to go and search for the open AI evals like that, so you see that this is the page

01:52.420 --> 01:53.860
it's going to take me up through.

01:53.860 --> 01:57.430
And this is the same text that I just copy pasted from here on the slide.

01:57.430 --> 02:03.370
So it says that if you are building with LMS, creating high quality eval is one of the most impactful

02:03.370 --> 02:05.200
things that you can do without evals.

02:05.200 --> 02:10.610
It can be very difficult time intensive to understand how different models version might affect your

02:10.610 --> 02:11.330
use case.

02:11.330 --> 02:15.890
And that is what this the president of the OpenAI really says in here.

02:15.920 --> 02:17.930
The setup operation is quite straightforward.

02:17.930 --> 02:20.180
All you need to have is the OpenAI key.

02:20.420 --> 02:27.860
And then you can you can verify that using the using this installation of this particular library over

02:27.860 --> 02:28.220
here.

02:28.220 --> 02:30.590
And you can see how they are doing the testing.

02:30.590 --> 02:35.330
So you can see that there is a walkthrough of the testing process of building an evolve over here,

02:35.360 --> 02:43.670
like how you can build things and how you can measure, uh, different, uh, operation using the eval.

02:43.700 --> 02:49.310
The focus of this particular course is not about talking about the OpenAI's evolve, but we are going

02:49.340 --> 02:56.090
to be talking about the ragas, which is the library again, which performs the same kind of evaluation.

02:56.090 --> 03:03.530
But again, ragas is a library which will helps you to perform a wide range of testing in wide range

03:03.530 --> 03:05.840
of models, as you can see over here.

03:05.840 --> 03:10.760
And they also support Lang chain, which can also be a plus for us because we are using land chain for

03:10.760 --> 03:15.200
our, uh, for our development as well as they support Olama.

03:15.200 --> 03:19.010
So we can use these capabilities while we do the testing.

03:19.010 --> 03:20.480
So that is the major power.

03:20.510 --> 03:24.080
And that's the reason why I want to go with the ragas in this particular course.

03:24.350 --> 03:27.260
And you can see that they have got some details over here.

03:27.260 --> 03:33.140
And they also have got a GitHub repo which tells you like how you can use with the ragas itself.

03:33.140 --> 03:35.660
So the installation process is very straightforward.

03:35.660 --> 03:41.120
All you have to do is just install this particular ragas using this pip install ragas uh over here and

03:41.120 --> 03:42.830
then you can start doing the evaluation.

03:42.830 --> 03:46.610
Just five lines of code will do that evaluation for you.

03:46.640 --> 03:49.640
We are going to run these kind of things in our uh, discussion.

03:49.670 --> 03:52.070
I will quickly show you like how you can achieve that.

03:52.190 --> 03:55.130
Again, they are using what is called as the chat OpenAI.

03:55.160 --> 04:01.400
But because we have the, uh, LMS, the Lang chain support, we can use different models as well if

04:01.400 --> 04:02.240
you wanted to.

04:02.480 --> 04:05.900
Um, yeah, that's about the the ragas library.

04:05.900 --> 04:08.570
But I have not gone very deep into this particular library yet.

04:08.570 --> 04:14.210
But you can see that this is the library that we are going to be using for our discussion.


========================================================================================


WEBVTT

00:00.200 --> 00:03.380
In this lecture we are going to be understanding ragas a bit.

00:03.410 --> 00:10.010
So the ragas is otherwise called as the Retrieval Augmented Generation Assurance Score library is designed

00:10.010 --> 00:18.620
to evaluate Rag systems and large language model systems by assessing various aspects like the retrieval

00:18.620 --> 00:23.540
accuracy or generation quality and factual correctness.

00:23.540 --> 00:31.310
That is the main purpose of this ragas itself, and you'll be wondered that using this particular ragas,

00:31.340 --> 00:33.980
we can check key metrics.

00:33.980 --> 00:34.910
Something like this.

00:34.940 --> 00:42.770
We can check the context, relevance, faithfulness, answer relevance and factual consistency or otherwise

00:42.770 --> 00:46.850
called as correctness of our large language models responses.

00:46.970 --> 00:53.510
It can be anything, it can be LMS, or it can also be the one from the Rag application or agent.

00:53.510 --> 00:57.410
You can verify all of them using ragas, something like this.

00:58.280 --> 01:05.270
So if you talk about the context precision, this measurement of this is the measurement of how many.

01:05.300 --> 01:08.240
Retrieved contexts are actually relevant.

01:08.240 --> 01:10.190
So the higher the precision, the fewer.

01:10.220 --> 01:13.100
Irrelevant documents are there in the retrieval.

01:13.100 --> 01:14.540
That is what is called as the.

01:14.570 --> 01:15.920
Context precision.

01:15.920 --> 01:18.860
So these are things that we are going to be using a bit while we.

01:18.890 --> 01:27.200
Are going to be doing the evaluation of our matrices using evaluation of our LMS using.

01:27.230 --> 01:27.890
Ragas.

01:27.890 --> 01:29.750
So the context precision is one thing.

01:29.750 --> 01:31.580
And then there is also called as context.

01:31.610 --> 01:37.580
Recall which measure how many relevant contexts were retrieved out of all possible.

01:37.610 --> 01:38.510
Relevant ones.

01:38.510 --> 01:44.360
That is what is called as this context recall and the high the most relevant documents were retrieved.

01:44.420 --> 01:45.320
The lawyer.

01:45.350 --> 01:51.350
Is very less documents were retrieved based on the given context and then response relevance.

01:51.350 --> 01:53.330
So this is the measure.

01:53.330 --> 01:58.640
If the answer is actually addresses the query that you have asked.

01:58.670 --> 02:02.870
The higher the response is a meaningful and on the topic response that you get it.

02:02.900 --> 02:03.380
If not.

02:03.410 --> 02:05.180
You're not really getting what you're looking for.

02:05.200 --> 02:06.730
finally faithfulness.

02:06.760 --> 02:13.690
This is, I think, very important because it is the measure for you to check if the factually grounded

02:13.720 --> 02:17.320
truth truth is coming up for you in the response or not.

02:17.350 --> 02:23.260
The higher the response, the factual grounded, which means you are really avoiding quite a lot of

02:23.260 --> 02:26.680
different hallucination generated by your large language models.

02:26.710 --> 02:32.830
So this is another measure that you are going to be verifying while you test your application using

02:32.830 --> 02:33.580
ragas.

02:33.610 --> 02:38.680
So these are the different types of matrices that you can really measure with ragas.

02:38.680 --> 02:45.040
And we are going to see a few of them, at least three of them from here in our testing to verify if

02:45.040 --> 02:47.590
we get the responses like how we are looking for.

02:47.590 --> 02:54.190
So these are the theoretical aspects of all the different ways of testing the large language models

02:54.190 --> 02:59.080
and LMS applications, as well as the agents or rags.

02:59.080 --> 03:05.950
But starting our next lecture, we are going to see how we can actually start using ragas to do the

03:05.950 --> 03:08.800
testing itself in a much, much better fashion.


========================================================================================


WEBVTT

00:00.080 --> 00:05.750
Now getting back to our Visual Studio Code, we are going to start writing the actual code itself.

00:05.750 --> 00:11.960
So we have been discussing quite a lot of different details in terms of how we can work with link chain,

00:11.960 --> 00:22.370
how we can build them, and how we can use the link chain to to build a chat bots, agents and drags.

00:22.370 --> 00:24.920
But now it's time for us to do the testing.

00:24.950 --> 00:29.510
I don't know why I have got two of these, so let me get rid of one of these folder.

00:29.780 --> 00:32.570
And we also have a testing with rags and agent over here.

00:32.600 --> 00:33.350
Okay cool.

00:33.350 --> 00:34.940
So now we're going to start doing the testing.

00:34.940 --> 00:39.260
So before we start doing the testing the first thing is we need to start the installation process of

00:39.260 --> 00:40.310
the rack.

00:40.310 --> 00:44.630
So um I'm going to write a markdown over here.

00:44.630 --> 00:50.420
And I'm going to say uh, installing uh rack uh the ragas.

00:51.020 --> 00:51.800
All right.

00:52.010 --> 00:56.720
Uh, and I'm going to say this is Python.

00:56.750 --> 00:59.630
Sorry, I don't know why this could be markdown.

01:00.920 --> 01:01.730
There we go.

01:02.030 --> 01:07.520
Uh, and over here I'm going to say pip install ragas.

01:07.550 --> 01:08.150
That's all.

01:08.150 --> 01:11.420
So this is going to install the ragas for us.

01:11.840 --> 01:16.160
And let me try to run this particular thing over here.

01:16.160 --> 01:19.790
And you can see that we have got our ragas installed which is great.

01:19.940 --> 01:24.290
And I'm going to go to their documentation a bit over here.

01:24.290 --> 01:31.160
And you can see that they have got some details over here, like how you can evaluate, uh, things

01:31.160 --> 01:33.470
using the matrices that they have given.

01:33.470 --> 01:38.720
So let me just copy paste this five lines of code that they have put in their GitHub page over here.

01:38.720 --> 01:41.000
And I'm going to paste that.

01:41.360 --> 01:47.720
And you will notice that it is now telling me that we need to have a lang chain LM wrapper with chat

01:47.750 --> 01:49.040
OpenAI model.

01:49.070 --> 01:53.780
Well, because we are not using chat OpenAI model in any of these, because we are using the local large

01:53.780 --> 01:57.920
language models and we are also using local olama here.

01:57.920 --> 02:01.550
We can't really use the chat OpenAI over here.

02:01.550 --> 02:09.400
So what we should do is let's go back to the discussions that we had did before, which is the agent

02:09.400 --> 02:10.840
building, as you can see over here.

02:10.840 --> 02:19.420
So I'm going to copy some of the code from here, uh, which was to, uh, get the env file and the,

02:19.570 --> 02:24.520
uh, declaration of the chat olama, which is the LM.

02:24.520 --> 02:32.800
So I'm going to copy that and I'm going to add them over here, which is going to mark down, uh, I'm

02:32.800 --> 02:44.230
going to say create LMS, uh, uh, instance uh with local LMS.

02:44.230 --> 02:48.820
And because we have configured with our Lang Smith over here, now we can see what is really going on

02:48.850 --> 02:49.930
with the Lang Smith as well.

02:49.930 --> 02:55.480
So if I just go to the Lang Smith, uh, at the moment, there is nothing really, uh, doing over here.

02:55.480 --> 03:02.080
But the moment I start running the evaluation, hopefully we can see some traces there as well.

03:02.080 --> 03:04.960
So we are not going to use the chat.

03:04.960 --> 03:06.550
Uh, open AI over here.

03:06.550 --> 03:14.140
As you know, we are going to be using the, uh, chat or lama, so I'm going to copy this line of code.

03:14.680 --> 03:16.330
Uh, maybe you don't even need that.

03:16.360 --> 03:22.810
So I'm going to say chat or llama or maybe guess what in this, uh, lang chain elements wrapper.

03:22.840 --> 03:28.930
All you have to do is just pass the LM, which is going to be the local large language model.

03:28.930 --> 03:34.630
We also need this wrapper over here because this is not something that I have added so far.

03:34.630 --> 03:40.930
So this wrapper I think it's, uh, sitting from uh ragas.

03:40.960 --> 03:41.680
Yeah.

03:41.710 --> 03:43.570
Dot wrapper of import.

03:43.600 --> 03:44.650
Uh, the.

03:46.300 --> 03:50.500
Now this is wrong ragas dot lm s yeah.

03:50.530 --> 03:52.840
LM is import lang chain wrapper.

03:53.080 --> 03:54.010
Uh, this is what you need to.

03:54.040 --> 03:58.240
I think the documentation is quite wrong in that case, because they're not really covered everything

03:58.240 --> 04:03.220
that they have to, uh, because, see, you are using this class over here, but you have not mentioned

04:03.250 --> 04:07.420
that similarly chat OpenAI, they have mentioned but they have not really written over here, this file

04:07.420 --> 04:07.720
line.

04:07.720 --> 04:09.100
I don't think this is correct.

04:09.100 --> 04:13.630
Maybe they just have to change their it's just for the advertisement purpose that they have made it.

04:13.630 --> 04:16.780
But to be honest, it's not just file line, but it's more than that.

04:17.350 --> 04:17.890
Cool.

04:17.920 --> 04:20.350
Now we have got all these things over here.

04:20.350 --> 04:26.710
So we have got the Lang chain wrapper, uh, for lm, where I'm parsing our local LM over here.

04:26.890 --> 04:29.980
And now we're going to run this code and see what's really going to happen.

04:30.820 --> 04:31.720
And look at that.

04:31.720 --> 04:33.460
The score this time is one.

04:33.460 --> 04:42.790
So while we say score is one, which means we are really saying that the LM is really matching the,

04:42.790 --> 04:44.530
uh, the actual response.

04:44.530 --> 04:50.380
So the user input and the response is actually matching based on the large language models that we are

04:50.380 --> 04:50.980
passing in.

04:51.010 --> 04:54.580
So let's go and see if the Lang Smith has got any detail over there.

04:54.580 --> 04:56.200
And you can see that we have got it.

04:56.200 --> 04:59.980
So there is an um summary accuracy.

04:59.980 --> 05:02.770
So this is a singleton aspect critic prompt.

05:02.770 --> 05:03.910
You can see over here.

05:03.910 --> 05:08.590
And it gives us a um a response for us over there.

05:09.190 --> 05:12.550
So the human is asking this question, uh, over here.

05:12.550 --> 05:15.190
And now the output is this particular value.

05:15.190 --> 05:21.520
So the human asks for this question and the response is pretty close to what they are expecting.

05:21.520 --> 05:24.070
That's the reason why the verdict is one, which means it's correct.

05:24.070 --> 05:31.240
So this is how we can see that we could able to evaluate this particular answer and this kind of testing

05:31.240 --> 05:31.930
in ragas.

05:31.930 --> 05:33.730
They call it a singleton sample.

05:33.730 --> 05:40.330
The reason why this is called a singleton sample is because the evaluation has got only single turn

05:40.330 --> 05:41.590
interaction, which is this one.

05:41.890 --> 05:43.450
There is only one interaction here.

05:43.450 --> 05:45.790
So there is one user input and one response.

05:45.790 --> 05:48.790
And that's why it is called a singleton sample.

05:48.790 --> 05:53.890
If you have multiple user input and multiple responses, and you're going to be verifying how the interactions

05:53.890 --> 05:58.390
is really happening with your local large language model, then they are called as multi-turn samples.

05:58.390 --> 06:00.880
So you can just see that there is something called as multi-turn samples.

06:00.880 --> 06:02.830
So you can pass that.

06:02.830 --> 06:08.170
And then you can verify if the Multi-turn sample is also working in that particular fashion.

06:08.170 --> 06:14.620
So this is how you can actually verify the different different things within your large language models

06:14.620 --> 06:15.910
with ragas.

06:16.180 --> 06:23.200
And I hope you got the idea of the first test with the ragas over here with your local large language

06:23.200 --> 06:23.740
model.


========================================================================================

WEBVTT

00:00.050 --> 00:05.150
And the next example that we are going to talk about is the multi-turn sample in the ragas.

00:05.180 --> 00:09.620
After we discussed this singleton sample in our last lecture of this course.

00:09.620 --> 00:15.020
So you see that in the multi-turn sample, the only difference from the singleton and the multi-turn

00:15.020 --> 00:19.850
is that in the singleton you will have only one user input and one reference context.

00:19.850 --> 00:22.790
And then you just do a communication with the LM.

00:22.790 --> 00:28.880
And then you see if the response has got the accuracy, relevance and fairness based on the input that

00:28.880 --> 00:30.980
you have given from the large language model.

00:30.980 --> 00:34.670
That is what you are going to do in this particular singleton sample.

00:34.670 --> 00:41.870
But in Multi-turn sample you are going to be interacting between humans eyes or optionally even tools.

00:41.900 --> 00:46.130
You remember the one that we built in our last section of the course, even that one as well.

00:46.130 --> 00:51.800
You can interact and then you will see if the response is correct or not based on that.

00:51.830 --> 00:58.130
I mean, eventually you will see that we have got this human message, AI message, tool message and

00:58.130 --> 01:05.090
tool calls, all these things that we were discussing, even in our, uh, long chain code that we were

01:05.090 --> 01:06.440
doing over here.

01:06.440 --> 01:11.270
Those things are all now coming in action over here with this, uh, ragas.

01:11.300 --> 01:16.640
Which makes sense, because now we can create a human message, AI message and all these different sort

01:16.670 --> 01:19.580
of messages while we do the communication with raga.

01:19.580 --> 01:25.550
So it's that's the reason why this ragas tool is bit more closer to what we do with Lang chain, because

01:25.550 --> 01:30.890
it's the syntax is and the way that it works are pretty close to what we have already did.

01:30.890 --> 01:37.880
So all they are doing in here with the multi uh term sample is that you're going to have a user message

01:37.880 --> 01:39.110
which is the human message.

01:39.140 --> 01:42.200
And then they pass an AI message which is going to say content.

01:42.200 --> 01:44.900
Let me check whether the current weather in New York is this.

01:44.900 --> 01:46.280
And then you see the tool call.

01:46.310 --> 01:49.850
See that the tool call here that they just say it's a weather API call.

01:49.880 --> 01:54.710
Same kind of tool calls that we were making before, uh, in our earlier sections of the course where

01:54.710 --> 02:00.560
we call the Wikipedia to see if the tool call is really happening.

02:00.560 --> 02:05.330
So same kind of things that that is happening over here, like instead of the Wikipedia tool here,

02:05.330 --> 02:07.610
they call it as the weather API tool.

02:07.610 --> 02:09.950
And this is the argument that they are passing in.

02:10.580 --> 02:12.560
So that is the AI's initial response.

02:12.560 --> 02:19.580
And then you again create a tool response where the content is sunny weather the temperature is this,

02:19.580 --> 02:20.270
this this.

02:20.270 --> 02:21.650
And that's what they are creating.

02:21.650 --> 02:24.950
And then the AI's final response is going to be the AI message.

02:24.950 --> 02:26.390
And this is the content.

02:26.480 --> 02:30.800
And now we are going to pass all these as a conversation over here.

02:30.800 --> 02:36.710
And once you have this conversation ready, you can then send this conversation to the Multi-turn sample

02:36.710 --> 02:37.430
over here.

02:37.430 --> 02:43.580
And you can pass the reference response as well as an input to see the the one that you're looking for

02:43.610 --> 02:44.810
is coming up or not.

02:44.810 --> 02:50.210
So that is what is their actual intention of how you do with the Multi-turn sample over here?

02:50.210 --> 02:54.800
Because we have already developed and built all these things in the long chain, these things are quite

02:54.800 --> 02:57.290
relevant for our actual testing as well.

02:57.290 --> 02:59.640
So let's see how we can actually achieve that over here.

02:59.670 --> 03:00.000
Guess what?

03:00.030 --> 03:02.220
Again, I'm really not going to write any code.

03:02.220 --> 03:04.200
I'm just going to copy paste it over here.

03:04.260 --> 03:07.440
But we will be changing based on our need a bit.

03:07.440 --> 03:15.960
So I'm going to say a multi-turn samples, uh, with the uh with ragas.

03:16.140 --> 03:22.470
And over here I'm just going to add the code pretty much the same code as you can see over here.

03:22.470 --> 03:27.090
And I need to also run this multi-turn, uh, sample.

03:27.090 --> 03:31.950
So I'm going to copy this and let me try to first run this guy over here.

03:31.980 --> 03:33.990
This is just to create the conversation.

03:34.140 --> 03:39.240
And then we're going to run the entire conversation sample over here.

03:39.240 --> 03:42.660
And let's see what is really happening with the samples.

03:42.660 --> 03:45.510
So again this is I think this is just a sample being created.

03:45.720 --> 03:52.050
Uh, we probably need to run this sample in the matrix and see how that actually works.

03:52.050 --> 03:58.050
So in order to do that, I'm gonna one more time call this, uh, matrix over here.

03:58.350 --> 04:01.260
And then we can call the metrics over here.

04:01.260 --> 04:03.480
So you see that we got the Multi-turn sample over here.

04:03.510 --> 04:07.290
So I'm gonna say dot uh multi score.

04:07.290 --> 04:09.000
And I'm going to pass the sample.

04:09.000 --> 04:11.640
And I'm going to run them over here.

04:11.640 --> 04:18.270
So you will now notice that this is going to do a multi-turn uh, sample for us over here.

04:18.270 --> 04:19.290
And then we got the response.

04:19.290 --> 04:23.100
This one looks like this is also quite close to what you're looking for.

04:23.130 --> 04:24.690
And that's the reason why you're getting one there.

04:24.690 --> 04:27.960
So this is how you perform the multi-turn sample with ragas.

04:28.710 --> 04:31.770
And these are things that you can do over here for the testing.

04:31.770 --> 04:32.940
But guess what.

04:32.940 --> 04:35.460
These are the things that they have given in their documentation.

04:35.490 --> 04:39.420
Like how you can actually do that, how you can create the evaluation data sets.

04:39.570 --> 04:46.050
Uh, over here with multiple datas and things, we are going to start looking at how the more advanced

04:46.050 --> 04:55.440
concepts of the ragas can be used for testing our already built agents and rags, starting our next

04:55.440 --> 04:57.540
section of this course with ragas.


========================================================================================


