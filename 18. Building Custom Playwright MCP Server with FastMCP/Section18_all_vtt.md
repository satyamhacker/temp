WEBVTT

00:00.360 --> 00:02.120
Welcome to the next section of our course.

00:02.120 --> 00:08.440
And in this section we are going to talk about how we can build our own playwright MCP server using

00:08.440 --> 00:14.000
fast MCP that we have been talking about from our last section of this course.

00:14.400 --> 00:20.720
So you can see that this is the Playwright Model Contest protocol server that I have built and is also

00:20.720 --> 00:22.600
available in GitHub.

00:22.800 --> 00:29.080
And you can see that there are totally 4500 stars and people are really contributing it, and it's pretty

00:29.080 --> 00:29.400
good.

00:29.400 --> 00:35.640
It's pretty amazing that how everything is spanning out and people are really using, which is amazing.

00:35.920 --> 00:40.720
But this MCP server actually is written using Node.js.

00:41.120 --> 00:43.720
Like how I told you in our last section of this course.

00:43.760 --> 00:45.480
So just go to the source over here.

00:45.480 --> 00:49.040
You can see that it has got a lot of different toolings over here.

00:49.160 --> 00:50.360
It supports API.

00:50.760 --> 00:53.120
It also supports browser automation.

00:53.160 --> 00:54.960
It supports code generations.

00:54.960 --> 00:57.600
It also has got some common utilities and things right.

00:57.640 --> 00:59.570
So these are things that we have over here.

00:59.570 --> 01:04.370
It also has got some tests for every single tool just fine.

01:04.370 --> 01:06.850
And then we also have got evals and things right.

01:06.890 --> 01:11.930
So these are the things that you have to do while you build an application, which is going to be used

01:11.930 --> 01:13.130
by a wider community.

01:13.130 --> 01:17.730
But don't you worry about all of these, at least in this particular section, we're going to see how

01:17.730 --> 01:24.370
we can build a very lightweight MCP server, and then we can get rid of these kind of MCP servers,

01:24.570 --> 01:30.010
because this way you can create your own MCP server and start using it.

01:30.010 --> 01:34.810
You may ask Karthik, this MCP server is fine and we can build our own MCP server.

01:34.850 --> 01:35.210
What?

01:35.210 --> 01:36.490
But what difference does it make?

01:36.930 --> 01:37.690
Make sense?

01:37.930 --> 01:42.050
It's not going to make any much of a difference because people are already holding this kind of tool.

01:42.050 --> 01:47.010
That's the reason why you are just going to use the existing MCP servers as much as possible.

01:47.010 --> 01:52.490
But if you are gonna build something similar to this kind of operation, like MCP server with playwright,

01:52.530 --> 01:59.550
maybe in selenium tomorrow, today or tomorrow and then Cypress or WebDriver, IO and all these toolings

01:59.550 --> 02:01.270
that you can keep on building yourself.

02:01.430 --> 02:08.070
That way you will get a hands on ability of how you can build your own systems for testing as well as

02:08.070 --> 02:09.430
for development purpose.

02:09.430 --> 02:11.790
This is something which the test engineers all the time.

02:11.790 --> 02:17.150
We use it because we know that playwright is not the most popular tools which people really use it,

02:17.150 --> 02:22.110
and playwright by itself has got their own MCP servers, which is written by Microsoft.

02:22.150 --> 02:27.750
It is very, very popular because it is built by Microsoft and playwright itself is built by Microsoft,

02:27.750 --> 02:32.230
and now it is fused along with the GitHub coding agents automatically.

02:32.230 --> 02:35.510
And you can use this MCP server to do a lot of different operation.

02:35.550 --> 02:43.070
They also have got this and it is also built using node version, like how I have built in my playwright

02:43.070 --> 02:45.310
MCP server as well.

02:45.310 --> 02:51.670
As that said, we are going to see how we can build all of these in this particular section from complete

02:51.670 --> 02:56.990
ground up using fast MCP and you will understand and realize how amazing they are.


========================================================================================

WEBVTT

00:00.040 --> 00:00.360
All right.

00:00.400 --> 00:04.440
So now that we are going to start writing the code for the playwright MCP server.

00:04.600 --> 00:09.400
So before we start beginning with the playwright MCP server, the first concept that we need to understand

00:09.440 --> 00:15.520
the playwright itself is if you have ever worked with playwright before, if you're a developer, and

00:15.520 --> 00:18.200
if you are wanting to see what exactly is this playwright?

00:18.240 --> 00:19.640
Playwright is very, very simple.

00:19.680 --> 00:23.240
So just go to the playwright.dev website.

00:23.800 --> 00:27.960
This is like the official website of the playwright I'm talking about over here.

00:28.200 --> 00:33.040
And if you go to the Python version, for example, because we're going to be using Python, and then

00:33.040 --> 00:37.240
if you just go to the documentation, the installation part is very straightforward.

00:37.280 --> 00:42.880
This is the Python install we remember we already did that in our earlier sections of this course.

00:43.280 --> 00:50.600
And in order to run this playwright uh with the python you have to write the test.

00:50.640 --> 00:56.200
So if you just go to the write test over here, you can see that there is this option called as playwright

00:56.240 --> 00:57.160
async API.

00:57.520 --> 01:01.780
We'll be working with the playwright async, then you can use the playwright async API.

01:01.820 --> 01:04.500
We're going to be using the async API for this demonstration.

01:05.060 --> 01:10.580
And for every playwright it comes up with the page a browser.

01:10.860 --> 01:13.980
Um, and also it has got a lot of different capabilities.

01:13.980 --> 01:18.940
So browser is like the, this kind of browser, the entire browser, and the page is the one that you're

01:18.940 --> 01:19.740
seeing over here.

01:19.740 --> 01:24.540
Inside that within the page you can perform all the operations like you can get by roles.

01:24.940 --> 01:31.940
You can perform a click operation, uh, and then you can perform an hover fill focus, press set input

01:31.940 --> 01:33.460
files, select options.

