WEBVTT

00:00.160 --> 00:02.200
Welcome to the next section of our course.

00:02.200 --> 00:07.720
And in this section we are going to talk about how we can start building model Context Protocol server,

00:07.760 --> 00:11.280
otherwise called as the MCP server within our code.

00:12.280 --> 00:16.640
So what is Model Context protocol and what is MCP server in first place?

00:16.880 --> 00:22.720
We already discussed about MCP server briefly in our earlier sections of the course, like how we can

00:22.760 --> 00:30.960
invoke the MCP server as an agent, which can act like an bridge between your large language model and

00:30.960 --> 00:32.760
your local systems.

00:32.760 --> 00:34.200
That's exactly what is MCP.

00:34.200 --> 00:40.120
So basically, MCP is an open protocol that standardizes how application provides context to the large

00:40.120 --> 00:41.000
language model.

00:41.400 --> 00:45.560
Think of MCP is like an a USB-C port for an AI application.

00:45.560 --> 00:52.800
Just as an a USB-C port provides a standardized way to connect your devices to various peripherals and

00:52.800 --> 01:00.480
accessories, MCP provides a standardized way to connect AI models to different data sources and Toolings,

01:00.960 --> 01:07.680
and MCP enables you to build agents and complex workflows on the top of LMS and connect your models

01:07.680 --> 01:08.760
with the world.

01:09.040 --> 01:11.800
While they say with the world, it's like everything.

01:11.800 --> 01:17.280
So MCP, you can just think of that, like you can connect with whatever that you wanted to using the

01:17.280 --> 01:19.200
power of this open protocol.

01:19.200 --> 01:25.200
And LM gets access to almost everything, like how we did in our earlier sections of the course, using

01:25.360 --> 01:31.360
like long chain, like how we're able to connect with multiple different sources of our data.

01:31.400 --> 01:35.560
That's exactly what we're going to be doing in this particular MCP as well.

01:36.240 --> 01:43.840
So MCP follows a client server architecture where an MCP host an application like cloud code or cloud

01:43.840 --> 01:50.960
Desktop, or even cursor IDE or Visual Studio Code, GitHub Copilot or windsurf, whatever that you

01:51.000 --> 01:59.520
name it, any supported IDE or any supported systems which supports MCP Can act as an MCP host, which

01:59.560 --> 02:02.840
establishes connections to one or more MCP servers.

02:02.840 --> 02:06.000
So you don't have to just rely on only one MCP server.

02:06.000 --> 02:12.880
You can have multiple different MCP server while working with it, and the MCP host accomplishes this

02:12.880 --> 02:17.400
by creating one MCP client for each MCP server.

02:17.400 --> 02:25.160
And each MCP client maintains a dedicated one on one connection with its corresponding MCP server.

02:25.200 --> 02:26.800
That's how it really works over here.

02:26.800 --> 02:31.160
You see that how the connectivity happens with MCP host with multiple different clients, and once they

02:31.200 --> 02:33.240
are connected, they can just talk with each other.

02:33.240 --> 02:34.200
That's how they really work.

02:34.200 --> 02:37.200
That's the MCP server architecture.

02:38.240 --> 02:42.480
And we already discussed about the same thing even before in our earlier sections, like how MCP really

02:42.480 --> 02:42.720
works.

02:42.720 --> 02:45.320
So MCP has introduce act like a universal bridge.

02:45.320 --> 02:47.560
It has a client and server architecture.

02:47.560 --> 02:51.000
So in here the cloud desktop is the MCP server.

02:51.000 --> 02:58.240
And we're going to connect with multiple different local systems using the MCP servers via the MCP protocols,

02:58.240 --> 03:03.960
so there can be an MCP server which can access your local machines or GitHub so you can have one server

03:03.960 --> 03:04.720
or something like that.

03:04.760 --> 03:08.160
You can also have a server which is going to be connecting with your file systems.

03:08.160 --> 03:12.640
You can also have a MCP server which is going to connect with your Slack or Google Drive.

03:12.840 --> 03:19.480
Or you can also have a MCP server, which is going to act as an automation testing tools like playwright

03:19.480 --> 03:20.440
for that matter.

03:20.680 --> 03:23.720
Or so that's how this MCP server is going to really work.

03:23.720 --> 03:26.240
And that's the client server architecture in place.

03:27.040 --> 03:33.600
So we are going to build an MCP server in this particular course in this particular session, to be

03:33.600 --> 03:33.960
honest.

03:33.960 --> 03:35.200
So how are we actually going to do that.

03:35.200 --> 03:36.160
There are two ways to do it.

03:36.160 --> 03:43.880
One is official MCP server library, which is going to be for JavaScript and Python and C, something

03:43.880 --> 03:44.320
like that.

03:44.600 --> 03:48.880
And there is a fast MCP 2.0 which is very, very specific to Python.

03:48.880 --> 03:56.000
And we are going to be focusing on fast MCP 2.0 because we know that the python is our language of choice

03:56.000 --> 04:00.760
and we are going to build everything with fast MCP 2.0 approach, which is really, really fast.

04:00.760 --> 04:06.720
And I'm telling you, the way that you build this MCP server over here with the other toolings that

04:06.720 --> 04:13.920
we have built in earlier in our long chain approach by just noting, like add tools, pretty much same

04:13.960 --> 04:19.800
approach that we're going to be doing over here as well in the MCP to create an MCP server.

04:19.840 --> 04:20.760
This is really good.

04:20.760 --> 04:22.440
The fast MCP is really awesome.

04:22.440 --> 04:27.720
If you're going to be using the node version of MCP, you know how hard it is because I already built

04:27.720 --> 04:33.120
myself the playwright MCP server as well as the database MCP server using the node.

04:33.160 --> 04:37.840
It is really, really terrible because the code starts becoming very, very complex in due course of

04:37.840 --> 04:38.440
time.

04:38.440 --> 04:42.120
But if you're going to be using this fast MCP 2.0, it's really going to be amazing.

04:43.280 --> 04:43.760
So fast.

04:43.760 --> 04:48.080
MCP makes building MCP server and client simple and intuitive.

04:48.120 --> 04:55.920
It creates tools, exposes resources, defines prompts and more with clear pythonic code and fast.

04:55.960 --> 05:01.920
Mcpp is a standard framework for working with MCPs, which is Model Context, protocol and fast.

05:01.920 --> 05:10.920
MCP 1.0 was incorporated into the official MCP Python SDK in 2024, so it is already an official integration

05:10.920 --> 05:11.880
happen over there.

05:11.880 --> 05:16.960
So it's just going to work with the uh with the official MCP Python SDK already so fast.

05:17.000 --> 05:18.560
MCP is is pretty good.

05:18.600 --> 05:20.520
They have already seen the benefits.

05:20.520 --> 05:26.800
So the model context protocol library or SDK has already incorporated fast MCP in there.

05:26.800 --> 05:28.720
So that's what we are going to be using in as well.

05:29.040 --> 05:30.880
So how the code is really going to look like.

05:30.880 --> 05:36.200
Well, I keep telling that the MCP coding is really really easier if you have already watched all the

05:36.200 --> 05:40.960
sections before, if you have already tried out everything so far that we have discussed, you should

