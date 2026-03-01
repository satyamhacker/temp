WEBVTT

00:00.140 --> 00:01.820
Welcome to the next section of our course.

00:01.820 --> 00:08.270
And in this section we are going to talk about Olama and how we can make use of this Olama for building

00:08.300 --> 00:13.310
a large language model based application using our local large language model.

00:13.310 --> 00:21.020
So we are going to use this Olama as the as the medium to build our large language model based application

00:21.020 --> 00:24.950
using long chain with the local large language model.

00:24.950 --> 00:27.680
So this is what is the power of this olama itself.

00:27.680 --> 00:30.800
And I'm going to quickly show you how these things are going to work behind the scene.

00:30.800 --> 00:38.210
So if you just go to the Olama comm website over here, this is the page which I'm talking about, or

00:38.210 --> 00:42.620
this is the application that I'm talking about, which is going to be helpful for you to run the large

00:42.620 --> 00:45.620
language models locally within your own machine.

00:45.620 --> 00:51.350
So if you have a mac OS or Linux or Windows, you can just go ahead and download this particular application

00:51.350 --> 00:55.550
within your machine, and then you can start using all the models within your machine.

00:55.550 --> 00:56.960
That is amazing, right?

00:56.960 --> 01:04.540
You don't really have to sign up with the OpenAI's API to call an API for accessing the large language

01:04.540 --> 01:09.310
models, like how you usually do by paying so much of money, those things are not even required.

01:09.310 --> 01:15.040
So if you just go to the Openai.com and if you just go to their API platform over here, you see that

01:15.040 --> 01:16.720
there is this API login comes in.

01:16.720 --> 01:22.780
So if you just go and hit this API login, I have already signed up for this particular OpenAI login

01:22.780 --> 01:23.440
over here.

01:23.470 --> 01:25.540
I mean you can see there are some pricings available.

01:25.540 --> 01:32.590
So for every single, uh, model that you use with their signed up, uh, models API, you're going

01:32.620 --> 01:38.380
to be paying this much money for these many input that you're going to be entering, like for 1 million

01:38.380 --> 01:38.890
tokens.

01:38.890 --> 01:44.200
These are things that these are the money that you have to pay for these particular large language models

01:44.200 --> 01:50.170
while you're going to use that, if it is hosted in their own platform like OpenAI platform or Cloud

01:50.170 --> 01:52.510
Anthropic Platform or Google Gemini platform.

01:52.510 --> 01:55.540
So you have to sign up and you have to pay money to them.

01:55.540 --> 01:59.800
But if you're going to be building a large language model application, and if you don't want to spend

01:59.800 --> 02:06.870
these many money, then you can just host, or maybe just can run your large language model within your

02:06.870 --> 02:08.490
local machine itself.

02:08.490 --> 02:12.990
And that is the power of this particular olama, because it will let you do that for you.

02:12.990 --> 02:18.150
So I have already downloaded the Olama within my local machine in my Mac operating system.

02:18.150 --> 02:21.570
So it is very, very easy for me to just start using it.

02:21.870 --> 02:23.310
I mean, it's very straightforward.

02:23.310 --> 02:26.070
Just go ahead and click this download based on your operating system.

02:26.070 --> 02:27.780
The download is going to happen for you.

02:27.780 --> 02:30.690
And because I am using Mac OS, I can go and click this one.

02:30.720 --> 02:34.800
If you're going to use Linux or Windows, just go ahead and select the relevant operating system and

02:34.800 --> 02:36.780
download the tools that you're looking for.

02:37.020 --> 02:38.910
And finally the models.

02:38.910 --> 02:41.160
This is the most important part over here.

02:41.160 --> 02:46.470
If you just go to the models over there, this particular models that you are seeing over here are all

02:46.470 --> 02:51.870
the models, like the full blown models available within the Olama site itself.

02:51.870 --> 03:03.290
So you can use a deep seek R1 or llama three dot 3 or 4, or llama three R2 and Mistral Q1 Q1 2.5.

03:03.320 --> 03:07.220
You see that all the models that you name it, it's available over here.

03:07.220 --> 03:13.250
And most importantly, you can also see that there are options where you can just select specific model

03:13.250 --> 03:17.510
which has specific for embedding or vision or even tool support.

03:17.510 --> 03:22.820
So if you have any of the agents that you're going to be building, and then if you wanted to use the

03:22.820 --> 03:25.250
model for tool support, you can use that as well.

