const envsCredentials: EnvCredentials[] = [
  {
    env: 'UAT',
    profiles: [
      {
        name: 'SMB',
        users: {
          loginTest: {
            firstName: 'testauto',
            lastName: 'testauto',
            email: 'tnr_e2e_qstg@****.fr',
            password: 'Aa12345$',

          },
        }
    }
    ]
},
  {
    env: 'PROD',
    profiles: [
      {
        name: 'SMB',
        users: {
          loginTest: {
            firstName: 'testauto',
            lastName: 'testauto',
            email: 'tnr_e2e_qstg@****.fr',
            password: 'Aa12345$',
          },
        }
    }
    ]
}
]

export function getUsersByCustomerType(
  profile: string = 'SMB',
  envName: string = global.envName
): Record<string, UserData> {
  const envValues = envsCredentials.find((item: EnvCredentials) => item.env === envName);
  if (envValues === undefined) {
    throw new Error(`Can't find customer types for ${envName}`);
  }

  const typeUsers = envValues.profiles.find((item: Profile) => item.name === profile);
  if (typeUsers === undefined) {
    throw new Error(`Can't find users for ${profile}`);
  }

  return typeUsers.users;
}