05:40.960 --> 05:43.200
see the code looks very, very simple.

05:43.200 --> 05:49.520
All we have to do while using this fast MCP server is to follow these steps over here.

05:49.520 --> 05:52.920
So first of all, in the past MCP server we need to create a basic server.

05:52.920 --> 05:58.080
So this is going to be the server which is going to act like a bridge to talk with your desktop which

05:58.080 --> 06:06.800
is the cloud desktop or the Ides like the GitHub copilot agent or the cursor IDE or windsurf.

06:07.000 --> 06:10.680
So you need to talk your your client needs to talk with the servers.

06:10.680 --> 06:12.360
That's why you need to have a server.

06:12.360 --> 06:14.120
That is the first thing that you need to create.

06:14.120 --> 06:18.120
And then you need to have all the toolings pretty much like how we did in our lab earlier.

06:18.120 --> 06:20.040
So that's what we'll be doing over here.

06:20.240 --> 06:23.480
And then we'll be exposing the data with resources.

06:23.480 --> 06:29.880
So this is something we really require because that's what the, uh, the large language model really

06:29.880 --> 06:31.080
requires by then.

06:31.120 --> 06:34.600
And then you're going to generate the dynamic content with a resource template.

06:34.600 --> 06:35.880
So this is something more advanced.

06:35.880 --> 06:39.400
We are not going to touch about the resource template and things over here.

06:39.400 --> 06:41.080
But but yeah that's what you have to doing.

06:41.280 --> 06:43.080
And then finally you need to run the server.

06:43.080 --> 06:47.200
So once you have everything over here like everything's been wired up into the server.

06:47.240 --> 06:49.080
Then just have to run the server, that's all.

06:49.160 --> 06:51.680
That's how you need to start the MCP server.

06:51.680 --> 06:52.920
It's really, really easier.

06:52.960 --> 06:55.960
I've just I'm just going to use a one, two and three and five.

06:56.000 --> 06:56.960
Not even the four.

06:57.240 --> 06:59.960
Um but it's going to be very straightforward.

06:59.960 --> 07:02.360
And the code if you I'm going to show you the code now.

07:02.400 --> 07:04.320
You just mind blown how easy it is.

07:04.320 --> 07:05.200
So this is the code.

07:05.240 --> 07:10.560
To be honest, this is a simple calculator program like how we built even earlier in our sections to

07:10.600 --> 07:12.640
add numbers, subtract the number.

07:12.640 --> 07:16.360
This is the same code I just copy pasted from there and I've just built it.

07:16.400 --> 07:21.320
See I'm just importing the MCP server dot MCP uh over here.

07:21.320 --> 07:22.960
And then I'm creating a server.

07:22.960 --> 07:26.520
This is the way that you create a simple calculator.

07:26.680 --> 07:28.480
Uh, MCP server, that's all.

07:28.480 --> 07:30.480
Once you create it, you add all the toolings.

07:30.480 --> 07:35.280
I'm not even adding any resources here because it doesn't really require for this particular, uh,

07:35.280 --> 07:38.080
MCP server and then running the server.

07:38.600 --> 07:39.800
So that's all.

07:39.800 --> 07:42.440
Once you do that, you have an MCP server.

07:42.440 --> 07:44.840
You can now run this MCP server right away.

07:45.080 --> 07:49.320
You can wire this up with your cloud desktop and we can quickly see how this works.

07:49.640 --> 07:50.600
This is amazing.

07:50.640 --> 07:55.520
I will quickly show you all of these in this particular section, but in the next lecture we're going

07:55.560 --> 07:58.280
to see how we can start installing everything.

07:58.280 --> 08:03.800
And for the first time in this particular course, we're going to be deviating from using our existing

08:03.800 --> 08:09.480
code repository that we have been building in Visual Studio Code so far into a new project.

08:09.480 --> 08:10.680
So I'm going to create a new project.

08:10.680 --> 08:13.520
I don't want to mix them up in the same project.

08:13.520 --> 08:19.080
I'm going to be creating a new folder structures everything so that I can just start everything from

08:19.080 --> 08:21.960
the scratch, and I can show you how the MVP servers can be built.

08:22.000 --> 08:28.160
And again, MVP server cannot be always matched with the long chain that we have built because long

08:28.200 --> 08:29.520
chain is even more powerful.

08:29.520 --> 08:35.040
But if you want to create a quick solution, uh, like an agent which can talk with a large language

08:35.040 --> 08:40.400
model and all the capabilities, MVP server is really, really helpful and it's very fast to build it.

08:40.400 --> 08:43.920
That's the reason why I have added this particular section as well.

========================================================================================

WEBVTT

00:00.080 --> 00:06.280
So now we're going to do the installation of the fast MCP within our code.

00:06.280 --> 00:08.280
So this is the folder that I've just created.

00:08.320 --> 00:12.280
Instead of just usual project that we used to create holding all the sections.

00:12.280 --> 00:17.000
This is going to be entirely separate from the rest of the code base that I wanted to just have them

00:17.000 --> 00:20.440
completely separate so that you can have more focused on the MCP side.

00:20.440 --> 00:24.000
The reason why I did this is because we're not going to use the Jupyter notebook or whatever, because

00:24.000 --> 00:28.280
we're just going to write the code right away, right in here, because the code itself is very, very

00:28.280 --> 00:29.440
straightforward and simple.

00:29.480 --> 00:34.760
And also we need to run this server, uh, in a uh, from the cloud desktop.

00:34.760 --> 00:36.720
So we need to have that as a separate way as well.

00:36.760 --> 00:37.280
Right.

00:37.320 --> 00:42.440
So well, as that said, I'm going to do the first uh, part is the installation of the fast MCP.

00:42.440 --> 00:47.240
So first I'm going to go to the fast MCP over here in the Google search.

00:47.240 --> 00:50.560
So you can see that this is the fast MCP website.

00:50.560 --> 00:55.080
And you can see that we have, uh, got the details like how we can work with the fast MCP.

00:55.080 --> 01:00.840
So basically the fast MCP is a uh, is a pythonic way to build an MCP server and client.

01:00.840 --> 01:01.870
That's what they do.

01:01.910 --> 01:05.190
And we are going to just build the servers, not the client over here.

01:05.190 --> 01:06.590
So it's going to be very, very straightforward.

01:06.590 --> 01:09.510
And you can learn the details from this particular documentation.

01:09.510 --> 01:16.230
They have got the details like how you can install the uh the fast MCP if you just go to the Pip version,

01:16.630 --> 01:20.750
which is what we're going to be doing, just have to pip install fast MCP and then you're done.

01:20.750 --> 01:23.310
That's the installation part, uh, to be honest.

01:23.350 --> 01:25.310
And once you have it, then you can start working with it.

01:25.310 --> 01:26.470
It's very straightforward.

01:26.710 --> 01:29.910
So I'm going to be in the Visual Studio Code over here.

01:30.150 --> 01:35.990
And I'm just going to open the terminal this time instead of we always do with the Jupyter notebook.

01:35.990 --> 01:43.390
This time I'm just going to do everything from here and I'm going to create a virtual, uh, environment.

