// Daily inspiration, etc.
// Dependency: Jquery textfill plugin to size text to fit screen.


//TODO get this from a public google doc.


//Bruce Mau's incomplete manifesto for growth
//NOTE: ECMA6 allows you to use backticks (``) for multi-line strings. Alas, my old-ass iPad doesn't support ECMA6... so I've done the classic hack of replacing newlines with **. Should be irrelevant when we're loading lines from a Google Doc (someday)
var lines = "Allow events to change you. You have to  be willing to grow. Growth is different from something that happens to you. You produce it. You live it. The prerequisites for growth: the openness to experience events and the willingness to be changed by them.**Forget about good. Good is a known quantity. Good is what we all agree on. Growth is not necessarily good. Growth is an exploration of unlit recesses that may or may not yield to our research. As long as you stick to good you’ll never have real growth.**Process is more important than outcome. When the outcome drives the process we will only ever go to where we’ve already been. If process drives outcome we may not know where we’re going, but we will know we want to be there.**Love your experiments (as you would an ugly child). Joy is the engine of growth. Exploit the liberty in casting your work as beautiful experiments, iterations, attempts, trials, and errors. Take the long view and allow yourself the fun of failure every day.**Go deep. The deeper you go the more likely you will discover something of value.**Capture accidents. The wrong answer is the right answer in search of a different question. Collect wrong answers as part of the process. Ask different questions.**Study. A studio is a place of study. Use the necessity of production as an excuse to study. Everyone will benefit.**Drift. Allow yourself to wander aimlessly. Explore adjacencies. Lack judgment. Postpone criticism.**Begin anywhere. John Cage tells us that not knowing where to begin is a common form of paralysis. His advice: begin anywhere.**Everyone is a leader. Growth happens. Whenever it does, allow it to emerge. Learn to follow when it makes sense. Let anyone lead.**Harvest ideas. Edit applications. Ideas need a dynamic, fluid, generous environment to sustain life. Applications, on the other hand, benefit from critical rigor. Produce a high ratio of ideas to applications.**Keep moving. The market and its operations have a tendency to reinforce success. Resist it. Allow failure and migration to be part of your practice.**Slow down. Desynchronize from standard time frames and surprising opportunities may present themselves.**Don’t be cool. Cool is conservative fear dressed in black. Free yourself from limits of this sort.**Ask stupid questions. Growth is fuelled by desire and innocence. Assess the answer, not the question. Imagine learning throughout your life at the rate of an infant.**Collaborate. The space between people working together is filled with conflict, friction, strife, exhilaration, delight, and vast creative potential.**____________________. Intentionally left blank. Allow space for the ideas you haven’t had yet, and for the ideas of others.**Stay up late. Strange things happen when you’ve gone too far, been up too long, worked too hard, and you’re separated from the rest of the world.**Work the metaphor. Every object has the capacity to stand for something other than what is apparent. Work on what it stands for.**Be careful to take risks. Time is genetic. Today is the child of yesterday and the parent of tomorrow. The work you produce today will create your future.**Repeat yourself. If you like it, do it again. If you don’t like it, do it again.**Make your own tools. Hybridize your tools in order to build unique things. Even simple tools that are your own can yield entirely new avenues of exploration. Remember, tools amplify our capacities, so even a small tool can make a big difference.**Stand on someone’s shoulders. You can travel farther carried on the accomplishments of those who came before you. And the view is so much better.**Avoid software. The problem with software is that everyone has it.**Don’t clean your desk. You might find something in the morning that you can’t see tonight.**Don’t enter awards competitions. Just don’t. It’s not good for you.**Read only left–hand pages. Marshall McLuhan did this. By decreasing the amount of information, we leave room for what he called our ‘noodle’.**Make new words. Expand the lexicon. The new conditions demand a new way of thinking. The thinking demands new forms of expression. The expression generates new conditions.**Think with your mind. Forget technology. Creativity is not device–dependent.**Organization = Liberty. Real innovation in design, or any other field, happens in context. That context is usually some form of cooperatively managed enterprise. Frank Gehry, for instance, is only able to realize Bilbao because his studio can deliver it on budget. The myth of a split between ‘creatives’ and ‘suits’ is what Leonard Cohen calls a “charming artifact of the past.”**Don’t borrow money. Once again, Frank Gehry’s advice. By maintaining financial control, we maintain creative control. It’s not exactly rocket science, but it’s surprising how hard it is to maintain this discipline, and how many have failed.**Listen carefully. Every collaborator who enters our orbit brings with him or her a world more strange and complex than any we could ever hope to imagine. By listening to the details and the subtlety of their needs, desires, or ambitions, we fold their world onto our own. Neither party will ever be the same.**Take field trips. The bandwidth of the world is greater than that of your TV set, or the Internet, or even a totally immersive, interactive, dynamically rendered, object–oriented, real–time, computer graphic–simulated environment.**Make mistakes faster. This isn’t my idea—I borrowed it. I think it belongs to Andy Grove.**Imitate. Don’t be shy about it. Try to get as close as you can. You’ll never get all the way, and the separation might be truly remarkable. We have only to look to Richard Hamilton and his version of Marcel Duchamp’s large glass to see how rich, discredited, and underused imitation is as a technique.**Scat. When you forget the words, do what Ella did: make up something else… but not words.**Break it, stretch it, bend it, crush it, crack it, fold it.**Explore the other edge. Great liberty exists when we avoid trying to run with the technological pack. We can’t find the leading edge because it’s trampled underfoot. Try using old–tech equipment made obsolete by an economic cycle but still rich with potential.**Coffee breaks, cab rides, green rooms. Real growth often happens outside of where we intend it to, in the interstitial spaces—what Dr. Seuss calls “the waiting place.” Hans Ulrich Obrist once organized a science and art conference with all of the infrastructure of a conference—the parties, chats, lunches, airport arrivals—but with no actual conference. Apparently it was hugely successful and spawned many ongoing collaborations.**Avoid fields. Jump fences. Disciplinary boundaries and regulatory regimes are attempts to control the wilding of creative life. They are often understandable efforts to order what are manifold, complex, evolutionary processes. Our job is to jump the fences and cross the fields.**Laugh. People visiting the studio often comment on how much we laugh. Since I’ve become aware of this, I use it as a barometer of how comfortably we are expressing ourselves.**Remember. Growth is only possible as a product of history. Without memory, innovation is merely novelty. History gives growth a direction. But a memory is never perfect. Every memory is a degraded or composite image of a previous moment or event. That’s what makes us aware of its quality as a past and not a present. It means that every memory is new, a partial construct different from its source, and, as such, a potential for growth itself.**Power to the people. Play can only happen when people feel they have control over their lives. We can’t be free agents if we’re not free."