03:25.280 --> 03:31.250
Guys, you see that 3.3 70 billion parameter has got the tool support model over here which is amazing.

03:31.280 --> 03:32.540
You can use that as well.

03:32.540 --> 03:39.080
And if I'm going to use this deep one, the most popular model to date is going to be very, very straightforward

03:39.080 --> 03:39.380
as well.

03:39.380 --> 03:42.590
You can choose a specific billion parameter.

03:42.590 --> 03:45.950
And then you can start working with this particular model as well.

03:45.950 --> 03:50.570
If you're going to be using this model for building your local large language model applications.

03:51.710 --> 03:53.810
So that is about the Obama for you.

03:53.810 --> 03:56.660
And I have already downloaded it and I have already installed it.

03:56.660 --> 04:01.340
So please go ahead and install it before our next lecture because we are going to start using it from

04:01.340 --> 04:02.450
our next lecture.

========================================================================================

WEBVTT

00:00.050 --> 00:00.440
All right.

00:00.440 --> 00:04.310
So hopefully you have already downloaded the ulama within your local machine and you have installed

00:04.310 --> 00:04.580
it.

00:04.580 --> 00:05.750
So which is great.

00:05.750 --> 00:09.980
And if you have not please go ahead and do it again, because that is something required for our next

00:09.980 --> 00:12.350
discussion that we are going to be doing in this particular lecture.

00:12.350 --> 00:18.710
So as you can see over here, I can choose the model that I wanted to run within my local machine.

00:18.710 --> 00:24.620
So I can choose 7 billion parameter or 8 billion parameters, 14 billion parameter, 32 billion parameter,

00:24.620 --> 00:27.800
all the way up to seven 671 billion parameter.

00:27.800 --> 00:30.800
Within my machine, you see that there is a drop down over here.

00:30.830 --> 00:35.240
It's going to show you the size of this particular parameter and the model.

00:35.240 --> 00:38.150
So 7 billion parameter has got 4.7 gig.

00:38.150 --> 00:45.170
And if you see 671 billion parameter it is 404 GB that you have to have within your machine.

00:45.170 --> 00:51.260
I'm telling you based on the parameter, the complexity of the transformer model increases and based

00:51.260 --> 00:56.420
on the complexity, it also increases the the processing power.

00:56.420 --> 01:00.620
And also you need to have quite a lot of quantization execution support.

01:00.620 --> 01:04.580
So you can see that for a 7 billion parameter I have the model over here.

01:04.580 --> 01:09.440
And you see that the model has got a quantization version of two.

01:09.460 --> 01:15.280
And it also has got the the total headcount over here which is 28.

01:15.280 --> 01:19.630
So totally it's going to have 28 different types of headcounts like classifications that it's going

01:19.660 --> 01:21.250
to support in this particular model.

01:21.250 --> 01:25.960
And it also has got a label of 7 billion because it's a 7 billion parameter.

01:25.960 --> 01:31.420
And the same thing is going to keep changing based on the type of parameter they're going to choose.

01:31.420 --> 01:34.720
For instance, if you're going to choose like 671 billion parameter.

01:34.720 --> 01:40.030
And if you choose this one over here, you see the number of headcounts might have increased quite a

01:40.030 --> 01:41.260
lot this time.

01:41.260 --> 01:45.850
So the headcount right now is 128 as opposed to 14 it was before.

01:45.850 --> 01:49.090
And the headcount kV is also 128.

01:49.240 --> 01:52.870
So it is going to support quite a lot of different classifications.

01:52.900 --> 01:56.560
While you're going to be using this particular model within your machine.

01:56.560 --> 02:01.810
And also the size is also increases based on that the quantization increases.

02:01.810 --> 02:08.080
And if the quantization increases, obviously you need to have a lot of GPU power, CPU power, Ram

02:08.080 --> 02:09.340
power within your machine.

02:09.370 --> 02:15.460
I will say most of our machines are not really built to run this 671 billion parameter or 70 billion

02:15.460 --> 02:21.680
parameter and even 32 billion parameter we can probably limit until 14 billion or 8 billion at the max.

02:21.680 --> 02:25.250
And I'm using Apple M1 Max machine over here.

02:25.250 --> 02:30.350
And I have got 64 GB of memory and it is quite good in the inferencing.

02:30.350 --> 02:32.270
So I'm just going to use this particular machine.

