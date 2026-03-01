WEBVTT

00:00.050 --> 00:05.420
Welcome to the next section of our course building and testing AI agents, rags and chatbots using link

00:05.420 --> 00:08.540
chain with Olama and local LMS.

00:08.540 --> 00:14.720
So in this section we are going to talk about how we can start working with the link chain itself.

00:14.720 --> 00:18.740
So we are going to start doing the complete hands on from this particular section.

00:19.460 --> 00:22.550
So for doing that I'm going to flip to my Visual Studio Code.

00:22.550 --> 00:26.090
And I'm going to show you how we can get started with the link chain itself.

00:26.090 --> 00:30.620
So as you can see, I have already created some folders for Long Chain.

00:30.620 --> 00:34.160
And I have uh, I have navigated to that particular folder structure.

00:34.160 --> 00:39.830
So I'm going to open Visual Studio Code over here, and I'm going to start working from there on.

00:39.830 --> 00:44.510
But before I actually start working with this particular operation, I also need to set up the virtual

00:44.510 --> 00:47.870
environment for my Python, because we are going to be working with Python.

00:47.870 --> 00:50.060
So we need to have a virtual environment in place.

00:50.060 --> 00:54.080
So in order to create the virtual environment, all you have to do it is first of all, you need to

00:54.110 --> 00:56.270
make sure that the python is already installed in your machine.

00:56.270 --> 00:58.700
As I told you that it's a prerequisite you need to have.

00:58.700 --> 01:04.400
So make sure that you have Python installed in your machine, and once the Python is available, Then

01:04.400 --> 01:07.520
I'm going to start doing following series of operations.

01:07.520 --> 01:14.210
So I'm going to open the terminal which is inbuilt within the Visual Studio Code using Control shift

01:14.240 --> 01:17.840
P or Command shift P if you're using Mac operating system.

01:17.840 --> 01:26.210
And then I'm going to do this, I'm going to do Python 3.12 hyphen m v environment, which is the visual

01:26.210 --> 01:26.900
environment.

01:26.900 --> 01:30.320
I'm going to name it as my env 312.

01:30.350 --> 01:35.330
That is the virtual environment that I have got, and I need to activate this virtual environment using

01:35.330 --> 01:36.020
the source.

01:36.020 --> 01:39.830
My env 312 slash bin slash activate.

01:39.830 --> 01:44.870
So you see that the moment I do it, it is going to navigate to this particular virtual environment

01:44.870 --> 01:45.590
over here.

01:45.590 --> 01:52.040
And then things will be uh downloaded and set up everything from here onwards.

01:52.040 --> 01:53.840
That is the first thing that we need to do.

01:53.840 --> 01:59.180
And once you have this, we can just close this terminal because we are going to be using the Jupyter

01:59.210 --> 02:01.430
notebook for all our operation.

02:01.430 --> 02:06.260
So the Jupyter notebook that I'm talking about is something that I have already installed as a plugin

02:06.260 --> 02:07.600
within my extension.

02:07.600 --> 02:14.470
So if you don't really have it, make sure that you install the, uh, Jupyter notebooks from the extension

02:14.470 --> 02:15.160
over here.

02:15.190 --> 02:18.130
I have already installed that within my Visual Studio code.

02:18.160 --> 02:21.550
That's the reason why I can create a notebook once the installation is done.

02:21.550 --> 02:26.410
So all I have to do it is once the installation is done for the Jupyter notebook, just do a command

02:26.590 --> 02:32.710
shift P, and then you can, um, create this new Jupyter notebook.

02:32.740 --> 02:35.950
And that is going to be bringing up this Jupyter notebook for you.

02:35.980 --> 02:44.170
And once I do control s to save, uh, and I'm going to, uh, save it in a new folder, I'm going to

02:44.170 --> 02:51.280
call this as probably section one, um, which is going to be uh, basics.

02:51.400 --> 02:52.450
I'm going to hit create.

02:52.480 --> 02:53.650
That's going to create a folder.

02:53.650 --> 03:01.060
And I'm going to say, uh, basics or maybe lang chain, uh, basics.

03:01.690 --> 03:02.410
There we go.

03:02.440 --> 03:04.540
That's the notebook that I have created over here.

03:04.540 --> 03:09.430
And once the notebook is created, we're pretty good to go, and we can start working with, uh, from

03:09.430 --> 03:10.030
here on.

03:10.060 --> 03:13.870
So the first thing I'm going to do with this notebook is I'm going to do the installation part.

03:13.900 --> 03:16.000
So I'm going to go hit this markdown over here.

03:16.000 --> 03:23.500
And I'm going to say installation of required, uh dependencies okay.

03:23.530 --> 03:23.860
There.

03:23.860 --> 03:25.570
And then I'm going to select this kernel.

03:25.570 --> 03:29.080
So this kernel is very very important because the moment you select the kernel it's going to give you

03:29.080 --> 03:32.500
an option to select the Python environment or the existing Jupyter server.

03:32.530 --> 03:37.150
I'm going to choose the my env 312 that I just created this one.

03:37.180 --> 03:38.110
And it's also recommended.

03:38.110 --> 03:40.330
As you can see I'm going to choose that.

03:40.330 --> 03:44.320
That is the uh, that is the kernel that I have got over here.

03:44.470 --> 03:51.940
And now I need to start writing or maybe running the dependencies that I need for the installation part.

03:51.940 --> 03:57.940
So for doing that, I'm going to hit this code block again and I'm going to do this pip.

03:58.270 --> 04:03.610
So I'm going to put a bank symbol so that it will run the particular command if it is not installed.

04:03.700 --> 04:06.370
And then I'm going to install this Lang chain.

04:07.060 --> 04:07.750
Right.

04:07.750 --> 04:16.080
And now if I try running this it will also install an ancillary package within my within my libraries

04:16.080 --> 04:16.500
over here.

04:16.530 --> 04:22.560
You see, at the moment I only have pip, which is the python, uh, installation package for that and

04:22.560 --> 04:23.640
then the distro.

04:23.640 --> 04:27.720
And now if I try to run this, um, over here.

04:27.930 --> 04:28.230
Sorry.

04:28.230 --> 04:36.540
This one, you see that it's going to install an, uh, ipykernel package from this particular Jupyter

04:36.570 --> 04:42.540
notebook, which is required for the execution of all the code that we are going to be doing from here

04:42.570 --> 04:44.190
on from this notebook.

04:44.190 --> 04:50.040
And you see that now all of these are installed, and also now it's installing the Lang chain for me,

04:50.160 --> 04:55.170
uh, within my, uh, virtual environment.

04:55.170 --> 05:00.540
So moving forward, the virtual environment is more than enough for me to play around for everything

05:00.570 --> 05:01.680
so that the installation is done.

05:01.680 --> 05:02.670
There is a tick mark there.

05:02.670 --> 05:04.170
So that's pretty cool.

05:04.170 --> 05:12.810
And I also wanted the, uh, Allama, because we are going to be working with Allama for our local large

05:12.810 --> 05:15.210
language model for all the operation.

05:15.210 --> 05:19.890
So I need to have the, uh, long chain olama support as well.

05:20.100 --> 05:23.730
This is nothing but the, uh, integration as I was talking about.

05:23.730 --> 05:32.160
So if you just go to the long chain website over here and go to the long chain and go to the documentation

05:32.160 --> 05:40.920
of the long chain, and as I told you, there is this, uh, olama, uh, support for the long chain.

05:40.950 --> 05:48.030
So if I just say olama over here, uh, and if I hit enter, you see that this is going to be olama,

05:48.270 --> 05:53.280
uh, which is mainly used for running the large language model from your local machine.

05:53.280 --> 05:59.700
But if you're going to be using, let's say, OpenAI or probably hugging face or even maybe Cloud Anthropic,

05:59.700 --> 06:06.540
so you can choose that specific, uh, integration as well, or the package as well for your operation.

06:06.540 --> 06:14.220
So you can see that for the long chain anthropic, you can use the, uh, the LM anthropic uh, class

06:14.220 --> 06:15.510
for performing the operation.