01:33.460 --> 01:40.380
So you can do a lot of different operation with the page uh element which is this page dot this element.

01:40.380 --> 01:41.940
And this is going to return you the locators.

01:41.940 --> 01:43.020
And then the locator.

01:43.020 --> 01:44.660
You can perform all these operation.

01:44.860 --> 01:45.380
Right.

01:45.420 --> 01:48.020
So that's how uh in playwright things works.

01:48.020 --> 01:55.340
So basically in order for you to work with a playwright, you need to have a playwright instance.

01:55.340 --> 02:00.440
You also need to have a browser invocation instance, you need to have a page instance in order to work

02:00.440 --> 02:07.640
with the page, and then you perform the operation on the element or the locators with the click or

02:07.680 --> 02:10.400
send or drag and drop operation.

02:10.400 --> 02:14.200
Because in a page we always do, uh, do this right.

02:14.240 --> 02:15.480
We go and click that operation.

02:15.480 --> 02:18.240
We also go and do the typing operation over here.

02:18.560 --> 02:21.560
And then we get the element out from the page to see how things work.

02:21.560 --> 02:25.640
So all of these things we are going to be basically doing with our toolings capability that we're going

02:25.640 --> 02:26.400
to be writing.

02:26.400 --> 02:28.920
So we're going to see how we can write some tools.

02:28.960 --> 02:29.440
Right.

02:29.480 --> 02:36.880
So the first thing which we're going to do for building our playwright MCP server with Python is name

02:36.880 --> 02:41.880
it, of course, playwright MCP Dot Pi.

02:43.400 --> 02:45.400
And we're going to write the MCP server.

02:45.400 --> 02:50.320
So again this is going to look pretty much exactly similar to what we have over here.

02:50.320 --> 02:53.160
I'm going to go copy paste that over here.

02:53.600 --> 03:02.420
Uh we are going to probably not use the OS, I think, but we are going to use the path and then we

03:02.420 --> 03:05.820
are also going to import a couple of things.

03:05.820 --> 03:13.060
So we're going to import probably the async IO because this playwright itself is async server.

03:13.060 --> 03:15.140
So we're going to use the async operation.

03:15.420 --> 03:16.900
So it's just pretty cool.

03:17.300 --> 03:22.100
And then we also are going to import the base64 which is required.

03:22.100 --> 03:23.860
And I will tell you when it is required.

03:23.860 --> 03:27.660
And then we also need to have a playwright.

03:27.660 --> 03:30.180
So this is this is something that we're going to write right.

03:30.460 --> 03:33.900
And we're going to use the async API, not the sync API.

03:33.940 --> 03:36.340
Like how there was a demonstration in the documentation.

03:37.460 --> 03:43.500
And I'm going to import uh from the async playwright.

03:43.540 --> 03:48.020
We're also going to import uh, what is called as browser.

03:48.060 --> 03:49.380
See that this is important.

03:49.420 --> 03:50.900
I'm going to get the browser.

03:50.900 --> 03:55.160
If I just do control space it's going to show all the different classes we have.

03:55.600 --> 03:58.240
I also need the page because we're going to work with the page.

03:58.240 --> 04:04.480
But if you're going to extend this library to do some other operations like dialogues and downloads

04:04.480 --> 04:10.440
and browser context API testing that you want to be extending this with, you can also call this API

04:10.440 --> 04:11.040
request.

04:11.400 --> 04:12.560
I'm not going to go that far.

04:12.560 --> 04:17.400
I'm not going to really build a complete tool which I have already built, which is available in the

04:17.720 --> 04:22.000
GitHub repository, but I'm just going to leave that as it is, right?

04:22.400 --> 04:22.800
Um.

04:22.960 --> 04:23.600
Pretty cool.

04:24.120 --> 04:28.960
And now once we have all of these, I'm then going to create our MVP server.

04:28.960 --> 04:31.560
You know that how it's going to be easier right.

04:31.600 --> 04:33.120
MCP fast MVP.

04:33.680 --> 04:43.120
And I'm going to say playwright uh MCP server right.

04:43.280 --> 04:43.960
That's the thing.

04:44.360 --> 04:44.840
Cool.

04:45.240 --> 04:46.360
We have defined it.

04:46.840 --> 04:49.040
And then we're going to start this MCP server.

04:49.080 --> 04:50.480
Obviously you know how to do that.

04:50.910 --> 04:54.870
But we need to define the toolings over here.

04:55.230 --> 04:57.630
The tool is going to be to.

04:58.670 --> 05:03.110
The first thing is that you open the browser, which is this kind of browser.

05:03.150 --> 05:05.950
We not to perform any operation on the UI to open the browser.

05:06.350 --> 05:14.390
And then you need to enter the URL which is basically a navigate operation in playwright.

05:14.430 --> 05:22.390
So if you're just going to navigate over here you see that you just do page dot go to operation to navigate

05:22.390 --> 05:24.390
to that particular page.

05:24.590 --> 05:29.510
But we need to get the page instance in order to perform this operation.

05:29.550 --> 05:35.070
For doing that in playwright you need to do use some playwright code to do that operation.

05:35.070 --> 05:44.670
So you need to call the start method of the async playwright that you have got, which is this playwright

05:44.670 --> 05:45.430
class file.

05:45.790 --> 05:50.570
And then you can launch the browser which is chromium browser in our case.

05:50.690 --> 05:52.010
And then you create a new page.

05:52.010 --> 05:54.330
That's when you get the instance of this particular page.

05:54.370 --> 05:59.010
I know it's a lot of thing to digest, but yeah, that's the first thing that we need to set up.

05:59.170 --> 06:02.370
So for that I'm going to first create a simple method.

06:02.370 --> 06:05.690
I'm going to call this as a private method to be handled.

06:05.690 --> 06:13.330
So I'm going to say underscore uh ensure uh maybe ensure browser not ensure playwright but ensure browser

06:14.290 --> 06:15.290
write this method.

06:15.650 --> 06:18.330
So I'm going to say it's writing everything for me automatically.

06:18.330 --> 06:19.050
Look at that.