01:43.390 --> 01:49.150
So I'm going to say Python three hyphen m and then v and v of dot v and v.

01:49.150 --> 01:51.070
So that's what I'm going to be doing over here.

01:51.110 --> 01:53.270
This is going to create the virtual environment for me.

01:53.430 --> 01:57.830
And then I'm going to source the V environment the virtual environment over here.

01:57.830 --> 01:59.510
And then we're going to start working from here.

01:59.510 --> 02:04.930
So I'm going to go and paste this pip install fast MCP, which is going to install the fast MCP for

02:04.930 --> 02:07.610
us in the virtual environment that we have got.

02:07.650 --> 02:08.130
Look at that.

02:08.130 --> 02:09.450
It's just going to be installed.

02:09.730 --> 02:14.570
And because we are also going to be working with a playwright, we're going to build our own playwright

02:14.610 --> 02:15.450
MCP server.

02:15.490 --> 02:20.530
So I'm going to say pip install playwright over here.

02:21.050 --> 02:22.130
And I'm going to hit enter.

02:22.170 --> 02:23.770
This is going to install the playwright.

02:23.770 --> 02:26.690
And maybe from the playwright we need to install Chrome and things.

02:26.690 --> 02:29.210
So I'm just going to say playwright install chromium.

02:29.210 --> 02:32.210
This is going to install the chromium for us over here.

02:32.250 --> 02:33.610
And we're going to be working with Firefox.

02:33.610 --> 02:35.130
You can also do that right.

02:35.170 --> 02:37.250
That's the entire installation process.

02:37.250 --> 02:40.730
The first thing is we need to install the fast MCP.

02:41.050 --> 02:42.930
And then we need to install the playwright.

02:42.970 --> 02:47.490
And then finally, because we'll be using some browsers, I'm going to install the chromium as well.

02:47.490 --> 02:48.010
That's all.

02:48.010 --> 02:50.570
That's the entire thing that we have over here.

02:50.690 --> 02:55.370
And once we have this, then we can start building everything from the fast MCP.

02:55.810 --> 02:59.650
And this is the entire installation process.

02:59.650 --> 03:03.810
And now we're going to start working with the actual code, starting our next lecture.


========================================================================================


WEBVTT

00:00.160 --> 00:03.560
All right, now it's time for us to start writing the code.

00:03.560 --> 00:10.080
But before I start writing the code, I'm going to quickly show you the MCP server connectivity to a

00:10.120 --> 00:10.840
client.

00:10.880 --> 00:11.160
Right?

00:11.200 --> 00:16.480
So we need to have a client which is going to connect to the server that we are going to be building.

00:16.480 --> 00:19.480
And the server is nothing but the one that we are going to be writing over here.

00:19.480 --> 00:24.160
And the client is going to be any one of the client can be a cloud desktop, it can be a cursor, it

00:24.160 --> 00:28.240
can be a Visual Studio Code, GitHub Copilot or raw IDE.

00:28.280 --> 00:32.360
Whatever it is, you can use any of these as a as a client.

00:32.360 --> 00:35.960
And in here I'm going to quickly show you one of the client, which is the cloud desktop.

00:35.960 --> 00:37.800
We already saw about this in a demonstration.

00:37.800 --> 00:39.880
But I'm going to quickly show you one more time.

00:39.880 --> 00:43.840
So this is the cloud desktop that I have already installed over here.

00:43.840 --> 00:49.200
And you can see that we have got some, uh, some tools, which is the sorry, the servers over here,

00:49.240 --> 00:53.600
the playwright server and the SQLite, which is the database MCP server.

00:53.600 --> 00:55.600
These are the two MCP servers I have got.

00:55.640 --> 00:59.400
And each of these servers has got a lot of different tools.

00:59.400 --> 01:04.960
This is the same kind of similar kind of tools that we have written in our Lang chain earlier with the

01:05.000 --> 01:08.240
Add Tools annotation the same exact thing.

01:08.240 --> 01:09.520
There is no big difference.

01:09.640 --> 01:10.560
And guess what?

01:10.600 --> 01:12.520
Because we'd also be doing some testing.

01:12.960 --> 01:15.760
The testing side of things are also going to be coming up over here.

01:15.760 --> 01:19.360
For example, if you're going to be writing your own playwright MCP server, we're going to be building

01:19.360 --> 01:20.920
in this particular course anyways.

01:20.960 --> 01:24.480
I'll show you how easy it is while we do everything with the fast.

01:24.480 --> 01:33.160
MCP and I have configured these two MCP server from our GitHub repository, just go to the GitHub repository.

01:33.200 --> 01:39.920
We have got this MCP database server as well as the MCP playwright which is actually doing those things.

01:40.120 --> 01:46.360
So basically in the MCP database server you need to configure MCP server using this particular path.

01:46.400 --> 01:51.600
And the thing is these MCP servers at the moment are written using NodeJS.

01:51.760 --> 01:54.320
That's why we are using the command as NP.

01:54.600 --> 02:00.520
And the arguments are with hyphen y and the at zero automation slash database server.

02:00.520 --> 02:06.000
And because this is already deployed on the npm package, that's the reason why it's just going to pull

02:06.000 --> 02:07.520
it from there automatically.

02:07.560 --> 02:07.720
Right.

02:07.760 --> 02:09.800
That's what it's really happening over here.

02:09.880 --> 02:16.890
The same thing goes for the MCP playwright as well, because even the playwright MCP is deployed on

02:16.890 --> 02:18.770
the uh, on the node.

02:19.010 --> 02:24.290
Uh, sorry, NPM, and that's the reason why you can actually able to get it from this particular command.

02:24.330 --> 02:31.090
But because we are going to be using Python and fast MCP for that matter, we are going to need a different

02:31.090 --> 02:33.330
way to configure that over here.

02:33.370 --> 02:35.650
And I will show you while we start configuring it.

02:35.650 --> 02:37.170
But don't worry about it for now.

02:37.330 --> 02:38.650
This is what we're going to be doing.

02:38.890 --> 02:43.650
If I go back to the client, which is the cloud desktop over here, and if I want to show you like how

02:43.650 --> 02:52.010
I have configured this particular, uh, cloud desktop in the settings, if I go to this settings developers,

02:52.210 --> 02:58.650
you see that we have got two MCP servers up and running, the playwright and the SQL Lite, and these

02:58.650 --> 03:02.970
two I have configured, if I'm going to go and click the edit configuration, it's going to show me

03:02.970 --> 03:04.210
a window over here.

03:04.210 --> 03:09.770
And if I'm going to open with a windsurf you should see that this is the uh two configuration, the

03:09.770 --> 03:14.050
two servers configuration that I have made, the MCP servers configuration that I have made.

03:14.370 --> 03:22.570
And as I told you, the MCP server as I mean two or more MCP servers can be communicating with your,

03:23.010 --> 03:26.130
uh, client, which is the cloud desktop over here.

03:26.130 --> 03:27.370
Without any hesitation.

03:27.370 --> 03:29.970
It can just work fine without any problem, right?

03:30.010 --> 03:31.970
That's what we are going to be doing as well.

03:31.970 --> 03:34.930
We're going to be building a simple calculator in this particular demonstration.

