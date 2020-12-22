<template>
  <ApolloQuery
    :query="require('@/graphql/queries/categories.gql')"
  >
    <template v-slot="{ result: { data: categoryData } }">
      <ApolloMutation
        :mutation="require('@/graphql/mutations/addpost.gql')"
        :variables="{ title, tags, text, category: { name: category } }"
        @done="() => ''"
      >
        <template v-slot="{ mutate }">
          <sui-modal
            :open="value"
            @input="v => $emit('input', v)"
          >
            <sui-modal-header>Create Post</sui-modal-header>
            <sui-modal-content>
              <sui-modal-description>
                <sui-form>
                  <sui-form-field>
                    <label>Title</label>
                    <input
                      placeholder="Type title..."
                      v-model="title"
                    />
                  </sui-form-field>

                  <sui-form-field>
                    <label>Category</label>
                    <sui-dropdown
                      placeholder="Choose a category"
                      :options="categoryData.queryCategory.map(c => ({ text: c.name }))"
                      v-model="category"
                    />
                  </sui-form-field>

                  <sui-form-field>
                    <label>Tags (optional)</label>
                    <input
                      placeholder="Enter space separated tags..."
                      v-model="tags"
                    />
                  </sui-form-field>

                  <sui-form-field>
                    <label>Your Message</label>
                    <textarea
                      rows="3"
                      placholder="Enter your message..."
                      v-model="text"
                    />
                  </sui-form-field>
                </sui-form>
              </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
              <sui-button color="black" @click="$emit('input', false)">
                Cancel
              </sui-button>
              <sui-button
                content="Submit"
                labelPosition="right"
                icon="checkmark"
                @click="mutate(); $emit('input', false)"
                positive
              />
            </sui-modal-actions>
          </sui-modal>
        </template>
      </ApolloMutation>
    </template>
  </ApolloQuery>
</template>

<script>
export default {
  props: {
    value: Boolean
  },

  data() {
    return {
      title: "",
      category: null,
      tags: "",
      text: ""
    }
  }
}
</script>
