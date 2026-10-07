import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'campus-club-finder:joined-clubs'

function readJoinedIds() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed)
      ? parsed.filter((id) => typeof id === 'string')
      : []
  } catch {
    return []
  }
}

function writeJoinedIds(ids) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // Storage can be unavailable (private mode, quota). The app still works for this visit.
  }
}

export function useJoinedClubs() {
  const [joinedIds, setJoinedIds] = useState(readJoinedIds)

  useEffect(() => {
    writeJoinedIds(joinedIds)
  }, [joinedIds])

  useEffect(() => {
    function handleStorage(event) {
      if (event.key === STORAGE_KEY) {
        setJoinedIds(readJoinedIds())
      }
    }
    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [])

  const isJoined = useCallback((id) => joinedIds.includes(id), [joinedIds])

  const joinClub = useCallback((id) => {
    setJoinedIds((current) => (current.includes(id) ? current : [...current, id]))
  }, [])

  return { joinedIds, isJoined, joinClub }
}