03:34.930 --> 03:42.930
And then we'll see how we can, uh, connect that simple calculator with the cloud desktop, which is

03:42.930 --> 03:43.410
the client.

03:43.410 --> 03:49.610
And then we'll see how the large language model can invoke these tools, like how it did the invocation

03:49.610 --> 03:55.010
using the AI agents, which we discussed in our earlier sections of this course, where we automatically

03:55.010 --> 04:01.490
invoked the add tool or subtract tool or multiplication tool using the power of the AI agent.

04:01.490 --> 04:06.450
That's exactly the same thing we're going to be doing over here, and you will see how easy it is while

04:06.450 --> 04:10.690
we work with the model context protocol, pretty much similar to long chain, to be honest.

04:10.690 --> 04:12.410
So we'll see how we can do that.

04:12.450 --> 04:15.730
Well, as it said over here, I'm going to start writing a basic code.

04:15.770 --> 04:17.930
To be honest, it's really, really basic code.

04:18.050 --> 04:23.660
So the way I'm going to write this code is I'm going to start creating a file over here.

04:23.660 --> 04:28.220
I'm going to call this as simple calculator dot pi.

04:28.500 --> 04:29.700
That's it right.

04:29.740 --> 04:38.860
And over here we need to import the package which is going to be from I'm going to say MCP dot.

04:38.980 --> 04:42.020
See that once I do that it's automatically recognizing which is amazing.

04:42.180 --> 04:45.340
And I'm going to say server Dot.

04:45.340 --> 04:49.140
And there is something called as fast MCP which is pretty cool.

04:49.140 --> 04:52.100
So we are writing things in the fast MCP here.

04:52.580 --> 04:56.620
And I'm going to import the fast MCP class.

04:57.500 --> 05:00.060
And that's the first invocation that we have to.

05:00.660 --> 05:07.980
And then I'm going to say MCP, which is the MCP server that we are going to be creating.

05:07.980 --> 05:10.900
So this is the place where I'm actually going to create the fast MCP server.

05:10.900 --> 05:13.700
So I'm going to say fast MCP.

05:14.300 --> 05:18.420
And over here I'm going to name this particular server so I can name whatever that I wanted to.

05:18.460 --> 05:21.820
So I'm going to say simple calculator for that matter like that.

05:22.060 --> 05:24.620
And let's give this this is the place where I invoke this server.

05:24.620 --> 05:30.180
So this is already an MCP server for you, but without any tool.

05:30.180 --> 05:32.140
So there is no tool whatsoever.

05:32.420 --> 05:35.580
Uh, so you you can't just use this.

05:35.620 --> 05:41.460
It's just like it's just like an server which we have defined in order to run this particular MCP server,

05:41.500 --> 05:45.540
all you have to do it is, uh, you just have to say MCP dot run.

05:45.580 --> 05:51.620
But you need to call this run method inside a main method because the main is what is going to trigger.

05:51.660 --> 05:52.140
Right.

05:52.180 --> 05:56.420
So you're going to say if the name is equal to.

05:58.980 --> 06:04.740
Main something like that, then do the MCP run.

06:04.780 --> 06:10.340
So this is going to run the MCP server that we have created this guy.

06:11.460 --> 06:11.900
Right.

06:11.940 --> 06:19.780
So now if I run this code I'm going to say uh Python sorry Python and simple calculator dot pi.

06:19.980 --> 06:25.180
See nothing is really happening at the moment, but it is running the, uh, the MCP server for us over

06:25.180 --> 06:25.700
here.

06:26.020 --> 06:34.670
You can add some, uh, description, maybe print over here, and then you can say, um, MCP server

06:35.790 --> 06:46.470
is running and then you can say simple calculator, MCP server is running.

06:47.150 --> 06:50.590
And now I'm just going to close it, then run it back.

06:50.630 --> 06:50.990
You see that.

06:50.990 --> 06:54.230
It's going to show you that simple calculator MCP server is running right.

06:54.230 --> 06:56.590
That shows that this is already running in loop.

06:57.630 --> 07:00.750
Now you can connect this MCP server from the cloud desktop.

07:00.750 --> 07:05.270
It's just going to work, but it's not going to do anything because there is no tooling whatsoever.

07:05.750 --> 07:10.790
The next step we're going to do is we need to add the toolings, which we are going to do in our next

07:10.790 --> 07:11.910
lecture of this course.

07:11.910 --> 07:14.910
But you already got the idea how easy it is.

07:15.230 --> 07:16.150
Guess what guys?

07:16.150 --> 07:24.190
If I wanted to do the exact same thing with the NodeJS version, it is, to be honest, very very hard.

07:24.230 --> 07:25.790
I'll tell you how that really works.

07:25.790 --> 07:33.510
I'm going to copy this code, go to the cloud desktop, and I'm going to go to the chat over here.

07:33.910 --> 07:48.550
And I'm going to say can you write this fast MCP code written in Python into a node version?

07:49.510 --> 07:51.550
And I'm going to paste that over here.

07:51.830 --> 07:58.150
And if I'm going to run this, you will notice that the boilerplate code just kicks in with the node

07:58.150 --> 07:58.470
JS.

07:58.470 --> 08:00.550
It is to be honest, it's very big.

08:00.590 --> 08:01.910
See how how it is.

08:02.070 --> 08:05.270
So you need to define a model context protocol.

08:05.270 --> 08:08.510
So this is the SDK that you've got to be using it over here.

08:08.830 --> 08:09.750
Um like that.

08:09.750 --> 08:16.430
And then you need to use the studio or the studio server transport which is basically for the I o operation

08:16.430 --> 08:17.350
that you are doing.

08:17.350 --> 08:21.390
This is where you define the server and its capabilities.

08:21.750 --> 08:25.710
And then you also need to define the main method.

08:25.750 --> 08:27.790
And this is the place where you call the main method and things.

08:27.790 --> 08:28.750
But but guess what?

08:28.750 --> 08:31.750
This is how you need to do all of these over here.

08:31.910 --> 08:36.150
I have not added any toolings, but the moment I add the toolings I will show you how complex it is.

08:36.150 --> 08:40.270
I'm going to just hold this window for you and I will show you how complex it is when you start writing

08:40.270 --> 08:41.110
the Toolings.


========================================================================================


WEBVTT

00:00.120 --> 00:00.800
All right.

00:00.800 --> 00:05.400
So now that we are going to start writing the Toolings capability for our MCP server.

00:05.400 --> 00:07.800
So I'm going to go to the code over here.

00:07.840 --> 00:09.200
Let me stop this entire thing.

00:09.240 --> 00:11.880
And over here I'm going to add the tooling.

00:11.880 --> 00:12.960
So how can I actually do that.

00:13.000 --> 00:20.000
Remember we wrote the methods earlier to perform an add numbers like we just did.

00:20.320 --> 00:22.280
Uh, pass the numbers over here.

00:22.520 --> 00:30.720
Uh, is a parameter like int uh for a and then it's int and the return type is going to be an integer

00:30.720 --> 00:31.320
over here.

00:31.360 --> 00:40.640
And then we said that uh adding two numbers and return the result over here.

