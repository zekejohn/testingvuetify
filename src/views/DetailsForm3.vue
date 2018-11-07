<template>
  <v-form>
    <v-container grid-list-md text-xs-center>
      <h1 class="headline">Dette er detaljer 3</h1>
      <v-layout row>
        <v-flex xs12 sm6>
          <v-text-field
            label="Outline"
            placeholder="Tekst 9"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst 10"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst 11"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst 12"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst 13"
            outline
          >
          </v-text-field>
            <v-textarea
            outline
            name="input-7-4"
            label="Lang tekst 3"
            ></v-textarea>
          <v-select
            :items="items"
            label="Outline style"
            outline
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-text-field
            label="Outline"
            placeholder="Tekst 14"
            outline
          ></v-text-field>
            <v-textarea
            outline
            name="input-7-4"
            label="Lang tekst 3"
            ></v-textarea>
          <v-text-field
            label="Outline"
            placeholder="Tekst 15"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst 16"
            outline
          ></v-text-field>
          <v-select
            :items="items"
            label="Outline style"
            outline
          ></v-select>
          <v-text-field
            label="Outline"
            placeholder="Tekst 17"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst 18"
            outline
          >
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
};
</script>
