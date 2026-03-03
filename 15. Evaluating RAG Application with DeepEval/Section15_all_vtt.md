00:00:00,080 --> 00:05:26,980 [Speaker 0]
Welcome to the next section of our course, and in this section we are gonna talk about how we can do evaluation of our large language model using DeepEval. So this is another tool that we are gonna talk about, uh, apart from the RAGAS that we were talking about in our last, uh, section of the course. Where in this tool we are gonna see some more visual advancement than compared to how you can s-- uh, see from the RAGAS itself. And I think it, uh, the DeepEval has got its own pros and cons, but still I could see that the, uh, DeepEval is, uh, way better than RAGAS in some of the, uh, use cases. And again, it depends on how your company is really wanting to go with things, but I could see that the DeepEval is quite good as well. So you can see that the DeepEval is the large language model evaluation framework and it's built by the Confident AI team, and you can see that it is, uh, simple to use blah, blah, blah. Uh, but you can see that, uh, you can actually use this, uh, DeepEval along with, uh, the LangChain and LlamaIndex and things of that nature. So our LangChain is still supported with this particular DeepEval, which is pretty good. And you can see that the metrics that the DeepEval give us is the GEVAL, uh, DAG or the deep acrylic graph, and then RAG metrics are these, like answer relevance, uh, faithfulness, context recall, context precision, uh, context relevancy, and RAGA. So you can see that all these metrics are there supported, uh, over here as well. And for the agentic metrics, there are task completion and tool correction, um, and then, uh, others are the hallucination, summarization, bias and toxicity. Uh, and you can also see that conversation metrics includes knowledge retention, uh, conversational completeness, conversions, relevance, and role adherence. So these are the things that is, um, supported by the, uh, by the DeepEval itself as the metrics. And the good thing about this particular DeepEval, as I told you, is that it has the portal, which looks pretty good as you can see over here. I mean, this is a portal which I actually, uh, started using. So if I just go back over here, uh, just go back all the way. Yeah, there we go. You can see that this is my homepage, uh, over here. Uh, and I've just created a simple project, uh, like my first project. And, uh, you can see that I have got the company name, Exo Automation Limited. Uh, and this is the total reports, uh, being shown over here, uh, for the, for the test cases I have got. Uh, uh, and if I go to the evaluation over here, you can see that it is gonna show me the answer relevance, faithfulness, and the context, uh, precision and how the trend has improved over the period of time for my evaluation of my large language model. And faithfulness has really not increased anywhere, but the contextual pr-precision has improved as well, like twenty-seven percentage, which is great. So there is an overall improvement happening, uh, compared to my earlier tests as you can see over here. And you can see that, uh, how the, the, the things have improved in my last test, which I executed. And if I go to my first test over here, which I executed, you will notice that there are some failures happening, uh, and you can see all the metrics for answer relevance, faithfulness, uh, context precision, context recall, and context, uh, relevance. Uh, and also these details are shown over here. And if you go to the test cases, uh, as such, you will notice that it's gonna show all the test cases which has been executed, uh, and also shows you, uh, what is the input, what is the actual output coming up from, and what is the run duration, and what is the expected outputs, uh, that we are looking for, uh, and what is the relevant, uh, context being called from the RAG. So all of these details are, uh, shown over here. So you can see the entire details, uh, in one single place if you wanted to. Uh, and you can see the test case parameters, and if there is any additional info, it's gonna show that as well. Similarly, if there is any failure, then it's gonna show you what is the reason for the particular failure and why it has got failed and things of that nature. You can also make all these, uh, uh, changes and correction of this particular test cases. And even in fact, I'm using test datasets over here. See, I have uploaded the dataset over here, which is going to help me, um, to visualize, uh, what dataset that I have got, how I'm using these datasets into my tests. And also I call this as a golden, uh, datasets because these are the datasets which I'm gonna use as a reference for my, uh, like actual input and expected output. And once everything is fine, then I will also upload the updated QA dataset, which has got, uh, the input, actual outputs, expected outputs, context, including relevant context as you can see over here. So it's gonna have all the details which is required. So we are gonna do until this particular step in this particular section, and I will show you how we can achieve all these operation, uh, uh, in this particular section. So this, as you can see overall, the visuals of this particular DeepEval is far better than what you see with the, uh, actual RAGAS because the, the portal is quite good, pretty handy, and it also shows details, uh, in a way better fashion. And I'm also using the, uh, OpenAI model here, uh, instead of the local large language model because OpenAI is way better for executing this kind of complex operation, especially evaluation. So, uh, I want to reduce the time and also I wanted to, uh, improve the accuracy of the evaluation, uh, which is not gonna happen in my local machine because of the inferencing time and speed. So I think it's better to use OpenAI's API. If you are having, uh, the Cloud API or maybe Google Gemini's API, you can also use that if you wanted to.

========================================================================================


[00:00:00.00] - Speaker 1
All right. So in order for you to start working with this project, as you can see over here, you need to have... You should be signed up with this particular portal, which is the DeepEvolved platform, as you can see over here. And you can also notice that it's backed by Y Combinator, who are who they are, like OpenAI team are the part of the Y Combinator as well. So yeah, it's pretty good to see that this is going to be quite good comparatively, and it is quite video as such as well. And you can see that you can use different models if you wanted to use it. And the way that you can actually see things are written over here are quite awesome as well. So the first thing that you need to do is to create an account, which you can do something like that, and then you can start creating it. And because I already have an account, I already have a project over here, and I'm also limited with just one project, which you can see over here, like first project. So that is why I'm just going to use the same project over here, even for the demonstration purpose.

[00:01:02.02] - Speaker 1
So I don't really have the way to create a new project. So if I try creating a new project, it's going to ask me that I need to sign up for a trial version, which is like five days, and you need to pay for that, which I don't want to do for the demonstration purpose over here. So what I'm going to do is I'm just going to go stick with my existing project, and it gives you a API key once you created. So I already have the API key. I have copied it. So I'm just going to use that particular API key for this particular demonstration. So what I'm going to do is I'm going to start using this particular project, as you can see over here. But in your case, you're going to be creating a new project altogether. You're going to get an API key. So once you have the API key, things will just start looking pretty much like this once you start pushing the data and things. But that is the one thing that you need to have. And also, you will not have any evaluation or any data set because you're going to be having everything like an empty window.

[00:02:00.25] - Speaker 1
But we are going to do all these things over here, and you will see all those data is coming up for you in your portal as well. Well, as I said, I'm going to go to my Visual Studio code over here, and I'm also created a section 11 with the testing with the deep evolve, and this particular code is required. So I have a copy paste of the code over here. And as I told you, the first thing that we need to do is to connect with the deep evolve portal itself. So I'm going to say markdown and connect with deep evolve. So if you have signed up for this bit of portal, you should have get the API key. And that bit of API key, and And that particular API key, you need to pass in to connect to the deep evalve itself. So make sure, the first thing, you need to install the deep evalve. So the way that you can install it is you just need to type this PIP install-u DeepEvolve. That is going to install u deepeval, that is going to install the DeepEvolve for us. And it looks like it is still installing.

