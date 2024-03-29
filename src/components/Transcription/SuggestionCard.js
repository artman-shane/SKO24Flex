import { Callout, CalloutHeading, CalloutText, Text } from '@twilio-paste/core';
// import { AiSuggestion } from '../types/VoiceAssistTypes';

// export interface SuggestionCardProps {
//   suggestion: AiSuggestion;
// }

const SuggestionCard = (props) => {
  return (
    <Callout variant="new">
      <CalloutHeading as="h2">
        <Text as={'h2'} fontWeight={'fontWeightBold'}>
          {props.suggestion.title}
        </Text>
      </CalloutHeading>
      <CalloutText>{props.suggestion.suggestion}</CalloutText>
    </Callout>
  );
};

export default SuggestionCard;