06:19.250 --> 06:20.090
It's magic.

06:20.810 --> 06:29.530
Um but now what I'm going to I'm going to say ensure the browser and page are initialized.

06:30.690 --> 06:33.450
This is what this particular method is basically going to do.

06:33.970 --> 06:46.730
And over here, um, I'm going to set the global variables of browser page and the playwright instance

06:46.730 --> 06:47.530
over here.

06:47.710 --> 06:55.150
And because I'm going to set this to the global over here, I also need to define this outside like

06:55.190 --> 06:59.550
browser as the browser, which is going to be none.

07:00.110 --> 07:01.350
I'll just set it up.

07:01.390 --> 07:02.910
Similarly, the page I have to set it.

07:02.910 --> 07:09.070
So I'm going to say page as the page which is equal to none as well.

07:10.310 --> 07:16.430
And I need to set the playwright instance uh is equal to none right.

07:16.470 --> 07:17.830
I have to set all of these.

07:17.870 --> 07:19.270
This is very important.

07:21.190 --> 07:24.350
And once I set this now I can set all the values to it.

07:24.350 --> 07:29.430
So I'm going to say if for the first time maybe what if the browser is already open.

07:29.430 --> 07:31.870
So you need to verify if the browser is not none.

07:32.350 --> 07:32.550
Right.

07:32.590 --> 07:34.510
So if the browser is none.

07:34.510 --> 07:37.190
So if it is none, which means it is not initialized.

07:37.630 --> 07:41.350
And if the page is none, which means the page itself is not initialized.

07:41.350 --> 07:46.810
So if both of these are not initialized, which means it is a new instance we're trying to work with.

07:47.250 --> 07:53.170
So I'm going to call the playwright instance is equal to await of the await playwright dot start.

07:53.450 --> 07:55.730
Thanks to I Wrote things for me.

07:56.050 --> 08:02.890
And then we need to set the browser over here which is going to be await playwright instance, which

08:02.890 --> 08:08.650
is this one that we are creating dot chromium dot launch and headless as I'm going to set this to false

08:08.650 --> 08:10.850
because I want the browser to be displayed.

08:11.490 --> 08:15.130
And then I'm going to set the page equal to await browser.

08:15.170 --> 08:15.810
New page.

08:16.130 --> 08:16.770
Amazing.

08:17.050 --> 08:17.610
That's it.

08:17.890 --> 08:24.810
This is going to ensure if the browser is opened or not, if the page is initialized or not.

08:24.850 --> 08:30.210
And then if there is nothing then it's going to go and create a new page and new browser for me.

08:30.250 --> 08:33.170
So this is the place where the browsers are going to be launched for us.

08:33.530 --> 08:37.850
This is the first non tooling method that I have to write.

08:37.890 --> 08:43.290
And once we have this we can then use this method in all the toolings that we are going to be building

08:43.290 --> 08:44.810
in our next lecture of this course.


========================================================================================


WEBVTT

00:00.120 --> 00:06.440
All right, so now that we have completed writing our ensure browser method in our last lecture, but

00:06.440 --> 00:13.480
now we are going to see how we can build our first two links for our playwright MCP server that we are

00:13.480 --> 00:15.520
starting to build from our last lecture.

00:15.520 --> 00:22.680
So the first thing which we have to do is to write a method which is going to perform a navigation operation.

00:22.680 --> 00:31.680
So basically, as we talked in our last lecture, we have to navigate to a page before we actually perform

00:31.680 --> 00:32.680
any operation.

00:32.680 --> 00:39.360
So basically we need to just go to a page uh, and from by opening a browser.

00:39.360 --> 00:41.600
And then we need to navigate to that particular page.

00:41.800 --> 00:47.680
And then we can perform a click operation or fill operation on any control after the locator is been

00:47.680 --> 00:48.160
found.

00:48.160 --> 00:51.160
And then we perform any of the operation that we are looking for.

00:51.200 --> 00:51.600
Right.

00:51.640 --> 00:58.680
So in order to do all of these operation, we need to have the tooling capabilities to our MCP server.

00:58.680 --> 01:00.720
If not, that operation is never going to happen.

01:00.720 --> 01:04.040
So we have already seen that in our earlier sections of this course.

01:04.040 --> 01:06.790
It's that's exactly what we're going to be doing over here as well.

01:06.790 --> 01:11.470
So the first tool that I'm going to build right now is going to be the navigate tool.

01:11.470 --> 01:15.030
But before I actually do that I'm going to first write it as a method.

01:15.030 --> 01:15.550
Right.

01:15.590 --> 01:20.750
So this is exactly the same way like how we did even in our earlier sections of this course.

01:20.990 --> 01:23.590
Uh, first of all, we always write a method.

01:23.590 --> 01:28.390
And then from the method we just decorate that method as a tool.

01:28.430 --> 01:28.710
Right.

01:28.710 --> 01:31.430
That's exactly what I'm going to be doing over here as well.

01:31.430 --> 01:33.470
So I'm going to say navigate.

01:33.790 --> 01:37.710
And this is going to be the URL which I'm going to be giving in.

01:37.710 --> 01:41.430
And I'm going to return something out after this method has been doing right.

01:41.590 --> 01:44.190
So I'm going to say navigate to the URL.

01:44.190 --> 01:46.190
And uh yeah.

01:46.230 --> 01:52.950
Just going to say navigate to the URL to the given URL, the given URL, something like that.

01:52.950 --> 01:55.590
This is what I wanted to really do over here.

01:55.950 --> 02:03.990
And in order for me to navigate over here I'm going to say await underscore ensure browser.

02:03.990 --> 02:08.430
So this is going to be the first thing which I need to call every single time.

02:08.430 --> 02:15.830
The reason why I need to do it is because I need to have the browser instance like the playwright instance,

02:15.830 --> 02:18.950
the browser instance, and the page instance in first place.

02:19.190 --> 02:23.110
If I don't have these, then it is not really going to work, right?

02:23.150 --> 02:25.870
Because it's going to be giving us null pointer exception.