06:15.510 --> 06:24.960
And similarly for the Appsec also, they have got the chat models of the chat model chat option available.

06:24.960 --> 06:30.210
And similarly for the olama that we are going to be using, we are going to be using that particular

06:30.210 --> 06:32.940
class, which is this one, right?

06:33.240 --> 06:37.860
So you can see that all of these are going to be coming up for you over here.

06:37.860 --> 06:41.490
And then we are going to be start working with that particular package.

06:41.490 --> 06:47.460
So once again for working with the Olama you need to install this Lang chain or Lama package within

06:47.460 --> 06:48.450
your machine.

06:48.450 --> 06:53.400
So I'm going to say pip install this particular.

06:53.430 --> 06:57.750
Is it that this is the command that we have to run install lang chain or Lama.

06:57.810 --> 07:08.340
So I'm going to say pip install lang chain and uh or lama.

07:08.340 --> 07:17.400
And I also need to have a dot env which is mainly used for reading the env file from our machine which

07:17.400 --> 07:18.060
is from here.

07:18.060 --> 07:27.650
So I'm going to create an env file uh, which is mainly used for uh reading the API keys from the OpenAI

07:27.680 --> 07:30.980
or even from the Lamb-smith, which we are going to be configuring later.

07:30.980 --> 07:31.790
Point of time.

07:31.790 --> 07:37.850
So that is something that I'm going to be doing moving forward by having reading from the dot env file,

07:37.850 --> 07:43.040
which is pretty much like how you do from other languages as well, even from JavaScript, the same

07:43.040 --> 07:43.160
thing.

07:43.160 --> 07:44.540
I'm going to do it over here as well.

07:44.570 --> 07:50.600
And for that I need to have uh, dot env package and that one I need to install it as well.

07:50.600 --> 07:56.480
So I'm going to say pip install uh and Python.

07:58.670 --> 07:59.600
Dot env.

07:59.840 --> 08:01.640
And I'm going to hit run.

08:01.640 --> 08:08.840
So now this is going to install both the lang chain olama and the python dot env package for me.

08:08.840 --> 08:15.410
And if you just go to the my env 312 libraries, you will see all the packages required like lang chain

08:15.410 --> 08:21.800
core lang chain olama and also the python dot env uh, over here for you.

08:21.800 --> 08:26.330
So once the installation is done, we are pretty good to go and then we can start writing the code starting

08:26.330 --> 08:27.770
our next lecture.

========================================================================================

WEBVTT

00:00.020 --> 00:00.530
All right.

00:00.530 --> 00:04.310
So now that we have the installation done, we're pretty good to go right now.

00:04.310 --> 00:10.970
And we can now start writing the code for interacting with our local large language model using this

00:11.000 --> 00:12.320
long chain library.

00:12.320 --> 00:15.680
So for doing that I'm gonna put a markdown over here.

00:15.680 --> 00:23.570
And I'm going to say, um, the first thing is going to be interacting with LM, and I'm going to hit

00:23.600 --> 00:24.410
okay.

00:24.410 --> 00:25.850
And I'm going to start writing the code.

00:25.850 --> 00:30.350
So this notebook is going to be very, very helpful for you to read through all the operations that

00:30.350 --> 00:35.030
we are doing, uh, from this particular section until the end of the particular section, so that you

00:35.030 --> 00:40.160
can have a full record of what is really happening in this particular notebook itself, which is going

00:40.190 --> 00:45.590
to be very, very helpful for you to even recall, like how that I am going to perform all these operations.

00:45.590 --> 00:52.070
So this notebook is quite useful, especially if you're going to be working or learning from the scratch

00:52.100 --> 00:53.360
for the long chain.

00:53.690 --> 00:56.930
As I said, I'm going to start working with the long chain olama.

00:56.930 --> 01:03.040
So you see that the moment I start typing the from and then l a n, then it's going to show me all the

01:03.040 --> 01:08.200
libraries which is available within my, uh, environment, which is the virtual environment that I

01:08.200 --> 01:10.690
have installed, the long chain olama, remember.

01:10.690 --> 01:16.240
So it's just coming up over here and then I'm going to say import, and I'm going to import a class

01:16.240 --> 01:17.950
called as chat Olama.

01:17.950 --> 01:23.530
So this is the class which is required for us to perform the chatting operation with the, with the

01:23.530 --> 01:26.740
olama running within my local machine, which is this guy you remember.

01:26.740 --> 01:28.330
So I'm going to do that.

01:28.630 --> 01:35.200
Uh, so I'm going to create a variable called as LM and I'm going to say chat Olama.

01:35.320 --> 01:40.660
And within this chat Olama I'm going to pass a series of, uh, parameters.

01:40.660 --> 01:41.770
So you see that within this chat.

01:41.770 --> 01:42.190
Olama.

01:42.220 --> 01:48.370
There are so many different parameters available like name cache, verbose, callback tag, meta.

01:48.460 --> 01:56.050
And they also have got a lot more, uh, of the details over here, but the one that I'm going to be

01:56.050 --> 01:59.200
very much interested in is, first of all, the base URL.

01:59.200 --> 02:05.800
So the base URL is nothing but the the way that you can communicate with the a large language model,

02:05.800 --> 02:08.290
which is nothing but the olama using the API.

02:08.320 --> 02:11.920
If you remember the one that we were talking about in the last section of our course, the same thing

02:11.920 --> 02:19.900
that I'm going to be showing you over here, which is nothing but the HTTP colon localhost of 11434.

02:19.930 --> 02:24.310
So this is the host, and this is the port number that we have to use.

02:24.310 --> 02:26.770
Pretty much what we did in our last section.

02:26.830 --> 02:30.220
And over here I need to specify the model that I'm going to be using.

02:30.220 --> 02:36.490
So the model which I'm going to be using is going to be the 12.5 latest model, the one that I have

02:36.520 --> 02:37.750
got over here.

02:37.750 --> 02:44.890
So if I just do, uh olama, uh, list, you can see that this is the model that I'm going to be using

02:44.890 --> 02:50.770
this time, the 12.5, uh, latest model, uh, over here.

02:50.770 --> 02:59.050
But you can also use the, uh, llama .1.3.2 with a lower version of the uh, billion parameter that

02:59.070 --> 03:01.050
you have got, which is also something that you can do.

03:01.080 --> 03:05.100
I mean, we can use any model that we want, but for now, I'm just going to use this particular model,

03:05.280 --> 03:12.270
and then I'm going to set the temperature for this particular model as 0.5, which is the standard way

03:12.270 --> 03:13.860
of setting the temperature.

03:13.920 --> 03:25.140
And I also set the max token uh, which is going to be max underscore token is equal to probably 250

03:25.140 --> 03:29.250
or something like that as the maximum token that it's going to be emitting for our operation.

03:29.280 --> 03:34.800
So now that we have set up all the different parameters required for the large language model to perform

03:34.980 --> 03:41.370
any operation, and now we are going to see how we can invoke this particular, um, large language

03:41.370 --> 03:41.820
model.

03:41.850 --> 03:46.020
If you remember, in our earlier section, while we were talking about the language introduction, we

03:46.050 --> 03:51.660
talked about there are different ways or different interfaces the language has got which can be used

03:51.660 --> 03:55.560
as a unified way to communicate with the large language model.

03:55.590 --> 04:00.920
The methods are like invoke method, stream method, batch method, and even further method that I was

04:00.920 --> 04:01.610
talking about.

04:01.610 --> 04:04.700
The same thing that we are going to be doing over here.

04:04.700 --> 04:10.760
So we are going to call this invoke method, which can be invoking the large language model just by

04:10.760 --> 04:12.830
using this particular method that you are seeing over here.

04:12.830 --> 04:14.630
So I will tell you what I really mean about that.

04:14.630 --> 04:21.890
So if I want to get any response of this particular model, then I can just say response.

04:21.920 --> 04:24.620
Um, maybe that's the variable that I'm creating.

04:24.650 --> 04:28.730
I'm going to say LM dot and you see that there is this method called as invoke method.