02:32.270 --> 02:38.150
But if you have uh, a windows machine or same kind of machine.

02:38.150 --> 02:41.060
So probably we can just limit with the eight GB.

02:41.060 --> 02:47.690
And if you don't really have a powerful machine, I will recommend you to use a lower version of the

02:47.690 --> 02:48.380
parameter.

02:48.380 --> 02:54.410
But the more lower parameter that you use in the model, the less predictable output that you can actually

02:54.410 --> 02:59.360
get out from the particular model, because the model really doesn't perform quite well if you use smaller

02:59.360 --> 03:01.400
model within your local machine.

03:01.400 --> 03:09.590
So either try to get a GPU for that matter, like 2080 or 30 80 or 40, 90, 40, 90 is going to be

03:09.590 --> 03:10.880
very costly for you for sure.

03:10.910 --> 03:16.970
3080 at least max, or maybe 2080 if you just get any of these Nvidia graphics card within the machine,

03:16.970 --> 03:18.230
you can probably use that.

03:18.230 --> 03:22.850
And then you can try to run whatever that we're going to be discussing in this particular course.

03:22.850 --> 03:24.980
But as I said, that's about it.

03:24.980 --> 03:30.190
That's the thing that we are going to be using within our machine, and we'll see how we can.

03:30.400 --> 03:33.700
Download this particular model and then how we can work with it.

03:33.700 --> 03:38.770
So that is how you can understand how these models are really working behind the scene.

03:39.100 --> 03:45.250
So if I choose any other model, not just the deep sea, let's say a llama 3.3, they also have got

03:45.280 --> 03:47.950
like 70 billion parameter, as you can see over here.

03:47.950 --> 03:55.030
And if I'm going to choose some other models like you see that llama 3.1, there is a 405 billion parameter,

03:55.030 --> 03:58.510
which is 243 GB of storage itself.

03:58.510 --> 04:02.530
And it is going to, uh, it's going to have quite a lot of different operations that you are going

04:02.560 --> 04:03.790
to be doing over there.

04:03.790 --> 04:10.420
And let's see what is the total headcount that I have got like 128 headcount, as you can see over here.

04:10.420 --> 04:15.370
And the headcount cave is just eight, whereas in deep sea it was 128 as you know.

04:15.370 --> 04:17.950
So yeah, it depends upon the model.

04:18.010 --> 04:21.040
The things are going to keep changing and also the complexity changes.

04:21.040 --> 04:26.890
And so is your machine's performance reduces based on the type of parameter and the model that you really

04:26.890 --> 04:27.670
use.

04:27.820 --> 04:32.440
Well, as I said in our next lecture, we are going to see how we can start using any one of the models

04:32.440 --> 04:36.040
in our local machine and also try to play around with that.

========================================================================================

WEBVTT

00:00.080 --> 00:00.620
All right.

00:00.620 --> 00:05.810
So now we are going to start using any of the model which is available within the llama website over

00:05.810 --> 00:06.170
here.

00:06.170 --> 00:10.820
And then we will see how we can run this particular model within our machine.

00:10.820 --> 00:18.050
So in order for me to do that, I'm going to just go to uh, my hyper or terminal or any terminal that

00:18.050 --> 00:19.070
you are really using.

00:19.070 --> 00:24.260
And I use hyper terminal, uh, in my Mac operating system because it's quite clean and neat.

00:24.290 --> 00:28.670
And this is one of the terminal that you can download it from the internet and then start using it as

00:28.670 --> 00:28.820
well.

00:28.820 --> 00:30.020
It's pretty straightforward.

00:30.140 --> 00:34.340
Uh, and this terminal over here, I'm just going to say uh oh llama.

00:34.520 --> 00:40.970
And if I just say list over here, it is going to list me all the models, which is available over here

00:40.970 --> 00:45.620
the moment I run this all llama list, as you can see, there is this llama is also up and running for

00:45.620 --> 00:46.700
me over here.

00:46.730 --> 00:53.810
So all you have to do is you need to either run the llama first and then use the command o llama list,

00:53.810 --> 01:00.320
which is going to show you the list of all the models which is already available within your, uh,

01:00.320 --> 01:00.860
machine.

01:00.860 --> 01:04.930
So that is what is the model that I have already downloaded it in my machine and it is running.

01:04.960 --> 01:08.140
I mean, it's not running, but it is already there within my machine.