02:25.870 --> 02:29.950
So we have to ensure that the objects are being set.

02:30.750 --> 02:37.070
That's the reason why this is the first and most important tool that needs to be invoked for the first

02:37.070 --> 02:37.510
time.

02:37.710 --> 02:45.030
And once we have this, I'm then going to say, uh, wait, uh, over here, uh, and I'm going to say

02:45.390 --> 02:46.430
this page.

02:46.750 --> 02:51.430
See this page, uh, in playwright, if you have already worked in playwright, you know what I really

02:51.430 --> 02:52.230
mean about that.

02:52.230 --> 02:56.510
So in order to navigate, you need to use the go to method.

02:56.550 --> 02:58.310
See that this method just comes in.

02:58.310 --> 02:58.910
Right.

02:58.910 --> 03:03.350
So in this method I need to pass the URL that I'm going to navigate.

03:03.350 --> 03:04.550
So I'm going to say URL.

03:05.510 --> 03:08.710
And if you want to also have a waiting mechanism you can also do that.

03:08.710 --> 03:14.460
So you can just say wait until is equal to a Dom content loaded, right?

03:14.460 --> 03:19.620
You can also do that over here just to ensure that the the weighting is already happening there or not.

03:19.660 --> 03:20.020
Right.

03:20.060 --> 03:21.740
That is an additional thing that you can do.

03:21.980 --> 03:28.580
And one more additional thing that you can do it is you can give a feedback loop to the to the user

03:28.580 --> 03:33.660
in the cloud desktop to say that you have navigated to this particular page so you can get the title

03:33.820 --> 03:36.180
and then you can return that information as well.

03:36.180 --> 03:39.900
So I'm going to say return, and I'm just going to do a bit of a formatting.

03:39.940 --> 03:43.260
I'm going to say navigating or navigated.

03:45.740 --> 03:54.780
To and I'm going to say the URL uh, and a page title, which is going to be.

03:57.020 --> 03:58.420
This title for that matter.

03:59.420 --> 03:59.860
Right.

03:59.900 --> 04:06.140
So that's what I'm going to be returning back to the, uh, to the client, which is the cloud desktop

04:06.140 --> 04:06.740
over here.

04:07.020 --> 04:10.260
And we can also actually add a try catch block as well.

04:10.260 --> 04:15.700
So I'm just going to say try uh over here, uh, and let's try.

04:16.380 --> 04:19.780
I'm just going to do an indentation because this this is Python.

04:19.940 --> 04:22.420
So everything is indentation over here.

04:22.780 --> 04:28.300
And I'm going to say exception as E over here.

04:28.700 --> 04:31.340
And I'm going to say error navigating to the URL.

04:31.740 --> 04:33.300
Yeah I like this code right.

04:33.340 --> 04:35.620
So this is going to be the navigate method that we have.

04:35.660 --> 04:41.540
And now you may ask Karthik how can I actually decorate this method as a tool.

04:41.700 --> 04:42.740
Well guess what.

04:42.780 --> 04:43.860
It's so easy.

04:43.900 --> 04:47.740
Remember in our earlier sections of this course when we were talking about the link chain, in order

04:47.740 --> 04:51.540
to make a method as a tool, we use the tool method.

04:51.540 --> 04:55.420
In order to do the decoration over here we have to use.

04:55.460 --> 05:01.260
At MCP dot there is something called as tool method.

05:01.260 --> 05:01.820
That's all.

05:01.820 --> 05:03.740
This is the only thing that we have to do.

05:03.860 --> 05:12.100
The moment you do this, this method will now turns out to be a tool of your AI agent that you are building,

05:12.740 --> 05:14.460
which is mind blowing, right?

05:14.660 --> 05:19.730
That is the first thing that we have to do in order to make this as a tooling and the same way, a similar

05:19.730 --> 05:20.090
way.

05:20.130 --> 05:26.450
I'm going to write one more capability this time, which is going to be uh, maybe the click operation.

05:26.450 --> 05:27.610
So I'm going to say copy.

05:27.610 --> 05:28.850
I don't know what I just did.

05:29.090 --> 05:29.770
Clear.

05:30.050 --> 05:36.810
And over here I'm just going to say copy paste and the next tool which I'm going to build this this

05:36.810 --> 05:38.690
time is going to be the click operation.

05:38.690 --> 05:39.810
So I'm going to say click.

05:40.210 --> 05:43.970
And for the click we are not going to pass the URL.

05:44.170 --> 05:49.210
Rather we're going to use the selector to perform any of the operations.

05:49.210 --> 05:50.490
So I'll just say string.

05:50.890 --> 06:03.250
And over here I'm going to say click an element on the page probably click and element on the page.

06:04.010 --> 06:06.890
Uh and in order to do the click operation I'm just going to say click.

06:08.170 --> 06:10.210
We don't need the URL, blah blah blah.

06:10.450 --> 06:14.210
Rather just the selector over here I need to pass in.

06:14.650 --> 06:19.130
Um, and we don't need the title as well I'm going to say.

06:21.250 --> 06:29.770
Clicked the element and I can just give the element which is nothing but the vector.

06:30.250 --> 06:32.770
I'll get rid of these from here.

06:33.050 --> 06:38.050
And if there is any exception happen I can say error clicking uh element.

06:38.890 --> 06:40.930
And then I'm going to just say select R.

06:41.170 --> 06:45.730
And then I can also say E for the exceptions if that happens any.

06:46.210 --> 06:46.850
Right.

06:46.890 --> 06:47.970
So this is pretty cool.

06:48.490 --> 06:55.130
So this is how you can actually build these two tools over here which is amazing.

06:55.330 --> 07:01.970
The last thing which I wanted to do it is to call these, uh, these, uh, toolings capabilities.

07:02.010 --> 07:02.530
Right.

07:02.570 --> 07:13.050
So the way I can do it is I just need to, uh, put this if underscore name is equal to, uh, main,

07:14.850 --> 07:15.770
something like that.

