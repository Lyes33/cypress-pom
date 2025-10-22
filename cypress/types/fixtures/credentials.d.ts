type Profile = {
  name: string;
  users: Record<string, UserData>;
};

type EnvCredentials = {
  env: string;
  profiles: Profile[];
};