01:08.140 --> 01:14.290
I can use this models within my machine, but if I wanted to, maybe you can see that I don't really

01:14.290 --> 01:19.060
have the Pi for, uh, over here, this particular model.

01:19.060 --> 01:22.210
So if I want to use this particular model, I can really use that as well.

01:22.240 --> 01:28.450
So let's say if there is any smaller model that I can show you as a demo, probably, um, maybe.

01:28.480 --> 01:30.370
What is this model?

01:30.400 --> 01:31.960
Uh, this looks.

01:31.990 --> 01:34.630
Yeah, I'm just going to download this for the demonstration purpose.

01:34.630 --> 01:39.940
So if I want to use this particular model, like 1.8 billion parameter model, I have to just run this

01:39.940 --> 01:40.330
command.

01:40.330 --> 01:44.230
Oh, llama run QN1 and colon 1.8 billion.

01:44.260 --> 01:46.960
Just copy this whole thing and paste it over here.

01:46.960 --> 01:51.730
And if I hit enter you'll notice that pretty much like if you have used a Docker before, it is going

01:51.760 --> 01:54.490
to download the image from Docker.

01:54.520 --> 01:55.750
You remember from the Docker Hub.

01:55.750 --> 02:02.300
You can download the image similarly over here in the llama, if you just do a llama run QN1 point 8

02:02.300 --> 02:07.690
billion, it is going to go and pull the manifest first, and then it's going to start downloading the

02:07.690 --> 02:11.350
the entire model for you within your local machine.

02:11.350 --> 02:16.750
And you see that I have downloaded it in my local machine and once it is downloaded, it is going to

02:16.780 --> 02:18.430
get all the metadata and everything.

02:18.430 --> 02:23.530
And then it is going to start running because we have specified run here, you can start seeing that

02:23.560 --> 02:26.740
this particular model can be even executed over here.

02:26.740 --> 02:32.080
And you can start typing the command and ask the question pretty much like how you do with the ChatGPT.

02:32.860 --> 02:36.130
So if you have the ChatGPT account, that's what you do, right?

02:36.160 --> 02:40.060
You just go to the ChatGPT and then you're going to start asking the question over here.

02:40.060 --> 02:43.750
The same thing is going to happen with this as well over here.

02:43.780 --> 02:48.730
See, now you have got a prompt, uh, ready for you to type so that you can get answers.

02:48.730 --> 02:52.060
So if I ask, like, how are you doing?

02:52.360 --> 02:54.610
Uh, and you see that it's going to start responding.

02:54.610 --> 02:56.140
I'm an artificial intelligence language model.

02:56.140 --> 02:59.020
I don't have feeling in this traditional sense.

02:59.020 --> 03:03.100
However, I'm functional, properly ready to assist any of the questions or task.

03:03.130 --> 03:03.850
Amazing.

03:03.850 --> 03:04.450
Great.

03:04.450 --> 03:11.100
So that is how you actually pull, uh, A model and then run the model within your local machine.

03:11.100 --> 03:17.010
And let's say if you want to, uh, if you're going to ask some question like write a selenium with

03:17.160 --> 03:23.910
C-sharp dotnet code for uh, google.com, uh, website.

03:23.910 --> 03:28.980
And if I ask this question, you see that now it is going to immediately start writing the code.

03:28.980 --> 03:31.110
I mean, the code itself is entirely wrong.

03:31.110 --> 03:35.910
As you can see, it is doing HTTP client, HTTP client, HTTP client, or SSL protocol.

03:36.120 --> 03:37.650
Uh, something like that.

03:37.650 --> 03:41.760
I don't even understand what this is writing because it's not even a selenium code, to be honest.

03:41.760 --> 03:44.370
It's completely messed up with the selenium code.

03:44.370 --> 03:52.230
So it's just writing, uh, is using the system dot net dot http uh package and then is writing a selenium

03:52.230 --> 03:53.010
code from that.

03:53.040 --> 03:53.910
It's crazy.

03:53.940 --> 03:55.410
Like it's completely wrong code.

03:55.410 --> 04:02.520
So this is because, as I told you, the model that we are using over here is actually a very, very

04:02.520 --> 04:08.250
small, uh, I mean old 11.5 series, uh, from Alibaba Cloud.

04:08.460 --> 04:13.190
And it is also having less, uh, less parameters over here.

04:13.700 --> 04:20.600
But if I'm going to use some other models, then I will have even more, uh, even accurate answer.