07:16.130 --> 07:20.050
If it is going to be main, then I'm going to write a try catch block over here.

07:20.090 --> 07:21.650
I'm going to say MCP run.

07:22.130 --> 07:23.960
And on the Like.

07:24.200 --> 07:27.240
Finally, I'm also going to do a bit of a clean up.

07:27.240 --> 07:27.920
This time.

07:28.040 --> 07:37.280
I'm going to say if the browser, uh, which is going to be running already, just do a close for me

07:37.280 --> 07:38.000
over here.

07:38.240 --> 07:47.120
And if there is this, uh, playwright, uh, instance which is open as well, then try to stop it as

07:47.120 --> 07:47.840
well for me.

07:47.880 --> 07:57.920
And once you have done that, uh, you can just print that the, uh, playwright MCP server is running

07:58.480 --> 08:01.440
and resources are cleaned up.

08:01.480 --> 08:02.000
Right.

08:02.000 --> 08:04.720
So this is what we have to do over here.

08:05.040 --> 08:05.640
That's it.

08:06.000 --> 08:14.600
So this way we are going to have two tools this time, which are going to perform the navigation operation

08:14.600 --> 08:16.520
and click operation for me.

08:16.800 --> 08:24.400
Uh, and then if we call this entire uh code right now, this is just going to work, I'll quickly show

08:24.400 --> 08:28.760
you how this is going to work in our next lecture.


========================================================================================


WEBVTT

00:00.120 --> 00:01.160
All right.

00:01.160 --> 00:07.840
It's now time for us to run this whole magical tool that we have written, the playwright MCP server,

00:07.840 --> 00:11.640
and we'll see how we can able to access it from the cloud desktop.

00:11.760 --> 00:16.680
So in order to do that, I'm going to go to the configurations that we have been making over here.

00:18.280 --> 00:21.320
And we're going to write the playwright MCP server.

00:21.360 --> 00:24.200
So playwright MCP server, which is great.

00:24.600 --> 00:29.360
Uh and then I'm going to add the command as Python.

00:29.360 --> 00:31.880
And the argument is going to be MCP agent.

00:32.440 --> 00:37.160
Ah, it's very intelligent to say that it automatically pastes the paths and everything, which is pretty

00:37.160 --> 00:37.520
good.

00:37.920 --> 00:41.440
Uh, we don't have any MCP URL at the moment, just.

00:41.840 --> 00:42.240
Okay.

00:42.800 --> 00:44.280
Uh, and you know what?

00:44.280 --> 00:50.200
I'm going to get rid of our existing playwright MCP server over here because this is from the MCP server,

00:50.200 --> 00:52.320
so I don't want to clash both of them.

00:52.520 --> 00:54.200
So I'm going to get rid of one of them.

00:54.360 --> 00:57.960
So I'm going to use our playwright MCP server this time.

00:58.360 --> 00:58.960
Right.

00:59.030 --> 01:01.150
So we need to see how that works.

01:01.150 --> 01:03.110
So I'm going to open the cloud desktop.

01:03.510 --> 01:10.590
And if I go to the knob over here you should see the playwright MCP server which is great.

01:10.590 --> 01:12.150
And it only has two tools.

01:12.190 --> 01:14.510
Look at that the navigate tool and the click tool.

01:14.510 --> 01:16.270
So it only performs two operation.

01:16.430 --> 01:19.710
So if you say anything beyond that I don't think this will work.

01:19.750 --> 01:20.110
Right.

01:20.110 --> 01:21.470
So we'll see how that works really.

01:21.510 --> 01:26.310
So I'm going to say I want it to uh login.

01:28.470 --> 01:39.710
Navigate to E maybe http colon double slash e.sammy.com and click the login link.

01:40.070 --> 01:45.150
And uh enter username and password.

01:45.190 --> 01:51.350
See the entry of the username and password is not going to work because we have not performed a send

01:51.430 --> 01:53.310
or maybe like a fill operation.

01:53.310 --> 01:55.390
So we have got the fill operation over here.

01:55.390 --> 01:55.630
Right.

01:55.630 --> 02:01.180
We have not even written that uh, that tool yet, but I'm just asking, like over asking it.

02:01.340 --> 02:05.860
And I wanted to see, like, how this really works the moment I do this, magically.

02:05.900 --> 02:06.580
Look at that.

02:06.620 --> 02:08.660
Our playwright MCP server has been triggered.

02:08.660 --> 02:13.020
The navigate method or the tool that we wrote is is triggering.

02:13.020 --> 02:15.660
So I'm going to say allow once it should open the browser.

02:15.700 --> 02:18.220
Look at that while it is working.

02:18.260 --> 02:26.580
I see this is the power that we have written this MCP server tool so easily with the power of the MCP.

02:26.620 --> 02:27.900
That's what I was talking about.

02:28.660 --> 02:29.540
This is amazing.

02:29.780 --> 02:31.940
And it's going to perform a click operation.

02:31.940 --> 02:34.420
So it should perform a click operation on the login.

02:34.420 --> 02:35.660
Let's see what is really going on.

02:35.660 --> 02:41.220
I think it's just looking for the href for the login, but I think this problem can be resolved if we

02:41.220 --> 02:43.900
have a JavaScript tool being enabled.

02:44.260 --> 02:44.980
Oh look at that.

02:44.980 --> 02:47.540
Now it's again uh, calling that.

02:47.540 --> 02:48.940
Let's see what's really happening.

02:48.940 --> 02:51.820
So let me try to look at the common login uh selector.

02:51.820 --> 02:56.460
So it's trying to do all the different types of selectors over here one by one.

02:56.460 --> 02:58.340
And it is going to do that right now.

03:00.860 --> 03:01.460
There we go.

03:01.460 --> 03:05.340
And you can see that it has finally clicked the login link over here.

03:05.420 --> 03:08.620
It took a lot of time, to be honest, to perform a click operation.

03:08.740 --> 03:16.620
Uh, for sure, but that can be resolved if we have a feature called as the evaluate, uh, JavaScript,