04:28.730 --> 04:35.540
This is going to transform a single input into an output overriding, uh, override to implement these

04:35.540 --> 04:37.250
many operations, as you can see over here.

04:37.250 --> 04:39.560
So I'm just going to call this invoke method.

04:39.560 --> 04:43.220
And over here I'm just going to say hello.

04:43.430 --> 04:47.120
How are you doing today.

04:47.900 --> 04:48.290
Look at that.

04:48.290 --> 04:50.720
This is how I'm going to interact with this large language model.

04:50.720 --> 04:56.420
Pretty much like how I did while I was trying to use the uh oh llama.

04:56.600 --> 05:02.990
And then I was doing the run of the Cuban 2.5 or whatever model that I wanted, and then I was trying

05:02.990 --> 05:03.440
to send.

05:03.470 --> 05:04.340
Hello.

05:04.640 --> 05:07.130
Um, maybe I'm just going to say same question.

05:07.130 --> 05:07.850
Probably.

05:07.880 --> 05:11.060
I'm going to copy this whole thing, paste it over here.

05:11.060 --> 05:16.400
And if I hit enter the the large language model is going to give me a response over here.

05:16.400 --> 05:19.070
The same thing I'm doing over here as well.

05:19.070 --> 05:22.340
So now if I want to print what is the response is going to coming up.

05:22.340 --> 05:25.190
So I'm just going to say print of the response.

05:25.190 --> 05:31.340
And now if I try to run this particular code block using this hit run button there.

05:31.700 --> 05:32.330
Look at that.

05:32.330 --> 05:34.310
That's the same response that you're getting.

05:34.310 --> 05:35.570
Hello I'm doing well.

05:35.570 --> 05:36.590
Thanks for asking.

05:36.620 --> 05:37.670
Blah blah blah.

05:37.910 --> 05:40.460
Uh, until how can I assist you today?

05:40.490 --> 05:42.080
Remember the same thing.

05:42.080 --> 05:44.870
This is this is what is really happening.

05:44.870 --> 05:51.560
That how we can communicate with the large language model using the long chain of the ulama, uh, using

05:51.560 --> 05:52.940
this particular piece of code.

05:53.570 --> 05:55.220
This is quite amazing, right?

05:55.220 --> 05:57.050
This is how we can actually do that.

05:57.050 --> 06:01.930
but there are even more contents really coming up beyond the content of the response.

06:01.960 --> 06:07.300
As you can see, this particular response had got has got something called as additional k w arguments

06:07.300 --> 06:08.800
and response metadata.

06:08.860 --> 06:13.840
It gives me it gives me the response metadata like model is being used as this one.

06:13.840 --> 06:16.240
And it is created at this time.

06:16.270 --> 06:20.710
And the done response is top total duration it took.

06:20.740 --> 06:27.280
And then what is the prompt level prompt eval count and evolve duration.

06:27.400 --> 06:31.900
And there is also something like a role as assistant.

06:32.260 --> 06:35.290
And there is a content as nothing and image is none.

06:35.320 --> 06:37.000
Tool call is none.

06:37.000 --> 06:43.420
And there is an ID usage metadata and how many tokens have been used and how many output tokens are

06:43.420 --> 06:43.810
being used.

06:43.840 --> 06:47.620
This is like input token and output token and total token is 57.

06:47.710 --> 06:48.460
Look at that.

06:48.490 --> 06:51.370
These are so many informations coming up over here.

06:51.580 --> 06:56.200
And every single time when you try to execute this, these are the things which is going to happen for

06:56.200 --> 06:59.080
you behind the scene and see the response has now changed.

06:59.110 --> 07:02.500
I'm a digital entity so I don't have feeling and emotion.

07:02.500 --> 07:04.360
It's not like what it is giving this time.

07:04.390 --> 07:05.200
It's going.

07:05.230 --> 07:06.880
It's giving something else this time.

07:06.880 --> 07:09.820
And the token has changed from 57 to 81.

07:10.420 --> 07:17.500
So every single time you do an execution using this long chains or lama with a large language model,

07:17.500 --> 07:19.000
the responses are going to change.

07:19.000 --> 07:23.620
The output tokens and input tokens are going to change and the metadata will remain same, but still

07:23.620 --> 07:28.360
the usage will keep on changing and also the content is going to keep changing.

07:28.360 --> 07:35.740
So how do you keep track of all these changes and how all these input tokens and output tokens and how

07:35.740 --> 07:39.580
you can and how you can see all these in a better way?

07:39.610 --> 07:45.010
You remember the one that I was talking about, something called as the Lang Smith.

07:45.010 --> 07:47.260
That's what we are going to be using in our next lecture.

07:47.260 --> 07:52.390
I will configure it and I will show you how every single thing that you are seeing over here can be

07:52.390 --> 07:57.040
viewed visually in a graphical user interface, in a much better fashion.

========================================================================================

WEBVTT

00:00.110 --> 00:00.650
All right.

00:00.650 --> 00:06.170
So now we're going to see how we can see all this information in a graphical user interface.

00:06.170 --> 00:12.200
And also the evaluation metrics and telemetric informations from this particular execution that we are

00:12.200 --> 00:14.780
doing from the Lange chain.

00:14.930 --> 00:20.390
We can use this ecosystem tool which is called as the Lange Smith as I was talking about before.

00:20.390 --> 00:28.790
So in order for me to use this Lange Smith, I'm going to go to the Lange Smith over here.

00:28.790 --> 00:33.260
So I'm going to go Lange chain Lange Smith and sign up.

00:33.290 --> 00:37.340
As I told you, I already got an account so I can just start using it from there.

00:37.340 --> 00:42.950
I already have got a project over here for the observability, but I'm going to create a new project

00:42.950 --> 00:45.200
in order to work with it.

00:45.200 --> 00:48.320
So in order to do that, I'm going to hit this setup tracing over here.

00:48.320 --> 00:53.150
And now you see that once I hit that, it is going to give me an option here that gets out of the Lange

00:53.150 --> 00:55.400
Smith setup observability.

00:55.430 --> 00:57.680
And with Lange chain without Lange chain.

00:57.680 --> 01:02.330
So you can use this observability either with the Lange chain which we are doing at the moment.

01:02.330 --> 01:05.000
Or you can also do without Lange chain as well.

01:05.000 --> 01:09.670
So if you're going to be using some other tools but you still want to do observability.

01:09.700 --> 01:11.620
You can also do that as well with Lamb-smith.

01:11.650 --> 01:12.490
As you can see.

01:12.490 --> 01:16.930
But because you're going to be using a long chain, and the long chain has got all the dependencies

01:16.960 --> 01:21.430
and support package, with the long chain, you don't have to really install any of these right now.

01:22.060 --> 01:25.540
But the first important thing that we have to do are the most important thing.

01:25.540 --> 01:31.840
The important thing that we have to do at this time is we need to copy these things into our dot env

01:31.870 --> 01:33.580
file that I created earlier.

01:33.880 --> 01:38.920
This is something which is required for us to tell me that we need to do the lamb-smith tracing, and

01:38.920 --> 01:40.450
the end point is this one.

01:40.450 --> 01:43.600
And the API key is the one that I'm going to be generating right now.

01:43.600 --> 01:49.420
And then there is the project name and then there is this open API key if you have any.

01:49.420 --> 01:56.770
But because we are just using our local LM, we don't even have to have the open AI, uh, API key there,

01:56.800 --> 01:57.370
right?

01:57.370 --> 01:59.440
So I'm just going to leave that guy as it is.

01:59.440 --> 02:04.300
And now let's go and hit generate API key is that it's going to generate an API key.

02:04.300 --> 02:06.070
It's going to append it for me over there.

02:06.070 --> 02:09.550
And I can give a name to this particular project if I wanted to.

02:09.580 --> 02:14.710
So I can give the name of the project, uh, whichever that I'm going to be using.

02:14.740 --> 02:18.550
So I'm going to say, uh, maybe I'm just going to do it later on.

02:18.550 --> 02:19.180
I'm going to copy.

02:19.210 --> 02:20.830
Or maybe you can give the project name here.

