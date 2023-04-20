import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Image } from '@chakra-ui/react'
import React from 'react'

const PackageCard = ({data}) => {
    const {img_url,name,desc} = data
    
    const property = {
        imageUrl: img_url,
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: desc,
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
      }
    
      return (
        <Box m='10px' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <Image w="100%" h="60" src={property.imageUrl} alt={property.imageAlt} />
    
          <Box p='6'>
            <Box display='flex' alignItems='baseline'>
              <Badge borderRadius='full' px='2' colorScheme='teal'>
                New
              </Badge>
              <Box
                color='gray.500'
                fontWeight='semibold'
                letterSpacing='wide'
                fontSize='xs'
                textTransform='uppercase'
                ml='2'
              >
                {property.beds} nights &bull; {property.baths} days
              </Box>
            </Box>
    
            <Box
              mt='1'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {property.title}
            </Box>
    
            <Box>
              {property.formattedPrice}
              <Box as='span' color='gray.600' fontSize='sm'>
                / wk
              </Box>
            </Box>
    
            <Box flexDirection={{base:"column" , md:"row"}}  display={{ base:"flex", md: "flex" }} mt='2' alignItems='center' justifyContent={"space-between"}>
            <Box >
            {Array(5)
                .fill('')
                .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
                ))}
                </Box>
            <Box color="goledrod" as='span' ml='2' fontSize='sm'>
              {property.reviewCount} reviews
            </Box>
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            <Button mt="3" size='sm' colorScheme="blue">Book now</Button>
          </Box>
          </Box>
          </Box>
        </Box>
      )
}

export default PackageCard