03:16.620 --> 03:23.300
which is basically to evaluate the, uh, the page uh, locators using the JavaScript functions.

03:23.300 --> 03:26.020
So that will actually resolve this very, very easily.

03:26.020 --> 03:29.020
Actually, I have built the same thing, even my server.

03:29.020 --> 03:32.140
So we can actually use that to perform these operation.

03:32.780 --> 03:34.740
Well now this is already working.

03:34.740 --> 03:38.540
And I think this is already an amazing start for us to build this tool.

03:38.580 --> 03:43.460
I will add more tools in our next lecture, but at least you have got the first taste.

03:43.460 --> 03:48.860
I will highly recommend you to try out all by yourself and see how that works.

03:48.860 --> 03:54.220
But until then, catch you in our next lecture where we are going to start implementing more tools.


========================================================================================

WEBVTT

00:00.120 --> 00:00.760
All right.

00:00.760 --> 00:07.640
So now that we saw a demo of how we can create our own custom toolings that we wrote and also how we

00:07.640 --> 00:11.360
can access them from the cloud desktop, which is amazing.

00:11.360 --> 00:15.720
So it's already an working success that we have seen, and this is quite awesome.

00:15.920 --> 00:21.200
The next thing which I wanted to write as a tool, uh, is basically that was something which I was

00:21.200 --> 00:28.040
doing it while I was also building it with the playwright MCP server is how we can, uh, actually,

00:28.480 --> 00:36.960
uh, perform a JavaScript execution while the MCP server struggles to find some things because the tool

00:36.960 --> 00:43.120
that we have given is very, very lesser, and it may not be enough for doing all the operation and

00:43.120 --> 00:46.480
see that we have given to perform a login data entry.

00:46.720 --> 00:51.920
Uh, but it couldn't able to do that because, uh, it says that, uh, however, I noticed that you

00:51.920 --> 00:56.920
mentioned, uh, wanting to enter the username and password, but it didn't provide the specific credentials

00:56.920 --> 01:01.080
you would like to use, blah, blah, blah, and it couldn't able to fill up the details as well.

01:01.120 --> 01:07.860
Of course, even if you give it to the, uh, the tool, uh, with the username and password, it is

01:07.860 --> 01:11.260
not going to fill it up for you because there is no relevant tool to do that.

01:11.260 --> 01:16.180
So we are going to see how we can avoid all these problems over here.

01:16.300 --> 01:24.260
So if you are me, what I will do is I'll first start off with the very, very low hanging fruit, which

01:24.260 --> 01:26.860
is the fill operation.

01:26.860 --> 01:27.020
Right.

01:27.060 --> 01:35.380
So I'm going to say fill which is going to basically do a filling of the uh, data, uh, over there.

01:35.660 --> 01:42.420
Uh, and it's going to have a value, obviously, uh, which is going to be a string, I'm going to

01:42.420 --> 01:54.420
say fill and input field, uh, with a text, uh, on the page.

01:55.300 --> 01:55.860
Right.

01:56.100 --> 01:57.300
Uh, there we go.

01:57.540 --> 01:58.540
That's what it's going to do.

01:58.540 --> 02:03.380
So I'm going to say fill, um, which is going to take the selector, and then it's going to also take

02:03.380 --> 02:04.300
the value.

02:04.700 --> 02:06.540
So that's something that I need to pass.

02:06.540 --> 02:10.980
And I'm going to say a filled the element uh, with.

02:12.300 --> 02:18.570
And then I'm going to say the value, which is going to be this particular value that we're talking

02:18.570 --> 02:19.090
about.

02:19.130 --> 02:25.090
And then error of, uh, the element.

02:25.090 --> 02:26.130
I think this is fine.

02:26.130 --> 02:26.370
Right.

02:26.410 --> 02:28.490
This is the fill operation that I'm going to do.

02:28.490 --> 02:29.770
So that's what I was talking about, right.

02:29.810 --> 02:34.490
So once you write one tool, the rest of the tools are so easy because it's just going to follow the

02:34.490 --> 02:36.690
same pattern over and over again.

02:36.690 --> 02:38.930
And things are going to be very, very straightforward.

02:38.930 --> 02:41.090
So that's going to be the fill operation which I'm going to do.

02:41.290 --> 02:47.930
Uh, and then I'm also going to uh, do a uh, evaluate JS for that matter.

02:47.930 --> 02:54.170
So I'm going to say evaluate, uh, JS just basically the JavaScript uh, evaluation, which I'm going

02:54.210 --> 02:54.930
to be doing.

02:54.930 --> 02:57.370
So you don't require a value over here.

02:57.370 --> 03:01.450
So I'm gonna just get rid of, uh, that, uh, over here.

03:01.610 --> 03:07.410
And I'm going to say, uh, execute a JavaScript on the current page, something like that.

03:07.450 --> 03:07.730
Right.

03:07.730 --> 03:08.530
Something like this.

03:08.530 --> 03:12.530
And I'm going to say evaluate, uh, over here.

03:12.930 --> 03:15.130
And this is not script to be select.

03:15.370 --> 03:16.730
This is going to be script.

03:17.050 --> 03:24.390
So I'm going to just pass this script over here, in the evaluate I'm going to say JavaScript result,

03:25.870 --> 03:35.630
JavaScript result, which is going to be the result which is been, uh, coming out from the execution,

03:36.430 --> 03:37.430
something like that.

03:38.510 --> 03:38.990
Right.

03:39.030 --> 03:41.750
So I'm going to pass this result over here.

03:42.470 --> 03:43.070
That's all.

03:43.550 --> 03:47.950
And I'm going to say error executing of course JavaScript.

03:48.870 --> 03:51.710
And then I'm going to pass the script that we have got.

03:51.950 --> 03:55.270
Uh, or maybe you can just pass the exception.

03:55.590 --> 03:56.190
Right.

03:56.270 --> 03:58.550
So that's something that I'm going to do over here.

03:59.230 --> 04:00.910
So this is the other tool that I want.

04:00.950 --> 04:04.750
So the fill tool and the execute JavaScript tool.