00:40.920 --> 00:52.200
Uh, and then we just said return int of a sorry a plus int of B, which is basically going to perform

00:52.200 --> 00:53.720
an addition operation.

00:53.760 --> 00:54.240
Right.

00:54.280 --> 01:00.800
And we did the exact same thing for the rest of the tools as well in our earlier sections of this course.

01:00.960 --> 01:05.560
And we call this as number, something like that.

01:05.560 --> 01:10.000
And then instead of adding two numbers I'm going to say subtract two numbers.

01:10.000 --> 01:11.680
And this is going to be minus.

01:12.080 --> 01:14.400
And then this is going to be multiply two number.

01:14.400 --> 01:17.960
So I'm going to say multiply multi.

01:20.200 --> 01:20.920
Uh numbers.

01:20.920 --> 01:25.280
And this is going to be multiply two numbers.

01:25.280 --> 01:27.760
And I'm going to say like that.

01:27.800 --> 01:32.480
You can also create one more tool which we have not done before like say divide numbers.

01:32.480 --> 01:35.760
So I'm going to say divide numbers.

01:35.760 --> 01:38.640
And this is going to be divide two numbers.

01:38.640 --> 01:38.840
Right.

01:38.840 --> 01:41.320
These are the tools that these are the method that I have written right now.

01:41.360 --> 01:45.320
And I need to decorate this as a tool in the long chain.

01:45.320 --> 01:49.880
What we used to do is we just put like add tools attribute uh on annotation.

01:49.880 --> 01:52.800
And then we call these tools uh in an array.

01:52.800 --> 01:54.680
And then we pass it to the AI agent.

01:54.720 --> 01:56.240
We have to do nothing in here.

01:56.280 --> 01:57.560
Nothing to be honest.

01:57.560 --> 01:59.400
It's so easy with fast MCP.

01:59.680 --> 02:06.520
All you have to do over here just say add mcp, mcp, dot.

02:06.560 --> 02:07.880
That is something called as tool.

02:08.840 --> 02:10.240
This is the method that you have to invoke.

02:10.280 --> 02:10.960
That's all.

02:11.840 --> 02:19.560
With this you're already defining your method as a tool.

02:22.160 --> 02:24.680
This is, to be honest, very, very powerful.

02:25.080 --> 02:35.160
And once you're done, your MCP server is now already capable of having all the toolings in here, right?

02:35.200 --> 02:35.880
You don't believe me?

02:35.880 --> 02:36.880
But it is real.

02:37.120 --> 02:41.000
So I'm going to copy the same code and I'll tell you what I what is going to happen if I'm going to

02:41.000 --> 02:42.800
do the same with the NodeJS version?

02:42.800 --> 02:44.640
That's where things are going to be more spicy.

02:44.960 --> 02:52.520
Can you write this code with node JS version of MCC server.

02:52.960 --> 02:54.160
And I'm going to paste this code.

02:54.200 --> 02:55.120
I'm going to hit enter.

02:55.120 --> 03:01.160
And you will notice that how this code is going to be transformed into a node JS version and how complex

03:01.160 --> 03:01.600
they are.

03:01.800 --> 03:08.360
See in the node JS version, you actually need to create a request handler, and in the request handler

03:08.360 --> 03:11.080
you have to do this tool slash list.

03:11.080 --> 03:16.280
And then you have to define the structure or the schema of how the tools should be.

03:16.320 --> 03:18.080
So this is the name like add numbers.

03:18.080 --> 03:21.400
Then you have to put the description and they need to create the schema here.

03:21.400 --> 03:23.280
See this is the schema that I was talking about.

03:23.280 --> 03:26.480
And then you again have to add a description input schema.

03:26.520 --> 03:27.160
This is the thing.

03:27.200 --> 03:32.240
I mean, whatever that you have written in here as just as a parameter and return the value you need

03:32.240 --> 03:39.480
to write like a schema and a perfect structure, which the, uh, the server can understand or the large

03:39.480 --> 03:41.840
language model can understand perfectly.

03:41.840 --> 03:44.360
So you have to define all of these over here.

03:44.680 --> 03:50.880
Uh, and then you need to call this request handler, which is going to call the request.

03:50.920 --> 03:55.480
You need to write a switch case statement to perform every single tool call.

03:55.600 --> 03:57.040
This was really, really painful.

03:57.040 --> 04:02.160
And I did the same exact thing even with my, uh, playwright MCP server.

04:02.200 --> 04:05.520
If you can just go to the code base, just go to the source.

04:05.760 --> 04:09.400
Uh, and if you just go to the, uh, index over here.

04:09.440 --> 04:12.520
So this is the, the server that I have got.

04:12.560 --> 04:16.600
And this is where I define all this todo operation over there.

04:16.800 --> 04:24.680
And if I'm going to go to the tool handler over here, see, this is where all the tools are defined.

04:24.720 --> 04:26.560
Like how many tools that I have to create.

04:26.560 --> 04:28.480
All the tools are being defined over here.

04:28.520 --> 04:33.600
And do call a switch statement to perform all these operations.

04:33.880 --> 04:37.000
Uh, over here, for every single tool that I have got.

04:37.040 --> 04:39.840
See, the conditions just turned out to be a nightmare.

04:40.200 --> 04:45.760
Um, but if I would have wrote the same thing in the Python version, this code would have been way

04:45.760 --> 04:47.360
better and more simpler.

04:47.760 --> 04:49.920
Which is because of the fast MCP, right?

04:49.960 --> 04:55.720
I may turn this into node version pretty soon, but for now, see, this is the complexity.

04:55.760 --> 04:58.560
You have to go through the same line of code that you wrote.

04:58.600 --> 05:03.560
I don't know how many lines of code that we have wrote over here is just like 29, but if you do the

05:03.560 --> 05:08.840
exact same thing over here, you need to, you are going to end up with 143 lines.

05:09.800 --> 05:17.000
See, that's the power of the fast MCP versus the, uh, the node version that you have, right?

05:17.040 --> 05:20.880
I'm just bragging on Python more because I realized that this is pretty cool.

05:21.320 --> 05:21.600
Cool.

05:21.600 --> 05:26.680
So now that we have this server and we have the toolings, we also saw the differentiation between the

05:26.680 --> 05:29.320
node versus the Python version.

05:29.360 --> 05:30.800
Python being so simpler.

05:31.000 --> 05:37.200
In our next lecture, I will actually show you how you can now connect this simple calculator server

05:37.480 --> 05:41.320
with your client, which is the cloud desktop.


========================================================================================


WEBVTT

00:00.120 --> 00:00.560
All right.

00:00.560 --> 00:05.120
So now that we have two links we have the server it's going to be running if we invoke it.

00:05.120 --> 00:09.480
Now how do we actually configure this with our cloud desktop.

00:09.800 --> 00:13.080
As I told you within the cloud desktop just go back over here.

00:13.200 --> 00:14.920
You have got the settings.

00:14.960 --> 00:16.160
Just go to the settings.

00:16.160 --> 00:18.400
Over here you have got the developers.

00:18.440 --> 00:23.760
Go to the edit configurations and then go to any one of the editor that you have over here.

00:23.800 --> 00:27.040
We're going to be invoking the simple calculator that we have.