04:20.630 --> 04:26.090
Like if I use some model which has got maybe the deep sea model, and if I try to ask the same question,

04:26.090 --> 04:27.980
things will be entirely different.

04:27.980 --> 04:32.180
So I will quickly show you how it is going to look like if I'm going to use the deep sea model.

04:32.180 --> 04:37.550
So if I want to quit this particular prompt, all I have to do is I want to just say by like slash by.

04:37.580 --> 04:41.300
So it will just quit the prompt execution over here.

04:41.300 --> 04:47.120
And now, as I told you in the Olama list, I can see all my models coming up over here.

04:47.120 --> 04:52.460
And if I want to use any one of the other model, for instance, I have gotten deep sea r one um, uh,

04:52.460 --> 04:54.110
8 billion parameter.

04:54.110 --> 04:55.700
So if I want to use that.

04:55.700 --> 04:58.670
So I'm just going to say, oh llama run.

04:58.670 --> 05:03.170
And if I hit says space, there is going to show me all the different model that I have got.

05:03.170 --> 05:07.940
You may not be getting this option over here within your machine, because you may need to install some

05:07.940 --> 05:10.220
third party plugin to get this kind of answer.

05:10.250 --> 05:12.460
If you don't get it, don't worry, you just have to do this.

05:12.490 --> 05:15.910
Copy this entire thing from here.

05:15.940 --> 05:16.810
Like deep sea.

05:17.020 --> 05:19.420
And then paste it over here.

05:19.450 --> 05:20.770
Like, uh, deep sea.

05:20.830 --> 05:22.990
Uh, hyphen R1 8 billion.

05:22.990 --> 05:27.850
And if I hit enter, you'll notice that because it is already downloaded in my machine, it doesn't

05:27.850 --> 05:34.180
really download it once again, but it will start running this particular model within my local machine.

05:34.180 --> 05:36.820
So you see that it's a big, um, model.

05:36.820 --> 05:43.300
And it has got a lot of things to be inferred to be set up before you start inferencing.

05:43.300 --> 05:47.110
That's the reason why taking a bit of a time while it was initiating things.

05:47.110 --> 05:47.830
Right.

05:47.830 --> 05:53.740
And now if I'm going to ask the same question that I asked to this, uh, model, uh, so I'm going

05:53.740 --> 05:56.830
to just copy this whole thing and I'm going to paste it over here.

05:56.860 --> 05:56.980
Right.

05:56.980 --> 05:59.440
Selenium, C-sharp code for google.com website.

05:59.440 --> 06:06.280
You see that the moment I asked this question now, because this deep seek R1 model is a, uh, reasoning

06:06.280 --> 06:09.940
model, it is first starting to think like what it has to do.

06:10.000 --> 06:15.460
You see that it is writing all the thinking process, um, before it Start writing the answer.

06:15.460 --> 06:19.420
And look at that now it's writing a selenium C-sharp code for us guys.

06:19.420 --> 06:25.390
It has thought a lot of things before it answered the question, and then it is writing the correct

06:25.390 --> 06:26.740
selenium C-sharp code.

06:26.740 --> 06:32.980
I am 100% sure this code, if I'm going to use it within my local Visual Studio or Visual Studio Code,

06:33.010 --> 06:38.890
it is just going to work because the the answer is quite right and this is what you should be doing

06:38.890 --> 06:40.870
while you use this particular model.

06:41.050 --> 06:45.730
Um, and that's the reason why, as I told you, if you're going to be using an effective model, if

06:45.730 --> 06:52.810
you're going to be using a hyper parameter model, then you should be using, then you should be getting

06:52.840 --> 06:58.270
a good response as opposed to a smaller model with a lesser parameter support on that.

06:58.540 --> 07:05.800
But as I said, this is how you can actually run a deep Sikh model or other types of model within your

07:05.800 --> 07:07.180
local machine.

07:07.330 --> 07:12.100
Even without even having an internet connectivity, you can run all these operations for you.

07:12.100 --> 07:16.870
That is the power of running the local large language model using Olama.

========================================================================================

WEBVTT

00:00.110 --> 00:07.790
So now that we saw how we can run the LM like deep Seac or Qn 1.8 billion parameter models within our

00:07.790 --> 00:14.120
local machine, now we're going to see how we can make use of the user interface looks better.

00:14.150 --> 00:16.040
Pretty much like the ChatGPT interface.