[00:03:10.28] - Speaker 1
Yeah, there we go. I think the DeepEvolve is installed. So I'm just going to put a hash symbol so that we don't really need to execute the second time. And once the deep eval is there, I then need to import the deep eval. And with this particular deep eval, I can actually perform something like login with the API key. And this is where you need the API key that you have copied from the portal. So I have copied that from the portal already. So I'm just going to paste that over here. And if I run this, you should see, congratulations, you have successfully logged in. So this is the way that you tell that the deep evolve is actually connected. See that? There is a file which is created by automatically behind the scene. That is the API key. And And this is how it has signed up over here, which is quite good. So once you have signed up with the deep evolve, then you can start working with the DeepEvolve itself, right? Okay. So now we have seen what how the DeepEvalve is altogether and how you can actually sign up with the DeepEvolve and how you can log in to the DeepEvolve.

[00:04:22.10] - Speaker 1
Next, let's get back to the actual theoretical aspect of the DeepEvolve to understand what exactly is DeepEvolve we're going to do for us and how we can test our large language model over there. And you can see that in the documentation, they tell the exact same thing that we have did before as well. So the first thing is we need to create the evaluation data set. We need to write some test cases in the Python, do the evaluation metrics, execute the test cases, and find the edge cases to improve the data set. This is the thing that we have to do in our deep evaluable over here. This is pretty much exactly the same like how we did even before. In the ragas, what we do is we try to create the data set for the ragas, which is going to look something like this. We create the data set, and then we pass the data set to the evaluation, which is going to be something like this. As you can see over here, we write the Python code, and then we run the evaluation, and then we verify the results. This is what we did in the ragas, and that's exactly the same thing we do in the deep evalu as well.

[00:05:30.00] - Speaker 1
There is no big difference between both of them. The only thing is over here, you remember in our last section as well, we were testing the faithfulness, factual correctness, answer relevance, and everything. Same thing is going to happen over here as well. So we can test the answer relevance, faithfulness, and all those metrics is going to come up over here as well. There is no big difference between both of them. Only thing is there is a bit of a code change here and there. But other than that, the code looks quite exactly the same. So this is the documentation part. I will recommend you to go through and see how you can able to understand things. But I'm going to go the very, very super simple option of this particular DeepEval over here. We are going to talk something about what is called as goldens of the DeepEval. So if you just go and search for goldens, you can see here populating goldens. This is something that you need to understand. This is what we are going to be talking about in our next lecture.


========================================================================================

00:00:00,120 --> 00:09:58,720 [Speaker 0]
In this particular lecture, we are gonna talk about how we can create the dataset required for the DeepEval itself. And before we start creating the dataset, the first thing that we need to understand is what is the-- what are the different ways that we can create the dataset, uh, with the DeepEval. As you can see, the Confident AI team, they provide the dataset, uh, to be created and uploaded and edited, uh, in their own platform, as you can see over here, like the dataset that I have actually created. So you can go and create the dataset. So like you can see that you can select, uh, Create dataset, and then you can create the dataset from here. Uh, and because I have reached the maximum, y-I can't do it from here, but you can upload it from the code directly. So that is what we are gonna be showing. I will show you how you can actually do that. But you see here, this is the dataset I actually created from the code, uh, by pushing it directly to the platform over here. Uh, and you will notice that this is the dataset, um, which is gonna come up over here. So, uh, it's gonna show you an ID of the dataset, and there is an input data and what is the actual output, what is the expected output that you're looking for. For instance, what is Playwright and what browser does it support? Then Playwright is a modern automation library supporting Chromium, Firefox, and WebKit. So this is the expected output that I'm looking for. But what exactly is the answer returned by the RAG that we have got? That is something that you need to be verifying. But this is like a golden dataset, which means this is like an, uh, actual and expected dataset, and you are gonna fuse, uh, the, uh... It's pretty much like a test cases probably, uh, that you have, like a test data for the test case. And then your RAG system is gonna give you the actual output and the relevant context to ensure that the actual expected output is meeting the requirement or not. That is what you're gonna be basically doing. So this is the dataset that you're gonna have, and you can use this dataset. You can pull this dataset, uh, right from the portal, uh, from the Confident, uh, AI, uh, as well, using your code itself. So those are things that you can do from this, uh, fancy little tool, which is RAGAS don't have at the moment. But yeah, you can actually have these kind of fancy features in the, uh, DeepEval over here. So I will show you all these things over here. And as I told you, we need to just understand about what is called as the golden, uh, dataset. So they call this goldens or golden because this is the data, uh, set which is going to be, uh, used as like a actual and the expected outputs. And this can be later converted to an LLM test case, uh, which they call, uh, which can be used for the evaluation purpose. So that is what they are calling it, it's like a golden dataset. I don't know why they really call this golden dataset, but maybe it is because like this is the, this is the actual ground truth dataset, uh, which is gonna be used by, uh, used for evaluating your large language model, and that's why they called this, uh, golden, right? And this golden dataset actually has got, I mean, the LLM-- The golden dataset actually has got this, uh, LLM test case class, uh, which gonna have like, uh, the input, actual output, expected output, retrieved context, uh, and then all those additional metadatas, commands, and context over there. Uh, so you can fill all these details, and then you can create things, uh, over here. So I will show you how you can do all these things in this particular lecture. So in order for doing that, I'm gonna go to our Visual Studio Code over here. Uh, and let's start creating a simple, uh, golden dataset. So basically, uh, my golden dataset, uh, is going to, let's say golden, um, underscore dataset, which is going to be an, basically an array. And I'm gonna have a series of questions, uh, and this question, uh, will have an answer over there. That's all. So what is, uh, Playwright? Uh, pretty much like, pretty much like what you saw on the, on the, uh, on this platform over there. So I'm gonna just ask the same question here as well. Uh, so I'm gonna go and paste it over here. You can s-notice that this is the, uh, dataset. So what is Playwright, and what browser does it support? Then the expected answer is that Playwright is a modern automation library supporting Chromium, uh, Firefox, and WebKit, right? And similarly, what is Selenium, and what programming language does it support? Then Selenium is an open source framework supporting multiple programming language like Python, Java, and Java-- uh, C# there. Uh, so these are the questions that I'm asking over here, pretty much like my golden dataset. And I can now run this golden dataset, and I will show you how it is gonna look like. It's just like an array, as you know, so it's gonna print all these values. So I'm gonna upload this golden dataset to my, uh, portal over here, which is this portal, and then I will start, uh, working from there. So let me go and, uh, delete this entire, entire goldens, which I don't really need them. And now I'm gonna go again, and this updated, uh, goldens that I have got, I'm gonna delete them as well. I don't want to, uh, have them as well because I'm gonna show you all these things over here. I'm gonna create it, uh, all from the scratch. So we have deleted all these, uh, golden, I mean, datasets from here, so we don't really have any dataset at the moment. You see that now we have goldens, uh, goldens are zero over here, right? Uh, and you see that there is something called as last pulled like two hours. So as I told you, you can pull the dataset from the code as well. So that is what this, uh, last pulled means over here. Cool. So now that I have edited all of them and I wanted to push this golden dataset that I have created in the Confident AI portal. So the reason why I wanted to do this is because I'm gonna store that like a, like a test engineer, that this is the, uh, question that I asked, like a actual question, then my expected answer is this one. That is what, um, is my, uh, whole idea over here. So in order for me to do that, I'm gonna just say, uh, upload the, uh, golden, uh, dataset. So the way I can actually do that is very, very straightforward. All I have to do it is I'm gonna, um, call this, uh, DeepEval, uh, sorry, DeepEval.dataset and I'm gonna import two classes. One is the evaluation dataset and another one is golden, right? And then you can just... Uh, so now we have to split this golden into a format which the documentation they have given to us over here, right? So the, the golden should be in this format, like actual output, uh, and expected output. Probably the retrieved context, something that you can bring it from the RAG, and the context is gonna come from RAG. Commons is gonna come from RAG. Metadata, maybe you don't get it really. Um, but actual output is also gonna come from RAG, right? You're gonna have input and the expected output, but not the actual output over there. So we need to create something like this over here, uh, and we'll see how we can actually make that happen. So I'm gonna say goldens as an array, and I'm gonna say for data in, uh, golden dataset. Uh, I'm just gonna iterate through all of them, and I'm gonna say golden, uh, which is gonna be golden, uh, is equal to, uh, golden, which is the class that I'm gonna import from here. And I'm gonna create all the properties as I told you. So first property is gonna be the input property, uh, where I'm gonna say data of... because we have, uh, the question there. So I'm gonna say data of, uh, question. That is gonna be the input, uh, and the expected output. So expected output is equal to, uh, data of the, uh, expected answer that we have got, which is this one. This is my data that I'm passing into the golden class. And now I'm gonna append this, uh, goldens.append with the golden that I'm pass-- creating over here. So that's gonna store all the, uh, data there. Uh, and now I can just print the goldens, and I will show you how it looks like. So if I just do that, look at that. This is how the goldens, uh, is gonna look like for me over here, right? The golden will have all these information that I have passed in. And now I'm gonna use this golden as the evaluation dataset for my large language model. So the way I can convert this to the evaluation dataset is that I need to do like this, dataset is equal to evaluation dataset, and the goldens is nothing but the goldens that I have created on the top over here. So when I execute this, this is gonna create the dataset. And now see what's gonna happen. So if I try to, uh, create a dataset, uh, you will see that it's a evaluation dataset, which is gonna have test case, which is nothing, and but it is gonna have a golden as these information as you can see over here that we have passed in, right? And it has got a lot of information there. Now, this dataset, I can push it to, uh, dataset., there is something called as a push method where I can push it all the way to the QA dataset, or maybe I can just say testing tools, uh, dataset. So this is the dataset which I'm gonna be using this time, probably. And now if I try to run this over here, you should see that the, uh, thing has pushed over there, and we should see the dataset editor come in automatically. And you should see that we have got the testing tool dataset, which is created automatically, uh, with all these data that we are pushing in. So this is, this is coming because we have, uh, we have pushed the dataset from our, uh, from our actual, uh, code over there. So you see that this is how you create the golden dataset, which is used for the evaluation of your, uh, large language model later on. So hope you got the idea of how you actually create the, uh, create the dataset for you right now. I mean, the golden dataset for you right now. In next lecture, we'll talk about how we can, uh, how we can use this golden dataset, uh, to actually, uh, work with our RAG application that we have got.