00:27.040 --> 00:31.080
So the way I'm going to do it is pretty much exactly the same, like how I did over here.

00:31.080 --> 00:35.800
I'm going to say simple calculator, something like this.

00:36.320 --> 00:38.840
Um, you can name whatever you want it to.

00:39.080 --> 00:39.720
Intelligent.

00:40.000 --> 00:42.000
It tells me that I need to do this.

00:42.040 --> 00:47.720
See, um, you basically need to pass in a command something like that.

00:47.760 --> 00:53.400
And the command is going to be Python, because you remember when you run this particular MCP server

00:53.440 --> 00:55.560
over here, you just said Python.

00:55.560 --> 01:00.480
And then simple calculator is exactly what we have to say over here as well.

01:00.480 --> 01:05.800
So I'm not really deploying this MCP server to any node package or whatsoever.

01:05.800 --> 01:12.370
So it's going to be very, very straightforward to call from your local machine uh MCP server.

01:12.410 --> 01:12.890
Right.

01:12.930 --> 01:16.650
So I'm going to say command is going to be Python three.

01:16.930 --> 01:20.410
And the argument is going to be the calculator.

01:20.410 --> 01:22.290
I don't know where it's getting the path from.

01:22.530 --> 01:25.930
Uh so I'm going to get the full path.

01:25.930 --> 01:36.010
So let's go put on hyper terminal um and copy into here okay.

01:36.050 --> 01:37.210
So we get the path.

01:37.250 --> 01:39.850
So I'm going to copy this particular path.

01:40.490 --> 01:41.770
Um I'm going to close this.

01:41.810 --> 01:42.690
We don't need it.

01:42.690 --> 01:47.050
And I'm going to go here and paste the path.

01:47.530 --> 01:47.730
Right.

01:47.730 --> 01:48.930
The simple calculator Pi.

01:48.970 --> 01:49.610
That's all.

01:50.050 --> 01:50.450
That's it.

01:50.450 --> 01:51.810
This is the installation part.

01:52.250 --> 01:54.890
Once we're done, I'm going to go to the cloud desktop.

01:54.890 --> 01:56.090
We need to restart this.

01:56.130 --> 01:59.890
If not, the settings are not going to be reflected and the server is not going to be visible over here

01:59.930 --> 02:00.930
I'm going to close this.

02:01.290 --> 02:04.410
And now I'm going to start our client which is the cloud desktop.

02:04.450 --> 02:10.050
The moment we start this cloud desktop will go and look for all the configured, uh, servers.

02:10.050 --> 02:13.090
And then it's going to invoke that for you behind the scene.

02:13.250 --> 02:15.450
Now it's already running it for you magic.

02:15.730 --> 02:21.050
If I'm going to go and click this knob, you see that we have got our simple calculator with four tools.

02:21.370 --> 02:25.590
Add numbers, subtract numbers, multiply numbers, and divide numbers.

02:25.910 --> 02:31.390
You have successfully written an MCP server congratulation, which is amazing.

02:31.870 --> 02:34.110
And now I can actually ask the questions over here.

02:34.110 --> 02:39.390
I'm going to say how to add or maybe what's the.

02:40.150 --> 02:41.390
I got so bad.

02:41.430 --> 02:46.350
What's the sum of 20 and 90?

02:46.790 --> 02:52.150
If I do that, you will notice that the cloud desktop is going to invoke our server, which is the ad

02:52.150 --> 02:56.750
server, the simple calculator, and it's going to call the tools add numbers.

02:57.270 --> 03:03.670
This is pretty much exactly the same way how we saw with the long chain, where the AI agent was invoking

03:03.670 --> 03:04.550
things for us.

03:04.590 --> 03:10.190
The same thing over here, we are doing it with the cloud, and the model we are using is not the local

03:10.190 --> 03:11.150
large language model.

03:11.150 --> 03:14.470
Rather we are using the cloud sonnet for right.

03:14.510 --> 03:15.910
So I'm going to say always hello.

03:15.910 --> 03:17.630
So it's going to go and do this thing.

03:17.630 --> 03:20.190
It's going to pass the request automatically.

03:20.190 --> 03:23.790
And then it's going to give the response as 110 which is amazing.

03:23.830 --> 03:37.010
Now I'm going to say I wanted to see the difference between us Um, between 100 or 1008, 90, something

03:37.010 --> 03:37.330
like that.

03:37.330 --> 03:39.610
So this is basically going to be a subtraction, right?

03:39.650 --> 03:42.890
So it should call the uh subtract tool.

03:42.890 --> 03:44.050
So look at that.

03:44.290 --> 03:47.250
So it's the number is coming up always a low.

03:47.490 --> 03:50.770
And it is going to basically perform the subtract operation.

03:50.770 --> 03:52.130
And it's going to give you the result.

03:52.810 --> 03:57.410
So so yeah this is basically the way things are going to work.

03:57.410 --> 04:02.650
So this is how you actually create an MCP server in such an easier fashion.

04:02.690 --> 04:04.490
And this is the power of MCP.

04:04.610 --> 04:08.810
And you've seen how tremendously easy it is to write an MCP server.

04:09.130 --> 04:12.690
If you have got all these concepts digested so far.

04:12.930 --> 04:18.490
Starting our next lecture, we are going to create a bit more complex code, which is basically going

04:18.530 --> 04:20.730
to be a file reader code.

04:20.730 --> 04:26.770
So we are going to see how we can read a file and probably get the details out from it.

04:26.770 --> 04:31.170
So you're going to be basically building a, uh, not really a file reader, to be honest, but it's

04:31.170 --> 04:36.170
going to be pretty much like a directory reader and getting the file informations for you and things

04:36.170 --> 04:36.730
of that nature.

04:36.730 --> 04:40.530
So you can do all of these, uh, using the fast MCP.

04:40.530 --> 04:43.730
And I'm going to do that in our next lecture of this course.


========================================================================================

WEBVTT

00:00.080 --> 00:00.640
All right.

00:00.680 --> 00:06.640
So now that we're going to go to an advanced part, basically we are going to see how we can read the

00:06.640 --> 00:07.040
file.

00:07.040 --> 00:13.440
So we're going to give an access to our external systems, which is the file systems to the large language

00:13.440 --> 00:15.920
model via model Context Protocol.

00:15.920 --> 00:19.440
So Model Context Protocol is going to go and access your local file systems.

00:19.440 --> 00:24.200
And that's going to be exposed by the tools like how we did in our earlier sections of this course.

00:24.680 --> 00:29.880
And then we are going to see how that can be fused with our server.

00:29.920 --> 00:30.400
Right.

00:30.440 --> 00:31.800
So we'll see how that can be done.

00:32.120 --> 00:34.640
So for that I'm going to write a simple tool.

00:34.680 --> 00:43.320
I'm going to say maybe for file system dot or file system reader whatever.

00:43.320 --> 00:48.360
I don't know what is the name that I can come up with, but I'm just going to give whatever just came

00:48.360 --> 00:49.440
up to my mind right now.

00:49.480 --> 00:53.760
I'm going to give that over here, and I'm going to start writing the code I'm going to because I'm

