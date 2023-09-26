Developer Test:
Home & Pricing Pages
Contents:
Front-end Developer Exercise
Screenshots Provided
Starter Code

Front-end Developer Exercise

Objective
Update homepage and build a brand new pricing page that will allow users to choose a pricing plan.
Requirements
Fork this repository and submit your finished work as a pull request.
Homepage
Provide a visual representation as to what the current active page is being viewed within the navigation links.
Reduce the size of the website title, Company Inc. on smaller viewports.
Pricing Page
Create a PricingCard component in a components directory to match visual style of screenshots provided within static directory.
Utilize Vuex store for PricingCard data.
Create a series of PricingCard components that display all options.
Create single globally accessible modal and display when new PricingCard is chosen.
Update chosen plan globally within Vuex.
Stack pricing cards vertically on smaller viewports to match visual style of screenshots provided.
Success Criteria
The markup should be semantic and accessible.
The design should match screenshots provided.
No additional external libraries or plugins should be installed.
Bonus Create a standalone stylesheet within the overall framework that provides a dark mode that can be optionally toggled with a UI component
Tips
Feel free to utilize as much of Boostrap Vue as desired
Example was scaffolded using Node 14.18


Starter Code


PricingCard.vue

<template></template>

<script>
export default {
  name: 'PricingCard',
  props: {},
  computed: {},
  methods: {},
};
</script>


index.vue
<template>
  <div>
    <h4>Welcome to our website</h4>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia
      exercitationem autem eveniet neque eos placeat porro tempora, sit suscipit
      sint labore laudantium inventore iste maxime dolorem quas, minus ducimus?
    </p>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  layout: "default",
};
</script>


pricing.vue
<template>
  <b-container class="text-center">
    <b-row>
      <b-col class="mt-5">
        <h1>Pricing</h1>
      </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <b-col md="8">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
          tenetur. Eius, fugit quidem tempore, quia officia impedit possimus
          officiis doloremque autem illum reiciendis libero dignissimos
          repellendus dolores veniam error odit!
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Pricing',
  layout: 'default',
  computed: {},
};
</script>

<style lang="scss" scoped>
p {
  color: #6c757d;
  font-size: 1.25rem;
}
</style>