========================================================================================

WEBVTT

00:00.020 --> 00:00.440
All right.

00:00.470 --> 00:05.150
In this lecture we're going to talk about how we can test our, uh, rag application.

00:05.150 --> 00:09.770
So for that Rag application, I'm not going to use our actual Rag and the AI agent application that

00:09.770 --> 00:10.760
we built before.

00:10.790 --> 00:17.060
You remember, we were testing this Rag application, which was using a static document that we created,

00:17.060 --> 00:20.180
uh, while we were testing the application using the ragas.

00:20.180 --> 00:22.610
So the same thing I'm going to do over here as well.

00:22.610 --> 00:29.420
So I'm going to use the same document store and the same embedding and also the retriever, the same

00:29.420 --> 00:35.750
idea that I'm going to be doing from here for the evaluation, uh, using the deep eval this time.

00:35.750 --> 00:38.390
And we'll see how we could able to achieve that over here.

00:38.390 --> 00:49.610
So so basically I'm going to call this a rag, uh, application, uh, which is uh, without external

00:50.060 --> 00:58.730
data, but uh, internal data set with an array of data that we have got.

00:58.730 --> 01:02.540
So the same thing that I'm going to be doing over here as well this time.

01:02.560 --> 01:10.780
So the first thing is I'm going to have the embedding, as you know, and we also need to have these

01:10.870 --> 01:11.650
documents.

01:11.650 --> 01:14.980
So I'm going to go copy these documents.

01:14.980 --> 01:16.900
I'm going to paste that over here.

01:16.930 --> 01:18.580
Let me try running it.

01:19.060 --> 01:19.930
Pretty cool.

01:19.930 --> 01:21.460
So that runs.

01:21.460 --> 01:24.520
And we also need the retriever QA.

01:24.550 --> 01:27.730
So I'm going to go probably just copy the entire thing.

01:28.090 --> 01:35.320
Um and I'm going to put them over here and that becomes my retriever as well.

01:35.350 --> 01:37.810
You see that all of these are really, really required.

01:37.810 --> 01:40.150
So these things are just working fine.

01:40.150 --> 01:43.840
I've just copy pasted blindly without doing anything over here.

01:43.840 --> 01:50.080
But we were creating the multi shot sample data set for ragas earlier right.

01:50.110 --> 02:00.760
Similarly in this case we actually need to create the evaluation data set for our deep eval as well.

02:00.760 --> 02:05.650
So how do we create this particular data set over here.

02:05.710 --> 02:10.000
Uh, in the, uh, in the eval deep eval.

02:10.000 --> 02:15.280
So in order for me to create a data set, something like this, as you can see over here, uh, even

02:15.280 --> 02:18.670
in deep eval, just go to the documentation.

02:18.700 --> 02:20.200
See using data set.

02:20.440 --> 02:23.590
Uh, and they have got a structure as well.

02:23.590 --> 02:24.340
Look at that.

02:24.340 --> 02:30.910
They have got this class called as LM test case class which accepts this input as we saw before.

02:30.910 --> 02:34.240
And there's an actual output expected outputs and the context.

02:34.240 --> 02:41.500
If you remember we have injected the input before in our data set over here which has got input and

02:41.500 --> 02:43.300
we have got the expected output.

02:43.300 --> 02:46.240
But we need to know what is the actual output.

02:46.240 --> 02:53.950
And we also need to know the relevant context so that we can ensure that the evaluation of our large

02:53.950 --> 02:57.070
language model can be done based on these inputs.

02:57.730 --> 03:04.720
So for this evaluation of the, uh, of the data sets using this deep eval.

03:04.750 --> 03:08.190
We need to have the actual outputs and the context.

03:08.190 --> 03:09.960
So how do we get these two.

03:09.960 --> 03:14.970
And this is the quest that we are about to get into in this particular lecture.

03:14.970 --> 03:20.190
So in order for me to get the uh get those details.

03:20.340 --> 03:26.190
So the first thing is, as you can see over here within, probably we just copy paste all the code,

03:26.220 --> 03:32.820
as you can see over here, in order for me to get the relevant documents, which was the context and

03:32.820 --> 03:38.490
the response, which was actually the response over here, I did the code something like this over here,

03:38.490 --> 03:41.580
I'm going to do pretty much exactly the same thing in this as well.

03:41.580 --> 03:48.270
So I'm going to pass the question and I'm going to get all the relevant, uh, documents over here or