00:53.800 --> 00:55.760
working with the the file system.

00:55.760 --> 01:03.440
We need to have the OS, which is the operating system, and then the pathlib to work with the path

01:03.720 --> 01:04.240
class.

01:04.240 --> 01:09.970
And then I'm also going to have the MCP server, Her, uh, which is this one?

01:09.970 --> 01:12.170
And the fast MCP, of course.

01:12.570 --> 01:14.050
And this is going to be this class.

01:14.050 --> 01:14.410
Right.

01:14.450 --> 01:18.370
And then, uh, we're going to work with the fast MCP.

01:18.370 --> 01:22.610
So basically I'm going to create a name for the fast MCP server, which is going to be this one.

01:22.810 --> 01:25.170
And then we're going to start writing the Toolings over here.

01:25.450 --> 01:30.090
So the first thing which I'm going to do is I could I could see that the I is already writing code for

01:30.090 --> 01:33.330
me, which is amazing, but I'm going to just write a code over here.

01:33.330 --> 01:35.930
I'm going to say read file.

01:36.570 --> 01:36.890
Right.

01:36.930 --> 01:40.610
So I'm going to give the file name which is going to be an input.

01:40.610 --> 01:44.490
And over here I'm just going to say string.

01:44.930 --> 01:55.970
Uh, and this is basically going to be uh, read a file from the document, uh, or document or any

01:56.330 --> 01:58.090
given directory.

01:58.490 --> 01:59.130
Right.

01:59.130 --> 02:01.690
That's what this thing, this thing is going to do for me.

02:02.450 --> 02:03.050
Pretty cool.

02:03.370 --> 02:08.930
Uh, once we have this, then I'm going to start writing the actual logic for reading the file.

02:08.930 --> 02:13.290
So this is going to be the same logic that you can write in the Python where you're going to read the

02:13.290 --> 02:13.810
file.

02:13.810 --> 02:17.990
So see that this is the logic which this AI is already writing for me.

02:18.070 --> 02:22.030
So basically you need to have a file path.

02:22.110 --> 02:23.510
And then you can work from there.

02:23.510 --> 02:28.470
And because we are going to be working with, uh, some of the.

02:29.190 --> 02:34.110
Already configured directory, because we can't give the entire machine, uh, as the access.

02:34.150 --> 02:40.150
We can actually, uh, configure a specific directory where this MCP server can work with.

02:40.150 --> 02:40.910
So we can.

02:40.950 --> 02:42.750
Probably say a base directory.

02:43.190 --> 02:47.230
And over here I'm just going to give the base directory some access.

02:47.270 --> 02:48.710
Like some path over here.

02:48.710 --> 02:50.110
So I'm going to say get env.

02:50.310 --> 02:52.270
So I'm going to get the environment variable.

02:52.550 --> 02:58.990
Over here and I'm going to say file uh reader directory or whatever.

02:59.430 --> 03:00.070
Something like that.

03:00.070 --> 03:00.230
Right.

03:00.270 --> 03:06.230
So this is the directory which I wanted the MCP server to work with.

03:06.390 --> 03:08.230
If there is no such directory.

03:08.350 --> 03:14.310
Then probably you can, uh, instead of you throwing me an error, I can just, like, probably just,

03:14.350 --> 03:14.830
you know.

03:15.910 --> 03:18.390
Default to a documents directory or whatever.

03:18.830 --> 03:19.310
Right.

03:19.350 --> 03:20.590
So this is something I wanted to give.

03:20.630 --> 03:21.790
So this is the base directory.

03:21.790 --> 03:28.600
I'm going to pass it as an environment variable within my configuration over here in the cloud Desktop's

03:28.600 --> 03:29.360
configuration.

03:31.040 --> 03:35.320
So this will restrict the MCP server to access only specific directories.

03:35.680 --> 03:36.200
Right.

03:36.280 --> 03:41.000
So once we have this I'm then going to say okay file path over here.

03:41.520 --> 03:47.160
And I'm going to say is equal to base directory and the file name.

03:47.600 --> 03:50.840
This is going to be the file that is going to be reading through right.

03:51.200 --> 04:03.320
And I'm also going to say if not if the file is does not exist in the file path, then resolve it and

04:03.480 --> 04:12.680
starts with the string of the base directory dot resolve.

04:12.760 --> 04:19.000
Basically, I'm just trying to see how effectively I can get the the path there.

04:20.600 --> 04:21.120
Right.

04:21.320 --> 04:25.760
And then I'm going to say if none of things are really working, then I'm going to just say an error

04:25.760 --> 04:30.400
here saying the access is denied or something like that.

04:30.400 --> 04:32.020
So access denied.

04:33.100 --> 04:35.100
And it's an invalid path.

04:35.500 --> 04:36.300
Something like that.

04:36.780 --> 04:37.340
Right.

04:37.380 --> 04:40.740
So that's going to be the error that I'm going to be throwing over here.

04:40.820 --> 04:43.020
So if I find that particular file.

04:43.020 --> 04:44.980
So I'm just going to say get the content.

04:44.980 --> 04:50.380
So I'm going to say file path dot read text if it is a text file.

04:50.620 --> 04:59.060
And then I'm going to say encoding is equal to UTF of eight which is the standard text format.

04:59.060 --> 05:02.180
And then I'm going to return the file information.

05:02.220 --> 05:05.420
Probably I'm just going to do a bit of formatting over here.

05:05.420 --> 05:17.660
So I'm going to say file and the file name slash n and then slash n of the content which I'm reading

05:17.660 --> 05:19.460
through from the file.

05:19.500 --> 05:21.140
Just this one right.

05:22.020 --> 05:26.580
I'm putting everything in the try catch block so that even if there is any exception, it is going to

05:26.580 --> 05:28.740
be catching that for me.

05:29.180 --> 05:34.300
And I'm going to say because this is the exception, which is going to be cards I'm going to accept

05:34.460 --> 05:42.110
as E and I'm going to return Turn that maybe error reading the file or something like that.

05:42.150 --> 05:47.550
So if error reading the given file, whatever.

05:50.030 --> 05:50.470
Cool.

05:50.670 --> 05:55.030
So that's the first tool that I have built that is the uh, the tool which is going to read the file

05:55.030 --> 05:55.590
for me.

05:56.270 --> 05:59.990
And the next one I'm going to write is going to be, uh, listing the file.

05:59.990 --> 06:04.910
So I'm not really going to write that code because obviously it's something I have already done before.

06:04.910 --> 06:06.710
So I'm going to go and paste that code over here.

06:06.710 --> 06:08.150
So it's going to be the listing, the file.

06:08.150 --> 06:09.950
So this is the reading the file.

06:09.950 --> 06:11.830
This is going to be the listing the files.

06:11.870 --> 06:13.910
Uh and it's going to list the files for me.

06:13.910 --> 06:16.270
It's going to say list files in the directory.

06:16.310 --> 06:20.750
I'm going to go through all the files in the directory and get those details for me over here.

06:21.110 --> 06:22.590
So we have got two tools.

06:23.110 --> 06:25.750
And we have the server being defined.

06:25.790 --> 06:31.350
The last operation which we have to do is we are going to run the MCP server, which I'm going to do

