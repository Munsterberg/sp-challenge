# Shakepay challenge

## Running the app

`npm i`

then

`npm start`

### Production

Can find the production environment deployed to netlify [here](https://sp-challenge.netlify.app)

## Decisions

- Chose create-react-app due to the simple requirements and my familiarity with react
  - also considered next, and remix.run (which looks sweet but fairly new)
- netlify was an easy deployment solution
- axios provides some QoL improvements out of the box, better than writing up a fetch wrapper for
  something like this
- Chose a CSS library for simplicity (Bootstrap)
- using react query, new tech for me (but familiar with redux-toolkit-query and use-swr) caused
  a bit of trouble

## Extra info

Coming into this it looked quite easy, thought I'd be done in 2 hours maximum but ended up getting
stuck on react-query. If I could start fresh I would have used tools I was more familiar with and
I'm confident I would have completed this.

After about an hour of tinkering with react-query I got it working and then started transforming the
data to fit the design spec. Realized I was quite a bit behind and tried to rush the rest. Pretty
embarassed of the result so if I don't make the cut this time I will return when able (3-6 months)
and do it properly this time around.
