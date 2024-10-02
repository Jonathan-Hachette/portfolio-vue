<script setup>
// This component is the email line in Contact -> email, at click it will display a popup to generate an automatic email

// Heroicons import
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

// UI components import
import { Checkbox } from '@/components/ui/checkbox'
import { Textarea } from '@/components/ui/textarea'
import Button from './ui/button/Button.vue'
import Input from './ui/input/Input.vue'
import Label from './ui/label/Label.vue'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

// Ref import
import { ref } from 'vue'

// Reactives values to store form data
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const accepted = ref(false)
const isSending = ref(false)
const success = ref(false)
const errorMessage = ref('')
const formSubmitted = ref(false)
const acceptanceRequired = ref('')

// EmailJs import to acces pluggin methods
import emailjs from 'emailjs-com'

// Methods for email sending via EmailJs
const sendEmail = () => {
  formSubmitted.value = true
  if (name.value && email.value && subject.value && name.value && message.value && accepted.value) {
    isSending.value = true
    emailjs
      .send(
        'service_kub5x1q',
        'template_vq327as',
        {
          //Getting form data + necessary mail template data
          name: 'John',
          from_name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
          reply_to: email.value
        },
        //Public key
        'Z-RSmIBWLBlw1nIsm'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          // To trigger conditionnal display next to button
          isSending.value = false
          success.value = true
        },
        (error) => {
          console.log('FAILED...', error)
          alert("Échec de l'envoi du message.")
        }
      )
  } else {
    errorMessage.value = '*Tous les champs doivent être remplis'
    if (!accepted.value) {
      acceptanceRequired.value = '*Vous devez accepter les conditions'
    }
  }
}

// Managing input border destructive if empty
const validateField = (field) => {
  return formSubmitted.value && field.length === 0 ? 'border-destructive' : ''
}

const acceptance = () => {
  accepted.value = !accepted.value
  acceptanceRequired.value = ''

  if (accepted.value) {
    errorMessage.value = ''
  }
}
</script>

<template>
  <Dialog>
    <!-- Élément qui déclenche la boîte de dialogue -->
    <DialogTrigger class="flex gap-4 text-sm cursor-pointer">
      <EnvelopeIcon
        class="text-primary size-6 animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[600ms]"
      />
      <p
        class="text-muted-foreground cursor-pointer transition hover:text-primary hover:underline animate-fade-left animate-duration-[1000ms] animate-ease-in-out animate-delay-[1000ms]"
      >
        jonathan.hachette@gmail.com
      </p>
    </DialogTrigger>

    <!-- Contenu de la boîte de dialogue -->
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Écrivez-moi</DialogTitle>
        <DialogDescription>
          Laissez-moi un message et je vous répondrai dès que possible.
        </DialogDescription>
      </DialogHeader>

      <!-- Formulaire pour saisir les informations du mail -->
      <form class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">Votre nom</Label>
          <Input
            id="name"
            v-model="name"
            placeholder="John Doe"
            class="col-span-3"
            :class="validateField(name)"
            @input="() => (errorMessage = '')"
          />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">Votre email</Label>
          <Input
            id="email"
            v-model="email"
            placeholder="example@mail.com"
            class="col-span-3"
            :class="validateField(email)"
            @input="() => (errorMessage = '')"
          />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="subject" class="text-right">Objet</Label>
          <Input
            id="subject"
            v-model="subject"
            placeholder="Sujet de votre message"
            class="col-span-3"
            :class="validateField(subject)"
            @input="() => (errorMessage = '')"
          />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="message" class="text-right">Message</Label>
          <Textarea
            id="message"
            v-model="message"
            placeholder="Votre message"
            class="col-span-3"
            :class="validateField(message)"
            @input="() => (errorMessage = '')"
          />
        </div>
      </form>

      <DialogFooter>
        <div class="flex gap-10 items-start">
          <div class="flex flex-col gap-8">
            <div class="flex items-center space-x-2">
              <Checkbox
                id="terms"
                @click="acceptance"
                :class="acceptanceRequired ? 'border-destructive' : ''"
              />
              <label
                for="terms"
                class="text-xs text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                J'accepte que mes informations soient utilisées afin d'être recontacté.
              </label>
            </div>
            <div>
              <p class="text-xs text-destructive">{{ acceptanceRequired }}</p>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex">
              <Button v-if="isSending" :disabled="isSending">Envoi en cours...</Button>
              <Button v-else :disabled="isSending" type="submit" @click="sendEmail">Envoyer</Button>
            </div>

            <div>
              <p v-if="errorMessage" class="text-destructive text-xs">{{ errorMessage }}</p>
              <p v-if="success" class="text-muted-foreground">Email envoyé avec succès !</p>
            </div>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
