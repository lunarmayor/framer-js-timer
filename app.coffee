
{ GoogleFonts } = require 'myModule'
new GoogleFonts 'Rubik', 100, 300

# Import file "Timer" (sizes and positions are scaled 1:2)
figma = Framer.Importer.load("imported/Timer@2x")
setLoop = (ms, func) -> setInterval(func,ms)

# pulling layers out of figma import
{ 
	restart, 
	playButton, 
	progress, 
	pauseButton, 
	timer 
} = figma
	

# globals
timeElapsed = 0
totalTime = 1 * 60 * 1000
playing = false
start = +new Date()

currentProgress = -> timeElapsed / totalTime
timeLeft = -> totalTime - timeElapsed

timeLeftFormatted = (s) ->
	ms = s % 1000
	s = (s - ms) / 1000
	secs = s % 60
	s = (s - secs) / 60
	mins = s % 60
	if secs < 10
		secs = '0' + secs
	mins + ':' + secs

togglePlay = ->
	playButton.visible = playing
	playing = !playing
	
setLoop 100, ->
	currentTime = +(new Date())
	if playing
		timeElapsed += currentTime - start
		if timeLeft() <= 0
			togglePlay()
		else
			timer.html = timeLeftFormatted(timeLeft())

		progress.animate
			time: 0.01
			properties:
				width: Screen.width * currentProgress()
	start = currentTime


togglePlay = ->
	playButton.visible = playing
	playing = !playing

progress.width = currentProgress()
playButton.x = Align.center
pauseButton.x = Align.center

playButton.onTap togglePlay
pauseButton.onTap togglePlay

timer.width = 300
timer.html = timeLeftFormatted(timeLeft())
timer.x = Align.center
timer.style =
	fontSize: '127px'
	textAlign: 'center'
	lineHeight: '100px'
	fontWeight: 100
	fontFamily: 'rubik'