06:31.350 --> 06:32.830
it in our next lecture.

06:32.830 --> 06:38.270
But if you have already seen all the earlier videos, then you know what to do.

06:38.310 --> 06:42.550
See the the I is already telling me what I have to do, so just keep writing it.

06:42.590 --> 06:44.630
Try to run this yourself and see how it goes.

06:44.630 --> 06:47.110
If not, we're going to be doing that in our next lecture.


========================================================================================


WEBVTT

00:00.120 --> 00:05.840
All right, so the last operation I was talking about is going to be the invocation, right?

00:05.880 --> 00:16.720
So we just have to do, uh, if, uh, sorry, if the, uh, name is equal to, which is this one,

00:17.320 --> 00:26.560
if it is equal to main, something like that, then you need to start the, uh, MCP server, the file

00:26.600 --> 00:27.400
system reader.

00:27.400 --> 00:27.680
Right.

00:27.720 --> 00:29.320
Which is going to be doing this one.

00:29.600 --> 00:36.320
Uh, we can also if the directory doesn't exist, uh, what if it has to fall back to this documents

00:36.320 --> 00:36.960
directory?

00:37.240 --> 00:38.840
Um, I've faced this before.

00:38.960 --> 00:42.520
So that's the reason why what I'm going to do it is I'm just going to create a directory.

00:42.520 --> 00:44.760
So I'm going to say directory dot directory.

00:45.160 --> 00:53.520
And I'm going to say parent uh is equal to true and exists okay is equal to true as well.

00:53.560 --> 01:00.360
Just to just in case if the folder doesn't exist, the documents folder go and create one, right?

01:00.400 --> 01:02.480
If not, this is going to throw me an exception as well.

01:02.880 --> 01:05.730
Now we have the the server entirely ready.

01:05.770 --> 01:12.810
We have to just see how we can run this server, configure it, and then run it within our cloud desktop.

01:12.810 --> 01:13.930
That's what we have to do.

01:13.970 --> 01:19.330
So in order to do that I'm going to go back to our configuration in our cloud desktop over here.

01:19.810 --> 01:27.810
And I'm going to say uh file reader MCP server which is this one.

01:28.210 --> 01:32.170
And it is just thinking that's the name that I have given, but it's not apparently.

01:32.810 --> 01:36.730
Uh, copy the file name, paste it over here.

01:36.930 --> 01:45.570
It all looks pretty similar, but we also need to pass the env, if you remember right.

01:45.610 --> 01:47.210
That's something I have to give as well.

01:47.210 --> 01:53.570
So I'll say env over here and the file reader directory.

01:53.570 --> 01:54.850
So this is this one right.

01:54.890 --> 01:59.770
The file directory is going to be any one of the directory that I want to work with.

02:00.010 --> 02:03.170
So I can give whatever directory I think this is fine.

02:03.170 --> 02:10.100
I want to restrict myself with one of the employee app that I have built the front end application,

02:10.100 --> 02:12.660
so I'm just going to restrict myself with that particular directory.

02:12.660 --> 02:15.220
So this is the place where I have to configure it.

02:15.260 --> 02:20.820
See the same command remains same arguments remains, which is the path of the file system reader which

02:20.820 --> 02:21.580
is the server.

02:21.940 --> 02:27.060
And then the env is going to be the location where I have to restrict my MCP server to read through.

02:27.060 --> 02:32.820
So not the entire machine is open for the MCP server, but that could be one of the question which students

02:32.860 --> 02:33.180
asked me.

02:33.220 --> 02:39.140
Like Karthik, if we keep giving everything to large language model, isn't it a security hole that

02:39.140 --> 02:44.300
you're going to be exposing to your machines because you're just exposing everything to the server?

02:44.340 --> 02:46.620
Well guess what, that's what this MCP servers are.

02:46.660 --> 02:47.940
They are very protected.

02:48.060 --> 02:52.820
They have told blah blah blah reasons that they are secure and they're all operating within our own

02:52.820 --> 02:53.660
local machine.

02:53.660 --> 02:56.500
They aren't sending any data to the server, I believe.

02:56.500 --> 02:59.220
So, uh, which means it is safe, right?

03:00.140 --> 03:05.420
So I'm going to save this one and I'm going to go to the cloud desktop, close this guy, and I'm going

03:05.460 --> 03:07.660
to open the cloud desktop one more time.

03:07.980 --> 03:10.630
The moment I open it, you know what is going to happen in the background.

03:10.630 --> 03:16.550
It's going to go and invoke the other MCP servers, which is our file reader.

03:17.030 --> 03:17.750
Look at that.

03:17.790 --> 03:20.070
We have the read files list files.

03:20.430 --> 03:21.150
Amazing.

03:21.150 --> 03:26.830
So these two tools are also there, which means I can now interact with the client which is the cloud

03:26.830 --> 03:32.710
desktop, to see if I can able to get the details I'm looking for, I'm going to say what are the files

03:32.710 --> 03:35.150
available in my directory.

03:35.270 --> 03:42.510
So this is something that is going to be invoking the file reader tool or the server that you have.

03:42.550 --> 03:46.830
And this is going to go and call the List Files tool over there.

03:47.110 --> 03:50.790
And it's going to give you all the details in this particular folder.

03:51.310 --> 03:52.310
Look at that.

03:52.350 --> 03:54.350
It's going to get you all these information.

03:54.390 --> 03:55.030
Amazing.

03:55.350 --> 03:59.910
And I'm going to say what are the folders exist.

04:00.150 --> 04:02.470
So basically this is going to be a list of folders.

04:02.710 --> 04:05.110
Uh and also list the files.

04:05.110 --> 04:05.790
So look at that.

04:05.790 --> 04:07.750
Now it's going to say read the files.

04:07.950 --> 04:09.190
Uh invoke that.

04:09.710 --> 04:12.430
Then it's going to get all the file information.

04:12.760 --> 04:16.040
and then it's going to get those informations for you.

04:16.040 --> 04:21.120
So this source folder distribution folder node module folders public folders and components folder.

04:21.320 --> 04:25.120
So if I want to read any of the file hopefully it reads as well I don't know.

04:25.160 --> 04:28.200
But I want to see what's the content of index.html.

04:28.200 --> 04:28.880
What do you think.

04:29.320 --> 04:33.240
So I'm going to say what's the content of the index.html file.

04:33.240 --> 04:36.520
And if I hit enter we'll see what's going to basically happen.

04:36.520 --> 04:40.960
So this should go and read the file index.html for me on the particular directory.

04:41.320 --> 04:43.760
And it's going to start giving me the details over here.

04:43.800 --> 04:44.640
Look at that.

04:44.640 --> 04:45.920
So amazing.

04:45.920 --> 04:53.560
So you have already written and MCP server which can do calculations like simple addition subtraction

04:53.600 --> 04:57.520
bit more complex, which is going to basically read through your external file systems.

04:57.840 --> 05:05.680
This is the power of how you can write and tooling supports for your AI agent or your large language

05:05.680 --> 05:08.040
model to perform all these operations.

05:08.040 --> 05:16.280
This is exactly what's been done by many of the major companies today while they build the servers.


========================================================================================



