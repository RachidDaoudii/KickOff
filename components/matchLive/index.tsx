import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import MatchLiveItem from "./matchLiveItem";


export default function MatchLive() {
  const leagues = [
    {
      data: [
        {
          id: 271,
          sport_id: 1,
          country_id: 320,
          name: "Superliga",
          active: true,
          short_code: "DNK SL",
          image_path:
            "https://cdn.sportmonks.com/images/soccer/leagues/271.png",
          type: "league",
          sub_type: "domestic",
          last_played_at: "2024-02-19 18:00:00",
          category: 2,
          has_jerseys: false,
        },
        {
          id: 501,
          sport_id: 1,
          country_id: 1161,
          name: "Premiership",
          active: true,
          short_code: "SCO P",
          image_path:
            "https://cdn.sportmonks.com/images/soccer/leagues/501.png",
          type: "league",
          sub_type: "domestic",
          last_played_at: "2024-02-18 12:00:00",
          category: 2,
          has_jerseys: false,
        },
        {
          id: 513,
          sport_id: 1,
          country_id: 1161,
          name: "Premiership Play-Offs",
          active: true,
          short_code: "SCO P PO",
          image_path:
            "https://cdn.sportmonks.com/images/soccer/leagues/1/513.png",
          type: "league",
          sub_type: "play-offs",
          last_played_at: "2023-06-04 15:30:00",
          category: 2,
          has_jerseys: false,
        },
        {
          id: 1659,
          sport_id: 1,
          country_id: 320,
          name: "Superliga Play-offs",
          active: true,
          short_code: null,
          image_path:
            "https://cdn.sportmonks.com/images/soccer/leagues/27/1659.png",
          type: "league",
          sub_type: "play-offs",
          last_played_at: "2019-05-19 14:00:00",
          category: 3,
          has_jerseys: false,
        },
      ],
      pagination: {
        count: 4,
        per_page: 25,
        current_page: 1,
        next_page: null,
        has_more: false,
      },
      subscription: [
        {
          meta: [],
          plans: [
            {
              plan: "Football Free Plan",
              sport: "Football",
              category: "Standard",
            },
            {
              plan: "Cricket Free Plan",
              sport: "Cricket",
              category: "Standard",
            },
          ],
          add_ons: [],
          widgets: [],
        },
      ],
      rate_limit: {
        resets_in_seconds: 1694,
        remaining: 2998,
        requested_entity: "League",
      },
      timezone: "UTC",
    },
  ];
  return (
    <View>
      <FlatList
        data={leagues[0].data}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log("item", item);
            }}
          >
            <MatchLiveItem match={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
