# THE SOLUTION

The first thing I did was setup the React boilerplate, delete unnecessary files, and do a CSS reset.
The next step was to fetch the 500 stories, and write a function to select 10 stories at random.
I put this function inside the useEffect hook, and then called an async map function inside to fetch story & author data and push them to a stories array state.
I considered using a [loading, setLoading] state, but instead opted to just display a loading indicator for <10 stories, since the number of stories is defined in scope.
I also sorted the stories by the scores ascendingly before mapping them to the Card component. Note: I think sorting news stories descendingly makes more sense than ascendingly.

I spent the rest of my playtime styling, converting the datetime from Unix time to something human-friendly, and hiding the URL in a button.

Besides React, I used styled-components and date-fns packages.

# SEE IT LIVE