03:48.270 --> 03:53.760
the relevant, uh, context that I need from the Rag application.

03:53.760 --> 03:56.160
So I'll show you how actually I can do that.

03:56.160 --> 04:01.560
So I'm going to say probably I'm just going to delete this one, add a markdown, and I'm going to say

04:01.800 --> 04:16.430
add the um, the or query the Relevant context and actual output from LM.

04:16.430 --> 04:18.980
So those two things that I need to actually do from here.

04:18.980 --> 04:20.750
So how do I actually do that?

04:20.750 --> 04:22.250
It's very, very simple.

04:22.400 --> 04:28.130
All I'm going to do it is I'm going to say from a deep valve, I'm just going to add something called

04:28.160 --> 04:34.100
as a test case import LM test case.

04:36.290 --> 04:37.490
So I'm going to do so.

04:37.490 --> 04:40.550
All I'm going to do over here is I'm going to write a method over here.

04:40.550 --> 04:49.250
And I'm going to say query uh with context maybe query for context as well as whatever it is.

04:49.520 --> 04:55.280
Um, and this particular method, I'm going to say I'm going to have the uh retrieved.

04:57.350 --> 04:59.510
A context, right.

04:59.540 --> 05:01.370
Or maybe retrieve docs, whatever.

05:02.120 --> 05:08.360
Pretty much like how we did in our earlier, uh, section of this course, like how we get the, uh,

05:08.360 --> 05:11.740
retrieved documents Like this.

05:11.770 --> 05:12.850
Like how we did it.

05:12.850 --> 05:15.940
The same thing I'm going to be doing over here as well.

05:15.940 --> 05:22.150
So in order for me to get the, uh, retrieved document, this retrieved document, I just do this particular

05:22.150 --> 05:22.720
code right.

05:22.750 --> 05:24.340
So I'm going to copy this code.

05:24.370 --> 05:29.980
I'm going to say retrieve dot get relevant document will give me that uh, document is the question.

05:30.010 --> 05:31.300
Maybe I'll just pass the question.

05:31.300 --> 05:36.850
This will give me the relevant document that I'm looking for, and then I'm going to get the context

05:36.880 --> 05:37.330
out of it.

05:37.330 --> 05:42.160
So I'm going to say retrieved contexts is equal to.

05:42.190 --> 05:46.390
And the contexts are going to be this guy.

05:46.570 --> 05:49.690
This is going to be remaining the exactly the same.

05:49.690 --> 05:54.610
So I'm going to copy this whole code and I'm going to paste that over here.

05:54.610 --> 05:58.840
So it's going to be the document of the page content which is required from the relevant document.

05:59.170 --> 06:01.360
And I'm going to get all the details.

06:01.360 --> 06:03.340
And then I'm going to paste it over here.

06:03.370 --> 06:04.090
Right.

06:04.240 --> 06:09.070
And because this relevant document has got those details, I don't really need to iterate through the

06:09.070 --> 06:09.760
relevant documents.

06:09.760 --> 06:16.150
Once again I can just pass like, um, retrieved documents that will give me the document that I'm looking

06:16.150 --> 06:16.240
for.

06:16.270 --> 06:19.300
That is the that is the retrieved context that I have got.

06:19.690 --> 06:27.940
And then I need to also have what is called as a response from the large language model, which I can

06:27.940 --> 06:30.850
get it from the QA chain that I have got, which is this one.

06:30.850 --> 06:35.200
So these things I am just running a bit faster because we have discussed this millions of times in our

06:35.200 --> 06:37.060
earlier sections of this course.

06:37.060 --> 06:40.810
So I'm just going to do the exact same thing over here as well.

06:40.810 --> 06:43.240
So see that it's pretty much exactly the same thing.

06:43.240 --> 06:47.740
And I'm going to return the, uh, retrieved contexts.

06:47.920 --> 06:53.350
And also the response I'm going to return to, um, two of them from this particular method.

06:53.380 --> 06:58.420
This is what is basically going to happen over here in this particular method.

06:59.020 --> 07:02.410
So so yeah, I'm going to call this particular method in our next lecture.

07:02.410 --> 07:11.740
And I will show you how you can actually create the entire test case or the LM test case, uh, required

07:11.740 --> 07:15.910
for the deep eval, which we can use for the evaluation purpose.

========================================================================================
WEBVTT

00:00.020 --> 00:00.470
All right.

00:00.470 --> 00:06.110
So now we are in the phase of creating the LM test case, which is mentioned in the documentation,

00:06.110 --> 00:07.370
as you can see over here.

00:07.370 --> 00:10.100
So this is the same thing which I'm going to write probably.

00:10.100 --> 00:14.600
So I think I'm going to copy this code and I'm going to paste it over here.

00:14.600 --> 00:26.420
So I'm going to say creating LM test case uh required for the deep uh a valve evaluation purpose.

00:26.420 --> 00:26.750
Right.

00:26.750 --> 00:30.920
So I'm going to do that over here and I'm going to paste this particular piece of code.

00:30.920 --> 00:37.280
So it looks like it requires an LM test case which actually comes from another library.

00:37.280 --> 00:38.870
So I'm going to import that over here.

00:38.870 --> 00:47.120
So I'm going to say from our deep eval dot data set uh import golden.

00:47.420 --> 00:50.510
We do require the golden uh over there.

00:50.510 --> 00:59.150
And I also require from deep eval dot our test case which is going to import the, uh, LM test case,

00:59.150 --> 00:59.900
as you can see over here.

00:59.900 --> 01:02.990
So these are the two libraries which is required for this code to be executed.

01:02.990 --> 01:04.890
And we also have got a list.

01:04.890 --> 01:07.890
So I think it's coming from the typings.

01:08.010 --> 01:11.250
So I'm going to import the list over here.

01:11.250 --> 01:13.800
So these are the libraries required for us over here.

01:13.800 --> 01:20.460
And now as you can see um in this copy pasted code, these guys tell us that the LM test case has got

01:20.460 --> 01:23.100
the input as golden dot input.

01:23.160 --> 01:29.400
And they have got an actual output, which is going to be coming from an hypothetical, uh, chat,

01:29.430 --> 01:30.780
which is like the query.

01:30.810 --> 01:35.160
See this this actual output is not something that we can actually pass it, something like this.

01:35.160 --> 01:40.350
So this is something we are going to be parsing it from our code that we have written, which is this

01:40.350 --> 01:41.850
guy, the query with the context.

01:41.880 --> 01:42.150
Right.

01:42.180 --> 01:44.670
This method actually does that for us over here.

01:44.670 --> 01:47.400
And the context is also not something that we're looking for.

01:47.400 --> 01:52.920
We are going to be creating what is called as the retrieval context, uh, which is this one.

01:52.920 --> 01:55.320
That is what we are going to be passing it over here.

01:55.320 --> 01:58.590
And this is also not coming from the golden context for us.

01:58.620 --> 02:02.700
So you know how the golden is actually right, because we saw that earlier as well.

02:02.700 --> 02:11.000
So if I try to run this particular, um, data set, you can see that the data set has got Goldens and

02:11.000 --> 02:12.680
the Goldens has got input.

02:12.950 --> 02:15.470
It has got the actual outputs, that's all.

