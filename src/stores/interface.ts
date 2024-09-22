export interface Basic {
  firstName: string
  lastName: string
  age: number
  city: string
}

export interface Social {
  followers: number
  likes: number
  photos: number
}

export interface Profile {
  profile: {
    basic: Basic
    social: Social
  }
}
