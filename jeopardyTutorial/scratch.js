// general gubbins goes here...


        <List containerStyle={{marginBottom: 20}}>
          {
            data.map(trivia => (
              <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.name}
              />
            ))
          }
        </List>

        <View>
            <ScrollView>
               {
                  this.state.names.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                        <Text>{item.name}</Text>
                     </View>
                  ))
               }
            </ScrollView>
         </View>