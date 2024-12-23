import React, { useState, useEffect, useRef, MouseEventHandler } from 'react';
import { Clock, Search, Globe, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn.ts';

interface TimezoneGroup {
  region: string;
  zones: Timezone[];
}

interface Timezone {
  name: string;
  city: string;
  offset: string;
  flag: string;
}

interface WorldTimePickerProps {
  className?: string
}

export function WorldTimePicker({className}: WorldTimePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>({
    name: 'Asia/Singapore',
    city: 'Singapore',
    offset: 'GMT+8',
    flag: '🇸🇬'
  });
  const [currentTime, setCurrentTime] = useState('');

  const timezoneGroups: TimezoneGroup[] = [
    {
      region: 'Asia Pacific',
      zones: [
        { name: 'Asia/Singapore', city: 'Singapore', offset: 'GMT+8', flag: '🇸🇬' },
        { name: 'Asia/Tokyo', city: 'Tokyo', offset: 'GMT+9', flag: '🇯🇵' },
        { name: 'Asia/Seoul', city: 'Seoul', offset: 'GMT+9', flag: '🇰🇷' },
        { name: 'Asia/Shanghai', city: 'Beijing', offset: 'GMT+8', flag: '🇨🇳' },
        { name: 'Australia/Sydney', city: 'Sydney', offset: 'GMT+10', flag: '🇦🇺' },
      ]
    },
    {
      region: 'South Asia',
      zones: [
        { name: 'Asia/Kolkata', city: 'New Delhi', offset: 'GMT+5:30', flag: '🇮🇳' },
        { name: 'Asia/Dhaka', city: 'Dhaka', offset: 'GMT+6', flag: '🇧🇩' },
        { name: 'Asia/Colombo', city: 'Colombo', offset: 'GMT+5:30', flag: '🇱🇰' },
      ]
    },
    {
      region: 'Middle East',
      zones: [
        { name: 'Asia/Dubai', city: 'Dubai', offset: 'GMT+4', flag: '🇦🇪' },
        { name: 'Asia/Riyadh', city: 'Riyadh', offset: 'GMT+3', flag: '🇸🇦' },
        { name: 'Asia/Qatar', city: 'Doha', offset: 'GMT+3', flag: '🇶🇦' },
      ]
    },
    {
      region: 'Europe',
      zones: [
        { name: 'Europe/London', city: 'London', offset: 'GMT+1', flag: '🇬🇧' },
        { name: 'Europe/Paris', city: 'Paris', offset: 'GMT+2', flag: '🇫🇷' },
        { name: 'Europe/Berlin', city: 'Berlin', offset: 'GMT+2', flag: '🇩🇪' },
      ]
    },
    {
      region: 'Americas',
      zones: [
        { name: 'America/New_York', city: 'New York', offset: 'GMT-4', flag: '🇺🇸' },
        { name: 'America/Los_Angeles', city: 'Los Angeles', offset: 'GMT-7', flag: '🇺🇸' },
        { name: 'America/Toronto', city: 'Toronto', offset: 'GMT-4', flag: '🇨🇦' },
      ]
    }
  ];

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-US', {
        timeZone: selectedTimezone.name,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(time);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [selectedTimezone]);

  const filteredGroups = timezoneGroups.map(group => ({
    ...group,
    zones: group.zones.filter(zone =>
      zone.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      zone.offset.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(group => group.zones.length > 0);

  const menuDivRef = useRef<HTMLDivElement>(null);
  const menuButtonRef= useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!menuDivRef.current?.contains(event.target as Node) && !menuButtonRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); 
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); 
    };
  }, []);

  return (
    <div className={`relative ${className || ''}`}>
      <button
        ref={menuButtonRef}
        onClick={() => {
            setIsOpen(!isOpen)
          }
        }
        className="flex items-center gap-3 bg-white rounded-lg px-4 py-2 border border-gray-200 hover:border-blue-300 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-500" />
          <span className="text-lg font-medium">{currentTime}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <span>{selectedTimezone.flag}</span>
          <span>{selectedTimezone.city}</span>
          <ChevronDown className={cn(
            "w-4 h-4 transition-transform",
            isOpen.toString() && "rotate-180"
          )} />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 z-50" ref={menuDivRef}>
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search city or timezone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {filteredGroups.map((group) => (
              <div key={group.region}>
                <div className="px-4 py-2 bg-gray-50 sticky top-0">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                    <Globe className="w-4 h-4" />
                    {group.region}
                  </div>
                </div>
                {group.zones.map((zone) => (
                  <button
                    key={zone.name}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      setSelectedTimezone(zone);
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{zone.flag}</span>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{zone.city}</p>
                        <p className="text-sm text-gray-500">{zone.offset}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">
                      {new Date().toLocaleTimeString('en-US', {
                        timeZone: zone.name,
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}