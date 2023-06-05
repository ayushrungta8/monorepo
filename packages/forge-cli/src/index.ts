#!/usr/bin/env node
import inquirer from 'inquirer'

import deployCollectionsManager from './deployCollectionsManager'
import mintAndAddCollection from './mintCollection'
import writeUpdatedNetworks from './writeUpdatedNetworks'

async function cli() {
  // Prompt for user input
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'task',
      message: `Welcome to 
      
                                                                                       
    
  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄       ▄▄▄▄▄▄▄▄▄▄▄  ▄            ▄▄▄▄▄▄▄▄▄▄▄ 
 ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌
 ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀      ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌           ▀▀▀▀█░█▀▀▀▀ 
 ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌               ▐░▌          ▐░▌               ▐░▌     
 ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄      ▐░▌          ▐░▌               ▐░▌     
 ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌▐░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░▌          ▐░▌               ▐░▌     
 ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░▌ ▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀      ▐░▌          ▐░▌               ▐░▌     
 ▐░▌          ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌▐░▌               ▐░▌          ▐░▌               ▐░▌     
 ▐░▌          ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄      ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄  ▄▄▄▄█░█▄▄▄▄ 
 ▐░▌          ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌     ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
  ▀            ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
                                                                                                              
 
                                                                                        
                                                                                        
 
       What would you like to do?`,
      choices: [
        {
          name: 'Deploy a new CollectionsManager contract',
          value: 'deployCollectionsManager',
          description: 'Deploys a CollectionsManager contract to the specified network'
        },
        {
          name: 'Mint and add a new collection to your CollectionsManager contract',
          value: 'mintAndAddCollection',
          description: 'Mints a collection and adds it to the CollectionsManager contract'
        },
        {
          name: 'Update root networks.json file with a new CollectionsManager contract address',
          value: 'writeNetworks',
          description: 'Update networks.json with new CollectionsManager.sol address'
        }
      ]
    }
  ])

  const { task } = answers

  switch (task) {
    case 'deployCollectionsManager':
      await deployCollectionsManager()
      break
    case 'mintAndAddCollection':
      await mintAndAddCollection()
      break
    case 'writeNetworks':
      await writeUpdatedNetworks()
      break
    default:
      console.log('No task selected')
      throw new Error('[Forge-CLI] No task selected')
  }
}

export default cli()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