02:20.860 --> 02:21.610
Look at that.

02:21.610 --> 02:31.390
So I'm going to say, uh, execute automation, um, uh, lang chain uh, training.

02:31.690 --> 02:39.700
And that's going to be my, uh, project name, which I'm going to be, uh, setting up, I guess it's

02:39.700 --> 02:42.220
already created, but just that it is not coming up over there.

02:42.220 --> 02:47.590
But let's go to the env file and paste this command that I just copied.

02:47.590 --> 02:55.600
So this is the env file which is required for me to communicate with our Lang Smith using this API key

02:55.630 --> 02:58.540
that I have got, and also the project name that I have got.

02:58.570 --> 03:01.150
I'm going to use this particular details over there.

03:01.150 --> 03:06.310
And now I need to load this env file, uh, from within my code.

03:06.310 --> 03:07.720
So how do I actually do that.

03:07.720 --> 03:10.780
Well I'm going to load the env file.

03:10.810 --> 03:17.050
Maybe I'm going to put a markdown here so that you can read it through uh load uh env file.

03:17.440 --> 03:27.470
Uh and I'm going to say Dick, and I'm gonna add the code there so that you can see how we can do it.

03:27.500 --> 03:39.050
So I'm going to say from dot env uh, import a load dot env and I'm going to say load um is equal to

03:39.080 --> 03:42.170
load underscore dot env.

03:42.320 --> 03:46.340
And the env file is going to be the dot env file.

03:46.610 --> 03:47.900
Uh over here.

03:48.110 --> 03:49.520
Maybe this is the dot env file.

03:49.520 --> 03:53.300
But I think because this env file is outside of this particular directory.

03:53.300 --> 04:01.670
So we need to just do uh dot dot dot slash dot dot slash dot env something like that.

04:01.700 --> 04:06.230
Maybe that is the uh that is the path that the env file is sitting.

04:06.380 --> 04:10.730
We can actually check that from using the uh, the code something like this.

04:10.730 --> 04:23.180
So we can just say uh, import OS and then we can just say print um, and os dot get env and the env

04:23.210 --> 04:24.980
file that I wanted to.

04:25.010 --> 04:28.010
The variable that I want to verify is the Lang Smith API for that matter.

04:28.010 --> 04:30.660
So I'm just going to say this, I'm going to save this.

04:30.660 --> 04:36.090
And if I execute it, you should see that the Lamb-smith API key is coming up for me over here.

04:36.090 --> 04:37.230
The same thing, right?

04:37.260 --> 04:39.570
Which means it is currently working for me.

04:39.570 --> 04:40.710
So that is loaded.

04:40.710 --> 04:41.850
Which is which is great.

04:41.850 --> 04:48.420
So now the env file is loaded and once it is loaded then we can pretty much good to go.

04:48.450 --> 04:53.460
I mean we can now try to see our response is going to come in up into the lamb-smith.

04:53.460 --> 05:00.660
And now if you try to run this particular large language model code that we were running before, and

05:00.660 --> 05:08.520
if I go back to our, um, our lamb-smith over here, and if I try to refresh it, you should see our

05:08.550 --> 05:11.640
exclamation lang chain training coming up.

05:11.640 --> 05:15.060
And you will notice that we have got some trays here.

05:15.090 --> 05:15.810
Look at that.

05:15.810 --> 05:19.560
The chat olama it says, hello, how are you doing today?

05:19.590 --> 05:23.220
You have asked this question as a human and the output is coming.

05:23.430 --> 05:28.410
Coming up as an AI over here that hello, I'm a digital assistant so I don't have feeling or physical

05:28.410 --> 05:30.270
sensation, blah blah blah.

05:30.270 --> 05:38.480
So this is coming from this 2.5 large language model that we have got and it has got 82 token been spent

05:38.510 --> 05:41.090
a number of time it has took to give the response.

05:41.090 --> 05:45.590
And all those metadata are going to are going to be coming up for you over here.

05:45.590 --> 05:52.190
So this is proving the point that now you have got a user interface with all these details that you

05:52.220 --> 06:01.490
were seeing in the, uh, over here as a response, like these things, these, uh, details are now

06:01.490 --> 06:07.100
visible to you pretty much like an entire information over here in the GUI interface.

06:07.100 --> 06:12.200
These things are going to be even more helpful while you're going to go and write complex large language

06:12.200 --> 06:13.010
model applications.

06:13.010 --> 06:14.660
So observability becomes a key.

06:14.660 --> 06:20.150
And this lamb-smith is going to be very, very helpful during that particular point of time.

06:20.150 --> 06:28.070
So that proves the point that we have now written quite a lot of things to wire up the code with our

06:28.340 --> 06:35.600
actual Lamb-smith with that in place now, you are pretty good to go to have all the foundation ready

06:35.600 --> 06:43.940
for writing the first chat operation with the large language model using Lang chain.

========================================================================================

WEBVTT

00:00.050 --> 00:05.660
So now, in our last lecture, if you remember the first lecture, we were talking about how we can

00:05.660 --> 00:13.040
communicate with the local large language model from Allama, from a user using the hyper terminal that

00:13.040 --> 00:14.840
we were doing over here like this.

00:14.840 --> 00:15.050
Right.

00:15.080 --> 00:21.950
Like so we just ran the Allama Cuban model, and then we sent a message like a user, like a chat message.

00:21.950 --> 00:26.630
And then it was responding as the details like this for us over here.

00:26.630 --> 00:29.420
So that is this particular block diagram that you are seeing over here.

00:29.420 --> 00:36.530
And in our last lecture we were trying to do this operation, which is this guy over here where we could

00:36.560 --> 00:42.710
able to communicate with the large language model using the chat olama from the long chain.

00:42.710 --> 00:48.710
And then we did an invoke and we sent the query and then it gave us the response back.

00:48.710 --> 00:55.730
And also with the connectivity of the Langschmidt, we could able to get the, uh, traceability and

00:55.730 --> 01:00.080
observability metrics into the Langschmidt portal.

01:00.080 --> 01:02.490
And that's going to look something like this for us over here.

01:02.490 --> 01:04.410
So user sends a request to the Lang chain.

01:04.410 --> 01:11.910
And Lang chain in turn sends the request to the local large language model using the chat or llama.

01:11.910 --> 01:19.710
And then we get the response back from the, uh, from the large language model to the Lang chain.

01:19.710 --> 01:23.700
And we also record the traceability in the Lang Smith.

01:23.700 --> 01:25.470
And then we get the response to the user.

01:25.500 --> 01:25.680
Right.

01:25.710 --> 01:28.800
So that is what is really happening all these days for us over here.

01:28.800 --> 01:36.750
But again, the response is just coming from the local large language model via Olama is exactly what

01:36.750 --> 01:38.760
is being printed for us over here.

01:38.760 --> 01:45.960
As you can see, along with some traceability details and some some more details, pretty much like

01:45.960 --> 01:50.460
the attributes, metadata and what are the things going on over there.

01:50.460 --> 01:57.120
But what if while you build a large language model, you need to get the responses like how you want

01:57.120 --> 02:03.540
it and also how you wanted to chat with the Lange chain over here in a better fashion.

02:03.540 --> 02:05.040
So that is what we are going to be discussing.

02:05.040 --> 02:13.410
So essentially, if you go back to the Lange chain or Lange Smith over here, sign up and let me just

02:13.410 --> 02:16.320
log in there, which is this one.

02:16.320 --> 02:22.020
And you will notice that we actually have an input of a human input.

02:22.080 --> 02:25.680
And also we have an output as an AI output over here.

02:25.680 --> 02:30.210
So basically human enters like hello, how are you doing today.

02:30.210 --> 02:34.050
And the AI is returning as this particular response over here.

02:34.080 --> 02:34.710
Right.

02:34.710 --> 02:41.070
So if we wanted to perform a chat operation like how we are doing over here, we have got quite a lot

02:41.100 --> 02:46.560
of different chat template to make this input and output more streamlined.

02:47.460 --> 02:49.710
And that is what we are going to be discussing in this particular lecture.

