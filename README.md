## RallyBC

**RallyBC** is a discussion-based social media type of web app for communities in British Columbia, Canada that are impacted by forest fires across the province.

I'm still working out bugs in deployment, so please check out my demo [here](https://www.canva.com/design/DAEqJWgXggc/n0xLJvsku1vRnK6vzn7Z1Q/view?).

### Getting Started

**Fork and Configure**

- In Terminal, navigate to the directory you want the clone to live
- **Fork** this repo
- Once you have forked the above repo, `git clone git@github.com:katieagne/rallybc.git`
- `cd` into `katie-agne-capstone`
- `cd client && npm i`
- `cd .. && npm i`
- `cp sample.env .env`
- in your `.env` file, add a value for your `JWT_SECRET` env variable - choose any value

**Database Seeding**

- in Terminal, `cd server`
- run `npm run db:reset`

**Run Server**

- In a new Terminal window/tab, `cd` into the directory with the clone
- `cd katie-agne-capstone`
- `cd server`
- run `npm run dev`

**Run Client**

- In a new Terminal window/tab, `cd` into the directory with the clone
- `cd katie-agne-capstone`
- `cd client`
- run `npm start`