02:15.470 --> 02:19.160
And it has got sorry inputs and actual output is a null.

02:19.160 --> 02:24.980
And the expected output is the thing that we have got over there, but we don't really have the the

02:24.980 --> 02:30.290
actual output as well as the retrieval context as you can see over here.

02:30.290 --> 02:37.910
So the retrieval context, uh, if I just go see that little context is none, uh, and the context

02:37.910 --> 02:39.710
is none, all of these are none.

02:39.710 --> 02:43.250
So only two values are there in this particular golden, as you can see.

02:43.250 --> 02:46.670
So now I need to fill these details over here.

02:46.760 --> 02:48.680
Uh, so how do I actually do that.

02:48.680 --> 02:51.800
Well remember this method that we created the query with the context.

02:51.800 --> 02:54.950
This will give you the retrieval context and the response.

02:55.220 --> 03:05.780
Uh, so I think what we can do is I'm going to, uh, do something like context, uh, comma the rags,

03:05.810 --> 03:12.000
uh, response, which is going to be from this particular method, uh, And I'm over here, I'm going

03:12.030 --> 03:13.890
to pass the golden dot input.

03:13.890 --> 03:19.440
This golden dot input is going to be the question that I'm passing in to this particular method, which

03:19.440 --> 03:21.990
is going to give me the context and the rag response.

03:21.990 --> 03:27.240
So the rag response is going to go over here, because that is the response that I'm trying to verify

03:27.270 --> 03:28.950
from the actual output.

03:28.950 --> 03:36.780
And the context is the retrieval context that I'm going to pass in for the, for the LLM test case over

03:36.780 --> 03:37.380
here.

03:37.410 --> 03:38.070
That's it.

03:38.070 --> 03:40.590
This is going to create the test case for me.

03:40.890 --> 03:50.610
And now if I try to uh, probably uh, run this code and see how that actually looks like, which I

03:50.610 --> 03:51.900
can actually do something like this.

03:51.900 --> 03:55.920
So there is something called as, uh, convert uh, golden to test case.

03:55.920 --> 03:57.390
I'm going to call this particular method.

03:57.420 --> 03:59.580
I'm going to store that to the data.

03:59.580 --> 04:06.450
And I'm going to pass this particular data set that we have got which is this data set uh, that we

04:06.450 --> 04:08.280
have uh, created.

04:08.280 --> 04:10.800
So I think the data set we have already pushed there.

04:10.800 --> 04:14.450
We can also pull the data set, uh, to see how that actually works.

04:14.690 --> 04:19.310
The pulling mechanism is also something that I can show you, but I think the data set already has got

04:19.310 --> 04:20.090
the data.

04:20.120 --> 04:25.130
So if I just go and see the data set, uh, over here, you see that we have got the data set with the

04:25.130 --> 04:25.790
data there.

04:25.790 --> 04:31.460
But I also wanted to see the test execution to really happen over here.

04:31.490 --> 04:36.080
Like every time when I try to run this particular code, you should see that the code actually works

04:36.080 --> 04:41.360
as expected for the test case, because you need to trigger our rag to perform the operation and is

04:41.360 --> 04:42.470
currently not happening.

04:42.470 --> 04:48.710
And the reason why this is not happening is because if you go to this data set, uh, over here at the

04:48.710 --> 04:51.530
moment, uh, so that's why I have printed it over here.

04:51.560 --> 04:52.100
Data set.

04:52.100 --> 04:54.980
You can see that the data set has got the evaluation data set.

04:54.980 --> 04:56.660
But there is no test case over here.

04:56.690 --> 04:58.640
Like all the test cases are currently empty.

04:58.790 --> 05:02.000
But it only has got the goldens, as you can see over here.

05:02.000 --> 05:08.240
So how do I actually get the test cases that I actually need for the evaluation data set?

05:08.270 --> 05:15.620
Remember the test cases are something that is there in the, uh, data set that we have, uh, uploaded

05:15.830 --> 05:19.470
in our deep a valve over here.

05:19.470 --> 05:21.750
As you can see this one testing tools data set.

05:21.780 --> 05:27.780
We need to import this data set so that we can use this data set for our evaluation purpose.

05:27.780 --> 05:32.550
So the way you can import it is you just have to do this and call the pull method.

05:32.550 --> 05:41.040
And over here on the pull method we can give our name of the data set which is going to be the testing

05:41.070 --> 05:48.090
tool data set, which is this one that's going to pull the data set for us from the cloud, which is

05:48.090 --> 05:50.910
from the confident AI.

05:50.910 --> 05:57.240
And now if you just go see the data set that you have got, you will notice that the data set will also

05:57.240 --> 06:01.020
have got a test case for the execution.

06:01.050 --> 06:04.200
See that there is the test case for the LM, uh test case.

06:04.230 --> 06:10.380
And it has got the input uh, and it will have the actual output and the expected output.

06:10.380 --> 06:16.560
So it's not only going to have the golden, but it will also have got the test cases.

06:16.590 --> 06:22.400
This is something that we really need For our method over here.

06:22.430 --> 06:28.310
The convert golden to test case this guy because we are looking for the golden dot input.

06:28.310 --> 06:33.290
And also we are passing the golden dot expected like golden dot input for our query context.

06:33.320 --> 06:39.140
Because this is the only, uh, code which is going to trigger our Rag operation to happen in this particular

06:39.140 --> 06:40.310
method over here.

06:40.310 --> 06:44.120
So we definitely need to pass the, uh, the actual value.

06:44.120 --> 06:46.850
And this is now passed over here.

06:46.880 --> 06:53.090
See that now the Goldens are converted into our test cases over here for us.

06:53.090 --> 06:58.190
And this is happening because of the pull method that we did from the data set over here.

06:58.190 --> 07:03.980
So this is like a way that you are having you need to do because you have pushed the data set on the

07:03.980 --> 07:04.700
cloud.

07:05.000 --> 07:06.980
So that is what you should be doing over here.

07:07.010 --> 07:12.050
I know this is a bit of a tricky which is not there in the raga, uh, but uh, over here, we do have

07:12.050 --> 07:13.160
to do that this way.

07:13.460 --> 07:13.880
All right.

07:13.880 --> 07:19.130
So now if I try to run this particular code over here, you should see that the execution is right now

07:19.130 --> 07:19.640
happening.

07:19.640 --> 07:28.290
So basically now the actual, method is being triggered, and it's also triggering our Rag operation

07:28.410 --> 07:35.640
to work to get the relevant um, like the retrieved uh context as well as the responses from the relevant

07:35.640 --> 07:38.580
documents and stuff, because that is when things are going to happen.

07:38.580 --> 07:45.150
And now if I just go and see the data, like how it is actually looking like, so if I'm going to put

07:45.150 --> 07:52.350
the data there and if I try to execute it, you should see that we have got the, the, the input,

07:52.350 --> 07:57.270
the actual outputs, and we have got the expected output, as you can see.

07:57.270 --> 08:01.230
And we also have got the retrieved context as you can see over here.

08:01.230 --> 08:07.020
So all of these are currently sitting for us over here which is quite amazing.

08:07.020 --> 08:09.600
So everything is created for us over here.

08:09.600 --> 08:14.190
So now with this particular data we can start doing the evaluation.

08:14.190 --> 08:24.360
So now we have created the actual, uh, actual LM test case, which is used for the evaluation of our