00:16.070 --> 00:17.540
Like how you're going to see that.

00:17.630 --> 00:18.320
Guess what?

00:18.320 --> 00:24.830
We are going to be building these kind of interfaces using our Lang chain agent in our upcoming section

00:24.830 --> 00:30.920
of this course, like chatbots, but I just wanted to give you a flavor of how you can use these models

00:30.920 --> 00:32.750
as a GUI interface to your machine.

00:32.750 --> 00:33.560
You can also use.

00:33.560 --> 00:38.780
There are so many different tools available, something like Misty over here dot app, as you can see

00:38.780 --> 00:39.140
over here.

00:39.140 --> 00:43.640
So this is the easiest way to use the local and online AI model within your machine.

00:43.640 --> 00:46.940
So you can just use this particular tool over here.

00:46.940 --> 00:51.110
Or you can also use something called as the GPT for all.

00:51.110 --> 00:53.660
So just go search for GPT four dot GPT.

00:53.690 --> 01:02.240
For all I know, this is also another tool that you can use in order for using the model within your

01:02.270 --> 01:02.780
machine.

01:02.780 --> 01:07.280
So you see that they also support the, uh, the R one model over here.

01:07.280 --> 01:11.780
And then the thinking is going to come up over there, and then it is going to start answering the questions

01:11.780 --> 01:12.140
for you.

01:12.140 --> 01:13.580
So you can use that as well.

01:13.580 --> 01:16.600
I'm going to quickly show you the mistake that I was talking about.

01:16.600 --> 01:22.240
So if I just say that Misty like Misty, this is going to come up over here.

01:22.270 --> 01:22.690
You see that?

01:22.690 --> 01:24.970
This is the interface looks pretty familiar for you.

01:24.970 --> 01:26.740
You can use for inferencing.

01:26.740 --> 01:28.870
You can also upload the document if you wanted to.

01:28.900 --> 01:36.130
You can also attach YouTube links and also images to to also get the response from the vision models

01:36.130 --> 01:36.790
if you wanted to.

01:36.820 --> 01:38.500
So those things you can do it as well.

01:38.530 --> 01:39.250
And look at that.

01:39.250 --> 01:44.080
It is also automatically detecting all the model which is available within my machine.

01:44.110 --> 01:51.040
See that it's telling me that there is an active queue, an 8.1 billion parameter, um, model over

01:51.040 --> 01:51.490
here.

01:51.490 --> 01:54.250
But you can also choose the different model within my machine.

01:54.250 --> 01:57.100
You see that it's showing me all the different models that I have got.

01:57.100 --> 02:02.350
And if I'm going to choose the deep sea cod one model over here, and if I'm going to ask the same question

02:02.350 --> 02:08.290
that I just asked, uh, over here, if you remember, which is the right, the selenium C-sharp code,

02:08.440 --> 02:10.840
uh, I can do that as well if I wanted to.

02:10.870 --> 02:16.480
So let's say I'm going to copy this whole thing, but this time I'm going to ask for a different website,

02:16.480 --> 02:22.450
let's say E app dot uh, swami.com uh, website.

02:22.540 --> 02:28.340
Uh, and I'm going to say write a playwright uh, with c dotnet code.

02:28.370 --> 02:32.810
And the moment I ask it, you see that now the deep c r1 is going to start running it.

02:32.810 --> 02:33.500
And guess what?

02:33.500 --> 02:35.810
I'm also going to stop the internet over here.

02:35.810 --> 02:39.890
So it's going to just work on my local large language model.

02:39.890 --> 02:43.970
And it's going to give you the response, as you can see over here.

02:44.330 --> 02:52.100
And it's also doing every single thing from the local large language model without going to the internet

02:52.100 --> 02:57.590
for that matter, is that thing is now created over here, and now it is starting to write the code

02:57.590 --> 03:00.260
for me, uh, which is amazing.

03:00.260 --> 03:02.750
And look at that.

03:02.750 --> 03:04.880
It's doing quite a lot of different operations.

03:04.880 --> 03:11.330
So this is how you can see that we can run a local large language model and also make use of the realm,

03:11.330 --> 03:18.620
uh, pretty much uh, with the chat bots or the tools available over here to use as a chatbot, uh,

03:18.620 --> 03:21.740
for our response that we are looking for.

03:21.740 --> 03:25.130
So that's the thing that you can do within your local machine.

