"use client"

import Image from 'next/image'
import { useState } from 'react'
import { ArrowSmallDownIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'

export default function Home() {

  const [openUffizien, setOpenUffizien] = useState<boolean>(true);
  const [openMasterpiece, setOpenMasterpeice] = useState<boolean>(false);
  const [openRegularInfo, setRegularInfo] = useState<boolean>(false);
  const [openConstruction, setOpenConstruction] = useState<boolean>(false);
  const [openSculptures, setOpenSculptures] = useState<boolean>(false);
  const [openDrawings, setOpenDrawings] = useState<boolean>(false);
  const [openHighlights, setOpenHighlights] = useState<boolean>(false);


  const openInfo = (info : string) => {

    switch (info) {
      case "main":
        setOpenUffizien(prev => !prev);
        break;
      case "masterpiece":
        setOpenMasterpeice(prev => !prev);
        break;
      case "regularInfo":
        setRegularInfo(prev => !prev);
        break;
      case "construction":
        setOpenConstruction(prev => !prev);
        break;
      case "sculptures":
        setOpenSculptures(prev => !prev);
        break;
      case "drawings":
        setOpenDrawings(prev => !prev);
        break;
      case "highlights":
        setOpenHighlights(prev => !prev);
        break;
      default:
        break;
    }
  }

  return (
    <main className='flex flex-col min-h-[100vh] w-full bg-[#050100] text-white space-y-6'>

      <h1 className='w-full text-center text-3xl font-bold bg-[#212122] py-5 text-white'>Uffizien</h1>

      <div className='relative w-full lg:w-[300px] h-[300px]'>
        <Image src={"/images/uffizien-100-1920x1080.jpg"} fill alt="uffizien" />
      </div>

      <div className='min-h-[48vh] md:min-h-[59vh] flex flex-col justify-end'>
        <div className=' bg-[#212122] rounded-tr-md rounded-tl-md px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("main")}>
              {openUffizien ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>Was sind die Uffizien?</h2>
          </div>
          {openUffizien && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
              <ul className='space-y-5'>
                <li>- Sammlung italienischer Meisterwerke</li>
                <li>- Museum besitzt eine der wichtigsten kunsthistorischen Sammlungen der Welt, deren Schwerpunkt auf der Malerei der Renaissance liegt</li>
                <li>o	Gemälde, Skulpturen, Drucke und Zeichnungen sowie Werke der Archietektur</li>
                <li>- verschiedenen Kunstepochen werden kennengelernt und es wird ein besseres Verständnis für die kulturellen, wirtschaftlichen und politischen Szenarien der Vergangenheit gewonnen</li>
              </ul>
            </div>
          )}
        </div>

        <div className=' bg-[#212122] px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("masterpiece")}>
              {openMasterpiece ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>9 Bekannte Kunstwerke</h2>
          </div>
          {openMasterpiece && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
              <ul className='space-y-5'>
                <li>- Piero della Francesca: &quot Doppelbildnis des Herzogpaares von Urbino &quot</li>
                <li>- Filippo Lippi:"'Madonna mit Kind und zwei Engeln"</li>
                <li>- Botticelli: "Der Frühling"</li>
                <li>- Sandro Botticelli: "Die Geburt der Venus"</li>
                <li>- Michelangelo: "Tondo Doni"</li>
                <li>- Caravaggio: "Bacchus"</li>
                <li>- Leonardo da Vinci: „die Verkündigung an Maria“</li>
                <li>o Darüber hinaus moderne Kunstwerke von niederländischen, flämischen und deutschen Malern</li>
              </ul>
            </div>
          )}
        </div>

        <div className=' bg-[#212122] px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("regularInfo")}>
              {openRegularInfo ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>Allgemeine Informationen</h2>
          </div>
          {openRegularInfo && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
              <ul className='space-y-5'>
                <li>- Gemäldesammlung auf 45 Museumssäle verteilt</li>
                <li>- Der Bau des Uffizien-Palastes wird Giorgio Vasari zugeschrieben, der den Auftrag im Jahr 1560 erhielt</li>
              </ul>
            </div>
          )}
        </div>

        <div className=' bg-[#212122] px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("construction")}>
              {openConstruction ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>Architektur</h2>
          </div>
          {openConstruction && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
              <ul className='space-y-5'>
                <li>-	Das Gebäude hat eine charakteristische U-Form, ist 3 Stockwerke hoch und wurde im manieristischen Stil entworfen</li>
              </ul>
            </div>
          )}
        </div>

        <div className=' bg-[#212122] px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("sculptures")}>
              {openSculptures ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>Skulpturen</h2>
          </div>
          {openSculptures && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
              <ul className='space-y-5'>
                <li>-	Bemerkenswerte Reihe von Skulpturen, hauptsächlich aus der römischen Zeit</li>
                <li>-	Die ersten, zweiten und dritten Korridore der zweiten Etage sind mit einer endlosen Reihe von klassischen Statuen und Büsten geschmückt</li>
                <li>-	Die Statue der Kaiserin Helena, die schlafende Ariadne (die fast 2 Tonnen wiegt) und das Porträt von Agrippa gehören zu den wertvollsten Attraktionen des Museums</li>
              </ul>
            </div>
          )}
        </div>

        <div className=' bg-[#212122] px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("drawings")}>
              {openDrawings ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>Zeichnungen</h2>
          </div>
          {openDrawings && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
              <ul className='space-y-5'>
                <li>-	In der ersten Etage befindet sich die Abteilung für Druckgrafik und Zeichnungen, die eine umfassende Sammlung von mehr als 177.000 Kunstwerken aus dem 14. bis 20. Jahrhundert umfasst</li>
                <li>-	(Schwarz-Weiß-Radierungen, Zeichnungen und Drucke von Künstlern wie Rembrandt, Michelangelo, Alfonso Parigi, Giovanni Battista Piranesi, Leonardo da Vinci, Piero di Cosimo usw.)</li>
              </ul>
            </div>
          )}
        </div>

        <div className=' bg-[#212122] px-3 py-2 text-lg'>
          <div className='flex gap-5 items-center'>
            <div className='p-1 rounded-full' onClick={() => openInfo("highlights")}>
              {openHighlights ? (
                <ArrowSmallDownIcon className='h-5 w-5'/>
              ) : (
                <ArrowSmallRightIcon className='h-5 w-5' />
              )}
            </div>
            <h2 className='flex-1'>Highlights</h2>
          </div>
          {openHighlights && (
            <div className='text-[16px] mt-4'>
              <hr className='border border-[#4e4c4c] opacity-70 mb-4' />
                <div className='space-y-8'>
                  
                  <div>
                    <h3 className='text-lg underline font-bold'>1. Die Geburt der Venus</h3>
                      <div className='relative lg:w-[300px] w-full h-[250px]'>
                        <Image src={"/images/Bild2.png"} fill alt="Geburt der Venus" />
                      </div>

                      <ul>
                        <li>- die Göttin der Liebe und der Schönheit als Thema seines Gemäldes	</li>
                        <li>-	klassische Statuen und hellenistische Periode</li>
                        <li>-	Die Szene fängt den Moment ein, in dem Venus auf einer riesigen Muschelschale auf der Insel Zypern ankommt</li>
                      </ul>
                  </div>

                  <br />

                  <div>
                    <h3 className='text-lg underline font-bold'>2. Verkündigung an Maria (Leonardo da Vinci)</h3>
                      <div className='relative lg:w-[300px] w-full h-[250px]'>
                        <Image src={"/images/Bild3.jpg"} fill alt="Geburt der Venus" />
                      </div>
                      <ul>
                        <li>-	zwischen 1475 und 1480 in Zusammenarbeit mit Vincis Meister, Andrea del Verrochio, gemalt</li>
                        <li>-	gehört zu Leonardos früheren Werken</li>
                        <li>- ein fesselndes Bild der Jungfrau Maria, die vom Erzengel Gabriel besucht wird, um ihm die Geburt Jesu zu verkünden.</li>
                      </ul>
                  </div>
                  <br />
              </div>
            </div>
          )}
        </div>    
      </div>
    </main>
  )
}