08:24.360 --> 08:26.970
deep eval, which we will be discussing in our next lecture.

========================================================================================

WEBVTT

00:00.080 --> 00:06.470
So now let's try to evaluate what this LLM test case data is currently holding for us.

00:06.500 --> 00:13.610
So if you just go and see the data of zero dot probably retrieved context, you will notice that we

00:13.610 --> 00:15.770
have got the retrieved context for the question.

00:15.770 --> 00:23.630
So for example the question data of zero dot input is the actual question.

00:23.810 --> 00:33.980
And if I am going to ask what is the let's say print this one and print a slash n of slash n.

00:34.430 --> 00:42.530
And then I also wanted to print the data of zero dot the retrieved context.

00:42.530 --> 00:45.470
So what is the retrieved context from our vector store?

00:45.500 --> 00:50.240
If I try to print them both together, you should see that this is the.

00:50.270 --> 00:52.460
So for what is the playwright and what browser does it support?

00:52.490 --> 00:57.410
It says playwright is a modern automation testing library and it supports multiple browsers like chromium,

00:57.560 --> 00:58.520
blah blah blah.

00:58.550 --> 01:01.730
So this is the context which I'm getting over here.

01:01.730 --> 01:07.440
And I can also see what is the response which came through from our large language model.

01:07.440 --> 01:13.770
And that is actually sitting as a response, which is the the context that you are seeing over here.

01:13.800 --> 01:13.950
Right?

01:13.980 --> 01:16.740
Like the actual output, as you can see that the rag output over here.

01:16.740 --> 01:25.890
So I'm going to say actual sorry print of the uh, data of zero dot actual output.

01:26.250 --> 01:31.710
Uh, and if I try to print that, you should see that this is coming from the large language model is

01:31.710 --> 01:32.460
in the QA chain.

01:32.460 --> 01:35.370
Playwright is a modern automation library tool designed for the end to end testing.

01:35.370 --> 01:38.580
It supports multiple browsers, including chromium, Firefox, and WebKit.

01:38.700 --> 01:39.390
There we go.

01:39.390 --> 01:41.700
So pretty close to all of these are aligned.

01:41.700 --> 01:47.910
So I think this should be fine for our, uh, evaluation that we are going to be doing right now with

01:47.910 --> 01:48.990
a deep valve.

01:48.990 --> 01:54.030
So let's see how we can trigger the evaluation right now.

01:54.030 --> 01:56.280
So in order for us to do the evaluation.

01:56.310 --> 02:04.860
So I'm going to say uh evaluation and with deep eval.

02:04.890 --> 02:06.970
So this is the place we're going to do the evaluation.

02:06.970 --> 02:08.920
So I'm going to add the code over here.

02:08.920 --> 02:11.470
And I'm going to say deep eval dot.

02:11.500 --> 02:13.600
There is a method called as evaluate.

02:13.600 --> 02:18.400
And over here I'm going to pass the data that we have got.

02:18.430 --> 02:20.680
And I need to pass all the metrics.

02:20.680 --> 02:25.630
This is the same kind of code that we use with our ragas as well.

02:25.630 --> 02:32.500
While we are trying to do the evaluation, we used to pass the data set and we pass all the metrics.

02:32.500 --> 02:40.060
Same idea, but only thing is we need to pass the large language model over here, um, which is the

02:40.060 --> 02:41.380
OpenAI model.

02:41.380 --> 02:42.940
That is the only major difference.

02:42.940 --> 02:47.410
So we need to pass the OpenAI key over here to make this happen.

02:47.410 --> 02:48.730
If not, the code is not going to work.

02:48.760 --> 02:50.560
I will show you what I really mean about that.

02:50.560 --> 02:56.020
So the metrics over here, I'm going to say, uh, deep eval dot metrics.

02:56.020 --> 02:59.320
So you can either import this like how I'm doing over here.

02:59.500 --> 03:03.820
Uh, and then you can just say, uh, answer relevance metrics for that matter.

03:04.330 --> 03:04.870
Right.

03:05.080 --> 03:11.460
And similarly if I'm going to ask other questions, or other matrices like faithful matrix.

03:11.460 --> 03:17.340
So I want to say about dot matrix, dot uh faithful matrix.

03:18.000 --> 03:24.990
And similarly if I want to ask the contextual uh, precision matrix, I can do that as well.

03:25.530 --> 03:30.150
Uh, and if I want to do the contextual recall matrix, I can get that.

03:30.150 --> 03:35.550
And if I want to get the relevance matrix, I'm going to ask all of these because I'm going to be using

03:35.550 --> 03:36.900
the open AI model this time.

03:36.900 --> 03:43.950
That's why I mean there is nothing called as uh, like, uh, lm as such, like how you can pass in

03:43.950 --> 03:51.780
our, uh, ragas over here is a bit tied with the, uh, with the open AI model.

03:51.780 --> 03:59.760
So even if I try to pass, like, LM, uh, over here, uh, is equal to LM or whatever, and if you

03:59.790 --> 04:04.440
try to run this, this is not going to work because there is nothing called as LMS the property.

04:04.440 --> 04:06.570
So you can't just do that over here.

04:07.110 --> 04:12.120
Now, if I try to run this particular code, you will notice that it is going to not ask you for the

04:12.120 --> 04:14.670
GPT four model.

04:14.670 --> 04:20.940
Uh, it's trying to use the GPT four model, but there is no API key, and it is just going to abruptly

04:20.940 --> 04:23.310
fail because the the API key is wrong.

04:23.340 --> 04:26.580
And as you can see, this is the API key which it's currently showing.

04:26.580 --> 04:30.660
So I need to add the API key for this particular execution.

04:30.900 --> 04:34.290
Uh, and then I should run all of these from the scratch.

04:34.290 --> 04:35.640
And I will do that immediately.

04:35.640 --> 04:44.820
Right now, uh, and I'm going to rerun all of these from the scratch because, um, it will not I mean,

04:44.850 --> 04:48.360
unless until I restart the notebook, these things is not just going to work for me.

04:48.360 --> 04:52.980
So I'm going to run everything from the scratch right now.

04:53.610 --> 04:56.280
And it says that the datasets are test testing.

04:56.310 --> 04:59.310
Two datasets already exist because it's trying to push from the scratch.

04:59.340 --> 05:00.630
Do you want to overwrite?

05:00.630 --> 05:07.110
So I'm going to just say no because I don't want to overwrite the existing data set in the, uh, deep

05:07.140 --> 05:08.130
evolve cloud.

05:08.130 --> 05:10.110
So I'm just going to put that guy as it is.

05:10.140 --> 05:10.620
Look at that.

05:10.620 --> 05:12.880
The notebook is just running for me.

05:12.970 --> 05:14.500
All of them, one by one.

05:14.500 --> 05:15.670
Which is great.

05:16.240 --> 05:18.880
Um, the rag operation is running.

05:18.880 --> 05:21.130
It took like 14 seconds last time.

05:21.670 --> 05:23.590
Now 12 seconds, which is great.

05:23.590 --> 05:25.900
And now the evaluation is running.

05:26.080 --> 05:27.700
Hopefully this time it is going to work.

05:27.730 --> 05:28.360
Oh, look at that.

05:28.360 --> 05:30.010
It is working fine this time.

