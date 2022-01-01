import {gql} from '@apollo/client';

export default function getSignUpAnonymousUserMutation(id: string) {
  return gql`
  mutation SignUpAnonymousUserMutation {
    signUpAnonymousUser(id: "${id}") {
      id
      authType
    }
  }
`;
}