03:25.220 --> 03:28.670
And now you have got the idea of how these things are working.

03:28.670 --> 03:34.340
Starting our next lecture will also see how we can play around with this Olama tool even further, so

03:34.340 --> 03:39.890
that we are going to be making use of the Olama starting our next section while we start working with

03:39.890 --> 03:40.280
the language.

========================================================================================

WEBVTT

00:00.050 --> 00:00.590
All right.

00:00.590 --> 00:04.970
So now we're going to explore this whole armor tool even further in this particular lecture.

00:04.970 --> 00:06.830
And we'll see how we can make use of them.

00:06.830 --> 00:13.550
So let me just say bye to this already running model, which is the deep sleek R1 model.

00:13.550 --> 00:15.230
We don't even need this anymore.

00:15.230 --> 00:19.910
And now if I want to see what are the things that I can do from this whole armor itself, you see that

00:19.940 --> 00:24.650
the moment I type all armor and space, it's going to show me all the different commands that I can

00:24.650 --> 00:26.540
run with this particular olama.

00:26.540 --> 00:29.900
So it's going to show me the RM to remove a model.

00:29.900 --> 00:33.860
So if you want to say if you want to remove a model like RM, and let's say if I want to remove this

00:33.890 --> 00:38.630
ACN 1.8 billion parameter, and if I hit enter, you see that the moment I do it, it is going to be

00:38.630 --> 00:40.940
deleted from my machine.

00:40.940 --> 00:47.550
So now if I just say Olama and list, it is going to not show that particular model, the Cuban 1.8

00:47.550 --> 00:49.880
billion parameter, because it's completely gone.

00:49.880 --> 00:53.330
And similarly, if I want to delete this particular model, I know this is completely useless.

00:53.330 --> 01:01.970
So I can just say Olama and then RM and I can just say this particular model to delete, it's gone.

01:01.970 --> 01:06.980
And now if I just say hola, my list, that particular model is not there anymore.

01:06.980 --> 01:12.130
And if I wanted to do something like, uh, gonna get some information on this particular model.

01:12.130 --> 01:13.870
I can also do that as well.

01:13.870 --> 01:21.520
So I can just say show and any one of the model, let's say this, uh, deep sea carbon model, you

01:21.520 --> 01:28.840
see that it's going to show me what architecture this model is and what is the parameter support and

01:28.840 --> 01:35.230
what is the context length and what is the embedding length, what is the quantization and also what

01:35.230 --> 01:37.450
are the parameters supports available over there.

01:37.450 --> 01:40.780
So all these informations are going to be shown for me over there.

01:40.780 --> 01:44.830
So these are the things that you can see that you can see using this Allama tool.

01:44.830 --> 01:50.050
And I mean this Allama is pretty much like how you can use like the Docker container.

01:50.050 --> 01:51.310
How do you manage the docker.

01:51.310 --> 01:52.390
How do you run the docker.

01:52.390 --> 01:56.710
Everything that you do in the Docker world, same thing you can do with the Allama.

01:56.710 --> 02:00.760
It's pretty much like the docker of the large language model.

02:00.760 --> 02:04.660
You can run everything from this particular Allama over here.

02:04.690 --> 02:06.550
That's about this Allama tool guys.

02:06.550 --> 02:12.220
And starting our next lecture, we're going to see how we can make use of this Allama large language

02:12.220 --> 02:19.090
model from our local machine and then use it with the Lang chain for building our large language model.

========================================================================================

WEBVTT

00:00.050 --> 00:06.320
In this lecture, we are going to see how we can use this olama to act as an API server, which you

00:06.320 --> 00:12.830
can use to retrieve the the model or communicate with the model using an API request.

00:12.830 --> 00:20.150
So basically you can see that using this Olama and you can see that they have got this option called

00:20.150 --> 00:22.190
as serve.

00:22.220 --> 00:24.020
So Olama serve.

00:24.050 --> 00:26.630
So we just hit enter.

00:26.630 --> 00:31.580
You will see that currently my port is bound with this particular IP address.

00:31.580 --> 00:37.490
So basically I'm already running the Olama in the service as like up and running all the time.

00:37.490 --> 00:40.880
That's the reason why it says that the the address is already bound.

00:41.240 --> 00:46.880
And but if you're going to be running this olama serve in your terminal, you will notice that it is

00:46.880 --> 00:51.020
going to be starting as a service for you by listening to this particular port.