05:30.430 --> 05:31.690
Uh, which is great.

05:31.780 --> 05:33.070
Yeah, there is this.

05:33.070 --> 05:34.600
This happened to me last time as well.

05:34.600 --> 05:37.570
It says OpenAI rate limit exceeded and retrying.

05:37.600 --> 05:39.250
12345.

05:39.490 --> 05:44.500
Uh, it happens sometimes if your test is not matching to the actual versus expected.

05:44.770 --> 05:48.310
Um, then yeah, this this kind of issue happens.

05:48.310 --> 05:50.020
But but that's fine.

05:50.170 --> 05:54.550
Uh, we will see the end of the result is just going to be, uh, okay.

05:56.080 --> 05:57.970
So yeah, there we go.

05:57.970 --> 05:59.260
14% is completed.

05:59.290 --> 06:03.490
There is one more test running like the evaluating seven test cases in parallel.

06:03.550 --> 06:06.970
So it's keep working.

06:06.970 --> 06:11.320
So make sure while you run this test guys you need to have the OpenAI API key.

06:11.350 --> 06:16.390
If you don't really have it you can't really use this particular, matrices.

06:16.420 --> 06:17.860
Anyways, there we go.

06:17.890 --> 06:19.660
Its execution is successful over here.

06:19.660 --> 06:25.330
As you can see, there is a summary of all those details coming up for all the test cases, which you

06:25.330 --> 06:30.640
can see from the text editor over here.

06:30.670 --> 06:35.560
It's just going to show for all the test cases, but you can actually see in a more visual way over

06:35.560 --> 06:36.850
here as you can see.

06:37.510 --> 06:39.070
So this is the test.

06:39.070 --> 06:46.270
Or over here like the test case of zero is passed, one is passed, but two is failing because I'm asking

06:46.270 --> 06:48.160
what is network interception playwright.

06:48.160 --> 06:50.470
But the actual output is like network interception.

06:50.470 --> 06:56.140
Player allows you to monitor, modify or block network request made by the web page during the testing.

06:56.350 --> 07:00.250
This feature is useful for debugging and ensuring that your application behaves correctly, but the

07:00.250 --> 07:04.150
expected output that I have proposed is the network interception.

07:04.150 --> 07:08.350
Playwright allows the user to modify, block or inspect network request and response, enabling better

07:08.350 --> 07:11.530
control over API calls and testing.

07:11.530 --> 07:19.580
So what's happening over here is the contextual relevance is pretty low compared to what that has been

07:19.580 --> 07:21.200
outputted by the large language model.

07:21.200 --> 07:24.110
And that that's why it looks like this is failing.

07:24.680 --> 07:30.470
But you see that this is the relevance context, which is, uh, which is coming out from the, uh,

07:30.500 --> 07:35.600
from the actual, uh, retrieval context from our rag over there.

07:36.020 --> 07:37.700
Uh, and similarly, there is one more failure.

07:37.700 --> 07:39.230
And this is like abruptly failing.

07:39.230 --> 07:42.380
It's like, does playwright have any native test runner unlike selenium?

07:42.410 --> 07:46.610
It says playwright primarily designed for automation, library end to end, blah blah blah.

07:46.610 --> 07:47.960
And it has a built in.

07:48.020 --> 07:50.900
It does not comes with a native test runner or something.

07:50.930 --> 07:55.970
Other tools have like like cypress, which is completely wrong.

07:56.000 --> 07:59.120
Playwright does have the native test runner and it is not there.

07:59.120 --> 08:04.880
So what it does mean to us over here is that at the moment, our large language model does not have

08:04.880 --> 08:08.780
any such information, uh, to, to give us this particular response over here.

08:08.780 --> 08:17.600
So we need to have our actual output, uh, which is either correctly trained by our Rag system or maybe,

08:17.690 --> 08:20.400
uh, our data that we have supplied is not sufficient.

08:20.400 --> 08:27.030
So we have to now train our large language model with sufficient information so that it can give us

08:27.030 --> 08:27.510
the output.

08:27.510 --> 08:28.020
Like this.

08:28.020 --> 08:32.280
Like, yes, playwright has a native test runner called Playwright Test, which handles the test creation

08:32.280 --> 08:32.820
and execution.

08:32.820 --> 08:36.570
Unlike selenium, which relies on JUnit and unit X unit for test execution.

08:36.570 --> 08:38.460
So this is the expected output.

08:38.460 --> 08:41.550
But for some reason the actual output is not coming up over here.

08:41.550 --> 08:49.080
And that's because our actual data that we have given while we were training our large language model,

08:49.260 --> 08:55.830
uh, with a rag that we have given the input, which is this one over here is not sufficient because

08:55.830 --> 08:58.650
it doesn't really tell us anywhere about the test runner.

08:58.680 --> 09:04.140
Uh, in this particular detail, as you can see over here, I have not really given that I have made

09:04.140 --> 09:09.480
this explicitly because I wanted to see the failure over here, and we can fix this particular problem.

09:09.540 --> 09:12.270
And the same thing happens for the test case five as well.

09:12.270 --> 09:18.810
So now in our next lecture, we will see how we can fix these kinds of problems that we get uh, and

09:18.810 --> 09:23.220
how we can make sure that these codes work fine as expected.

========================================================================================

WEBVTT

00:00.080 --> 00:04.790
So we now need to figure out how we can fix this particular problem that we have.

00:04.850 --> 00:09.830
We are actually facing in this particular test execution or the evaluation that we are doing at the

00:09.830 --> 00:10.610
moment over here.

00:10.640 --> 00:12.020
So how do we actually do that?

00:12.020 --> 00:18.380
So basically we now have to train our data that we have got within our application, uh, which can

00:18.380 --> 00:23.930
have or handle this kind of data that we are, uh, we are currently incurring with.

00:23.960 --> 00:31.160
So the way which I'm going to fix this particular issue is by supplying some more information for our,

00:31.370 --> 00:33.440
uh, for our document that we have got.

00:33.440 --> 00:36.500
So, uh, over here, the first failure is this one.

00:36.500 --> 00:41.960
So the failure is what is network interception in playwright then it gives us this particular response

00:41.960 --> 00:42.530
over here.

00:42.530 --> 00:45.500
But the expected output is something like this.

00:45.500 --> 00:48.500
Like it should be a bit more, uh, slightly smaller.

00:48.500 --> 00:50.180
I think this is fine for the context.

00:50.210 --> 00:55.730
11 so I'm just going to leave this guy as it is, because it's just about the way that it needs to change

00:55.730 --> 00:56.810
the threshold a bit.

00:56.810 --> 00:58.970
So I'm going to leave that guy over there.

00:58.970 --> 00:59.840
But this one.

00:59.870 --> 01:01.670
Does playwright have native test runner?

01:01.700 --> 01:05.000
We don't really have such information in our retrieved context.

01:05.030 --> 01:06.320
That's the reason why it's failing.

01:06.320 --> 01:08.450
So I need to add this retrieved context.

01:08.450 --> 01:13.190
So the way I'm going to do it is I'm just going to copy this expected output over here.

01:13.190 --> 01:16.070
Maybe I'm going to copy this document first of all.

01:17.150 --> 01:19.790
And I'm going to paste this document.

01:20.120 --> 01:23.210
And over here I'm just going to say copy this.