04:05.190 --> 04:10.670
And once we have all of these in place I need to add a couple more tools before I wind up this particular

04:10.990 --> 04:13.750
session with all the playwright implementation.

04:13.790 --> 04:20.190
I'll talk to you how we can do a few more implementations, like getting a page title or closing the

04:20.190 --> 04:21.150
browsers and things.

04:21.190 --> 04:25.870
In our next lecture, which is going to give you even more context, like how you can improve these

04:25.870 --> 04:27.270
tools even further.


========================================================================================

WEBVTT

00:00.200 --> 00:01.360
All right.

00:01.360 --> 00:05.000
So we have got around four tools already.

00:05.440 --> 00:12.320
Uh, and the next few tools that I'm going to be adding is basically going to be, uh, let's say get

00:12.320 --> 00:14.280
the text out from a page.

00:14.520 --> 00:17.800
Uh, and then we also need to add some more features.

00:17.840 --> 00:23.800
I'm not actually not write the code this time because we have already seen how we can do that.

00:23.840 --> 00:26.760
I'm just going to copy paste the code and I will show you how it's going to be done.

00:26.800 --> 00:30.520
See this is basically going to get the visible text content from the current page.

00:30.520 --> 00:34.160
So it's going to be, uh, getting the body's inner text.

00:34.160 --> 00:39.840
And if the length of the text is more than 2000, then you just keep truncating it, because the more

00:39.840 --> 00:45.400
and more text you have, uh, if you give the context to the cloud desktop, it's going to throw you

00:45.520 --> 00:48.960
saying that the window or the context size is exceeded.

00:48.960 --> 00:56.800
So make sure that the the text that you return from this particular body is not beyond 2000.

00:56.920 --> 01:00.520
Uh, that's what it's doing in my actual implementation of the MCP server.

01:00.520 --> 01:04.480
I used to do some more formatting of the body before I even do this.

01:04.480 --> 01:10.120
Uh, but in here, because this is a simple, uh, coding, I just don't want it to, uh, write all

01:10.120 --> 01:11.080
those implementations.

01:11.080 --> 01:12.560
I have done that over here.

01:12.600 --> 01:13.840
Very, very straightforward.

01:13.880 --> 01:14.360
Right.

01:14.640 --> 01:16.200
That's one thing over here.

01:16.560 --> 01:17.160
Uh, cool.

01:17.160 --> 01:19.960
And then we can add some more fancy tools.

01:20.000 --> 01:23.760
Uh, over here, uh, something like get the page title.

01:23.760 --> 01:27.000
Or you can also get the current URL, something like that.

01:27.040 --> 01:31.600
I mean, these things are just, uh, to get you some more tools going, but you can keep on adding

01:31.600 --> 01:33.920
even more and more tools for that matter.

01:34.080 --> 01:40.280
Uh, because if you know the, the, the methods that the playwright has got, it has got a lot of methods.

01:40.320 --> 01:46.080
If you just do page dot and you see that how many, uh, tools that you can actually write like, uh,

01:46.080 --> 01:53.800
check for the checkbox, select for the dropdown, uh, and uh fill for the text box that we just did.

01:53.840 --> 01:59.720
And then if you want to get the text in a text or whatever that you want to do, you can keep on adding

01:59.720 --> 02:00.920
these as a tool.

02:00.960 --> 02:05.720
But don't write too much of a tool, because sometimes playwright does most of them, uh, the power

02:05.720 --> 02:08.080
of the JavaScript that it can execute as well.

02:08.080 --> 02:12.200
So I think that should limit so you don't keep on adding more and more tools.

02:12.520 --> 02:15.440
So now we have enough tools to perform the operation.

02:15.600 --> 02:18.000
Uh, I'm not going to use this base64.

02:18.040 --> 02:21.600
This is especially used for uh, the screenshots and stuff.

02:21.600 --> 02:24.080
But I don't want to add that particular code over here.

02:24.200 --> 02:30.480
But in our next lecture I'll actually show you how much difference the same code is going to make with

02:30.480 --> 02:31.800
a JavaScript code.

02:31.960 --> 02:36.800
You will just get mind blown and like how much boilerplate code that you have to write there.


========================================================================================


WEBVTT

00:00.080 --> 00:00.760
All right.

00:00.760 --> 00:05.000
In this lecture, I will quickly show you how much difference this particular code is going to make,

00:06.360 --> 00:13.560
as opposed to how you can write in the node version of the playwright MCP server, which I was actually

00:13.560 --> 00:15.000
implementing it originally.

00:15.240 --> 00:19.120
So you see that this is the total number of code that you have got over here.

00:19.120 --> 00:24.720
And if you try to do I mean, if you try to reduce it, try an exception block, it's going to be even

00:24.720 --> 00:25.640
more lesser.

00:25.640 --> 00:29.160
But I'm just going to keep this over here like 105 lines of code.

00:29.160 --> 00:29.680
Right?

00:29.720 --> 00:35.320
I'm going to copy this entire code and I'm going to go to cloud Desktop because cloud knows better.

00:35.360 --> 00:52.080
In order to write the MCP server I'm going to say write the node JS version of MCP server for this code,

00:52.240 --> 00:57.520
which I have written using fast MCP.

00:58.000 --> 00:59.240
So I'm going to paste that.

00:59.240 --> 01:00.320
I'm going to hit enter.

01:00.360 --> 01:04.280
And you will notice that how much the lines of code that is going to be writing.

01:04.280 --> 01:05.440
So look at that.

01:05.720 --> 01:11.920
See for the MCP server, the playwright MCP server, you have to write a lot of boilerplate code.

01:11.960 --> 01:16.420
So this is the list of available tools that you have to write, and all these schemas that you have

01:16.420 --> 01:17.260
to provide.

01:17.500 --> 01:22.420
And for every single selector, you have to give like a string of the descriptions.

01:22.420 --> 01:24.260
And then this is the value that you have to put.

01:24.260 --> 01:27.300
And this is the required fields that you have to do.

