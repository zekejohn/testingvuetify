<template>
  <v-form>
    <v-container grid-list-md text-xs-center>
      <h1 class="headline">Dette er detaljer 2 asd</h1>
      <v-layout row>
        <v-flex xs12 sm6>
          <v-text-field
            label="Outline"
            placeholder="Tekst ad"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst fa"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst we"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst qwe"
            outline
          ></v-text-field>
            <v-textarea
            outline
            name="input-7-4"
            label="Lang tekst asd"
            ></v-textarea>
          <v-text-field
            label="Outline"
            placeholder="Tekst vav"
            outline
          >
          </v-text-field>
          <v-select
            :items="items"
            label="Outline style"
            outline
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6>
          <v-textarea
          outline
          name="input-7-4"
          label="Lang tekst 3"
          ></v-textarea>
          <v-text-field
            label="Outline"
            placeholder="Tekst fa"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst ew"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst te"
            outline
          ></v-text-field>
          <v-text-field
            label="Outline"
            placeholder="Tekst af"
            outline
          ></v-text-field>
          <v-select
            :items="items"
            label="Outline style"
            outline
          ></v-select>
          <v-text-field
            label="Outline"
            placeholder="Tekst li"
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
