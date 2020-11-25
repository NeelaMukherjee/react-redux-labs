import React from 'react';
import { Image, Text, View } from 'react-native';
import { FilmBrief } from './FilmBrief';

export const Landing = ({ films }) => {
  return (
    <View>
      <Text>Dinner and a Movie</Text>
      <Text>Tap on a movie to see its details and to pick a date to see showtimes</Text>
      {films.map(film => <FilmBrief film={film} key={film.id} />)}
    </View>
  )
}