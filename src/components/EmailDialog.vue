<script setup>
// Icon import
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

// UI components import
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

// Importation de Vue's reactive ref pour le formulaire
import { ref } from 'vue'

// Variables réactives pour stocker les données du formulaire
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const isSending = ref(false)
const succes = ref(false)

// Importation d'EmailJS
import emailjs from 'emailjs-com'

// Fonction pour envoyer l'email via EmailJS
const sendEmail = () => {
  isSending.value = true

  emailjs
    .send(
      'service_kub5x1q',
      'template_vq327as',
      {
        name: 'John',
        from_name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
        reply_to: email.value
      },
      'Z-RSmIBWLBlw1nIsm'
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
        isSending.value = false
        succes.value = true
      },
      (error) => {
        console.log('FAILED...', error)
        alert("Échec de l'envoi du message.")
      }
    )
}
</script>

<template>
  <Dialog>
    <DialogTrigger class="cursor-pointer">
      <p
        class="flex gap-4 text-muted-foreground transition hover:text-primary hover:underline hover:-translate-y-1 hover:scale-105 duration-500 cursor-pointer"
      >
        <EnvelopeIcon class="text-primary size-6" /> Solution mailing + dialog box
      </p>
    </DialogTrigger>

    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Écrivez-moi</DialogTitle>
        <DialogDescription>
          Laissez moi un message et je vous répondrai dès que possible.
        </DialogDescription>
      </DialogHeader>

      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">Votre nom</Label>
          <Input id="name" v-model="name" placeholder="John Doe" class="col-span-3" />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">Votre email</Label>
          <Input id="email" v-model="email" placeholder="example@mail.com" class="col-span-3" />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="subject" class="text-right">Objet</Label>
          <Input
            id="subject"
            v-model="subject"
            placeholder="Sujet de votre message"
            class="col-span-3"
          />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="message" class="text-right">Message</Label>
          <Textarea id="message" v-model="message" placeholder="Votre message" class="col-span-3" />
        </div>
      </div>

      <DialogFooter>
        <div class="flex gap-20 items-center">
          <p v-if="succes" class="text-muted-foreground">Email envoyé avec succès!</p>
          <Button v-if="isSending" :disabled="isSending">Envoi en cours...</Button>
          <Button v-else :disabled="isSending" type="submit" @click="sendEmail">Envoyer</Button>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
