import { Accessibility } from '../../types';
import { FocusZoneDirection } from '../../focusZone/types';
import * as keyboardKey from 'keyboard-key';

/**
 * @description
 * Provides navigation between focusable children of Grid component with arrow keys in 4 directions.
 * Provides navigation inside the inner focus zone using Enter key
 *
 * @specification
 * Provides arrow key navigation in bidirectional direction.
 * Focus can be moved inside a child component with embeded inner FocusZone by pressing a specified key.
 */
const cardsContainerBehavior: Accessibility = () => ({
  attributes: {},
  focusZone: {
    props: {
      shouldEnterInnerZone: event => keyboardKey.getCode(event) === keyboardKey.Enter,
      direction: FocusZoneDirection.bidirectional,
    },
  },
});

export default cardsContainerBehavior;