02:49.710 --> 02:55.860
Basically, we are going to discuss a different way to communicate with the with the large language

02:55.860 --> 03:03.460
model via Lang chain, with quite a lot of different chat templates or prompt templates to make it more

03:03.460 --> 03:04.240
streamlined.

03:04.270 --> 03:06.250
That is what we are going to be discussing over here.

03:06.250 --> 03:13.270
So I'm going to put a markdown over here and I'm going to say prompt and chat templates.

03:13.270 --> 03:17.800
So these are things that we have to discuss for a couple of lectures from now.

03:18.070 --> 03:20.950
And I'm going to put a code there.

03:20.950 --> 03:28.300
And now I'm going to say from a Lang chain core dot, you can see that there is something called as

03:28.300 --> 03:29.320
prompts.

03:29.320 --> 03:32.860
And I'm going to import what is called as prompt template.

03:32.860 --> 03:38.860
And this prompt template is the one which is responsible for creating the prompt as a user, like how

03:38.860 --> 03:39.280
we were doing.

03:39.280 --> 03:41.470
So this is the prompt that we have created over here.

03:41.470 --> 03:48.430
And now we are going to create a structured prompt like how in reality you can send it through and large

03:48.430 --> 03:49.750
language model application.

03:49.750 --> 03:55.060
So I'm going to say prompt template is equal to.

03:55.090 --> 03:58.930
And I'm going to call this prompt template class that I have imported.

03:58.930 --> 04:02.530
And there is this method called as from template over here.

04:02.980 --> 04:08.770
And this template I can now use to pass any of the message or the string message that I wanted to pass.

04:08.770 --> 04:19.660
So basically I'm going to say what is the advantage of running the, uh, LM in a local machine?

04:19.780 --> 04:20.530
Look at that.

04:20.530 --> 04:24.730
I can now pass this template over here like like the prompt over here.

04:24.730 --> 04:31.240
And now if I want to print how this prompt template is going to look like, you will notice that the

04:31.240 --> 04:34.570
prompt template has got quite a lot of different inputs there.

04:34.600 --> 04:39.550
It has got an input variable, input type partial variable.

04:39.550 --> 04:41.590
And then there is a template.

04:42.910 --> 04:43.780
What are these guys.

04:43.780 --> 04:47.200
You see that there is input variable input types partial variables.

04:47.200 --> 04:49.150
We have not even passed any of these.

04:49.150 --> 04:54.130
But the prompt template class has got these parameters there.

04:54.880 --> 04:59.630
And finally it has got the template of the prompt that we are trying to pass over there.

04:59.630 --> 05:07.640
And now this begs the question, how is this really working and how is how we can use this input variables

05:07.640 --> 05:10.760
and input types, and why do we even need it?

05:10.760 --> 05:16.610
So for instance, if I want to reuse this particular prompt where I'm going to say, what is the advantage

05:16.610 --> 05:21.590
of running the LLM in both local machine as well as the cloud machine.

05:21.590 --> 05:23.810
So I don't really have to create two prompts.

05:23.810 --> 05:28.970
Rather I can just create an input variable, something like this.

05:28.970 --> 05:30.770
So I'm just going to put an env there.

05:30.770 --> 05:33.560
So env I mean you can name it whatever that you want.

05:33.710 --> 05:35.330
Maybe you can just say machine.

05:35.360 --> 05:41.450
And so it can be a cloud machine or local machine or I'm just going to say environment or env for saying

05:41.450 --> 05:43.250
what environment I'm running really.

05:43.250 --> 05:47.330
So this is an variable that I'm creating over here.

05:47.330 --> 05:54.140
And now if I try to run this over here, you see that the input variable has got e and v there.

05:54.980 --> 06:01.010
So which means this is an input variable that I wanted to pass I can pass from this particular prompt

06:01.040 --> 06:04.910
template, which is what this prompt template is really expecting.

06:05.180 --> 06:12.170
And now how do I pass this env or the the input variable to the prompt template.

06:12.200 --> 06:14.150
Well I can do this.

06:14.180 --> 06:18.800
Let me just create a prompt like a proper prompt which I'm going to be passing in.

06:18.800 --> 06:22.550
And I'm going to write a, I'm going to call a method called as invoke.

06:22.550 --> 06:26.240
So this invoke method is going to be something that we have already used while we're calling the LM

06:26.240 --> 06:27.020
invoke.

06:27.080 --> 06:29.300
The same thing is what I'm calling over here.

06:29.300 --> 06:34.940
This is a common method or streamlined method which is used in lang chain, which can help you pass

06:34.940 --> 06:38.750
or invoke anything that you are trying to pass, or any runnables that you pass.

06:38.780 --> 06:41.210
Well, if I'm saying runnables, don't worry about it.

06:41.240 --> 06:45.560
We'll be talking about Runnables in more details in upcoming lectures of this course.

06:45.560 --> 06:49.460
But Runnables are very important concept that we are going to be talking about as well.

06:49.700 --> 06:55.970
And over here I can pass the input variables something like this.

06:55.970 --> 07:04.620
Basically I can pass as a dictionary of E and v and I'm going to say a local machine.

07:04.620 --> 07:05.100
Right.

07:05.100 --> 07:07.770
So this is going to be E and V.

07:08.100 --> 07:11.220
And the values I'm going to pass is going to be local machine.

07:12.060 --> 07:13.050
Look at that.

07:13.080 --> 07:15.510
Now that I have passed this over here.

07:15.540 --> 07:22.710
So this is how I pass the the variable input variable as a dictionary value.

07:22.710 --> 07:28.650
Because you can have multiple number of input variables in future because this is an array type.

07:28.650 --> 07:32.610
So if you want to pass a value to the array type you need to pass it as a dictionary.

07:32.610 --> 07:35.280
As you can see over here it has a key and value pair.

07:35.280 --> 07:37.020
So that is how you do it.

07:37.020 --> 07:40.620
And now if I want to print how the prompt look like.

07:40.620 --> 07:48.330
So if I print the prompt, you will notice that the prompt itself is of a type string prompt value where

07:48.330 --> 07:49.680
it has got a text.

07:49.710 --> 07:56.100
What is the advantage of running lm in and see that it has just made it as local machine?

07:56.100 --> 08:01.060
Basically the prompt now has got this value of local machine.

08:01.060 --> 08:04.930
Just add it to the existing template of the prompt value.

08:04.930 --> 08:07.600
And now that is how the things are going to be over here.

08:07.630 --> 08:09.310
Now it sounds interesting right.

08:09.310 --> 08:15.580
So if I want to print this particular prompt value, uh, if I just put print, if I just run it, you

08:15.580 --> 08:20.950
see that it has got the text as what is the advantage of the LLM running in the local machine.

08:20.950 --> 08:26.350
So that is what we are going to be passing in to our local large language model.

08:26.350 --> 08:28.090
So how do we actually do that.

08:28.090 --> 08:34.510
Well I'm going to just say LLM dot invoke see the same method.

08:34.570 --> 08:40.090
And over here I'm going to pass the prompt because that is what we were doing even before while we were

08:40.090 --> 08:41.350
trying to pass the text.

08:41.380 --> 08:41.770
Right.

08:41.770 --> 08:44.590
So instead of the text I'm going to pass the prompt.

08:44.590 --> 08:50.470
And if I now try to print this particular value.

08:50.470 --> 08:55.690
So you see that, uh, so now it is passing that value to the local large language model.

08:55.690 --> 08:57.340
And now it is sending that value.

08:57.340 --> 08:59.560
But we have to print the value out as well.

08:59.560 --> 09:01.960
So let me just wait for this to execute.

09:01.990 --> 09:02.710
Ah, there we go.

09:02.710 --> 09:05.890
So you see that we are getting an AI message.

09:05.890 --> 09:10.480
This is the same kind of AI message that we were seeing on the Lang Smith.

09:10.810 --> 09:13.270
And over here it says the content is running.

09:13.270 --> 09:18.220
The large language model in your local machine or on your local machine has several advantage, blah,

09:18.220 --> 09:19.090
blah, blah.

