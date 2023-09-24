import * as Yup from 'yup'


const matchSociety = /^[a-zA-Zéèêîçôïùûà0-9]+(?:['-\s][a-zA-Zéèêîçôïùûà0-9{3,30}]+)*$/
const errorSociety = 'Le nom de la société ne peut contenir que des lettres et chiffres, un seul espace entre les mots, une seule apostrophe entre les mots et un seul tiret entre les mots. Ce champ doit commencer par une lettre ou un chiffre. 3 à 30 caractères sont autorisés.'

const matchSiret = /^[0-9{14,14}]+$/
const errorSiret = 'Le numéro SIRET ne peut contenir que des chiffres. 14 chiffres sont requis'

const matchFirstName = /^[a-zA-Zéèêîçôïùûà]+(?:['-\s][a-zA-Zéèêîçôïùûà]+)*$/
const errorFirstName = 'Le prénom ne peut contenir que des lettres, un seul espace entre les mots, une seule apostrophe entre les mots et un seul tiret entre les mots. Ce champ doit commencer par une lettre. 2 à 30 caractères sont autorisés.'

const matchLastName = /^[a-zA-Zéèêîçôïùûà]+(?:['-\s][a-zA-Zéèêîçôïùûà]+)*$/
const errorLastName = 'Le nom ne peut contenir que des lettres, un seul espace entre les mots, une seule apostrophe entre les mots et un seul tiret entre les mots. Ce champ doit commencer par une lettre. 2 à 30 caractères sont autorisés.'

const matchEmail = /^\w+([.-_]?\w+)*@\w+([.-_]?\w+)*(\.\w{2,3})+$/
const errorEmail = "L'adresse électronique n'est pas valide" 

const matchMessage = /^[a-zA-Zéèêîàçôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîàçôïûù0-9]+)*$/
const errorMessage = 'Le message doit contenir des caractères valides, certains caractère spéciaux sont non autorisés.'

export const validationSchema = Yup.object().shape({
  society: Yup.string().min(3, 'Le nom de la société doit contenir au minimum 3 caractères').required('Le champ Société est obligatoire')
    .max(30, 'Le nom de la société ne peut pas dépasser 30 caractères')
    .matches(matchSociety, errorSociety),
  siret: Yup.string().min(14, 'Le numéro SIRET doit contenir 14 chiffres').required('Le champ SIRET est obligatoire')
    .max(14, 'Le numéro SIRET doit contenir 14 chiffres')
    .matches(matchSiret, errorSiret),
  firstName: Yup.string().min(2, 'Le Prénom doit contenir au minimum 2 caractères').required('Le champ Prénom est obligatoire')
    .max(30, 'Le prénom doit contenir 30 caractères maximum')
    .matches(matchFirstName, errorFirstName),
  lastName: Yup.string().min(2, 'Le nom doit contenir au minimum 2 caractères').required('Le champ Nom est obligatoire')
    .max(30, 'Le nom doit contenir 30 caractères maximum')
    .matches(matchLastName, errorLastName),
  email: Yup.string()
    .matches(matchEmail, errorEmail)
    .required('Le champ Email est obligatoire'),
  projet: Yup.string(),
  budjget: Yup.string(),
  delai: Yup.string(),
  message: Yup.string()
  .min(3, 'Le message doit contenir au minimum 3 caractères')
  .max(500, 'Le message ne doit pas dépasser 500 caractères')
  .matches(matchMessage, errorMessage)
});