00:51.050 --> 00:52.610
Number 11434.

00:52.610 --> 00:57.590
So this is the port number that we are going to be using quite a lot, starting our next section while

00:57.590 --> 00:58.880
we communicate with the Olama.

00:58.880 --> 01:01.160
So the way we are going to write the code in our starting.

01:01.160 --> 01:07.100
Our next section is going to be talking to the large language model with the Olama only using the API

01:07.130 --> 01:08.990
server, which is this API server.

01:08.990 --> 01:13.010
So when I say API server, we're just going to go over here.

01:13.010 --> 01:21.620
And if I just type localhost of the port number 11434, and if I just say API and if I hit enter oh

01:21.620 --> 01:22.100
sorry.

01:23.450 --> 01:26.450
And if I hit enter like that you'll see that the olama is running.

01:26.450 --> 01:28.670
So you get the response like Olama is running.

01:28.670 --> 01:35.870
And if you see just go to the uh, 143 API generate and you can also pass the body over here.

01:35.900 --> 01:43.880
So if I just go to my browser and if I just search for Olama, you'll notice that these are the API

01:43.910 --> 01:45.710
documentation of the Olama.

01:45.710 --> 01:52.220
And you can see that they have got all the details of the APIs that you can use with the Olama over

01:52.220 --> 01:55.430
here, you see that they have got the in the generate.

01:55.430 --> 01:59.990
You can pass the model and the prompt that you want to ask, and then you get the response from the

01:59.990 --> 02:00.850
particular model.

02:00.850 --> 02:07.420
So if I just go to the postman over here and let's say if I'm going to ask the question, uh, something

02:07.420 --> 02:11.500
like this, and the model is going to be llama 3.2 that they have used.

02:11.500 --> 02:12.850
And let's see if I have got the model.

02:12.850 --> 02:14.590
Yeah, I have got the llama 3.2.

02:14.620 --> 02:17.230
So I'm just gonna leave it as it is.

02:17.260 --> 02:24.430
And I'm going to say, why is Sky, uh, blue and this is going to be a post operation that we have

02:24.430 --> 02:25.000
to do.

02:25.000 --> 02:31.240
And if I just ask this question, you'll notice that we are going to get a response from the model over

02:31.240 --> 02:34.990
here, the large language model that we are getting over here.

02:34.990 --> 02:41.560
But you see that we are getting the response in like one by one, uh, like one word at a time as a

02:41.560 --> 02:42.070
response.

02:42.070 --> 02:45.190
But we can stream this particular response as well if we wanted to.

02:45.220 --> 02:49.630
So if you just go back to the documentation over here, this is the response that you get.

02:49.630 --> 02:55.090
And over here they also have got something called a stream as a false, uh, over here.

02:55.120 --> 02:57.460
And I'm just going to leave the stream as false over here.

02:57.460 --> 03:01.220
And now if I try to send it over here, you will notice that it's not really streaming the data, but

03:01.250 --> 03:05.120
it's going to send you all the data in a chunk for you immediately.

03:05.120 --> 03:05.720
Something like this.

03:05.720 --> 03:07.760
And you see that we get the response over here.

03:07.760 --> 03:10.310
So this is how we get the entire response.

03:10.310 --> 03:11.900
So why is the sky blue.

03:11.930 --> 03:16.040
It says that the reason why the sky appears blue is a fascinating phenomenon that involves a combination

03:16.040 --> 03:17.900
of physics, lights and our atmosphere.

03:17.900 --> 03:19.490
And it gives all the details over there.

03:19.490 --> 03:21.530
So this is how we can see that.

03:21.530 --> 03:30.290
We can use the the APIs of the llama to communicate with our large language model using Olama.

03:30.290 --> 03:31.370
So olama serve.

03:31.400 --> 03:35.270
You need to run to make sure that you can communicate with your Olama.

03:35.270 --> 03:39.470
So starting our next section, we are going to communicate with this Olama with a large language model

03:39.470 --> 03:40.790
only using these APIs.

03:40.790 --> 03:46.250
So either you run them as a service like me, like how I'm doing it, or you can run this Olama serve

03:46.250 --> 03:52.940
command in the terminal so that you can now start communicating with your, uh, with the lamp chain

03:52.970 --> 03:54.830
with the olama starting in the next section.

03:54.830 --> 04:00.980
So this ends the section of the Olama and how you can use Olama to run your large language models.

========================================================================================