01:23.240 --> 01:27.680
And I'm just going to paste it something like this.

01:27.680 --> 01:39.470
I'm going to say uh playwright uh comes with native test runner called as playwright uh test uh runner

01:39.500 --> 01:44.180
which handles test uh creation and execution.

01:44.480 --> 01:49.430
Uh, unlike selenium which relies on JUnit unit X unit, uh, something like that.

01:49.820 --> 01:53.690
Maybe I don't even need to give this one, unlike selenium, blah blah blah.

01:53.690 --> 01:55.310
So I'm just going to leave this guy as it is.

01:55.310 --> 01:59.920
So I'm just going to say playwright comes with a native test runner called playwright test uh, runner,

01:59.920 --> 02:02.440
which handles the test creation and execution.

02:02.470 --> 02:02.770
Right.

02:02.800 --> 02:08.830
So this is the data that I'm adding in as an extra data, which is required for our Rag system to work

02:08.830 --> 02:09.460
correctly.

02:09.460 --> 02:14.380
And the next test case that is failing is this one that's created handles the, uh, debugging of web

02:14.410 --> 02:15.280
application.

02:15.430 --> 02:19.060
Uh, so I'm going to say playwright supports debugging through network tracing and stuff.

02:19.060 --> 02:22.750
So probably uh, I'm going to add that information as well.

02:22.750 --> 02:30.730
So I'm just going to say uh document of the page content is equal to this uh over here.

02:30.730 --> 02:31.630
And that's it.

02:31.660 --> 02:33.310
That's gonna do this.

02:33.310 --> 02:34.630
I'll put a comma there.

02:35.020 --> 02:35.830
Uh, cool.

02:35.830 --> 02:40.000
So I have fixed two test cases that I have which were failing before.

02:40.000 --> 02:43.840
And the third one, I just left it as it is because I think it's just about the answer.

02:43.840 --> 02:44.170
Relevant.

02:44.170 --> 02:46.060
So I'm just going to leave that guy as it is over there.

02:46.090 --> 02:47.170
I'm going to save this.

02:47.170 --> 02:51.190
And now this this data is going to be a bit more trained this time.

02:51.190 --> 02:55.930
So this time the evaluation should work fine as expected because our application is now trained with

02:55.930 --> 02:58.480
the with the relevant information this time.

02:58.510 --> 03:01.330
So we will try to run everything from the start.

03:01.330 --> 03:03.070
So I'm going to run all.

03:03.520 --> 03:04.960
I'm not going to upload anything.

03:04.960 --> 03:10.240
So I'm just going to say no for now and look at that.

03:10.240 --> 03:13.840
So it's just going to run all of these one more time.

03:14.710 --> 03:20.020
I think the place where it stops is especially on the yeah, this test case creation side, it took

03:20.020 --> 03:24.520
14 seconds last time and then 10s the time before.

03:24.550 --> 03:26.080
Yeah 14 seconds.

03:26.080 --> 03:31.330
And now the evaluation is running and we will see how the evaluation works.

03:31.390 --> 03:32.410
Yeah there we go.

03:32.440 --> 03:36.340
That's still the same set of failures which is happening which is fine.

03:40.870 --> 03:41.860
And there we go.

03:41.860 --> 03:43.900
You can see that the execution is completed this time.

03:43.900 --> 03:50.350
And as expected this time we only have one failure, which we know about the contextual relevance.

03:50.350 --> 03:53.380
As you remember, the same thing is happening over here.

03:53.500 --> 03:59.770
Um, but you can notice that we have all of the test cases got passed, which is amazing.

03:59.770 --> 04:02.470
And over here the test case three is a bit different.

04:02.680 --> 04:06.220
It says does the playwright has native selenium test runner like selenium.

04:06.310 --> 04:07.870
Uh, it says actual output.

04:07.900 --> 04:11.170
I don't know if playwright has native test runner like selenium.

04:11.170 --> 04:16.330
My previous context didn't provide the information, but specific test runner blah blah blah.

04:16.330 --> 04:23.530
But over here the context which is coming out is uh, is not quite right.

04:23.560 --> 04:30.880
Unfortunately, it says playwright is modern automation library for end to end testing.

04:30.910 --> 04:34.240
Looks like the context which is coming out is not quite right.

04:34.240 --> 04:34.660
It should.

04:34.690 --> 04:35.380
It should not be.

04:35.380 --> 04:40.120
This retrieved context should should have the information that we have passed in.

04:40.120 --> 04:43.330
But for some reason it has not got, which is crazy.

04:43.330 --> 04:46.390
So probably we need to rerun this again and see why this is happening.

04:46.390 --> 04:51.430
But you could see that we have got all of these tests passing this time.

04:51.430 --> 04:58.520
Like now we have 85.71% passing of the test cases, which was not the case earlier while we were doing

04:58.520 --> 04:58.820
so.

04:58.820 --> 05:04.400
If I just go back to the evaluation, you see that the entire test cases are now parsing for us over

05:04.400 --> 05:04.730
here.

05:04.730 --> 05:07.580
And this is where the graph comes very handy.

05:07.580 --> 05:15.230
You see that the we will now notice that our improvement of our large language model is slowly and steadily

05:15.230 --> 05:19.190
increasing, rather the trend going down as well.

05:19.520 --> 05:26.510
And you see that from 4 to 6 to 4 to 6 out of seven, we have improved the test cases execution.

05:26.510 --> 05:32.720
And we can see the entire test case, uh, happening for every single, uh, test over here.

05:32.720 --> 05:37.400
So this is the beauty of the deep evolve as compared to ragas, because you can see that in deep eval.

05:37.430 --> 05:45.860
You can see the entire operation, uh, in a, in an full overview, like how the executions are happening

05:45.860 --> 05:47.570
and how you can test them up.

05:47.570 --> 05:52.190
So that is the beauty of deep evolve as compared to ragas over here.

05:52.280 --> 05:55.730
And I could see that it is quite relevant as well.

05:55.730 --> 06:04.080
You can use the same concept to also fuse the the rag that we have built with our documents.

06:04.140 --> 06:05.400
Uh, extraction.

06:05.550 --> 06:13.440
Uh, over here, uh, the PDF files, we can do the exact same thing, and then we can pass the Excel

06:13.440 --> 06:15.030
sheet that we have got the data set.

06:15.030 --> 06:20.130
As you can see over here, the bias question that we were asking before, we can try to ask this question,

06:20.130 --> 06:22.290
you can create this as the data set.

06:22.290 --> 06:24.420
You can pass it to uh deep valve.

06:24.420 --> 06:28.800
And then you can ask the question from there, like how we did over here in this particular section.

06:28.800 --> 06:32.850
And then you can verify how the testing is, uh, testing can be done.

06:32.850 --> 06:37.080
Those things is like a homework for you to do it and see how you can achieve that.

06:37.080 --> 06:38.880
But that is going to be amazing as well.

06:38.910 --> 06:44.640
Guys, you can try to achieve all these operation, like how we are doing over here in this particular,

06:44.640 --> 06:51.030
uh, deep level, uh, for testing the Rag system and the AI agents that we have built in our earlier

06:51.030 --> 06:52.650
sections of this course.

06:52.650 --> 06:55.050
Once again, thank you so much for purchasing this course.

06:55.050 --> 06:56.400
And you guys have a great day.


========================================================================================