09:19.090 --> 09:24.910
And this is the response coming out from our local large language model.

09:25.030 --> 09:32.320
And now if I want to just print the content alone, I can just say, um, maybe the content is equal

09:32.320 --> 09:32.470
to.

09:32.500 --> 09:34.960
And then there is this property called as content.

09:35.260 --> 09:40.780
And then if I try to run this, it is going to store the content into the content for us.

09:40.780 --> 09:44.890
And while this is running, I'm also going to show you how the Lang Smith is going to look like.

09:44.890 --> 09:47.590
So if I try to refresh this look at that.

09:47.590 --> 09:51.250
So there is this chat alarm is already running behind the scene in my machine.

09:51.250 --> 09:54.310
So that is why this is keep running there.

09:54.310 --> 10:01.170
But in the meantime you can also see, because we have used the prompt template over here like local

10:01.170 --> 10:01.800
machine.

10:01.800 --> 10:04.200
So it is showing me local machine.

10:04.230 --> 10:07.260
And what is the text and what is this a string prompt value.

10:07.680 --> 10:12.840
And we were also passing to the chat Olama which is this one.

10:12.840 --> 10:15.570
So what is the advantage of running the LLM in the local machine.

10:15.570 --> 10:19.020
It has costed us around 396 token.

10:19.020 --> 10:19.320
Guys.

10:19.320 --> 10:20.010
Look at that.

10:20.010 --> 10:24.120
And then the output is just coming up over here as you can see.

10:24.120 --> 10:28.140
So this is an huge response coming from the AI.

10:28.170 --> 10:30.180
I think it has printed the value.

10:30.180 --> 10:34.260
So if I just go back yeah the content, we have not printed the content.

10:34.260 --> 10:36.660
So we can just print the content alone separately.

10:36.660 --> 10:38.430
So probably we just put a code there.

10:38.430 --> 10:45.450
And if I print the content and if I run it up, you see that we have got the content alone over here

10:45.450 --> 10:46.500
so we can print the content.

10:46.500 --> 10:52.920
If I wanted to say print the content and if I run this, look at that.

10:53.820 --> 10:56.990
So we get all the response is over here.

10:57.020 --> 11:01.670
That is what we are going to be getting out from the prompt template.

11:01.700 --> 11:05.630
And now you got the idea like how the prompt template is really used and why it is really used.

11:05.630 --> 11:10.550
Because while we build a large language model application, these kind of templates are really important

11:10.550 --> 11:11.900
while we pass the input.

11:11.900 --> 11:18.140
But now there begs the question, because we have got the human input and the output from the AI is

11:18.140 --> 11:18.950
something like this.

11:18.980 --> 11:26.420
What if I wanted to pass both the human input and I'm expecting an AI output in this fashion?

11:26.420 --> 11:28.250
So how can I actually do that?

11:28.250 --> 11:31.790
How can I pass a human input?

11:31.820 --> 11:40.910
And also, how can I instruct the AI to say that you are an expert in this domain as a system and then

11:40.910 --> 11:42.080
give me this particular response?

11:42.080 --> 11:43.010
How can I actually do that?

11:43.010 --> 11:46.700
Well, you can do that all using the chat prompt template.

11:46.700 --> 11:53.480
So you can set a role to your LLM so that it can respond it even more correctly.

11:53.480 --> 11:56.120
So that is what we are going to be discussing in our next lecture.

========================================================================================

WEBVTT

00:00.080 --> 00:07.190
So in our last lecture, if you see we were doing as a user, we're passing the the request or the message

00:07.190 --> 00:10.100
to the Lamb-smith via the prompt template.

00:10.100 --> 00:15.560
And then the prompt template was formatting the the input along with the input variables.

00:15.560 --> 00:19.010
And then it was sending it to the large language model.

00:19.010 --> 00:20.990
And we're getting the response back to the lamb-smith.

00:20.990 --> 00:22.580
And then we were sending it to the user.

00:22.580 --> 00:26.360
And of course there was an observability were happening using the lamb-smith for us.

00:26.390 --> 00:29.540
And that is what we were discussing in our last lecture.

00:29.540 --> 00:36.440
But now that we are going to set a role for the large language model itself, and then we will see how

00:36.440 --> 00:37.610
we can get the responses.

00:37.610 --> 00:46.340
So basically when we say role, what I really mean about that is that if I want to say that you large

00:46.340 --> 00:53.870
language model, you are an expert in this particular field, then give me this particular response

00:53.870 --> 00:55.130
in a perfect fashion.

00:55.130 --> 00:56.570
So you can say that as well.

00:56.570 --> 01:01.190
So you can tell or assign a role to the large language model while you ask the question.

01:01.190 --> 01:04.790
So for instance, if I go to the ChatGPT over here.

01:04.790 --> 01:16.850
And then if I ask a question that, uh, can you explain me the financial world, uh, financial status

01:16.850 --> 01:19.700
or maybe financial status of NZ?

01:20.630 --> 01:28.520
Uh, it is going to give me a response over here, like what it is going to be responding like searching

01:28.520 --> 01:30.350
it and getting the responses.

01:30.350 --> 01:33.350
Pretty much like how it does like a Google search for me.

01:33.380 --> 01:33.770
Right.

01:33.800 --> 01:42.800
And now let me just stop this guy and I'm going to say you are an financial expert in NZ economy.

01:42.890 --> 01:51.500
Now give me now explain me the financial uh status of NZ.

01:51.860 --> 01:59.030
So now while I do that over here, you will notice that as a financial expert of New Zealand economy

01:59.030 --> 02:02.420
in 2025, he has the detailed breakdown of the financial status.

02:02.420 --> 02:08.540
So now you see that now this ChatGPT has got a role that he is going to play for us when it responds

02:08.540 --> 02:12.770
and it says that this is the current economic condition, what is the fiscal position?

02:12.770 --> 02:17.780
What is the monetary policy and interest rate policy and investment initiative and the conclusion?

02:17.780 --> 02:19.640
So that is what I'm talking about.

02:19.640 --> 02:27.350
So instead of you getting just like a like a search result from the ChatGPT what it knows, but this

02:27.350 --> 02:32.570
is going to give you even more of an optimized and expected result that you're looking for.

02:32.570 --> 02:39.260
So this kind of roles that you can actually set to the prompt template, and then you can send it to

02:39.290 --> 02:43.700
the ChatGPT from using the prompt template as well.

02:43.700 --> 02:45.530
That is what we're going to be discussing this lecture.

02:45.530 --> 02:47.750
So let's see how we can actually achieve that.

02:48.020 --> 02:50.630
So I'm going to just say a markdown over here.

02:50.630 --> 02:54.110
And I'm going to say this is going to be what is called as prompt template.

02:54.140 --> 02:56.150
That is what we are going to say.

02:56.150 --> 02:59.240
But this is going to be chat prompt template okay.

02:59.270 --> 03:00.830
What is chat prompt template.

03:00.830 --> 03:06.380
Well I'm going to write the exact same code that we were discussing over here as well.

03:06.380 --> 03:12.950
So I'm going to probably copy some of the code from here, I'm going to paste it, but instead of importing

03:12.950 --> 03:16.610
the prompt template, I'm going to import what is called as chat prompt template.

03:16.610 --> 03:23.060
This is another class that you can use, and over here for the chat prompt template we have to modify

03:23.060 --> 03:26.750
the code a bit from what we have got over here.

03:26.750 --> 03:32.480
So so you can pass the chat prompt template and then you can pass the the data.

03:32.480 --> 03:38.390
But because the data requires a sequence of message, as you can see over here is that there's a square

03:38.390 --> 03:39.140
bracket there.

03:39.140 --> 03:45.230
So you need to probably pass it like like a square bracket, which means it's an array of information.

03:45.230 --> 03:50.000
So you can pass the whole information there directly or within this particular array.

03:50.030 --> 03:55.250
You can now also pass the message like how you want it to.

03:55.460 --> 03:58.880
Um, for instance, you can pass the.

03:58.910 --> 04:01.400
So they said they have got the template example there.

