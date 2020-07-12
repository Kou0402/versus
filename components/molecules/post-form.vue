<template>
  <section class="post-form">
    <div class="form-area">
      <div class="columns is-mobile select-area">
        <div class="column is-5 is-offset-1">
          <ToggleRadioButton v-model="position" :label="theme1" value="theme1">
          </ToggleRadioButton>
        </div>
        <div class="column is-5">
          <ToggleRadioButton v-model="position" :label="theme2" value="theme2">
          </ToggleRadioButton>
        </div>
      </div>
      <div class="columns is-mobile text-area">
        <div class="column is-8 is-offset-1">
          <textarea
            v-model="$v.content.$model"
            class="textarea"
            rows="1"
          ></textarea>
        </div>
        <div class="column is-2">
          <button
            :disabled="$v.$invalid"
            class="submit-button"
            @click="onClickSubmit"
          >
            <img src="~/assets/images/right-arrow.svg" class="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import ToggleRadioButton from '~/components/molecules/toggle-radio-button.vue'

export default {
  components: {
    ToggleRadioButton
  },
  props: {
    threadId: {
      type: String,
      default: ''
    },
    theme1: {
      type: String,
      default: ''
    },
    theme2: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      position: 'theme1',
      content: ''
    }
  },
  validations: {
    content: {
      required
    }
  },
  methods: {
    async onClickSubmit() {
      await this.publishPost(this.threadId)
      this.clearForm()
    },

    async publishPost(threadId) {
      const post = {
        threadId,
        createdUserName: 'guest',
        createdDate: this.$dayjs().format('YYYY-MM-DD'),
        createdTime: this.$dayjs().format('HH:mm:ss'),
        position: this.position,
        side: this.position === 'theme1' ? 'left' : 'right',
        content: this.content
      }
      await this.$store.dispatch('posts/publishPost', post)
      this.$store.dispatch('posts/deletePosts')
      this.$store.dispatch('posts/fetchPosts', threadId)
    },

    clearForm() {
      this.content = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.post-form {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 120px;
  background-color: $main-color4;
  .form-area {
    .select-area {
      margin-top: 0;
      margin-bottom: 0;
      .column {
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
      }
    }
    .text-area {
      .column {
        text-align: center;
        .submit-button {
          padding: 0;
          border: none;
          background: transparent;
          &:disabled {
            opacity: 0.2;
          }
          .right-arrow {
            display: block;
            width: 45px;
          }
        }
      }
    }
  }
}
</style>