//split on newlines to create an array
//lines = lines.split("\n");
lines = lines.split("**");


//pick based on the current day
//find the current day of the year (we needed a bigger number than the size of our list)
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var oneHour = 1000 * 60 * 60 * 1;
var dayOfYear = Math.floor(diff / oneDay);

//rotate daily
//picked = lines[dayOfYear % lines.length];

//or rotate hourly
var hourOfYear = Math.floor(diff / oneHour);
text = lines[hourOfYear % lines.length];

//set the text
//$('#picked').html(picked);


function wisdom_setup(){

    $('#picked').html(text);
    $('#wisdom').fadeIn();

    //resize the box to fill the screen
    $('.blockToFill').height(window.innerHeight*0.9).width(window.innerWidth*0.9);

    //resize the text to fill the box
    $('.blockToFill').textfill({minFontPixels:20, maxFontPixels:1500});


    //skip this for now...
    /*
    $('#picked').hide();
    $.getJSON(GOOGLE_URL,function(data){
      //get the first one
      text = /<td .+?s0.+?>(.+?)</.exec(data.data)[1];
      $('#picked').html(text);
      $('#picked').fadeIn();

      //resize the box to fill the screen
      $('.blockToFill').height(window.innerHeight*0.9).width(window.innerWidth*0.9);

      //resize the text to fill the box
      $('.blockToFill').textfill({minFontPixels:20, maxFontPixels:1500});

    });*/
}