04:01.400 --> 04:03.380
You can pass the human message.

04:03.380 --> 04:06.170
You can pass the AI message something like this.

04:06.200 --> 04:09.410
Or you can also pass the system message.

04:09.920 --> 04:13.820
So what I mean in here when I say system messages that I'm going to say system.

04:13.850 --> 04:14.960
I'm sorry, this is an array.

04:14.960 --> 04:17.690
So we need to use the parentheses there.

04:17.690 --> 04:25.250
And I'm going to say in system message, uh, you are an LM expert.

04:25.250 --> 04:27.920
I'm just going to close this guy over here.

04:27.920 --> 04:40.040
And in the next value I'm going to say as a user, I'm going to ask, what is the, uh, advantage of

04:40.040 --> 04:44.300
running AI models in.

04:44.570 --> 04:47.240
And then I'm going to pass the Env here.

04:48.680 --> 04:49.190
Right.

04:49.190 --> 04:57.710
So while I do that over here, I'm essentially going to ask the question along with system and the user

04:57.710 --> 04:59.030
prompt over there.

04:59.030 --> 05:01.100
So let me just comment these codes.

05:01.100 --> 05:03.230
I don't want to run this at the moment.

05:03.230 --> 05:05.870
I want to see how the prompt template right now looks like.

05:05.870 --> 05:12.950
So if I try running this code, we'll see that it has got the chat prompt as input variable as env and

05:12.980 --> 05:13.520
input type.

05:13.520 --> 05:15.380
Is this uh, blah blah blah.

05:15.410 --> 05:17.150
But look at that in the message.

05:17.150 --> 05:19.550
We have got a system message prompt.

05:20.960 --> 05:21.470
Wow.

05:21.470 --> 05:23.900
So that is new because we are using just a chat prompt template.

05:23.900 --> 05:25.520
But what is the system message from template?

05:25.520 --> 05:29.090
Because now we have created a system message there.

05:29.090 --> 05:31.820
So that is why it is called a system message from template.

05:31.820 --> 05:37.100
And inside the system message prompt template, we have got a prompt with a prompt template, like the

05:37.100 --> 05:40.520
generic prompt template that we actually used this guy.

05:40.910 --> 05:44.330
And here it says another input variable type blah blah blah.

05:44.330 --> 05:47.210
And you are it just has got what is called as an template.

05:47.210 --> 05:49.340
As you are an LM expert.

05:49.730 --> 05:55.340
Essentially you are creating two prompt template inside this particular chat prompt template.

05:55.340 --> 05:57.500
So this is what it is saying.

05:57.500 --> 06:03.380
And then there is this human message prompt template which is going to have the user details.

06:03.380 --> 06:06.950
So this is the human message prompt template that you are passing in.

06:07.190 --> 06:08.690
And it has got a template.

06:08.690 --> 06:10.190
So now you got the idea right.

06:10.220 --> 06:13.520
Like this particular prompt template is the shorthand of system and user.

06:13.550 --> 06:18.580
We are essentially creating a system prompt template and user prompt template.

06:18.580 --> 06:21.130
And that is what is really happening over here.

06:21.130 --> 06:27.880
So that is what we have essentially created in this particular piece of code.

06:27.880 --> 06:33.910
So this code can be written in an entirely different fashion as well, because now you got the idea

06:33.910 --> 06:38.740
how this particular prompt template is really been created, the way you can create right now, the

06:38.770 --> 06:45.340
same code, the same exact code, like how it is happening inside or behind the scene is that let's

06:45.340 --> 06:54.880
say I'm just going to probably, um, import it like this over here.

06:55.390 --> 07:03.250
Uh, so chat prompt template and then human message prompt template and then system message prompt template.

07:03.820 --> 07:06.190
So I'm going to import three things right now.

07:06.700 --> 07:11.110
And you can just say system message prompt template.

07:11.860 --> 07:21.400
Uh sorry var system message is equal to system message prompt template.

07:22.090 --> 07:26.680
And then I'm going to hit from template method.

07:26.680 --> 07:28.780
And then I'm going to pass the template over here.

07:28.780 --> 07:32.710
So basically the template is going to be you are an LLM expert.

07:32.740 --> 07:35.530
This guy right now copy paste that.

07:35.740 --> 07:39.220
And then I'm going to create a human message prompt template.

07:39.220 --> 07:40.840
So which is human message or user message.

07:40.840 --> 07:48.280
Whatever that you wanted to call it is equal to human message prompt template from template.

07:48.520 --> 07:51.880
And then this is the message that I'm talking about.

07:51.910 --> 07:52.150
Right.

07:52.180 --> 07:54.730
I'm going to go and pass that over here.

07:55.390 --> 07:59.140
And now inside this particular chat prompt template.

07:59.140 --> 08:05.440
So this is I'm going to say one way of doing it.

08:05.440 --> 08:07.930
And I'm going to comment this.

08:07.930 --> 08:14.890
And I'm going to put the prompt template is equal to chat prompt template.

08:15.550 --> 08:18.070
And as I told you this is going to be in sequence.

08:18.070 --> 08:19.300
So it's going to be an array.

08:19.300 --> 08:25.780
And over here I'm going to pass the system message and human message.

08:25.810 --> 08:26.860
Just this one.

08:27.370 --> 08:32.050
So this is also pretty much exactly the same thing that we have did over here.

08:32.050 --> 08:33.370
This is another way of doing it.

08:33.370 --> 08:36.220
So if I try running this prompt template look at that.

08:36.220 --> 08:38.320
This is exactly the same thing.

08:38.320 --> 08:42.760
So this is the chat prompt template which has got the input and input variable of e and v.

08:43.300 --> 08:48.400
And the message has got a system message prompt template which has got these many things.

08:48.400 --> 08:49.900
And you are an LLM expert.

08:49.900 --> 08:54.490
And you also have got this human message prompt template which has got these information.

08:54.490 --> 09:01.270
So this is exactly what is happening under the hood for you while you call this one.

09:01.270 --> 09:06.280
So this is these both are exactly the same thing that we are doing over here.

09:06.820 --> 09:08.950
So I hope you got the idea like how we are doing it.

09:08.950 --> 09:15.670
And now if I want to invoke this particular chat chat prompt template or the prompt template that we

09:15.670 --> 09:19.000
have got over here, this is essentially exactly the same thing.

09:19.000 --> 09:22.930
All you have to do it is just say prompt, prompt, invoke.

09:22.930 --> 09:26.380
And the same thing like how we did before E and V local machine.

09:26.650 --> 09:29.200
And then we can print the content out.

09:29.200 --> 09:31.450
So let's see if that works.

09:31.480 --> 09:35.650
I'm gonna also print the content this time.

09:37.690 --> 09:40.300
And let's try to run this.

09:43.030 --> 09:43.690
Look at that.

09:43.720 --> 09:44.440
It's executed.

09:44.440 --> 09:47.860
And we got the response pretty much like how we were doing before.

09:48.040 --> 09:54.160
And if I go back to our langschmidt over here, you should see that.

09:54.190 --> 09:54.610
There we go.

09:54.610 --> 09:57.730
So we see that that's coming up the chat Olama.

09:57.730 --> 10:00.880
And now you have got the input as system.

10:00.880 --> 10:04.090
You are an LLM expert and it has got a human message.

10:04.090 --> 10:05.980
What is the advantage of running this in local machine.

10:05.980 --> 10:08.890
And we get the response coming up over here.

10:09.130 --> 10:12.370
That is what we're talking about the chat prompt template.

10:12.370 --> 10:14.980
And what is the power of using chat prompt template.

10:14.980 --> 10:18.040
And I think the shorthand is far better.

10:18.040 --> 10:24.310
And that is what we are going to be using in this particular, uh, session most of the time, because

10:24.310 --> 10:28.240
it is very straightforward and it is shorthand as well.

10:28.240 --> 10:33.820
You don't really have to create so many different imports, and you have to create an from template

10:33.850 --> 10:36.670
there and pass it to the chat prompt template instead.

10:36.670 --> 10:39.850
You can just use this one and it is far better as well.