01:27.340 --> 01:32.420
And similarly similarly it goes with the evaluation of the javascripts and stuffs over there.

01:32.500 --> 01:38.340
Similarly it has to do the uh request handler and see how many lines of code that you have to write

01:38.340 --> 01:40.620
for every single operation.

01:40.620 --> 01:41.980
This is humongous.

01:42.180 --> 01:44.220
And then you have to do all these operation.

01:44.340 --> 01:49.820
If I'm going to copy these lines of code, and if I'm going to just paste it from 105, it turns into

01:49.820 --> 01:51.860
263, right.

01:51.900 --> 01:54.660
Let's assume that the comments been gone there.

01:54.660 --> 02:00.980
It will be around 250 or maybe 260 I think.

02:01.020 --> 02:01.220
Right.

02:01.220 --> 02:03.300
It's a lot of comments as well I can see.

02:03.700 --> 02:04.900
But yeah look at that.

02:04.900 --> 02:06.140
That's humongous.

02:06.140 --> 02:09.140
That's the way that you actually write the same code in JavaScript.

02:09.140 --> 02:11.500
Whereas in Python it is so much easier.

02:11.580 --> 02:18.460
So this is the power of the fast server that we have got while writing the MCP servers in Python.

02:18.860 --> 02:24.900
In our last lecture of this section, I'll quickly show you how this new code has boiled down as well.


========================================================================================

WEBVTT

00:00.800 --> 00:01.640
All right.

00:01.640 --> 00:07.880
So now the last lecture of this particular section, I'm going to go to our cloud desktop, going to

00:07.920 --> 00:08.880
completely close it.

00:09.160 --> 00:11.400
And I'm going to open the cloud desktop.

00:11.400 --> 00:15.760
So because this is going to the player service has already been configured.

00:15.760 --> 00:21.040
If I'm just going to open the cloud, uh, by closing it and reopening it, it is just going to spawn

00:21.040 --> 00:23.760
up with a new server that we have configured.

00:24.080 --> 00:25.960
And look at that.

00:25.960 --> 00:30.040
We have our playwright MCP server with seven tools.

00:30.080 --> 00:31.600
Wow, that is amazing.

00:31.600 --> 00:35.960
We have already built an fully functional MCP server, which is amazing.

00:36.160 --> 00:48.200
And now if I'm going to say can you navigate uh to http colon e app, uh sammy.com and click login link

00:48.240 --> 00:58.240
and perform login operation with username as admin and password as password.

00:58.640 --> 01:04.040
And then click uh employee list.

01:04.360 --> 01:17.270
Um something like that and click create button and uh, enter the details of employee and finally log

01:17.310 --> 01:17.830
out.

01:17.830 --> 01:23.350
So I'm going to do perform and complete end to end scenario of that particular application.

01:23.630 --> 01:28.990
And we'll see how the MCP server that we have built is going to do all these job for us.

01:28.990 --> 01:29.390
Look at that.

01:29.430 --> 01:34.270
The MCP server has launched the uh, launch the browser.

01:34.510 --> 01:34.670
Now.

01:34.710 --> 01:36.910
It should perform a login link.

01:36.910 --> 01:37.830
Click look at that.

01:37.830 --> 01:38.950
It just did that.

01:38.950 --> 01:39.630
Perfect.

01:39.630 --> 01:40.430
It's done.

01:40.750 --> 01:43.670
And now it should perform a fill operation.

01:43.710 --> 01:45.910
I'm going to just say hello always.

01:45.910 --> 01:50.630
So it's going to enter the username as admin password as passwords clicking the login link.

01:51.070 --> 01:54.590
And then it should click the employee list for us over there.

01:54.910 --> 01:55.430
Done.

01:56.030 --> 01:57.150
Which is awesome.

01:57.190 --> 02:02.950
I just feel like I'm just showing a demo of my existing playwright MCP server, which is built, uh,

02:03.070 --> 02:11.190
in the it's built in available as the NPM package, which is pretty amazing to see how this is working.

02:12.030 --> 02:12.630
Ah, look at that.

02:12.630 --> 02:14.510
It's just clicking the grade as well.

02:14.710 --> 02:17.830
Uh, let's just assume that I'm going to choose that junior.

02:18.870 --> 02:21.270
Um, let's see what's really happening there.

02:21.590 --> 02:24.030
Oh, because we have not really handled the drop down.

02:24.030 --> 02:27.230
I think it's going to struggle a bit to select the drop downs.

02:27.470 --> 02:31.590
Uh, which, uh, we need to build one more tool to perform this operation.

02:32.030 --> 02:36.590
Uh, but I think that is one of the caveat that I missed to implement in this particular.

02:36.830 --> 02:37.430
Uh toolings.

02:37.430 --> 02:42.910
I will let you to do this, uh, building of the select operation from a drop down.

02:42.910 --> 02:45.070
It is so easy and so straightforward.

02:45.070 --> 02:48.270
I don't think this is going to be, uh, uh, any issue.

02:48.310 --> 02:53.150
See, the moment I, uh, the moment the player MVP server couldn't able to handle this operation is

02:53.150 --> 02:55.790
going to call the evaluate JS to perform this operation.

02:55.830 --> 02:57.630
See, that is pretty nice and neat.

02:57.990 --> 03:00.150
And then it it actually entered everything.

03:00.150 --> 03:04.310
And it also performed the log of operation which is amazing.

03:04.310 --> 03:05.430
So look at that.

03:05.430 --> 03:07.750
That's created every single thing for us.

03:07.750 --> 03:12.870
And it also performed a log of operation and it has logged out successfully.

03:13.310 --> 03:13.710
Uh.

03:14.110 --> 03:17.550
See also doing a get text to see if it has successfully logged out.

03:18.030 --> 03:19.910
And our MVP server is ready.

03:19.910 --> 03:27.630
Guys, you have successfully implemented a playwright MVP server all by yourself by using the power

03:27.630 --> 03:28.670
of fast MVP.

03:28.830 --> 03:31.670
Congratulations and thanks for purchasing this course.


========================================================================================





