#!/bin/bash
timecut "http://localhost:8080/intro.html" \
--duration=8 --selector="#container" \
--output=video.mp4 --viewport 1680,1050