10:40.300 --> 10:48.520
And you can also in fact suggest like what is the AI response going to be coming up when we talk about

10:48.550 --> 10:52.150
template like custom template creation later on in this course.

10:52.150 --> 10:56.050
So you'll understand how you can actually use those prompt templates and stuff.

10:56.050 --> 11:04.540
But you got the first taste of how you can actually create the prompt templates like chat prompt template

11:04.540 --> 11:10.300
to the user role, and also chat template to send a message to the large language model, and how you

11:10.300 --> 11:17.650
can invoke the large language model using language chain, and also passing it to Lang Smith, and how

11:17.650 --> 11:20.950
you can directly interact with the large language model.

11:20.950 --> 11:25.330
So these are the things that we have discussed so far in this particular section.

11:25.330 --> 11:31.390
In our next section, starting the next section, we will understand how we can work with the Lang chain

11:31.390 --> 11:32.230
even further.

========================================================================================

WEBVTT

00:00.620 --> 00:02.480
Well before you wind up this particular section.

00:02.480 --> 00:08.420
I also wanted to cover one more thing that I've missed covering, which is the message placeholders.

00:08.420 --> 00:14.660
So inside this particular chat prompt template, we can also use what is called as the message prompts

00:14.660 --> 00:15.560
if I wanted to.

00:15.590 --> 00:18.830
So let's say I'm just going to cover this entire thing here.

00:18.920 --> 00:27.350
And I'm going to put a markdown and I'm going to say a message placeholder.

00:27.830 --> 00:29.840
Uh, that is what I'm going to be covering here.

00:29.840 --> 00:32.570
So I'm going to put the code and paste this guy.

00:33.080 --> 00:39.530
And for the message placeholder we just have to import this, uh, message placeholder.

00:39.920 --> 00:44.660
And let me get rid of this, uh, human message and the chat prompt template, because I'm not going

00:44.690 --> 00:50.810
to use, uh, this one, but I'm going to be using this way because it is straightforward.

00:51.050 --> 00:53.300
Uh, here we go.

00:53.570 --> 00:53.930
Yeah.

00:53.960 --> 00:55.820
The code looks better this time.

00:55.820 --> 00:58.880
We don't even have to print the prompt template code.

00:58.880 --> 01:02.120
So over here in the Chat prompt template class.

01:02.120 --> 01:05.870
So we have passed this system message and the user message.

01:05.870 --> 01:11.030
We can also pass what is called as a placeholder.

01:11.030 --> 01:14.450
So the placeholder we can pass it something like this.

01:14.450 --> 01:19.970
For instance, instead of us passing as a user message over here, like what is the advantage of running

01:20.270 --> 01:22.820
the AI model like a user?

01:22.820 --> 01:29.060
We can now pass this entire thing as the message placeholder itself.

01:29.090 --> 01:33.140
So I'm going to just say, uh, message placeholder.

01:33.140 --> 01:36.890
And over here I'm just going to say the entire message.

01:36.890 --> 01:41.750
It's not just about the environment that we are passing in, but the entire message that I'm going to

01:41.750 --> 01:43.430
be passing in over here.

01:43.610 --> 01:54.260
And now I can just say in the prompt template of the invoke over here, I'm going to say message, and

01:54.260 --> 01:56.210
I'm going to pass the entire message.

01:56.210 --> 02:00.910
But this time I'm going to be passing it as a human message.

02:00.910 --> 02:07.570
So for human messages, there is another import that we have to do which is going to be, uh, in court,

02:07.570 --> 02:13.510
uh, messages, uh, import something called as human message.

02:13.510 --> 02:17.410
And this human message, I can pass it over here like human message.

02:17.410 --> 02:18.460
Maybe it's an array.

02:18.490 --> 02:20.200
So I'm going to say human message.

02:20.470 --> 02:31.240
Um, and I'm going to pass what is the advantage of running LLM in local machine.

02:31.240 --> 02:38.350
And this way you are essentially replacing the prompt template with all the methods that you have got

02:38.350 --> 02:41.320
with just this particular value over here.

02:41.320 --> 02:48.430
So you have the power of, uh, setting the value from outside of this particular chat prompt template

02:48.520 --> 02:51.820
from this particular, uh, message placeholder.

02:51.820 --> 02:57.220
So this message placeholder is going to act as a placeholder for you to pass an entire message from

02:57.220 --> 03:03.460
outside so that you don't have to rely on hard coded value in the chat prompt template all the time,

03:03.460 --> 03:05.350
so that is something you can do it as well.

03:05.350 --> 03:11.020
And because we have got this message placeholder over here, you also have got a shorthand way of parsing

03:11.020 --> 03:11.380
it.

03:11.680 --> 03:17.740
A shorthand way is nothing, but you can just say a placeholder and then you can just say message.

03:18.040 --> 03:21.400
And this message is going to be sorry on the bracket.

03:21.400 --> 03:24.100
And now you can just say message.

03:24.160 --> 03:27.040
And then you can just pass the same thing over here.

03:27.040 --> 03:30.490
And if you try to run this it's just going to work as well.

03:30.490 --> 03:34.990
So that is how you do it from this particular chat prompt template.

03:34.990 --> 03:38.920
So you don't really have to include this message prompt template for that matter.

03:38.920 --> 03:42.040
You can just use the normal way of doing it as well.

03:42.040 --> 03:50.410
So this is another way of you using the message placeholder for your chat prompt template while you

03:50.410 --> 03:50.980
invoke it.

03:50.980 --> 03:57.340
And there is one more thing which I also wanted to cover is this instead of you doing an invoke over

03:57.340 --> 04:01.330
here because you see that every single time I tried to run this particular code, it is actually going

04:01.330 --> 04:07.330
to take so much of time to get the response out of the large language model.

04:07.330 --> 04:12.520
The reason why is because we are actually using what is called as an invoke method, because this invoke

04:12.520 --> 04:16.690
method is going to print all the value in one single shot, like like this.

04:16.690 --> 04:17.980
As you can see over here.

04:18.010 --> 04:23.200
Instead, if I want to print the value every single time while the generation of the text is going to

04:23.200 --> 04:30.070
happen, then we can stream the output out from this particular, um, output, which is coming from

04:30.070 --> 04:31.060
the large language model.

04:31.060 --> 04:34.450
So the way I can do it is I can just put a stream there.

04:34.450 --> 04:40.540
So there is this method called a stream, which is going to stream the output which is coming up from

04:40.540 --> 04:43.540
this particular, uh, particular response.

04:43.540 --> 04:48.250
So but because this is going to be a stream, I need to do a for loop for that matter.

04:48.250 --> 05:00.390
So I'm going to say for uh streamed uh, or maybe for stream, uh, in this particular stream that we

05:00.390 --> 05:04.920
have got, and I wanted to print the entire stream, for that matter.

05:04.920 --> 05:13.050
So I'm just going to say print, uh, str dot and because we need to print the content, I'm just going

05:13.080 --> 05:14.580
to print the content over here.

05:14.580 --> 05:17.040
So now what's going to happen if I try to run this code.

05:17.040 --> 05:20.010
You will notice that it is going to print all the value for me.

05:20.010 --> 05:20.610
Look at that.

05:20.610 --> 05:21.930
The text generation is going to happen.

05:21.960 --> 05:27.930
So if I go to the text editor you will notice that it is going to print generate all the text instantly

05:27.930 --> 05:30.270
for me, like how the ChatGPT does.

05:30.300 --> 05:33.270
And then it's going to print the value for me over there.

05:33.270 --> 05:38.430
I know that the text is not quite aligned like how it is doing over here, but yeah, but you got the

05:38.430 --> 05:41.610
idea right, like how you can actually stream the value out as well.

05:41.610 --> 05:45.300
So these are the things that is required while we build the chatbot, because we are going to stream

05:45.300 --> 05:48.810
the output instead of really invoking the output out from it.

05:48.840 --> 05:50.910
That is how we do it over there.

05:51.330 --> 05:57.540
So this is how we can work with the message placeholder and stream method of the Lang chain.

========================================================================================

